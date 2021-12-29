import { ConnectorUpdate } from "@web3-react/types";
import { AbstractConnector } from "@web3-react/abstract-connector";
import invariant from "tiny-invariant";

// Extend the error class to make a Request Error constructor
export class RequestError extends Error {
  constructor(message: string, public code: number, public data?: unknown) {
    super();
    this.name = this.constructor.name;
    this.message = message;
  }
}

// Make a class to use as our RPC provider
export class MiniRpcProvider implements AsyncSendable {
  // Set out publicly visible vars
  public readonly isMetaMask?: boolean = false;
  public readonly chainId: number;
  public readonly url: string;
  public readonly host: string;
  public readonly path: string;

  // Define our constructor
  constructor(chainId: number, url: string) {
    this.chainId = chainId;
    this.url = url;
    // Parse the url so we can access .host and .pathname properties
    const parsedUrl = new URL(url);
    this.host = parsedUrl.host;
    this.path = parsedUrl.pathname;
  }

  // Define the request method for this class
  public readonly request: MiniRpcRequest = async (
    method: MiniRpcRequestMethod,
    params: MiniRpcRequestParams
  ) => {
    // Handle the method passed not being a string
    if (typeof method !== "string") {
      params = (method as any).params;
      method = method.method;
    }
    // Make a request with fetch
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method,
        params,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Check if there was an error
    if (!response.ok) {
      // Throw an error if so
      throw new RequestError(
        `${response.status}: ${response.statusText}`,
        -3200
      );
    }
    // Response is ok so lets get the body
    const body = await response.json();
    // Check if there is an error in the response
    if ("error" in body) {
      // Throw an error if so
      throw new RequestError(
        body?.error?.message,
        body?.error?.code,
        body?.error?.data
      );
    }
    // Otherwise check we have data in the response
    if ("result" in body) {
      // Return it if so
      return body.result;
    } else {
      // Otherwise something went wrong so throw an error
      throw new RequestError(
        `Received unexpected JSON-RPC response to ${method} request.`,
        -32000,
        body
      );
    }
  };

  // Define the send async method to be called on the client
  public readonly sendAsync: SendAsync = (
    request: SendAsyncRequest,
    callback: SendAsyncCallback
  ) => {
    // Log the request
    console.info("Async Request", request.method, request.params);
    // Actually send the request
    this.request(request.method, request.params)
      .then((result: unknown) => {
        // Execute the callback if we get our result
        callback(null, { jsonrpc: request.jsonrpc, id: request.id, result });
      })
      .catch((error: unknown) =>
        // Otherwise we have an error so pass the error back to the callback
        callback(error, null)
      );
  };
}

// Define the NetworkConnector class
export class NetworkConnector extends AbstractConnector {
  // Define our private variables
  private readonly providers: { [chainId: number]: MiniRpcProvider };
  private currentChainId: number;
  // Make our constructor for this class
  constructor({ urls, defaultChainId }: NetworkConnectorArguments) {
    // Check if we have an invariant -- less than 2 urls provided
    const hasInvariant = defaultChainId || Object.keys(urls).length <= 1;
    // If so then throw an error
    invariant(
      hasInvariant,
      "defaultChainId is a required argument and must have more than 1 url"
    );
    // Get the supported chain IDs as an array of number
    const supportedChainIds = Object.keys(urls).map((id): number => Number(id));
    // Call super and provide the supported chain IDs
    super({
      supportedChainIds,
    });
    // Set the current chain id
    this.currentChainId = defaultChainId || supportedChainIds[0];
    // Get our providers
    const providers = Object.keys(urls).reduce<{
      [chainId: number]: MiniRpcProvider;
    }>((output, current) => {
      // Type the current chain id to a number
      const typedChainId = Number(current);
      // Set the key relating to the current ID as a new instance of the MiniRpcProvider class
      output[typedChainId] = new MiniRpcProvider(
        typedChainId,
        urls[typedChainId]
      );
      // Return the output
      return output;
    }, {});
    // Set the providers for this class instance
    this.providers = providers;
  }
  // Define the activate method
  public async activate(): Promise<ConnectorUpdate> {
    // Resolve to an object with the current provider and chain ID
    // There will not be an account as this is a network connection
    return {
      provider: this.providers[this.currentChainId],
      chainId: this.currentChainId,
      account: null,
    };
  }
  // Define the getProvider method
  public async getProvider(): Promise<MiniRpcProvider> {
    // Return the current provider
    return this.providers[this.currentChainId];
  }
  // Define the getChainId method
  public async getChainId(): Promise<number> {
    // REturn the current chain id
    return this.currentChainId;
  }
  // Define the getAccount method -- will always return null
  public async getAccount(): Promise<null> {
    return null;
  }
  // Define the deactivate method
  public deactivate(): void {
    return;
  }
  // Define method to allow the client to change the chain id
  public changeChainId(chainId: number): void {
    // Ensure the passed chainId is one we support
    invariant(
      Object.keys(this.providers).includes(chainId.toString()),
      `No JSON RPC URL found for chain ID: ${chainId} `
    );
    // Otherwise the this class's chain ID
    this.currentChainId = chainId;
    // And use the emitUpdate method to actually change the chain ID
    this.emitUpdate({
      provider: this.providers[this.currentChainId],
      chainId: chainId,
    });
  }
}

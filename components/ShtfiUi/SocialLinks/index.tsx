import styled from "styled-components";
import { FaGithub, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { SocialLinksProps } from "../types";
import { socialLinksData } from "config";
// Get an array of all our networks so we can iterate it
const networkKeys = (() => {
  let array: string[] = [];
  for (let network in socialLinksData) {
    array.push(network);
  }
  return array;
})();

const SocialLinks: React.FC<SocialLinksProps> = ({
  align = "center",
  ...rest
}) => {
  return (
    <StyledSocialLinks align={align} {...rest}>
      {networkKeys.map((key, i) => {
        const typedKey = key as keyof typeof socialLinksData;
        const obj = socialLinksData[typedKey];
        switch (key) {
          case "github":
            return (
              <StyledSocialLink
                key={`${key}-${i}-${new Date().getMilliseconds()}`}
                href={obj?.profileUrl}
                title={`View ${obj?.profileName} on ${key}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub size={20} color="white" />
              </StyledSocialLink>
            );
          case "twitter":
            return (
              <StyledSocialLink
                key={`${key}-${i}-${new Date().getMilliseconds()}`}
                href={obj?.profileUrl}
                title={`View ${obj?.profileName} on ${key}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter size={20} color="white" />
              </StyledSocialLink>
            );
          case "telegram":
            return (
              <StyledSocialLink
                key={`${key}-${i}-${new Date().getMilliseconds()}`}
                href={obj?.profileUrl}
                title={`View ${obj?.profileName} on ${key}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTelegramPlane size={20} color="white" />
              </StyledSocialLink>
            );
          default:
            return null;
        }
      })}
    </StyledSocialLinks>
  );
};

const StyledSocialLinks = styled.div<{ align: string }>`
  margin: var(--med-space);
  display: flex;
  justify-content: ${({ align }) => {
    if (align === "left") {
      return "flex-start";
    } else if (align === "right") {
      return "flex-end";
    } else {
      return "center";
    }
  }};
`;
const StyledSocialLink = styled.a`
  padding: calc(var(--med-space) * 0.5);
  background-color: var(--blue);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 calc(var(--small-space) * 0.75);
  transition: 0.3s ease;

  &:hover {
    background-color: var(--dark-blue);
  }
`;

export default SocialLinks;

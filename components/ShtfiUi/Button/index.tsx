const Button: React.FC<ButtonProps> = ({ clickHandler, children, ...rest }) => {
  return (
    <button onClick={clickHandler} {...rest}>
      {children}
    </button>
  );
};

export default Button;

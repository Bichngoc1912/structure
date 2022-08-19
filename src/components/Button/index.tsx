import { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  const { children, classStyle, ...rest } = props;

  return (
    <button
      className={classStyle ? classStyle : "bg-blue-600 rounded-md p-1"}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;

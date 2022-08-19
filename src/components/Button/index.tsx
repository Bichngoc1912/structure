import { ButtonProps } from './types';

function Button(props: ButtonProps) {
  const { children } = props;

  return <button className="bg-red-500">{children}</button>
}

export default Button;
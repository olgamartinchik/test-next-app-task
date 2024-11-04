import { FC } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};
const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>;
};
export default Button;

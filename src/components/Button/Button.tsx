import { FC, HtmlHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = {
  vairant: 'primary' | 'secondary';
  message: string;
  onClick?: () => void;
  props?: HtmlHTMLAttributes<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({
  vairant = 'primary',
  message = 'Add New Keys',
  onClick,
  props,
}) => {
  return (
    <button {...props} onClick={onClick} className={`${vairant} common`}>
      {message}
    </button>
  );
};

export default Button;

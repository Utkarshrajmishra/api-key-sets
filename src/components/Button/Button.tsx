import { FC, HtmlHTMLAttributes } from 'react';
import { HiOutlinePencil } from 'react-icons/hi2';
import './Button.css';

type ButtonProps = {
  vairant: 'primary' | 'secondary' | 'edit';
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
      {message} {vairant==='edit' &&  <HiOutlinePencil fontSize={13}/>}
    </button>
  );
};

export default Button;

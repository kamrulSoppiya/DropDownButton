import {ButtonProps} from './ButtonModel.ts';
export default function Button({className, children, type, value, toggleBtn, ...rest}:ButtonProps) {
  return (
        <button type={type} className={className} value={value} {...rest}>{children} {toggleBtn?<i className="fa-solid fa-angle-down"></i>:<i className="fa-solid fa-angle-up"></i>}</button>
  )
}

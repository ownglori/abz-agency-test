import {stylesButton} from "@/styles";


export const Button = ({children, type, disabled}) => {
  return (
    <button type={type} disabled={disabled} className={stylesButton.button}>
      {children}
    </button>
  );
};

import {stylesButton} from "@/styles";


export const Button = ({element: Element, type, disabled, href, onClick, children}) => (
  <Element type={type} href={href} disabled={disabled} className={stylesButton.button} onClick={onClick}>
    {children}
  </Element>
);

import {stylesButton} from "@/styles";


export const Button = ({element: Element, type, disabled, href, children}) => (
  <Element type={type} href={href} disabled={disabled} className={stylesButton.button}>
    {children}
  </Element>
);

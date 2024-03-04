import {stylesText} from "@/styles";


export const Text = ({element: Element, children}) => (
  <Element className={stylesText.text}>{children}</Element>
);

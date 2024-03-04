import {stylesHead} from "@/styles";


export const Head = ({element: Element, children}) => (
  <Element className={stylesHead.head}>{children}</Element>
);

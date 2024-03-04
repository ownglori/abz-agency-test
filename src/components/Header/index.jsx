import {Button} from "@/components";
import {Logo} from "@/icons";
import {stylesContainer, stylesHeader} from "@/styles";


export const Header = () => (
  <header className={stylesHeader.header}>
    <div className={stylesContainer.container}>
      <div className={stylesHeader.header_container}>
        <a href="/" className={stylesHeader.logo}>
          <Logo/>
        </a>
        <div className={stylesHeader.navigation}>
          <div className={stylesHeader.navigation_item}>
            <Button element={"a"} href={"#users"}>Users</Button>
          </div>
          <div className={stylesHeader.navigation_item}>
            <Button element={"a"} href={"#singup"}>Sing up</Button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

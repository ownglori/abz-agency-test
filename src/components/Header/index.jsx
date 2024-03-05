import {Container, Button} from "@/components";
import {Logo} from "@/icons";
import {stylesHeader} from "@/styles";


export const Header = () => (
  <header className={stylesHeader.header}>
    <Container>
      <div className={stylesHeader.header_container}>
        <div className={stylesHeader.logo}>
          <Logo/>
        </div>
        <div className={stylesHeader.navigation}>
          <div className={stylesHeader.navigation_item}>
            <Button element={"a"} href={"#users"}>Users</Button>
          </div>
          <div className={stylesHeader.navigation_item}>
            <Button element={"a"} href={"#singUp"}>Sing up</Button>
          </div>
        </div>
      </div>
    </Container>
  </header>
);

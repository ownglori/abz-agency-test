import {stylesCardUser} from "@/styles";


export const CardUser = ({user}) => (
  <div className={stylesCardUser.card_user}>{user.id}</div>
);

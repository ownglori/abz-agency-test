import {Tooltip} from "@/components";
import {phone} from "@/helpers";
import {stylesCardUser} from "@/styles";


export const CardUser = ({user}) => (
  <div className={stylesCardUser.card_user}>
    <img src={user.photo} alt={user.name} className={stylesCardUser.card_user_photo}/>
    <div className={stylesCardUser.card_user_name}>
      <Tooltip text={user.name}>
        <div className={stylesCardUser.card_user_text_trim}>
          {user.name}
        </div>
      </Tooltip>
    </div>
    <div className={stylesCardUser.card_user_position}>
      <Tooltip text={user.position}>
        <div className={stylesCardUser.card_user_text_trim}>
          {user.position}
        </div>
      </Tooltip>
    </div>
    <a href={`mailto:${user.email}`} className={stylesCardUser.card_user_email}>
      <Tooltip text={user.email}>
        <div className={stylesCardUser.card_user_text_trim}>
          {user.email}
        </div>
      </Tooltip>
    </a>
    <a href={`tel:${user.phone}`} className={stylesCardUser.card_user_phone}>
      <Tooltip text={phone(user.phone)}>
        <div className={stylesCardUser.card_user_text_trim}>
          {phone(user.phone)}
        </div>
      </Tooltip>
    </a>
  </div>
);

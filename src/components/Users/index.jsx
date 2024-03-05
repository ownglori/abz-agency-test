import {Button, Container, Head, CardUser, Loader} from "@/components";
import {stylesUsers} from "@/styles";


export const Users = ({data, buttonHandler, loading}) => (
  <section className={stylesUsers.users} id={"users"}>
    <Container>
      <div className={stylesUsers.users_head}>
        <Head element={"h2"}>Working with GET request</Head>
      </div>
      <div className={stylesUsers.users_container}>
        {loading && <Loader/>}
        <div className={stylesUsers.users_row}>
          {data.users.map((user) => (
            <div key={user.id} className={stylesUsers.users_col}>
              <CardUser user={user}/>
            </div>
          ))}
        </div>
        {data.last_page || (
          <div className={stylesUsers.users_button}>
            <Button element={"button"} type={"button"} onClick={buttonHandler} disabled={data.last_page || loading}>
              Show more
            </Button>
          </div>
        )}
      </div>
    </Container>
  </section>
);

import {Button, Container, Head, Input} from "@/components";
import {stylesSingUp} from "@/styles";


export const SingUp = () => {
  return (
    <section className={stylesSingUp.sing_up} id={"singUp"}>
      <Container>
        <div className={stylesSingUp.sing_up_head}>
          <Head element={"h2"}>Working with POST request</Head>
        </div>
        <form className={stylesSingUp.sing_up_form}>
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"text"} name={"name"} id={"name"} label={"Your name"} placeholder={"Your name"} minLength={2}
                   maxLength={60} required={true}/>
          </div>
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"email"} name={"email"} id={"email"} label={"Email"} placeholder={"Email"} minLength={2}
                   maxLength={100} required={true}/>
          </div>
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"tel"} name={"phone"} id={"phone"} label={"Phone"} placeholder={"Phone"} required={true}
                   pattern={"^[\\+]{0,1}380([0-9]{9})"} helper={"+380XXXXXXXXX"}/>
          </div>
          <div className={stylesSingUp.sing_up_button}>
            <Button element={"button"} type={"submit"} disabled={true}>
              Sing up
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

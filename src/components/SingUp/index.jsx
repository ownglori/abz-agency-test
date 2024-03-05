import {useState} from "react";
import {Button, Container, Head, Input} from "@/components";
import {validateFile} from "@/helpers";
import {stylesSingUp} from "@/styles";


export const SingUp = () => {
  const [name, setName] = useState({value: "", error: false});
  const [email, setEmail] = useState({value: "", error: false});
  const [phone, setPhone] = useState({value: "", error: false});
  const [file, setFile] = useState({value: "", error: false});

  const nameHandler = (input) => setName({value: input.value, error: false});
  const emailHandler = (input) => setEmail({value: input.value, error: false});
  const phoneHandler = (input) => setPhone({value: input.value, error: false});

  const fileHandler = async (input) => {
    const validate = await validateFile(input.files[0]);

    if (!validate.success) {
      return setFile({value: "", error: validate.message});
    }

    return setFile({value: input.files[0], error: false});
  };

  return (
    <section className={stylesSingUp.sing_up} id={"singUp"}>
      <Container>
        <div className={stylesSingUp.sing_up_head}>
          <Head element={"h2"}>Working with POST request</Head>
        </div>
        <form className={stylesSingUp.sing_up_form} encType={"multipart/form-data"}>
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"text"} name={"name"} id={"name"} label={"Your name"} placeholder={"Your name"}
                   value={name.value} onChange={nameHandler}/>
          </div>
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"email"} name={"email"} id={"email"} label={"Email"} placeholder={"Email"}
                   value={email.value} onChange={emailHandler}/>
          </div>
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"tel"} name={"phone"} id={"phone"} label={"Phone"} placeholder={"Phone"}
                   helper={"+380XXXXXXXXX"} value={phone.value} onChange={phoneHandler}/>
          </div>
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"file"} name={"photo"} label={"Upload"} placeholder={file.value.name ?? "Upload yor photo"}
                   onChange={fileHandler} accept={"image/jpg,image/jpeg"}/>
          </div>
          <div className={stylesSingUp.sing_up_button}>
            <Button element={"button"} type={"button"}
                    disabled={!(name.value.length > 0 && email.value.length > 0 && phone.value.length > 0 && file.value)}>
              Sing up
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

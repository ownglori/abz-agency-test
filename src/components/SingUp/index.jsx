import {useEffect, useState} from "react";
import {Button, Container, Head, Input, Loader} from "@/components";
import {validateName, validateEmail, validateFile, validatePhone} from "@/helpers";
import {API} from "@/constants";
import {imageFormSuccess} from "@/images";
import {stylesSingUp} from "@/styles";


export const SingUp = ({resetPagination}) => {
  const [positions, setPositions] = useState([]);

  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState({value: "", error: false});
  const [email, setEmail] = useState({value: "", error: false});
  const [phone, setPhone] = useState({value: "", error: false});
  const [position, setPosition] = useState({value: "", error: false});
  const [file, setFile] = useState({value: "", error: false});

  const nameHandler = (input) => setName({value: input.value, error: false});
  const emailHandler = (input) => setEmail({value: input.value, error: false});
  const phoneHandler = (input) => setPhone({value: input.value, error: false});
  const positionHandler = (input) => setPosition({value: input.value, error: false});

  const fileHandler = async (input) => {
    const validate = await validateFile(input.files[0]);

    if (!validate.success) {
      return setFile({value: "", error: validate.message});
    }

    return setFile({value: input.files[0], error: false});
  };

  const fetchError = (error) => {
    console.error(error);
  };

  const getPositionsSuccess = (result) => {
    if (result.success) {
      setPositions(result.positions);
    } else {
      fetchError(result.message);
    }
  };

  const getPositions = (link) => {
    setLoading(true);

    fetch(link)
      .then(response => response.json())
      .then(result => getPositionsSuccess(result))
      .then(() => setLoading(false))
      .catch(error => fetchError(error));
  };

  const singUpUserSuccess = (result) => {
    if (result.success) {
      setSuccess(true);
      setPending(false);
      setName({value: "", error: false});
      setEmail({value: "", error: false});
      setPhone({value: "", error: false});
      setPosition({value: "", error: false});
      setFile({value: "", error: false});
      resetPagination();
    } else {
      setEmail({value: email.value, error: result.message});
      setPhone({value: phone.value, error: result.message});
      fetchError(result.message);
    }
  };

  const singUpUser = (token, formData) => {
    const init = {
      method: "POST",
      body: formData,
      headers: {
        "Token": token
      }
    };

    fetch(API.USERS, init)
      .then(response => response.json())
      .then(result => singUpUserSuccess(result))
      .catch(error => fetchError(error));
  }

  const getTokenSuccess = (result) => {
    if (result.success) {
      return result.token;
    } else {
      fetchError(result.message);
    }
  };

  const getToken = () => {
    return fetch(API.TOKEN)
      .then(response => response.json())
      .then(result => getTokenSuccess(result))
      .catch(error => fetchError(error));
  };

  const singUp = (formData) => {
    setPending(true);

    getToken()
      .then(token => singUpUser(token, formData))
      .catch(error => fetchError(error));
  };

  const formHandler = (event) => {
    event.preventDefault();

    const vName = validateName(name.value);
    const vEmail = validateEmail(email.value);
    const vPhone = validatePhone(phone.value);

    if (!vName.success) {
      return setName({value: name.value, error: vName.message});
    }

    if (!vEmail.success) {
      return setEmail({value: email.value, error: vEmail.message});
    }

    if (!vPhone.success) {
      return setPhone({value: phone.value, error: vPhone.message});
    }

    const formData = new FormData(event.target)

    singUp(formData);
  }

  useEffect(() => getPositions(API.POSITIONS), []);

  if (success) {
    return (
      <section className={stylesSingUp.sing_up} id={"singUp"}>
        <Container>
          <div className={stylesSingUp.sing_up_head}>
            <Head element={"h2"}>User successfully registered</Head>
          </div>
          <img src={imageFormSuccess} alt={"imageFormSuccess"} className={stylesSingUp.sing_up_form_success_image}/>
        </Container>
      </section>
    );
  }

  return (
    <section className={stylesSingUp.sing_up} id={"singUp"}>
      <Container>
        <div className={stylesSingUp.sing_up_head}>
          <Head element={"h2"}>Working with POST request</Head>
        </div>
        <form className={stylesSingUp.sing_up_form} encType={"multipart/form-data"} onSubmit={formHandler}>
          {loading && <Loader/>}
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"text"} name={"name"} id={"name"} label={"Your name"} placeholder={"Your name"}
                   value={name.value} onChange={nameHandler} error={name.error}/>
          </div>
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"email"} name={"email"} id={"email"} label={"Email"} placeholder={"Email"}
                   value={email.value} onChange={emailHandler} error={email.error}/>
          </div>
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"tel"} name={"phone"} id={"phone"} label={"Phone"} placeholder={"Phone"}
                   helper={"+380XXXXXXXXX"} value={phone.value} onChange={phoneHandler} error={phone.error}/>
          </div>
          <div className={stylesSingUp.sing_up_form_input}>
            <div className={stylesSingUp.sing_up_form_radio_head}>Select your position</div>
            {positions.map((positionMap) => (
              <div key={positionMap.id} className={stylesSingUp.sing_up_form_radio}>
                <Input type={"radio"} name={"position_id"} id={positionMap.id} label={positionMap.name}
                       value={positionMap.id} checked={position.value} onChange={positionHandler}/>
              </div>
            ))}
          </div>
          <div className={stylesSingUp.sing_up_form_input}>
            <Input type={"file"} name={"photo"} label={"Upload"} placeholder={file.value.name ?? "Upload yor photo"}
                   onChange={fileHandler} accept={"image/jpg,image/jpeg"} error={file.error}/>
          </div>
          <div className={stylesSingUp.sing_up_button}>
            <Button element={"button"} type={"submit"}
                    disabled={!(name.value.length > 0 && email.value.length > 0 && phone.value.length > 0 && position.value.length > 0 && file.value) || pending}>
              Sing up
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

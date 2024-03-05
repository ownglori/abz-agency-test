import {useCallback} from "react";
import {stylesInput} from "@/styles";


export const Input = ({id, type, name, label, placeholder, accept, helper, value, onChange, error}) => {
  const inputHandler = useCallback((event) => onChange(event.target), [onChange]);

  switch (type) {
    case "radio":
      return (
        <div className={stylesInput.input_radio_container}>
          <input type="radio" className={stylesInput.input_radio} id={id} name={name} value={value}
                 onChange={inputHandler}/>
          <label htmlFor={id}>{label}</label>
        </div>
      );
    case "file":
      return (
        <label className={stylesInput.input_file_container + (error ? " " + stylesInput.input_file_error : "")}>
          <span className={stylesInput.input_file_label}>{label}</span>
          <span className={stylesInput.input_file_placeholder}>{placeholder}</span>
          <input type="file" name={name} className={stylesInput.input_file} onChange={inputHandler} accept={accept}/>
          {error ? <span className={stylesInput.input_file_helper_text}>{error}</span> :
            helper && <span className={stylesInput.input_file_helper_text}>{helper}</span>}
        </label>
      );
    default:
      return (
        <div className={stylesInput.input_floating + (error ? " " + stylesInput.input_floating_error : "")}>
          <input className={stylesInput.input_floating_input} type={type} name={name} id={id} placeholder={placeholder}
                 value={value} onChange={inputHandler}/>
          <label htmlFor={id} className={stylesInput.input_floating_label}>{label}</label>
          {error ? <span className={stylesInput.input_floating_helper_text}>{error}</span> :
            helper && <span className={stylesInput.input_floating_helper_text}>{helper}</span>}
        </div>
      );
  }
};

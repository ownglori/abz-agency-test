import {useCallback} from "react";
import {stylesInput} from "@/styles";


export const Input = ({id, type, name, label, placeholder, accept, helper, value, onChange, error}) => {
  const inputHandler = useCallback((event) => onChange(event.target), [onChange]);

  switch (type) {
    case "radio":
      return (
        <input type="radio" name={name}/>
      );
    case "file":
      return (
        <label className={stylesInput.input_file_container}>
          <span className={stylesInput.input_file_label}>{label}</span>
          <span className={stylesInput.input_file_placeholder}>{placeholder}</span>
          <input type="file" name={name} className={stylesInput.input_file} onChange={inputHandler} accept={accept}/>
        </label>
      );
    default:
      return (
        <div className={stylesInput.input_floating + (error ? " " + stylesInput.input_floating_error : "")}>
          <input className={stylesInput.input_floating_input} type={type} name={name} id={id} placeholder={placeholder}
                 value={value} onChange={inputHandler}/>
          <label htmlFor={id} className={stylesInput.input_floating_label}>{label}</label>
          {helper && <span className={stylesInput.input_floating_helper_text}>{helper}</span>}
        </div>
      );
  }
};

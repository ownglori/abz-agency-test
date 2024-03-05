import {stylesInput} from "@/styles";


export const Input = ({id, type, name, label, placeholder, minLength, maxLength, pattern, required, helper, error}) => {
  switch (type) {
    case "radio":
      return (
        <input type="radio" name={name}/>
      );
    case "file":
      return (
        <input type="file" name={name}/>
      );
    default:
      return (
        <div className={stylesInput.input_floating + (error ? " " + stylesInput.input_floating_error : "")}>
          <input type={type} name={name} id={id} placeholder={placeholder} minLength={minLength} maxLength={maxLength}
                 required={required} pattern={pattern} className={stylesInput.input_floating_input}/>
          <label htmlFor={id} className={stylesInput.input_floating_label}>{label}</label>
          {helper && <span className={stylesInput.input_floating_helper_text}>{helper}</span>}
        </div>
      );
  }
};

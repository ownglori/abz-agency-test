import {getImageDimensions} from "@/helpers";


export const validateName = (name) => {
  if (name.length <= 2 && name.length >= 60) {
    return {success: false, message: "Name should contain 2-60 characters"};
  }

  return {success: true};
};

export const validateEmail = (email) => {
  const pattern = new RegExp(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g);

  if (email.length <= 2 && email.length >= 60 && !pattern.test(email)) {
    return {success: false, message: "Email must be a valid email according to RFC2822"};
  }

  return {success: true};
};

export const validatePhone = (phone) => {
  const pattern = new RegExp(/^[\+]{0,1}380([0-9]{9})$/g);

  if (!pattern.test(phone)) {
    return {success: false, message: "Phone number must be a valid according to +380990009900"};
  }

  return {success: true};
};

export const validateFile = async (file) => {
  if (file.size > 5000000) {
    return {success: false, message: "The photo size must not be greater than 5Mb"};
  }

  const {width, height} = await getImageDimensions(window.URL.createObjectURL(file));

  if (width < 70 && height < 70) {
    return {success: false, message: "Minimum size of photo 70x70px"};
  }

  return {success: true};
};

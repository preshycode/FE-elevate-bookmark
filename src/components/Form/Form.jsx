import React from "react";
import "./Form.css";

const Form = (props) => {
  const { onChange, errorMessage, id, ...inputProps } = props;
  const [focus, setFocus] = React.useState(false);

  const handleBlur = (e) => {
    setFocus(true);
  };

  return (
    <div className="formInput">
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        focused={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Form;

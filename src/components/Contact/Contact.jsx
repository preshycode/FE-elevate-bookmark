import React from "react";
import { useState } from "react";
import "./Contact.css";
import Form from "../Form/Form";

const Contact = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const input = [
    {
      id: 1,
      name: "email",
      placeholder: "email",
      type: "email",
      required: true,
      errorMessage: "whoops, make sure it's an email",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="contact">
      <div className="contact__text">
        <p>35,000+ already joined</p>
        <p>Stay up-to-date with what we’re doing</p>
        <div className="form" onSubmit={handleSubmit}>
          <form action="">
            <div className="fi">
              {input.map((input) => (
                <Form
                  key={input.id}
                  value={values[input.name]}
                  {...input}
                  onChange={onChange}
                />
              ))}
            </div>
            <div className="btn">
              <button type="submit">Contact us</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// Contains logic to rende label and input
// custom input redux form component
import React from "react";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  // console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

// {touched && error}
// If touched is true and error is something, show error

export default SurveyField;

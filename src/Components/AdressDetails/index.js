import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import "./index.css";

const AdressDetails = (props) => {
  const { adressLine1, adressLine2, city, state, country, pincode, thirdStep,nextStep} = props;

  const [formErrors, setFormErrors] = useState({});
  const errors = {};

  const validateAdressLine1 = () => {
    if (!adressLine1) {
      errors.AdressLine1 = "AdressLine 1 is required field";
      return false;
    }
    return true;
  };

  const validateAdressLine2 = () => {
    if (!adressLine2) {
      errors.AdressLine2 = "AdressLine 2 is required filed";
      return false;
    }
    return true;
  };

  const validateCity = () => {
    if (!city) {
      errors.city = "City is a required field";
      return false;
    }
    return true;
  };

  const validateState = () => {
    if (!state) {
      errors.state = "State is required field";
      return false;
    }
    return true;
  };

  const validateCountry = () => {
    if (!country) {
      errors.country = "Country is a required field";
      return false;
    }
    return true;
  };

  const validatePinCode = () => {
    if (!pincode) {
      errors.pincode = "PinCode is a required field";
      return false;
    } else if (pincode.length !== 6) {
      errors.pincode = "Invali PinCode";
      return false;
    }
    return true;
  };

  const validate = () => {
    const isAdressLineOneValid = validateAdressLine1();
    const isAdressLineTwoValid = validateAdressLine2();
    const isCitytValid = validateCity();
    const isStateValid = validateState();
    const isCountryValid = validateCountry();
    const isPincodeValid = validatePinCode();

    if (
      isAdressLineOneValid &&
      isAdressLineTwoValid &&
      isCitytValid &&
      isStateValid &&
      isCountryValid &&
      isPincodeValid
    ) {
      nextStep();

    } else {
      return errors;
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setFormErrors(validate({adressLine1, adressLine2, city, state, country, pincode}));
  };

  return (
    <div className="top-container">
      <Stepper
        steps={[
          { label: "User Information" },
          { label: "Adress Details" },
          { label: "Thank You" },
        ]}
        activeStep={1}
        styleConfig={{
          activeBgColor: "#2b7cff",
          activeTextColor: "#fff",
          inactiveBgColor: "#fff",
          inactiveTextColor: "#2b7cff",
          completedBgColor: "#fff",
          completedTextColor: "#2b7cff",
          size: "3em",
        }}
        className={"stepper"}
        stepClassName={"stepper__step"}
      />

      <form className="form-container2">
        <div className="form-container">
          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Adress Line1"
              type="text"
              name="AdressLine1"
              value={adressLine1}
              onChange={thirdStep}
            />
            {formErrors ? (
              <p className="error-msg">{formErrors.AdressLine1}</p>
            ) : (
              ""
            )}
          </div>

          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Adress Line2"
              type="text"
              name="AdressLine2"
              value={adressLine2}
              onChange={thirdStep}
            />
            {formErrors ? (
              <p className="error-msg">{formErrors.AdressLine2}</p>
            ) : (
              ""
            )}
          </div>

          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="City"
              type="text"
              name="city"
              value={city}
              onChange={thirdStep}
            />
            {formErrors ? <p className="error-msg">{formErrors.city}</p> : ""}
          </div>

          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="State"
              type="text"
              name="state"
              value={state}
              onChange={thirdStep}
            />
            {formErrors ? <p className="error-msg">{formErrors.state}</p> : ""}
          </div>

          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Country"
              type="text"
              name="country"
              value={country}
              onChange={thirdStep}
            />
            {formErrors ? (
              <p className="error-msg">{formErrors.country}</p>
            ) : (
              ""
            )}
          </div>

          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Pincode"
              type="number"
              name="pincode"
              value={pincode}
              onChange={thirdStep}
            />
            {formErrors ? (
              <p className="error-msg">{formErrors.pincode}</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="mt-3">
          <button className="btn btn-secondary button secondary-btn">
            Back
          </button>
          <button className="btn btn-primary button" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdressDetails;

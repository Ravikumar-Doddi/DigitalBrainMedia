import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import "./index.css";

const data = [
  { id: 1, group: "O+" },
  { id: 2, group: "O-" },
  { id: 3, group: "A+" },
  { id: 4, group: "A-" },
  { id: 5, group: "B+" },
  { id: 6, group: "B-" },
  { id: 7, group: "AB+" },
  { id: 8, group: "AB-" },
];

const UserInformation = (props) => {
  const {
    handleChange,
    firstName,
    middleName,
    lastName,
    mobile,
    email,
    dob,
    age,
    blood,
    height,
    width,
    gender,
    nextStep,
    maritualStatus,
  } = props;

  const [formErrors, setFormErrors] = useState({});

  const errors = {};

  const validateFirstName = () => {
    if (!firstName) {
      errors.firstName = "FirstName Required";
      return false;
    }
    return true;
  };

  const validateMiddle = () => {
    if (!middleName) {
      errors.middleName = "MiddleName Required";
      return false;
    }
    return true;
  };

  const validateLastName = () => {
    if (!lastName) {
      errors.lastName = "LastName Required";
      return false;
    }
    return true;
  };

  const validateMobile = () => {
    if (!mobile) {
      errors.mobile = "Mobile Number Required";
      return false;
    } else if (mobile.length !== 10) {
      errors.mobile = "Invali mobile Number";
      return false;
    }
    return true;
  };

  const validateDob = () => {
    if (!dob.length > 0) {
      errors.dob = "Date of Birth Required";
      return false;
    }
    return true;
  };

  const validateAge = () => {
    if (!age) {
      errors.age = "Age is Required";
      return false;
    } else if (!age < 0) {
      errors.age = "Invali Age";
      return false;
    }
    return true;
  };

  const validateBlood = () => {
    if (blood.length === 0) {
      errors.blood = "Blood Group Required";
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      errors.email = "Email is Required";
      return false;
    } else if (!regex.test(email)) {
      errors.email = "This Email is not valid";
      return false;
    }
    return true;
  };

  const validateHeight = () => {
    if (!height) {
      errors.height = "Height is Required";
      return false;
    } else if (!height < 0) {
      errors.height = "Invali Height";
      return false;
    }
    return true;
  };

  const validateWeight = () => {
    if (!width) {
      errors.width = "Weight is Required";
      return false;
    } else if (!width < 0) {
      errors.width = "Invali Weight";
      return false;
    }
    return true;
  };

  const validateGender = () => {
    if (!gender) {
      errors.gender = "Please select your Gender";
      return false;
    }
    return true;
  };

  const validateMaritualStatus = () => {
    if (!maritualStatus) {
      errors.maritualStatus = "Please Select your Maritual Status";
      return false;
    }
    return true;
  };

  const validate = () => {
    const isFirstValid = validateFirstName();
    const isMiddleValid = validateMiddle();
    const isLastValid = validateLastName();
    const isMobileValid = validateMobile();
    const isDobValid = validateDob();
    const isAgeValid = validateAge();
    const isBloodValid = validateBlood();
    const isEmailValid = validateEmail();
    const isHeightValid = validateHeight();
    const isWeightValid = validateWeight();
    const isGengerValid = validateGender();
    const isMaritualValid = validateMaritualStatus();

    if (
      isFirstValid &&
      isMiddleValid &&
      isLastValid &&
      isMobileValid &&
      isDobValid &&
      isAgeValid &&
      isBloodValid &&
      isEmailValid &&
      isHeightValid &&
      isWeightValid &&
      isGengerValid &&
      isMaritualValid
    ) {
      nextStep();
    } else {
      return errors;
    }
  };
  
  const handleNext = (e) => {
    e.preventDefault();
    setFormErrors(
      validate({
        firstName,
        middleName,
        lastName,
        mobile,
        dob,
        age,
        blood,
        height,
        width,
        gender,
        maritualStatus,
        email,
      })
    );
  };

  return (
    <div className="top-container">
      <Stepper  className="stepper-step"
        steps={[
          { label: "User Information" },
          { label: "Adress Details" },
          { label: "Thank You" },
        ]}
        activeStep={0}
        styleConfig={{
          activeBgColor: "#2b7cff",
          activeTextColor: "#fff",
          inactiveBgColor: "#fff",
          inactiveTextColor: "#2b7cff",
          completedBgColor: "#fff",
          completedTextColor: "#2b7cff",
          size: "3em",
        }}
        
        stepClassName={"stepper__step"}
      />

      <form className="form-container2">
        <div className="form-container">
          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="First name"
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
            {formErrors ? (
              <p className="error-msg">{formErrors.firstName}</p>
            ) : (
              ""
            )}
          </div>

          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Middle name"
              type="text"
              name="middleName"
              value={middleName}
              onChange={handleChange}
            />
            {formErrors ? (
              <p className="error-msg">{formErrors.middleName}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="lastName"
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
            {formErrors ? (
              <p className="error-msg">{formErrors.lastName}</p>
            ) : (
              ""
            )}
          </div>

          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Mobile No"
              type="number"
              name="mobile"
              value={mobile}
              onChange={handleChange}
            />
            {formErrors ? <p className="error-msg">{formErrors.mobile}</p> : ""}
          </div>

          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {formErrors ? <p className="error-msg">{formErrors.email}</p> : ""}
          </div>

          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Birthday"
              type="date"
              name="dob"
              value={dob}
              onChange={handleChange}
            />
            {formErrors ? <p className="error-msg">{formErrors.dob}</p> : ""}
          </div>

          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Age"
              type="number"
              name="age"
              value={age}
              onChange={handleChange}
            />
            {formErrors ? <p className="error-msg">{formErrors.age}</p> : ""}
          </div>
          <div className="form-main-cont">
            <select
              className="form-input"
              placeholder="Blood Group"
              name="blood"
              value={blood}
              onChange={handleChange}
            >
              {data.map((each) => (
                <option key={each.id}>{each.group}</option>
              ))}
            </select>
            {formErrors ? (
              <p className="error-msg">{formErrors.bloodGroup}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Height"
              type="number"
              name="height"
              value={height}
              onChange={handleChange}
            />
            {formErrors ? <p className="error-msg">{formErrors.height}</p> : ""}
          </div>
          <div className="form-main-cont">
            <input
              className="form-input"
              placeholder="Width"
              type="number"
              name="width"
              value={width}
              onChange={handleChange}
            />
            {formErrors ? <p className="error-msg">{formErrors.width}</p> : ""}
          </div>

          <div className="form-main-cont">
            <div className="gender-input">
              <h5 className="gender-height">Gender</h5>

              <div className="maritual-status-container">
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    className="me-2 radio-input"
                  />
                  <label className="me-2" htmlFor="male">
                    Male
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    className="me-2 radio-input"
                  />
                  <label htmlFor="female" className="me-2">
                    Female
                  </label>
                </div>
              </div>
            </div>

            {formErrors ? <p className="error-msg">{formErrors.gender}</p> : ""}
          </div>

          <div className="form-main-cont">
            <div className="gender-input mb-3">
              <h5 className="maritual-height">Maritual Status</h5>

              <div className="maritual-status-container">
                <div>
                  <input
                    type="radio"
                    id="single"
                    name="maritualStatus"
                    value="Single"
                    onChange={handleChange}
                  />
                  <label htmlFor="single" className="me-2">
                    Single
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="married"
                    className="me-2 radio-input"
                    name="maritualStatus"
                    value="Married"
                    onChange={handleChange}
                  />
                  <label htmlFor="married" className="me-2">
                    Married
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="divorced"
                    className="me-2 radio-input"
                    name="maritualStatus"
                    value="Divorced"
                    onChange={handleChange}
                  />
                  <label htmlFor="divorced" className="me-2">
                    Divorced
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="widowed"
                    className="me-2 radio-input"
                    name="maritualStatus"
                    value="Widowed"
                    onChange={handleChange}
                  />
                  <label htmlFor="widowed" className="me-2 ">
                    Widowed
                  </label>
                </div>
              </div>
            </div>

            {formErrors ? (
              <p className="error-msg">{formErrors.maritualStatus}</p>
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

export default UserInformation;

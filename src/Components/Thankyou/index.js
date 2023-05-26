import React from "react";
import { Stepper } from "react-form-stepper";
import "./index.css";

const ThankYou = (props) => {
  const { adress, userInfo } = props;
  const { AdressLine1, AdressLine2, city, country, state, pincode } = adress;
  const {
    firstName,
    middleName,
    lastName,
    age,
    blood,
    dob,
    email,
    gender,
    height,
    maritualStatus,
    mobile,
    width,
  } = userInfo;
  return (
    <div className="top-container">
      <div className="stepper-container">
      <Stepper  className="stepper-step "
        steps={[
          { label: "User Information" },
          { label: "Adress Details" },
          { label: "Thank You" },
        ]}
        activeStep={2}
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

        <h3 className="data-color">Data Added Successfully</h3>
        <div className="name-value">
          <div>Name</div>
          <div>Value</div>
        </div>
        <hr />
        <div className="name-value">
          <div className="name">FirstName</div>
          <div className="value name">{firstName}</div>
        </div>
        <hr />
        <div className="name-value">
          <div className="name">MiddleName</div>
          <div className="name">{middleName}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">LastName</div>
          <div className="name">{lastName}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">MobileNo</div>
          <div className="name">{mobile}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">Email</div>
          <div className="name">{email}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">Birthday</div>
          <div className="name">{dob}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">Age</div>
          <div className="name">{age}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">BloodGroup</div>
          <div className="name">{blood}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">Height</div>
          <div className="name">{height}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">Weight</div>
          <div className="name">{width}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">Gender</div>
          <div className="name">{gender}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">MaritualStatus</div>
          <div className="name">{maritualStatus}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">AdressLine1</div>
          <div className="name">{AdressLine1}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">AdressLine2</div>
          <div className="name">{AdressLine2}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">City</div>
          <div className="name">{city}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">State</div>
          <div className="name">{state}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">Country</div>
          <div className="name">{country}</div>
        </div>
        <hr />

        <div className="name-value">
          <div className="name">PinCode</div>
          <div className="name">{pincode}</div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

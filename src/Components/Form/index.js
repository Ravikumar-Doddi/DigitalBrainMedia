import React, { useState } from "react";
import UserInformation from "../UserInformation";
import AdressDetails from "../AdressDetails";
import ThankYou from "../Thankyou";

const Form = () => {
  const initialState = {
    step: 1,
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    email: "",
    dob: "",
    age: "",
    blood: "",
    height: "",
    width: "",
    gender: "",
    maritualStatus: "",
  };

  const initialAdress = {
    AdressLine1: "",
    step: 2,
    AdressLine2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  };

  const [userInfo, setUserInfo] = useState(initialState);
  const [adress, setAdress] = useState(initialAdress);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const nextStep = () => {
    setUserInfo({ ...userInfo, step: userInfo.step + 1 });
  };
  

  const thirdStep = (e) => {
    const { name, value } = e.target;
    setAdress({ ...adress, [name]: value });
  };

  const renderCase = () => {
    switch (userInfo.step) {
      case 1:
        return (
          <UserInformation
            handleChange={handleChange}
            firstName={userInfo.firstName}
            middleName={userInfo.middleName}
            lastName={userInfo.lastName}
            mobile={userInfo.mobile}
            email={userInfo.email}
            dob={userInfo.dob}
            age={userInfo.age}
            blood={userInfo.blood}
            height={userInfo.height}
            width={userInfo.width}
            gender={userInfo.gender}
            maritualStatus={userInfo.maritualStatus}
            nextStep={nextStep}
          />
        );

      case 2:
        return (
          <AdressDetails
            handleChange={handleChange}
            adressLine1={adress.AdressLine1}
            adressLine2={adress.AdressLine2}
            city={adress.city}
            state={adress.state}
            country={adress.country}
            pincode={adress.pincode}
            thirdStep={thirdStep}
            nextStep = {nextStep}

          />
        );

      case 3:
        return <ThankYou userInfo={userInfo} adress={adress} />;

      default:
        break;
    }
  };

  return renderCase();
};

export default Form;

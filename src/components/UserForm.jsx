import { useState } from "react";
import Nav from "./Nav";
import HomePage from "../Pages.jsx/HomePage";
import TicketPage from "../Pages.jsx/TicketPage";
import FormPage from "../Pages.jsx/FormPage";
const UserForm = ({ userData }) => {
  const [username, setUsername] = useState("");
  const [tickets, setTickets] = useState("");
  const [ticketType, setTicketType] = useState("free");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  // const [isChecked, setIsChecked] = useState(false);
  const [checkedButton, setCheckedButton] = useState(null);

  // image
  const [uploadedImgState, setUploadedImgState] = useState("");

  const handleImage = async (e) => {
    e.preventDefault();

    // Replace with your Cloudinary cloud name
    const cloudName = "do9m41q14";
    // Replace with your Cloudinary upload preset
    const uploadPreset = "upload_new";

    // get the image uploaded
    const file = e.target.files[0];

    // check if the image is of the correct type
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      // create a new form instance
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        // this is the returned object from the cloudinary
        const data = await response.json();
        // access your URL with secure_url
        console.log(data.secure_url);
        // setImg(data.secure_url);
        setUploadedImgState(data.secure_url);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("A jpeg/png file could not be found");
    }
  };

  const values = {
    username,
    email,
    tickets,
    message,
    ticketType,
    uploadedImgState,
    // isChecked,
    checkedButton,
    // step,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "numberOfTickets":
        setTickets(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleChecked = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "free":
        setCheckedButton(value);
        setTicketType(value);
        break;
      case "vip":
        setCheckedButton(value);
        setTicketType(value);
        break;
      case "vvip":
        setCheckedButton(value);
        setTicketType(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTicketType()
    nextStep();

    console.log(values);
  };

  const nextStep = () => {
    const currentStep = step;
    setStep(step + 1);
  };

  //   prev step

  const prevStep = () => {
    const currentStep = step;
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-vdark">
      <Nav />
      {step === 1 && (
        <HomePage
          formData={values.tickets}
          handleChange={handleChange}
          checkedButton={checkedButton}
          handleSubmitTicket={handleSubmit}
          handleChecked={handleChecked}
          nextStep={nextStep}
          ticketType={values.ticketType}
        />
      )}

      {step === 2 && (
        <FormPage
          handleSubmit={handleSubmit}
          formData={values}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          handleImage={handleImage}
        />
      )}

      {step === 3 && (
        <TicketPage
          name={values.username}
          email={values.email}
          ticketType={values.ticketType}
          // TODO: DO TICKET TYPE
          ticketNumber={values.tickets}
          message={values.message}
          imageSrc={values.uploadedImgState}
          // handleDownload={handleDownload}
        />
      )}
    </div>
  );
};

export default UserForm;

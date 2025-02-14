import { useState } from "react";
import Nav from "./Nav";
import HomePage from "../Pages.jsx/HomePage";
import TicketPage from "../Pages.jsx/TicketPage";
import FormPage from "../Pages.jsx/FormPage";

const UserForm = ({ userData }) => {
  const [username, setUsername] = useState("");
  const [tickets, setTickets] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  // const [isChecked, setIsChecked] = useState("");

  const values = {
    username,
    email,
    tickets,
    message,
    ticketType,
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
    setTicketType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
    console.log(values);
    console.log(ticketType);
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
          handleChecked={handleChecked}
          handleSubmitTicket={handleSubmit}
          checked={values.isChecked}
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
        />
      )}

      {step === 3 && (
        <TicketPage
          name={values.username}
          email={values.email}
          ticketType={values.ticketType}
          // TODO: DO TICKET TYPE
          // ticketType={values.ticketType}
          ticketNumber={values.tickets}
          message={values.message}
          // handleChange={handleChange}
          // nextstep={nextstep}
          // prevstep={prevStep}
        />
      )}
      {/* Add more cases as needed */}
    </div>
  );
};

export default UserForm;

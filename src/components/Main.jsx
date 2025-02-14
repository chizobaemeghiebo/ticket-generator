import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttoon from "../components/Button";
import CaretDown from "../assets/images/caret-down.png";
import Bigcard from "./Bigcard";
import PageTitle from "./PageTitle";
import ProgressBar from "./ProgressBar";

const Main = () => {
  const [numberOfTickets, setNumberOfTickets] = useState("1");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      numberOfTickets,
    };
    // console.log(newTicket);

    return navigate("/get-tickets");
  };
  return (
    <div className="bg-transparent w-[90%] shadow-md max-w-[700px] mx-auto p-5 lg:p-12 rounded-[40px] border-2 border-border2">
      {/* page title and progress bar */}
      <PageTitle />
      <ProgressBar />
      <div className="bg-transparent lg:border border-border2 rounded-4xl flex flex-col lg:p-6 mt-8">
        {/* progress bar */}

        {/* Main Head Section */}
        <div className="border-b-4 border-border3 pb-8">
          <Bigcard>
            <h1 className="font-heading text-5xl lg:text-6xl">
              Techember Fest ”25
            </h1>
            <p className="font-display text-sm lg:text-base lg:w-[70%] lg:mx-auto">
              Join us for an unforgettable experience at CodeCon25! Secure your
              spot now.
            </p>
            <p className="font-display text-sm lg:text-base">
              📍 Lagos, Nigeria || March 15, 2025 | 7:00 PM
            </p>
          </Bigcard>
        </div>
        <form onSubmit={handleSubmit} className=" mt-8">
          <div className="relative">
            <label
              htmlFor="numberOfTickets"
              className="block mb-2 text-base text-lighter font-display"
            >
              Number of Tickets:
            </label>
            <select
              name="numberOfTickets"
              id="numberOfTickets"
              required
              value={numberOfTickets}
              onChange={(e) => setNumberOfTickets(e.target.value)}
              className=" relative border-2 border-border3 p-3 w-full rounded-xl text-white focus:ring-2 focus:ring-border3 outline-0 placeholder-white"
            >
              <option value="1" className="text-dark">
                1
              </option>
              <option value="2" className="text-dark">
                2
              </option>
              <option value="3" className="text-dark">
                3
              </option>
              <option value="4" className="text-dark">
                4
              </option>
              <option value="5" className="text-dark">
                5
              </option>
            </select>
            <img
              src={CaretDown}
              alt="ticket options"
              className="absolute right-4 top-[65%] pointer-events-none"
            />
          </div>

          <div className="mt-8 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-2 ">
            <button
              className="bg-progressOuter lg:w-[47%] border-2 border-progressOuter font-accent text-base rounded-lg p-3 text-center text-lighter"
              type="submit"
            >
              Next
            </button>
            <Buttoon>Cancel</Buttoon>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CaretDown from "../assets/images/caret-down.png";
import Bigcard from "../components/Bigcard";
import PageTitle from "../components/PageTitle";
import ProgressBar from "../components/ProgressBar";
import Card from "../components/Card";

const HomePage = ({
  formData,
  handleChange,
  handleChecked,
  handleSubmitTicket,
  checked,
}) => {
  return (
    <div className="bg-transparent w-[90%] shadow-md max-w-[700px] mx-auto p-5 lg:p-12 rounded-[40px] border-2 border-border2">
      {/* page title and progress bar */}
      <PageTitle />
      <ProgressBar />
      <div className="bg-transparent lg:border border-border2 rounded-4xl flex flex-col lg:p-6 mt-8">
        {/* progress bar */}

        {/* HomePage Head Section */}
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
        {/* TODO: USE MAP HERE */}
        <form onSubmit={handleSubmitTicket} className="mt-8">
          <div className="flex flex-col lg:flex-row bg-bg-darker p-4 gap-3 rounded-3xl justify-between">
            <label
              htmlFor="free"
              className={
                checked
                  ? "bg-ldark border-2 border-border3 rounded-xl flex flex-col gap-3 font-display p-3 lg:w-[30%]"
                  : "border-2 border-border3 rounded-xl flex flex-col gap-3 font-display p-3 lg:w-[30%]"
              }
            >
              <input
                className="absolute hidden"
                type="radio"
                name="ticketType"
                id="free"
                value="free"
                onChange={handleChecked}
              />
              {/* TODO: ADD HOVER STYLES, CHANGE STYLE ON IS CHECKED  */}
              <div>
                <h4 className="text-white text-2xl">Free</h4>
                <p className="text-lighter text-base uppercase">
                  Regular Access
                </p>
                <p className="text-midLight text-base">20/52</p>
              </div>
            </label>
            <label
              htmlFor="vip"
              className={
                checked
                  ? "bg-ldark border-2 border-border3 rounded-xl flex flex-col gap-3 font-display p-3 lg:w-[30%]"
                  : "border-2 border-border3 rounded-xl flex flex-col gap-3 font-display p-3 lg:w-[30%]"
              }
            >
              <input
                className="absolute hidden"
                type="radio"
                name="vip"
                id="vip"
                value="vip"
                onChange={handleChecked}
              />
              <div>
                <h4 className="text-white text-2xl">$150</h4>
                <p className="text-lighter text-lg uppercase">VIP Access</p>
                <p className="text-midLight text-sm">20/52</p>
              </div>
            </label>
            <label
              htmlFor="vvip"
              className={
                checked
                  ? "bg-ldark border-2 border-border3 rounded-xl flex flex-col gap-3 font-display p-3 lg:w-[30%]"
                  : "border-2 border-border3 rounded-xl flex flex-col gap-3 font-display p-3 lg:w-[30%]"
              }
            >
              <input
                className="absolute hidden"
                type="radio"
                name="vvip"
                id="vvip"
                value="vvip"
                onChange={handleChecked}
              />
              <div>
                <h4 className="text-white text-2xl">$200</h4>
                <p className="text-lighter text-lg uppercase">VVIP Access</p>
                <p className="text-midLight text-sm">20/52</p>
              </div>
            </label>
          </div>
          <div className="relative mt-8">
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
              value={formData.tickets}
              onChange={handleChange}
              className=" relative border-2 border-border3 p-3 w-full rounded-xl text-white focus:ring-2 focus:ring-border3 outline-0 placeholder-white"
            >
              <option value="" className="text-dark">
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
            <Button>Cancel</Button>
            <button
              // onClick={nextStep}
              className="bg-progressOuter lg:w-[47%] border-2 border-progressOuter font-accent text-base rounded-lg p-3 text-center text-lighter"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;

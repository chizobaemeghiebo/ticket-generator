import { useState } from "react";
import { useNavigation } from "react-router-dom";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ProgressBar from "../components/ProgressBar";
import Barcode from "../assets/images/barcode1.png";
import Ticket1 from "../assets/images/ticket.png";
import Upload from "../components/Upload";
const TicketPage = ({
  name,
  email,
  message,
  ticketNumber,
  prevStep,
  ticketType,
  imageSrc,
  handleDownload,
}) => {
  return (
    <Layout>
      <PageTitle title="Ready" step="Step 3/3" />
      <ProgressBar width="w-[95%]" />

      <div className="text-lighter flex flex-col items-center my-8">
        <h3 className="text-2xl font-display">Your Ticket is Booked!</h3>
        <p className="text-base font-display w-3/4 mx-auto text-center mt-3">
          You can download or Check your email for a copy
        </p>
      </div>

      <div className="relative">
        <div className="relative z-30 flex flex-col gap-4 border-2 border-border4 rounded-2xl mt-12 w-[83%] md:w-[40%] lg:w-[43%] mx-auto py-2 lg:py-4">
          <div className="relative z-30 flex flex-col items-center text-lighter gap-1">
            <h1 className="font-heading text-4xl ">Techember Fest ”25</h1>
            <p className="font-display text-xs lg:text-center lg:w-[70%] lg:mx-auto">
              📍 04 Rumens road, Ikoyi, Lagos
            </p>
            <p className="font-display text-xs ">📅 March 15, 2025 | 7:00 PM</p>
          </div>
          {/* image holder */}
          <div className="relative overflow-hidden z-30 border-2 border-border3 rounded-xl w-1/2 mx-auto p-16 bg-border2">
            <img
              src={imageSrc}
              alt="downloaded img"
              className="absolute top-0 left-0 right-0- bottom-0 w-full"
            />
          </div>
          {/* information */}
          <div className="relative z-30 w-[90%] mx-auto grid grid-cols-2 justify-between items-stretch px-2 border-2 border-border3 rounded-lg text-white">
            <div className="p-2 border-b-2 border-r-2 border-border3 ">
              <p className="opacity-30 text-[10px]">Enter your name</p>
              <p className="text-xs break-words">{name}</p>
            </div>
            <div className="p-2 border-b-2  border-border3 ">
              <p className="opacity-30 text-[10px]">Enter your email *</p>
              <p className="text-xs break-words">{email}</p>
            </div>
            <div className="p-2 border-b-2 border-r-2 border-border3 ">
              <p className="opacity-30 text-[10px]"> Ticket Type:</p>
              <p className="text-xs break-words">{ticketType}</p>
            </div>
            <div className="p-2 border-b-2 border-border3 ">
              <p className="opacity-30 text-[10px]"> Ticket for :</p>
              <p className="text-xs break-words">{ticketNumber}</p>
            </div>
            <div className="col-span-2 p-2">
              <p className="opacity-30 text-[10px]">Special request?</p>
              <p className="text-xs break-words">{message}</p>
            </div>
          </div>
        </div>

        <img
          src={Ticket1}
          alt="ticket background"
          className="flex absolute -top-6 md:top-[62%] lg:top-[63%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10"
        />
        <img
          src={Barcode}
          alt="barcode"
          className="absolute -bottom-[35%] md:-bottom-[33%] lg:-bottom-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        />
      </div>

      <div className="mt-44 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-2 ">
        <button
          onClick={prevStep}
          className="lg:w-[47%] border-2 border-progressOuter font-accent text-base rounded-lg p-3 text-center text-lighter"
          type="button"
        >
          Back
        </button>

        <button
          onClick={handleDownload}
          className="bg-progressOuter lg:w-[47%] border-2 border-progressOuter font-accent text-base rounded-lg p-3 text-center text-lighter"
          type="submit"
        >
          Download My Ticket
        </button>
      </div>
    </Layout>
  );
};

export default TicketPage;

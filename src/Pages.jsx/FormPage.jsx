import { useState } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import LayoutInner from "../components/LayoutInner";
import PageTitle from "../components/PageTitle";
import ProgressBar from "../components/ProgressBar";
import Envelope from "../assets/images/envelope.png";
import Upload from "../components/Upload";
const FormPage = ({ formData, handleChange, handleSubmit, prevStep }) => {
  return (
    // TODO: FIX GRADIENT BACKGROUND
    // <div className="min-h-screen bg-vdark">

    <Layout>
      <PageTitle title="Attendee Details" step="Step 2/3" />
      <ProgressBar width="w-[66%]" />
      <LayoutInner>
        <div className="border-b-4 border-border3 pb-8">
          <div className="bg-darker px-6 py-7 lg:px-6 lg:py-12 border-2 border-border3 rounded-3xl relative">
            <h3 className="text-lighter text-base">Upload Profile Photo</h3>
            <div className="hidden lg:flex  w-[90%] bg-black opacity-20 h-[180px] absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="border-4 border-border4 bg-border5 flex lg:justify-center rounded-3xl lg:py-8 mt-3 lg:max-w-[50%] lg:mx-auto z-9999 relative">
              <div className="flex flex-col gap-4 p-6 items-center justify-center ">
                <Upload />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <label
              htmlFor="username"
              className="flex flex-col gap-2 justify-center text-base text-lighter font-display"
            >
              Enter your name
              <input
                type="text"
                name="username"
                id="username"
                required
                value={formData.username}
                // onChange={(e) => formData.setUsername(e.target.value)}
                onChange={handleChange}
                // onChange={(e) => setUsername(e.target.value)}
                placeholder="John Doe"
                className=" font-display border-2 border-border3 p-3 w-full rounded-xl text-white focus:ring-2 focus:ring-border3 outline-0 placeholder-white"
              />
            </label>

            <label
              htmlFor="email"
              className="flex flex-col gap-2 justify-center text-base text-lighter font-display relative"
            >
              Enter your email *
              <input
                type="text"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@avioflagos.io"
                className="pl-10 font-display border-2 border-border3 p-3 w-full rounded-xl text-white focus:ring-2 focus:ring-border3 outline-0 placeholder-white"
              />
              <img
                src={Envelope}
                className="absolute top-[53%] left-3"
                alt="envelope"
              />
            </label>

            <label
              htmlFor="message"
              className="flex flex-col gap-2 justify-center text-base text-lighter font-display"
            >
              Special Request?
              <textarea
                rows={7}
                type="text"
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                // onChange={(e) => setMessage((message = e.target.value))}
                placeholder="Your message"
                className="font-display border-2 border-border3 p-3 w-full rounded-xl text-white focus:ring-2 focus:ring-border3 outline-0 placeholder-white"
              ></textarea>
            </label>

            <div className="mt-8 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-2 ">
              <button
                // onClick={downloadTicket}
                className="bg-progressOuter lg:w-[47%] border-2 border-progressOuter font-accent text-base rounded-lg p-3 text-center text-lighter"
                type="submit"
              >
                Dowmload Ticket
              </button>
              <button
                onClick={prevStep}
                className="lg:w-[47%] border-2 border-progressOuter font-accent text-base rounded-lg p-3 text-center text-lighter"
                type="button"
              >
                Back
              </button>
              {/* <Button onClick={prevStep}>Cancel</Button> */}
            </div>

            {/* <div className="mt-8 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-2 ">
              <Button color="text-border4" pathname="/">
                Back
              </Button>
              <Button pathname="/ticket" bg="bg-progressOuter">
                Get My Free Ticket
              </Button>
            </div> */}
          </form>
        </div>
      </LayoutInner>
    </Layout>
  );
};

export default FormPage;

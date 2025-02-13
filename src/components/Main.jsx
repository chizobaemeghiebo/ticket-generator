import Bigcard from "./Bigcard";
import Tickets from "./Tickets";
import PageTitle from "./PageTitle";
import ProgressBar from "./ProgressBar";

const Main = () => {
  return (
    <div className="bg-transparent w-[90%] shadow-md max-w-[700px] mx-auto p-5 lg:p-12 rounded-[40px] border-2 border-border2">
      {/* page title and progress bar */}
      <PageTitle />
      <ProgressBar />
      <div className="bg-transparent border border-border2 rounded-4xl flex flex-col p-6 mt-8">
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

        {/* Tickets section */}
        <Tickets />
      </div>
    </div>
  );
};

export default Main;

import Bigcard from "./Bigcard";
import Tickets from "./Tickets";

const Main = () => {
  return (
    <div className="bg-transparent w-[90%] shadow-md max-w-[700px] mx-auto p-6 lg:p-12 rounded-[40px] border-2 border-border2">
      <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between">
        <h2 className="font-accent text-white text-3xl">Ticket Selection</h2>
        <span className="text-white font-display text-base">Step 1/3</span>
      </div>
      <div className="bg-border2 h-1 mt-3">
        <div className="bg-progressOuter w-[30%] h-1"></div>
      </div>
      <Bigcard>
        <h1 className="font-heading text-5xl lg:text-6xl">
          Techember Fest ”25
        </h1>
        <p className="font-display text-sm lg:text-base lg:w-[70%] lg:mx-auto">
          Join us for an unforgettable experience at CodeCon25! Secure your spot
          now.
        </p>
        <p className="font-display text-sm lg:text-base">
          📍 [Event Location] || March 15, 2025 | 7:00 PM
        </p>
      </Bigcard>

      {/* Tickets */}
      <Tickets />
    </div>
  );
};

export default Main;

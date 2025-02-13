import Nav from "../components/Nav";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ProgressBar from "../components/ProgressBar";
import Barcode from "../assets/images/barcode1.png";
import Ticket1 from "../assets/images/ticket.png";
import Ticket2 from "../assets/images/ticket2.png";
import ButtonContainer from "../components/ButtonContainer";
const TicketPage = () => {
  return (
    <div className="min-h-screen bg-vdark relative">
      <div className="fixed top-3 w-full">
        <Nav />
      </div>

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
          <div className="relative z-40 flex flex-col gap-4 border-2 border-border4 rounded-2xl mt-12 w-[83%] md:w-[40%] lg:w-[43%] mx-auto py-2">
            <div className="relative z-40 flex flex-col items-center text-lighter gap-1">
              <h1 className="font-heading text-4xl ">Techember Fest ”25</h1>
              <p className="font-display text-xs lg:text-center lg:w-[70%] lg:mx-auto">
                📍 04 Rumens road, Ikoyi, Lagos
              </p>
              <p className="font-display text-xs ">
                📅 March 15, 2025 | 7:00 PM
              </p>
            </div>
            {/* image holder */}
            <div className="relative z-40 border-2 border-border3 rounded-xl w-1/2 mx-auto p-16 bg-amber-200"></div>
            {/* information */}
            <div className="relative z-40 w-[90%] mx-auto grid grid-cols-2 justify-between items-stretch px-2 border-2 border-border3 rounded-lg text-white">
              <div className="p-2 border-b-2 border-r-2 border-border3 ">
                <p className="opacity-30 text-xs">Enter your name</p>
                <p className="opacity-30 text-xs">Enter your name</p>
              </div>
              <div className="p-2 opacity-30 text-xs border-b-2  border-border3 ">
                <p className="opacity-30 text-xs">Enter your email *</p>
                <p className="opacity-30 text-xs">Enter your email *</p>
              </div>
              <div className="p-2 opacity-30 text-xs border-b-2 border-r-2 border-border3 ">
                <p className="opacity-30 text-xs"> Ticket Type:</p>
                <p className="opacity-30 text-xs"> Ticket Type:</p>
              </div>
              <div className="p-2 opacity-30 text-xs border-b-2 border-border3 ">
                <p className="opacity-30 text-xs"> Ticket for :</p>
                <p className="opacity-30 text-xs"> Ticket for :</p>
              </div>
              <div className="col-span-2 p-2 opacity-30 text-xs ">
                <p className="opacity-30 text-xs">Special request?</p>
                <p className="opacity-30 text-xs">Special request?</p>
              </div>
            </div>
          </div>

          <img
            src={Ticket1}
            alt="ticket background"
            className="flex absolute -top-4 md:top-[62%] lg:top-[63%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10"
          />
          <img
            src={Barcode}
            alt="barcode"
            className="absolute -bottom-[30%] md:-bottom-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>

        <div className="mt-44">
          <ButtonContainer />
        </div>
      </Layout>
    </div>
  );
};

export default TicketPage;

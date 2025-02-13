import Nav from "../components/Nav";
import Layout from "../components/Layout";
import LayoutInner from "../components/LayoutInner";
import PageTitle from "../components/PageTitle";
import ProgressBar from "../components/ProgressBar";
import Download from "../assets/images/download.png";
import Envelope from "../assets/images/envelope.png";
import ButtonContainer from "../components/ButtonContainer";

const FormPage = () => {
  return (
    // TODO: FIX GRADIENT BACKGROUND
    <div className="min-h-screen bg-vdark">
      <Nav />

      {/* styles from main */}
      <Layout>
        <PageTitle />
        <ProgressBar width="w-[66%]" />
        <LayoutInner>
          <div className="border-b-4 border-border3 pb-8">
            <div className="bg-darker px-6 py-7 lg:px-6 lg:py-12 border-2 border-border3 rounded-3xl relative">
              <h3 className="text-lighter text-base">Upload Profile Photo</h3>
              <div className="hidden lg:flex  w-[90%] bg-black opacity-20 h-[180px] absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
              <div className="border-4 border-border4 bg-border5 flex rounded-3xl lg:py-8 mt-3 lg:max-w-[50%] lg:mx-auto z-9999 relative">
                <div className="flex flex-col gap-4 p-6 items-center justify-center ">
                  <img src={Download} alt="Upload file" />
                  <p className="text-lighter font-display text-base text-center">
                    Drag & drop or click to upload
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <form action="#" className="flex flex-col gap-8">
              <label
                htmlFor="name"
                className="flex flex-col gap-2 justify-center text-base text-lighter font-display"
              >
                Enter your name
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
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
                  placeholder="hello@avioflagos.io"
                  required
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
                  placeholder="Your message"
                  required
                  className="font-display border-2 border-border3 p-3 w-full rounded-xl text-white focus:ring-2 focus:ring-border3 outline-0 placeholder-white"
                ></textarea>
              </label>
              {/* <button type="submit"></button> */}
              <ButtonContainer button1="Back" button2="Get My Free Ticket" />
            </form>
          </div>
        </LayoutInner>
      </Layout>
    </div>
  );
};

export default FormPage;

import Card from "./Card";
import Button from "./Button";
import CaretDown from "../assets/images/caret-down.png";

const Tickets = () => {
  return (
    <div className="flex flex-col">
      <h3 className="mb-2 text-base text-lighter font-display">
        Select Ticket Type:
      </h3>
      <div className="flex flex-col lg:flex-row bg-darker p-4 gap-3 rounded-3xl justify-between">
        <Card>
          <h4 className="text-white text-2xl">Free</h4>
          <p className="text-lighter text-lg uppercase">Regular Access</p>
          <p className="text-midLight text-sm">20/52</p>
        </Card>
        <Card>
          <h4 className="text-white text-2xl">$150</h4>
          <p className="text-lighter text-lg uppercase">VIP Access</p>
          <p className="text-midLight text-sm">20/52</p>
        </Card>
        <Card>
          <h4 className="text-white text-2xl">$200</h4>
          <p className="text-lighter text-lg uppercase">VVIP Access</p>
          <p className="text-midLight text-sm">20/52</p>
        </Card>
      </div>

      <div className="mt-8">
        <label className="block mb-2 text-base text-lighter font-display">
          Number of Tickets:{" "}
        </label>

        <input
          type="number"
          name="ticketNumber"
          id="ticketNumber"
          placeholder="1"
          className="border-2 border-border3 p-3 w-full rounded-xl text-white focus:ring-2 focus:ring-border3 outline-0 placeholder-white"
        />
        {/* TODO: WORK ON THIS LATER */}
        {/* <img src={CaretDown} alt="caret" /> */}

        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-2 mt-8">
          <Button>Cancel</Button>
          <Button bg="bg-progressOuter">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Tickets;

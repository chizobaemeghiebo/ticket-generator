import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";
import CaretDown from "../assets/images/caret-down.png";

const Tickets = () => {
  return (
    <div className="flex flex-col mt-8">
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

      <form action="" className="mt-8">
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
          className=" relative border-2 border-border3 p-3 w-full rounded-xl text-white focus:ring-2 focus:ring-border3 outline-0 placeholder-white"
        >
          <option value="1">1</option>
          <option value="2" className="text-dark">
            2
          </option>
          <option value="3" className="text-dark">
            3
          </option>
          <option value="4" className="text-dark">
            4
          </option>
          <img src={CaretDown} className="" alt="choose" />
        </select>
        {/* TODO: FIX THE LOGIC HERE */}
        <div className="mt-8 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-2 ">
          <Button color="text-border4" pathname="/">
            Cancel
          </Button>
          <Button pathname="/get-tickets" bg="bg-progressOuter">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Tickets;

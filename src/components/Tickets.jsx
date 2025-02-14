import Card from "./Card";

const Tickets = ({ formData }) => {
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
    </div>
  );
};

export default Tickets;

{
  /* <Button type="submit">Next</Button> */
}
{
  /* <Buttoon>Cancel</Buttoon> */
}

{
  /* <Button color="text-border4" pathname="/">
              Cancel
            </Button>
            <Button pathname="/get-tickets" bg="bg-progressOuter">
              Next
            </Button> */
}

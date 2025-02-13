import Button from "./Button";

const ButtonContainer = ({ button1 = "Cancel", button2 = "Next" }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-2 mt-8">
      <Button pathname="/">{button1}</Button>
      <Button pathname="/get-tickets" bg="bg-progressOuter">
        {button2}
      </Button>
    </div>
  );
};

export default ButtonContainer;

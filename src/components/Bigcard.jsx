const Bigcard = ({ children }) => {
  return (
    // TODO: WORK ON GRADIENT!!!!!!!!!!!!!
    <div className="flex flex-col gap-2 items-center justify-center text-white bg-[radial-gradient(57.42%_106.59%_at_14.02%_32.06%,rgba(36,160,181,0.20)_0%,rgba(36,160,181,0.00)_100%)] border-b-2 border-r-2 border-l-2 mt-6 border-border3 rounded-3xl py-4 px-6 lg:px-6 text-center">
      {children}
    </div>
  );
};

export default Bigcard;

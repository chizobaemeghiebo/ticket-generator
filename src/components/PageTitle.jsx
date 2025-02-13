const PageTitle = ({ title = "Ticket Selection", step = "Step 1/3" }) => {
  return (
    <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between">
      <h2 className="font-accent text-white text-3xl">{title}</h2>
      <span className="text-white font-display text-base">{step}</span>
    </div>
  );
};

export default PageTitle;

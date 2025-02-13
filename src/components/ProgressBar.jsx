const ProgressBar = ({ width = "w-[33%]" }) => {
  return (
    <div className="bg-border2 h-1 mt-3">
      <div className={`bg-progressOuter ${width} h-1`}></div>
    </div>
  );
};

export default ProgressBar;

const LayoutInner = ({ children }) => {
  return (
    <div className="bg-transparent border border-border2 rounded-4xl flex flex-col p-6 mt-8">
      {children}
    </div>
  );
};

export default LayoutInner;

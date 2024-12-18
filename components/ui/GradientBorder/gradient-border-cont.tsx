const GradientBorderContainer = ({
  children
}: {
  children: React.ReactNode
}) => {
  return(
    <div className="rounded-[12px] p-[1px] bg-gradient-to-b from-custom-purple via-custom-white-alt to-teal-800">
      {children}
    </div>
  );
}

export default GradientBorderContainer;
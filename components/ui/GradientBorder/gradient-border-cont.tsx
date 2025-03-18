const GradientBorderContainer = ({
  children,
  customCss
}: {
  children: React.ReactNode,
  customCss?: string
}) => {
  return(
    <div className={`rounded-[12px] p-[1px] bg-gradient-to-b from-custom-purple 
      via-custom-white-alt to-teal-800 ${customCss}`}>
      {children}
    </div>
  );
}

export default GradientBorderContainer;
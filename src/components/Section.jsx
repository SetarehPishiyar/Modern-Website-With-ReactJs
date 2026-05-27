import SectionSvg from "../assets/svg/SectionSvg";
const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPadding,
  children,
}) => {
  return (
    <div
      className={`relative ${customPadding || "py-10 lg:py-16 xl:py-20"}
  ${crosses ? "lg:py-32 xl:py-40" : ""} ${className || ""}`}
      id={id}
    >
      {children}

      <div className="hidden md:block absolute top-0 left-5 w-px h-full bg-stroke-1 pointer-events-none lg:left-7.5 xl:left-10"></div>
      <div className="hidden md:block absolute top-0 right-5 w-px h-full bg-stroke-1 pointer-events-none lg:right-7.5 xl:right-10"></div>

      {crosses && (
        <>
          <div
            className={`hidden absolute lg:block top-0 left-7.5 right-7.5 h-px bg-stroke-1 pointer-events-none xl:left-10 xl:right-10
                ${crossesOffset && crossesOffset}`}
          ></div>
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;

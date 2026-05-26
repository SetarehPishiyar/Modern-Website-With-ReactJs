import { curve1, curve2 } from "../../assets";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] mt-10 ml-5 pointer-events-none xl:block rotate-8">
      <img src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-17 mr-12 pointer-events-none xl:block rotate-8">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};

import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex gap-5 items-center h-14 px-6 bg-n-8/80 rounded-[1.7rem] text-base
        ${className || ""}
    `}
    >
      <img src={loading} alt="loading" width={20} height={20} />
      AI is generating
    </div>
  );
};

export default Generating;

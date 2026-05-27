import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} max-w-200 mx-auto mb-12 lg:mb-20`}>
      {tag && <Tagline className={"mb-4 md:justify-center"}>{tag}</Tagline>}
      <h2 className="h1 md:text-center">{title}</h2>
      {text && <p className="body-2 mt-4 text-n-4 md:text-center">{text}</p>}
    </div>
  );
};

export default Heading;

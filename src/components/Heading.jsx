const Heading = ({ className, title }) => {
  return (
    <div className={`${className} max-w-200 mx-auto mb-12 lg:mb-20`}>
      <h2 className="h1">{title}</h2>
    </div>
  );
};

export default Heading;

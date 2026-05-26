import { brainwave, brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Heading from "./Heading";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-120">
          <Heading
            className={"h2 mb-4 md:mb-8"}
            title={"AI Chat App for seamless collaboration"}
          ></Heading>

          <ul className="max-w-90 mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} alt={"check"} width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-150 mt-4">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:md:32 lg:w-90 lg:mx-auto">
            {collabText}
          </p>

          <div className="relative -rotate-8 left-1/2 flex w-90 aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-25 aspect-square m-auto p-px bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full rotate-8">
                  <img
                    src={brainwaveSymbol}
                    alt={"brainwave"}
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 translate-x-5 h-1/2 -ml-6 origin-bottom`}
                  style={{ transform: `rotate(${index * 45}deg)` }}
                >
                  <div
                    className="absolute -top-6.5 flex w-13 h-13 bg-n-7 border border-n-1/15 rounded-xl"
                    style={{ transform: `rotate(${-index * 45 + 8}deg)` }}
                  >
                    <img
                      className="m-auto"
                      src={app.icon}
                      alt={app.title}
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;

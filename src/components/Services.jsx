import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";

const Services = () => {
  return (
    <Section id={"how-to-use"} crosses>
      <div className="container">
        <Heading
          text={"Brainwave unlocks the potential of AI-powered applications"}
          title={"Generative AI made for creators."}
        ></Heading>

        <div className="relative">
          <div
            className="relative z-1 flex items-center h-160 mb-5 p-8 border border-n-1/10 rounded-3xl
            overflow-hidden lg:p-20 xl:h-180"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:mx-auto">
              <img
                src={service1}
                alt="Smartest AI"
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>

            <div className="relative z-1 max-w-80 ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-12 text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} />
                    <p className="ml-4">{service}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating
              className={
                "absolute w-150 left-4 right-4 bottom-4 z-1 border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2"
              }
            />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-160 border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="robot"
                  className="w-full h-full object-cover"
                  width={360}
                  height={750}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-linear-to-b from-n-8/0 to-n-8 lg:p-15">
                <h4 className="h4 mb-4">Photo Editing</h4>
                <p className="body-2 mb-12 text-n-3">
                  Automatically enhance your photos using our AI app's photo
                  editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-180">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 text-n-3 mb-8">
                  The world's most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center
                  ${index === 2 ? "w-12 h-12 p-0.3 bg-conic-gradient md:w-18 md:h-18" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"}`}
                    >
                      <div
                        className={`${index === 2 ? "flex items-center justify-center w-17.5 h-17.5 bg-n-7 rounded-2xl" : ""}`}
                      >
                        <img src={item} width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={service3}
                  alt="robot"
                  width={520}
                  height={400}
                  className="w-full h-full object-cover"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;

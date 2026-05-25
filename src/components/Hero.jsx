import Section from "./Section";
import { curve } from "../assets";
import { robot } from "../assets";
import { heroBackground } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className={"pt-48"}
      crosses
      crossesOffset={"lg:translate-y-21"}
      customPadding
      id={"hero"}
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-250 mx-auto text-center mb-16 md:mb-80 lg:mb-24">
          <h1 className="h1 mb-6">
            Explore the possibilities <br /> of AI Chatting with
            <span className="inline-block relative">
              {" "}
              &nbsp;Brainwave
              <img
                src={curve}
                alt="curve"
                width={624}
                height={28}
                className="absolute top-full left-0 w-full xl:-mt-1"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href={"/pricing"} white>
            Get started
          </Button>
        </div>

        <div className="relative max-w-92 mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-2xl">
              <div className="h-6 bg-n-10 rounded-t-[0.9rem]"></div>

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="hero"
                  width={1024}
                  height={490}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                />

                <Generating
                  className={
                    "absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-124 md:-translate-x-1/2"
                  }
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden xl:flex absolute -left-22 bottom-30 px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl">
                    {heroIcons.map((icon, index) => (
                      <li key={index} className="p-5">
                        <img src={icon} alt={icon} width={24} height={24} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className={
                      "hidden xl:flex absolute -right-22 bottom-44 w-72"
                    }
                    title={"code generation"}
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient/>
          </div>

          <div className="absolute -top-[55%] left-1/2 w-[235%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[112%] ">
            <img
              src={heroBackground}
              alt="hero background"
              width={1440}
              height={1800}
              className="w-full"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className={"hidden relative z-10 lg:block mt-20"} />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;

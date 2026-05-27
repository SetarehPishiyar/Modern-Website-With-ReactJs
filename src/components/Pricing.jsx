import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";

const Pricing = () => {
  return (
    <Section crosses id={"pricing"} className={"overflow-hidden"}>
      <div className="container z-2 relative">
        <div className="hidden lg:flex justify-center mb-26">
          <img
            src={smallSphere}
            alt="sphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 w-240 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>

        <Heading
          title={"Pay once, use forever"}
          tag={"Get started with Brainwave"}
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a href="/pricing" className="text-xs font-code font-bold border-b hover:text-1 tracking-wider uppercase">
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;

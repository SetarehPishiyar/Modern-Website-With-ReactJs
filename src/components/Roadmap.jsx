import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import Button from "./Button";

const Roadmap = () => {
  return (
    <Section crosses id={"roadmap"} className={"overflow-hidden"}>
      <div className="container md:pb-10">
        <Heading title={"What we're working on"} tag={"Ready to get Started"} />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-30">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-28 p-0.5 rounded-4xl ${item.colorful ? "bg-conic-gradient" : "bg-n-6"} `}
              >
                <div className="relative p-8 bg-n-8 rounded-4xl overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="Grid"
                      width={550}
                      height={550}
                      className="w-full"
                    />
                  </div>

                  <div className="relative z-1">
                    <div className="flex flex-col items-center justify-between">
                      <div className="flex justify-between w-full mb-15">
                        <Tagline>{item.date}</Tagline>
                        <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                          <img
                            src={item.status === "done" ? check2 : loading1}
                            width={16}
                            height={16}
                            alt={status}
                          />
                          <div className="tagline">{status}</div>
                        </div>
                      </div>

                      <div className="mb-10 -my-10 -mx-15">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full"
                          width={630}
                          height={420}
                        />
                      </div>

                      <h4 className="h4 mb-4">{item.title}</h4>
                      <p className="body-2 text-n-4">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href={"/"}>Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;

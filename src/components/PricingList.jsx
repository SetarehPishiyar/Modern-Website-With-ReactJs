import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-4 max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <div
          key={item.id}
          className="w-76 max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-4xl lg:w-auto even:py-14 odd:py-8 odd:my-4"
        >
          <h4 className={`h4 mb-4 ${index === 0 ? "text-2" : `${index === 1 ? "text-1" : "text-3"}`}`}>
            {item.title}
          </h4>
          <p className="body-2 min-h-16 mb-3 text-n-1/15">{item.description}</p>
          <div className="flex items-center h-22 mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none">{item.price}</div>
              </>
            )}
          </div>

          <Button
            className={"w-full mb-6 inline-flex"}
            href={item.price ? "/pricing" : "#"}
            white={!!item.price}
          >
            {item.price ? "Get Started" : "Contact Us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;

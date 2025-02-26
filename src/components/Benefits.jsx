import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Button from "./Button";
import Arrow from "../assets/svg/Arrow";
import { Link , useNavigate} from "react-router-dom";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Gradient } from "./design/Hero";
import { curve, heroBackground, robot } from "../assets";
const Benefits = () => {
  // const navigate = useNavigate();

  // const pages = () => {
  //   navigate('');
  // };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Inspiring Minds, Igniting Innovation! Register now for these exciting events."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => {
            return (<>

              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                  <h4 className="h3 mb-5">

                    <span className="inline-block relative">
                               {item.title}{" "}
                                  <img
                                    src={curve}
                                    className="absolute top-full left-0 w-full xl:-mt-2"
                                    width={624}
                                    height={28}
                                    alt="Curve"
                                  />
                                </span>
                  </h4>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <p className="text-purple-200">{item.extra}</p>
                </div>

                 <GradientLight />

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover" />
                    )}
                  </div>

                </div>
                <div className="flex flex-col items-center justify-end mt-auto">
                  {/* <img
          src={item.iconUrl}
          width={48}
          height={48}
          alt={item.title}
        /> */}
                  <Link to={item.route}>
                    <Button>{item.buttontext}</Button>

                    <Arrow />
                  </Link>



                </div>
                <ClipPath />
         
              </div>
            </>
            );
          })}
          
        </div>
      </div>
    </Section>
  );
};

export default Benefits;

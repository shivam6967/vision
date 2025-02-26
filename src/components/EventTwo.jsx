import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmapone } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import Arrow from "../assets/svg/Arrow";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmapone">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="Expo Tech Unveiling Tomorrow’s Marvels Today!" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmapone.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient `}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                 <Tagline><h4 className="h4 text-n-1 mb-4">{item.title}</h4></Tagline>
                  
                  <p className="text-lg text-n-4">{item.text}</p>
                  <br />
                  <Tagline><h4 className="h4 text-n-1 mb-4">{item.textone}</h4></Tagline>
                  
                  {/* */}
                  <ul>
                    <li> <p className="text-lg text-n-4">{item.texttwo}</p></li>
                    <br />
                    <li> <p className="text-lg text-n-4">{item.textthree}</p></li>
                    <br />
                    <li> <p className="text-lg text-n-4">{item.textfour}</p></li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button className="bg-black rounded-xl text-white border border-purple-500 text-xl" href="https://forms.gle/Z55rkNKGrW2DutuZ9">Register Now</Button>
        <Arrow/>
      </div>
    </div>
  </Section>
);

export default Roadmap;

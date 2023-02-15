import { Transition } from "@headlessui/react";
import { stopLink } from "../../constants";

const CTA: React.FC = () => (
  <>
    <Transition
      show
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="animated min-w-screen my-6 mx-auto max-w-3xl pb-2 animate__fadeInUp">
        <div className=" w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none ">
          <div className="flex items-start justify-center rounded-t border-b border-solid border-slate-200 p-5">
            <img
              alt="stop-logo"
              src="./img/stop.png"
              className="max-w-full md:max-w-sm"
            />
          </div>
          <div className="flex-auto p-6">
            <b className="mt-4 mb-0 text-2xl leading-relaxed text-slate-700">
              TL;DR: It’s time to break up with police surveillance.
            </b>
            <p className="mt-0 text-lg leading-relaxed text-slate-500">
              <br />
              In January, we launched{" "}
              <b>
                <i>
                  “Banning Big Brother: New York’s Surveillance Sanctuary State
                  Blueprint,”
                </i>
              </b>{" "}
              our anti-surveillance legislative campaign for New York State. The
              dangerous, undemocratic technologies to outlaw include fake police
              social media accounts, OMNY surveillance, warrantless drone
              surveillance, mass geolocation tracking, faulty facial recognition
              software, using DNA pseudoscience to make police sketches, and
              more.
              <br />
              <br />
              Join us for a Valentine’s Day of Action and tell NYS legislators
              to <b>BREAK UP</b> with sketchy surveillance! Sign anti-Valentine
              “breakup letters” for your New York State representatives by
              following the button below!
            </p>
          </div>
          <div className="flex items-center justify-end rounded-b p-6">
            <a href={stopLink} target="_blank" rel="noreferrer">
              <button
                className="background-transparent text-md mr-1 mb-1 rounded bg-green-500 px-8 py-4 font-bold  uppercase  text-white transition-all hover:bg-green-700 "
                type="button"
              >
                Take Action
              </button>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </>
);

CTA.displayName = "CTA";

export default CTA;

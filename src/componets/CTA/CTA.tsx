import { Transition } from "@headlessui/react";

const CTA: React.FC = () => (
  <>
    <Transition
      show
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="min-w-screen my-6 mx-auto max-w-3xl pb-2">
        <div className=" w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none ">
          <div className="flex items-start justify-center rounded-t border-b border-solid border-slate-200 p-5">
            <img alt="stop-logo" src="./img/stop.png" />
          </div>
          <div className="flex-auto p-6">
            <p className="my-4 text-lg leading-relaxed text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              elit nisi, eleifend a feugiat a, porttitor in velit. Donec
              suscipit ex ultrices ligula dictum varius. Nam consectetur
              tincidunt elit, ut consectetur nisi volutpat eu. Curabitur sit
              amet tellus placerat, consectetur orci quis, ornare ipsum. In et
              odio ut lacus commodo porta at in tellus. Vivamus ultricies, metus
              in varius semper, lorem tortor efficitur nunc, id ullamcorper urna
              quam eget arcu. Nullam mollis quis dolor id auctor.
            </p>
          </div>
          <div className="flex items-center justify-end rounded-b p-6">
            <a href="http://stopspying.org/" target="_blank" rel="noreferrer">
              <button
                className="background-transparent mr-1 mb-1 rounded bg-green-500 px-6 py-2 text-sm font-bold  uppercase  text-white transition-all hover:bg-green-700 "
                type="button"
              >
                Learn More
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

import React from "react";
import { Card } from "../Deck/cardValues";

interface Props {
  showModal: boolean;
  value: Card;
  setmeniment: boolean;
  setShowModal: (input: boolean) => void;
}

export default function Modal(props: Props) {
  const [showModal, setShowModal] = React.useState(props.showModal);
  const hideHandler = () => {
    setShowModal(false);
    props.setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center rounded-t border-b border-solid border-slate-200 p-5">
                  {props.setmeniment ? (
                    <img className="w-20" src="./img/sunglasses.svg" />
                  ) : (
                    <>
                      <img className="w-20" src="./img/red-flag.svg" />
                      <img className="w-20" src="./img/grimmace.svg" />
                    </>
                  )}
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    {props.value.body}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => hideHandler()}
                  >
                    Close
                  </button>
                  {/* <button
                    className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => hideHandler()}
                  >
                    Learn more
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}

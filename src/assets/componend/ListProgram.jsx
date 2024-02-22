// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { useNavigate } from "react-router-dom";
// import FotoProgram from '../images/mahasiswa-hd.png';
import FotoProgram from '../images/gambarkursus.png';
import LogoGratis from '../images/logoGratis.png';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleDaftarClick = () => {
    navigate("/Courses");
  };

  return (
    <div className="flex flex-col justify-end bg-[#F1FEFF] items-center px-16 pt-4 pb-10 max-md:px-5">
      <div className="max-w-full w-[1140px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={FotoProgram}
              className="grow w-full aspect-[1.06] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-12 font-bold max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-3">
                <div className="grow my-auto text-4xl leading-[54px] text-neutral-800">
                  Daftar{" "}
                </div>
                <div className="overflow-hidden relative flex-col justify-center px-2 py-2.5 text-3xl leading-9 text-white whitespace-nowrap aspect-[3.43]">
                  <img
                    loading="lazy"
                    srcSet={LogoGratis}
                    className="object-cover absolute inset-0 size-full"
                  />
                  GRATIS!
                </div>
              </div>
              <div className="self-stretch mt-5 text-4xl leading-[54px] text-neutral-800 max-md:max-w-full">
                Tryout online UTBK-SNBT 2024
                <br />
                dengan Tes Skolastik terbaru
              </div>
              <button
                onClick={handleDaftarClick}
                className="flex flex-col items-center pt-4 pr-9 mt-9 max-w-full text-base font-semibold leading-6 text-white whitespace-nowrap bg-indigo-600 shadow-sm rounded-[120px] w-[229px] max-md:pr-5"
              >
                <div className="overflow-hidden relative flex-col pt-px pb-3.5 pl-8 aspect-[6.29] max-md:pl-5">
                  Daftar Tryout GRATIS
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

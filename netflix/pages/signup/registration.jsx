import React from "react";
import Image from "next/image";
import { useState } from "react";
import StepOne from "@/components/registration/StepOne";
import StepTwo from "@/components/registration/StepTwo";
import StepThree from "@/components/registration/StepThree";
function Registration() {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-[#ffffff] w-screen h-auto text-black">
      {/* navbar start */}
      <div className="w-full sm:h-[100px] h-[46px] sm:py-10 sm:px-24 px-3 flex border-b">
        {/* logo */}
        <div className="w-full h-full flex justify-between items-center">
          <div className="sm:w-[200px] sm:h-[40px] w-[75px] h-[20px] flex items-center ">
            <Image
              src="/removelogo.png"
              alt=""
              width={100}
              height={40}
              className="w-full h-full"
            />
          </div>
          <button className="text-black hover:underline sm:h-[32px] text-[20px] text-[] font-semibold rounded-sm sm:ms-4 ms-2  transition-all ">
            Oturum Aç
          </button>
        </div>
      </div>
      {/* registration step 1 */}
      {step === 0 && <StepOne setStep={setStep} />}
      {step === 1 && <StepTwo setStep={setStep} />}
      {step === 2 && <StepThree setStep={setStep} />}
      {/* footer */}
      <div className="w-full h-auto  relative z-40 bg-[#F3F3F3] ">
        <div className=" w-full h-full flex  items-center py-5 sm:py-2 px-5 sm:px-32   ">
          <div className="relative z-40 w-[1000px] h-[265px] text-[#686B6E] flex flex-col items-start justify-center gap-y-5  ">
            <span className="text-[16px] sm:text-[18px] ">
              Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın
            </span>
            <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-4 gap-5 text-[12px] sm:text-[16px]">
              <div className="w-full h-auto flex flex-col gap-y-5">
                <span>
                  <a className="hover:underline" href="/#">
                    SSS
                  </a>
                </span>
                <span>
                  <a className="hover:underline" href="/#">
                    Çerez Tercihleri
                  </a>
                </span>
              </div>
              <div className="w-full h-auto flex flex-col gap-y-5">
                <span>
                  <a className="hover:underline" href="/#">
                    Yardım Merkezi
                  </a>
                </span>
                <span>
                  <a className="hover:underline" href="/#">
                    Kurumsal Bilgiler
                  </a>
                </span>
              </div>
              <div className="w-full h-auto flex flex-col gap-y-5">
                <span>
                  <a className="hover:underline" href="/#">
                    Kullanım Koşulları
                  </a>
                </span>
                <span></span>
              </div>
              <div className="w-full h-auto flex flex-col gap-y-5">
                <span>
                  <a className="hover:underline" href="/#">
                    Gizlilik
                  </a>
                </span>
                <span></span>
              </div>
            </div>

            <select
              className="bg-[#ffffff]  py-[4px] sm:px-[26px] border-[2px] border-[#333333] rounded-sm h-12 sm:h-14 sm:w-auto w-[120px]  "
              name=""
              id=""
            >
              <option className="bg-transparent" value="türkçe">
                Türkçe
              </option>
              <option className="bg-transparent" value="türkçe">
                İngilizce
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

// Asagıdakı componentlerı klasorle... 


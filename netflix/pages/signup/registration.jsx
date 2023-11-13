import React from "react";
import Image from "next/image";
import { useState } from "react";
function registration() {
  const [step, setStep] = useState(0);
        const handleStep = () => {

  } 
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
      {step === 0 && <StepOne />}
      {step === 1 && <StepTwo />}
      {step === 2 && <StepThree />}
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

export default registration;

function StepOne() {
  return (
    <div className="sm:h-[656px] w-full">
      <div className="w-full h-full flex items-center justify-center sm:pb-24 pb-20">
        <div className="w-[976px] h-auto pt-5 sm:px-8 pb-16 flex justify-center">
          {/* registration text area */}
          <div className="sm:w-[400px] h-auto ">
            <div className="w-full h-full flex  flex-col items-center">
              <div className="sm:w-[300px] sm:h-[100px]  sm:mt-24 mb-5 h-full w  flex justify-center items-center ">
                <Image
                  src="/reglogo.png"
                  alt=""
                  width={100}
                  height={40}
                  className="w-[260px] h-[90px]"
                />
              </div>
              <span>ADIM 1/3</span>
              <span className="font-bold text-[32px] text-center py-2">
                Hesabınızı oluşturalım
              </span>
              <span className="text-center text-[18px] sm:text-[20px] w-[300px] py-1">
                Netflix sizin için kişiselleştirilir. İstediğiniz zaman,
                istediğiniz cihazda izlemek için bir parola oluşturun.
              </span>
              {/* next button */}
              <button className="sm:mt-8 mt-4  bg-[#E50914] text-white text-[24px] rounded-md sm:h-20 h-40  w-full  hover:bg-[#943126] transition-all ">
                İleri
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StepTwo() {
  return (
    <div className="sm:h-[656px] w-full">
      <div className="w-full h-full flex items-center justify-center sm:pb-24 pb-20">
        <div className="sm:w-[976px] h-auto pt-5 mt-5 px-8 pb-16 flex justify-center">
          <form action="" className="sm:w-[500px] h-auto flex flex-col">
            <span>ADIM 1/3</span>
            <h1 className="font-bold text-[31px] leading-10">
              Üyeliğinizi başlatmak için bir parola oluşturun
            </h1>
            <div className="w-full flex flex-col  gap-y-4 mt-2 ">
              <div className="w-full h-auto flex flex-col sm:mt-2 leading-5">
                <span className="text-[18px]">
                  Sadece birkaç adım daha kaldı, sonra bitiyor!
                </span>
                <span className="text-[18px]">
                  Biz de formaliteyi hiç sevmiyoruz.
                </span>
              </div>
              <Input
                addProps="h-14 text-[20px] border-2 w-full border-black rounded-md"
                placeholder="E-posta"
              />
              <Input
                addProps="h-14 text-[20px] border-2 w-full border-black rounded-md"
                placeholder="Bir parola ekleyin"
              />
              <div className="flex gap-x-3">
                <input type="checkbox" className="w-5" name="teklif" />
                <label name="teklif" className="text-[17px] leading-4">
                  Netflix özel teklifleri e-posta ile gönderilmesin.
                </label>
              </div>
              <button className="sm:mt-1 mt-4    bg-[#E50914] text-white text-[24px] rounded-md  h-16  w-full  hover:bg-[#943126] transition-all ">
                İleri
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export function StepThree() {
  return (
    <div className="sm:h-[800px] w-full">
      <div className="w-full h-full flex items-center justify-center sm:pb-24 pb-20">
        <div className="sm:w-[976px] h-auto pt-5 mt-5 px-8 pb-16 flex justify-center items-center">
          <form
            action=""
            className="sm:w-[360px]   flex flex-col gap-y-3 items-center"
          >
            <div>
              <Image alt="" width={50} height={50} src="/ok.png" />
            </div>
            <span>ADIM 1/3</span>
            <h1 className="font-bold text-[32px]">Planınızı Seçin</h1>
            <div className=" flex flex-col  gap-y-4 mt-2  ">
              <div className=" h-auto flex flex-col sm:mt-2 px-5 gap-y-5">
                <div className="w-full flex gap-x-3 items-center  ">
                  <div>
                    <Image alt="" width={50} height={50} src="/ok.png" />
                  </div>
                  <span className="text-[18px]  ">
                    Taahhüt yok, istediğiniz zaman iptal edin.
                  </span>
                </div>

                <div className="w-full flex gap-x-3 items-center ">
                  <div>
                    <Image alt="" width={50} height={50} src="/ok.png" />
                  </div>
                  <span className="text-[18px]">
                    Taahhüt yok, istediğiniz zaman iptal edin.
                  </span>
                </div>
                <div className="w-full flex gap-x-3 items-center ">
                  <div>
                    <Image alt="" width={50} height={50} src="/ok.png" />
                  </div>
                  <span className="text-[18px]">
                    Taahhüt yok, istediğiniz zaman iptal edin.
                  </span>
                </div>
              </div>
              <button className=" mt-4  bg-[#E50914] text-white text-[24px] rounded-md  h-20  w-full  hover:bg-[#943126] transition-all ">
                İleri
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Input(props) {
  const { addProps, placeholder, ...inputProps } = props;

  return (
    <div>
      <label className="relative block cursor-text w-full">
        <input
          type="text"
          className={` text-xs peer  outline-none px-4 pt-2 bg-transparent ${addProps}`}
          required
          {...inputProps}
        ></input>
        <span className="absolute top-0 left-0 px-4  flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
          {placeholder}
        </span>
      </label>
    </div>
  );
}

import React from 'react'
import Image from 'next/image';
function StepThree({setStep}) {
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
                <button onClick={()=>setStep(0)} className=" mt-4  bg-[#E50914] text-white text-[24px] rounded-md  h-20  w-full  hover:bg-[#943126] transition-all ">
                  İleri
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default StepThree

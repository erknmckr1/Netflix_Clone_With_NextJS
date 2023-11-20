import React from 'react'
import Image from 'next/image';
export function StepOne({setStep}) {
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
                <button onClick={()=>setStep(1)} className="sm:mt-8 mt-4  bg-[#E50914] text-white text-[24px] rounded-md sm:h-20 h-40  w-full  hover:bg-[#943126] transition-all ">
                  İleri
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default StepOne

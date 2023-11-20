import React, { useEffect } from "react";
import Input from "../uı/Input";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { UserContext } from "@/context/userInfoContext";
import { useContext } from "react";
import axios from "axios";
import { useSession } from 'next-auth/react';

function StepTwo({ setStep }) {
  const { userInfo, setUserInfo,users } = useContext(UserContext);
  const [filteredUser,setFilteredUser] = useState()
  const { data: session } = useSession();
  
  
  useEffect(()=>{
    const filter =  users.find((item) => item.email === userInfo.email);
    setFilteredUser(filter)
  },[userInfo.email])

 
  const handleInputChange = (e, key) => {
    // Asagıdakı fonksiyon, bir input değeri değiştiğinde çağrılır.
    // e, olay nesnesini temsil eder ve input değerine erişim sağlar.
    // key parametresi, hangi state'in güncelleneceğini belirtir.
    setUserInfo((prevState) => ({
      // setUserInfo, önceki state'i temsil eden prevState parametresini alır.
      // Spread operatörü kullanılarak önceki state'in tüm özellikleri korunur.
      // [key]: e.target.value ifadesi, belirli bir özelliği günceller.
      ...prevState,
      [key]: e.target.value,
    }));
  };


  // registration...
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      if (userInfo.password !== "" && userInfo.email !== "") {
        if (!filteredUser) {
          
          const createRegister = await axios.post("/api/registration", {
            ...userInfo,
          });
          
          if (createRegister && createRegister.status === 201) {
            // Parola başarıyla oluşturulduysa oturumu aç
            await signIn("credentials", {
              redirect: false,
              email: userInfo.email,
              password: userInfo.password,
            });
            const sessionCheck = await axios.get("/api/session-check");
            if (sessionCheck.data.authenticated) {
              // Oturum açık
              setStep(2);
            } else {
              console.log("Oturum açılamadı.");
            }
          }
        } else {
          console.log("Başka bir mail kullanın.");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(userInfo)
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
              <div className="w-full">
              <Input
                addProps="h-14 text-[20px] border-2 w-full border-black rounded-md"
                placeholder="E-posta"
                value={userInfo.email}
                onChange={(e) => handleInputChange(e, "email")}
              />
              {filteredUser &&  <span className="text-red-500 text-[12px]">Bu mail kullanılıyor. Baska bir mail ile tekrar deneyin.</span>}
              </div>
              
              <Input
                addProps="h-14 text-[20px] border-2 w-full border-black rounded-md"
                placeholder="Bir parola ekleyin"
                value={userInfo.password}
                onChange={(e) => handleInputChange(e, "password")}
              />
              <div className="flex gap-x-3">
                <input type="checkbox" className="w-5" name="teklif" />
                <label name="teklif" className="text-[17px] leading-4">
                  Netflix özel teklifleri e-posta ile gönderilmesin.
                </label>
              </div>
              <button
                disabled={
                  userInfo.email === "" && userInfo.password === ""
                    ? true
                    : false
                }
                onClick={(e) => handleSignIn(e)}
                className="sm:mt-1 mt-4    bg-[#E50914] text-white text-[24px] rounded-md  h-16  w-full  hover:bg-[#943126] transition-all "
              >
                İleri
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;

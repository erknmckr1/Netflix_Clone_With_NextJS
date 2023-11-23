import React from "react";
import Image from "next/image";
import { useState } from "react";
import Input from "@/components/uı/Input";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useSession } from "next-auth/react";
function index() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errors,setErrors] = useState({ email: "", password: "" })

  const { data: session } = useSession();

  const handleChangeInput = (e, key) => {
    setUserInfo((prevState) => ({ ...prevState, [key]: e.target.value }));
  };

  const handleSıgnIn = async (e) => {
    // formun varsayılan durumunu degıstır.. yenılenmesın 
    e.preventDefault();

    try {
      // kullanıcını gırdıgı bılgıler ıle credentials yontemını kullanarak 
      await signIn("credentials", {
        redirect: false,
        email: userInfo.email,
        password: userInfo.password,
      });

      const sessionCheck = await axios.get("/api/auth/session-check");
      if (sessionCheck.data.authenticated) {
        console.log("Oturum başarı ile açıldı");
        setErrors({
          email: "",
          password: "",
        });
      } else {
        console.log("Oturum açılamadı tekrar deneyın");
        setErrors({
          email: "Bir şeyler yanlış gitti. Lütfen tekrar deneyin.",
          password: "Bir şeyler yanlış gitti. Lütfen tekrar deneyin.",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-screen h-auto relative  ">
      {/* navbar start */}
      <div className="w-full sm:h-[90px] h-[45px] relative z-30">
        <div className="w-full h-full flex items-center sm:px-20 px-3">
          <div className="sm:w-[180px] w-[75px] sm:h-14">
            <Image
              className="w-full h-full "
              alt=""
              src="/removelogo.png"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      {/* navbar start */}
      {/* section */}
      <div className="w-full h-auto relative z-30 ">
        <div className="w-full sm:h-[800px] flex justify-center items-center ">
          <div className="relative  sm:w-[470px] h-[550px] sm:h-[660px]  sm:mb-[150px] rounded-md">
            <div className="w-full h-full sm:py-20 sm:px-16 pt-5 pb-7 px-5 relative z-40 ">
              <span className="text-[35px] font-semibold ">Oturum Aç</span>
              {/* sign in form */}
              <form className="w-full h-auto mt-6" action="">
                <div className="w-full h-full flex flex-col gap-y-5">
                  {/* email */}
                  <div className="w-full h-full flex flex-col">
                    <Input
                      addProps="w-full h-14 rounded-md bg-[#333333] text-[20px]"
                      placeholder="E-posta veya telefon numarası "
                      onChange={(e) => {
                        handleChangeInput(e, "email");
                      }}
                    />
                    {!session && (
                      <span className="text-[12px]  text-red-500">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  {/* password */}
                  <div className="w-full h-full flex flex-col">
                    <Input
                      addProps="w-full h-14 rounded-md bg-[#333333] text-[20px]"
                      placeholder="Parola"
                      onChange={(e) => {
                        handleChangeInput(e, "password");
                      }}
                    />
                    {!session && (
                      <span className="text-[12px]  text-red-500">
                       {errors.password}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={(e) => handleSıgnIn(e)}
                  className="mt-8 font-bold bg-[#E50914] text-white text-[18px]  sm:h-13 h-12  w-full rounded-sm hover:bg-[#943126] transition-all "
                >
                  Oturum Aç
                </button>
                <div className="w-full h-auto mt-5">
                  <div className="w-full h-full text-[12px] flex justify-between text-[#849C9C]">
                    <label name="remember" className="flex gap-x-2">
                      <input
                        className="text-[#333333]"
                        name="remember"
                        type="checkbox"
                      />
                      <span className="cursor-pointer">Beni Hatırla</span>
                    </label>
                    <span>
                      <a className="underline" href="/#">
                        Yardım ister misiniz?
                      </a>
                    </span>
                  </div>
                </div>
              </form>
              {/* texts under the form */}
              <div className="w-full h-auto sm:mt-7 sm:text-[20px] text-[14px] mt-5 ">
                <span className="text-[#686B6E]">
                  Netflix'e katılmak ister misiniz?
                </span>
                <span>
                  <a className="hover:underline text-[16px]" href="/#">
                    {" "}
                    Şimdi kaydolun.
                  </a>
                </span>
              </div>
              <div className="w-full h-auto flex sm:flex-col mt-5">
                <span className="text-[13px] text-[#686B6E]">
                  Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA
                  tarafından korunuyor
                </span>
                <span className=" text-[12px] text-[#0037DC] hover:underline">
                  <a href="/#">Daha fazlasını öğrenin.</a>
                </span>
              </div>
            </div>
            <div className="w-full h-full bg-black opacity-70 absolute z-20 top-0 left-0"></div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="w-full h-auto  relative z-40 border-t-2 border-[#333333] ">
        <div className=" w-full h-full flex justify-center items-center py-5 px-5 sm:px-0   ">
          <div className="relative z-40 w-[1000px] h-[265px] text-[#686B6E] flex flex-col items-start justify-center gap-y-5  ">
            <span className="text-[16px] sm:text-[18px]">
              Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın
            </span>
            <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-4 gap-5 text-[12px]">
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
              className="bg-black py-[4px] sm:px-[26px] border-[2px] border-[#333333] rounded-sm h-12 sm:h-14 sm:w-auto w-[120px]  "
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
          {/* footer bg  */}
          <div className="w-full h-full bg-black opacity-70 absolute z-10 top-0 left-0"></div>
        </div>
      </div>

      {/* bg-image */}
      <div className="h-full w-full top-0 left-0 absolute z-10">
        <Image src="/aa.jpg" alt="" layout="fill" objectFit="cover" />
      </div>
      {/*  bg black */}
      <div className="w-full h-full bg-black sm:opacity-60 absolute z-20 top-0 left-0"></div>
    </div>
  );
}

export default index;

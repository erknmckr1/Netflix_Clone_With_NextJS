import React from "react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
function Home() {
  const [eposta, setEposta] = useState("");
  const [dropwDown, setDropdown] = useState([
    {
      id: 1,
      title: "Netflix nedir?",
      description:
        "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir. Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!",
    },
    {
      id: 2,
      title: "Netflix nedir?",
      description:
        "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir. Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!",
    },
    {
      id: 3,
      title: "Netflix nedir?",
      description:
        "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir. Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!",
    },
    {
      id: 4,
      title: "Netflix nedir?",
      description:
        "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir. Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!",
    },
    {
      id: 5,
      title: "Netflix nedir?",
      description:
        "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir. Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!",
    },
    {
      id: 6,
      title: "Netflix nedir?",
      description:
        "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir. Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!",
    },
  ]);

  const [isRotated, setIsRotated] = useState(false);
  const handleRotate = (id) => {
    setIsRotated((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        {/* part 1  */}
        <div className="w-full sm:h-[700px] h-[500px]  flex relative border-b-8 border-[#232323]">
          <div className="w-full h-full absolute z-40 ">
            <div className="w-full h-full container mx-auto">
              {/* navbar start */}
              <div className="w-full sm:h-[92px] h-[80px] sm:py-6 sm:px-12 px-3 flex">
                {/* logo */}
                <div className="w-1/3 h-full">
                  <div className="sm:w-[200px] sm:h-[40px] w-[100px] h-full flex items-center ">
                    <Image
                      src="/removelogo.png"
                      alt=""
                      width={100}
                      height={40}
                      className="w-[250px] h-[50px]"
                    />
                  </div>
                </div>
                {/* language & singin btn  */}
                <div className="w-2/3 h-full flex items-center justify-between  ">
                  <div></div>
                  <div className="flex">
                    <select
                      className="bg-black py-[4px] sm:px-[26px] border-[2px] border-white rounded-sm  "
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
                    <button className="bg-[#E50914] text-white w-[100px] h-[32px] rounded-sm sm:ms-4 ms-2 hover:bg-[#943126] transition-all ">
                      <a href="/login">Oturum Aç</a>
                    </button>
                  </div>
                </div>
              </div>
              {/* navbar end */}
              <div className="w-full h-auto sm:h-[calc(700px_-_92px)] sm:py-[72px]">
                <div className="w-full h-full flex flex-col justify-center sm:justify-center sm:items-center">
                  <div className="sm:w-1000px w-full sm:h-[250px] flex text-center justify-center flex-col items-center px-2 sm:px-0">
                    <p className="sm:text-[60px] text-[32px] font-semibold">Alası Var</p>
                    <p className="sm:text-[24px] text-[18px] mt-[16px]">
                      En iyi dizi, film, belgesel ve çok daha fazlası burada.
                    </p>
                    <p className="sm:text-[20px] text-[18px] mt-[16px]">
                      İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar
                      ulaşmak için tek yapmanız gereken e-posta adresinizi
                      girmek.
                    </p>
                    <form className="w-full h-full bg-transparent">
                      <div className="w-full h-auto flex flex-col sm:flex-row gap-y-3 sm:gap-y-3 items-center justify-center gap-x-2 mt-6">
                        <Input
                          placeholder="E-posta adresi"
                          addProps="h-14 sm:w-[410px] w-[350px] border-2 border-white px-3"
                          value={eposta}
                          onChange={(e) => setEposta(e.target.value)}
                        />
                        <button className=" bg-[#E50914] text-white text-[18px] sm:text-[25px] sm:h-14 h-12 w-[135px] sm:w-[175px] font-semibold rounded-sm hover:bg-[#943126] transition-all ">
                          <a href="/signup/registration">{`${"Başlayın >"}`}</a>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bg image */}
          <div className="h-full w-full top-0 left-0 absolute z-20">
            <Image src="/aa.jpg" alt="" layout="fill" objectFit="cover" />
          </div>
          {/*  bg black */}
          <div className="w-full h-full bg-black opacity-60 absolute z-30 top-0 left-0"></div>
        </div>
       {/* part 2 */}
       <div className="w-full  sm:h-[700px] h-[500px]  border-b-8 border-[#232323]">
          <div className="w-full h-full container mx-auto ">
            <div className="w-full h-full flex flex-col sm:flex-row items-center sm:p-20 py-10 sm:py-0">
              {/* text side */}
              <div className="h-full w-full sm:w-1/2 px-10">
                <div className="w-full h-full flex flex-col  items-center justify-center text-center">
                  <span className="w-full sm:text-[48px] text-[32px] font-semibold">
                    İstediğiniz her yerde izleyin
                  </span>
                  <span className="sm:text-[24px]">
                    Telefonda, tablette, bilgisayarda, televizyonda sınırsız
                    film ve dizi izleyin..
                  </span>
                </div>
              </div>
              {/* image side */}
              <div className="sm:w-1/2 h-full">
                <div className="w-full h-full flex justify-end relative ">
                  <Image
                    width={700}
                    height={500}
                    alt=""
                    src="/device-pile.png"
                  />
                  <div className="absolute w-[480px] h-[270px] right-28 top-12">
                    {/* <video muted loop playsInline autoPlay>
                      <source src="/video-devices.m4v" type="video/mp4" />
                    </video> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* part 3  */}
        <div className="w-full  sm:h-[700px] h-[560px]  border-b-8 border-[#232323] ">
          <div className="w-full h-full container mx-auto sm:py-20 py-10 ">
            <div className="w-full h-full flex  flex-col sm:flex-row">
               {/* text side */}
               <div className="sm:w-1/2 w-full h-full">
                <div className="w-full h-full flex flex-col items-center justify-center text-center">
                  <span className="sm:text-[48px] text-[32px] font-semibold">
                    Çevrimdışı izlemek için içerikleri indirin
                  </span>
                  <span className="sm:text-[24px]">
                    En sevdiğiniz içerikleri kolayca kaydedin ve her zaman
                    izleyecek bir şeyleriniz olsun.
                  </span>
                </div>
              </div>
              {/* imgside */}
              <div className="sm:w-1/2 w-full h-full relative">
                <div className="w-full h-full flex justify-end ">
                  <Image width={700} height={500} alt="" src="/part2Img.jpg" />
                </div>
                {/* download  */}
                <div className="absolute bottom-10 sm:right-[164px] right-[105px] sm:z-40 bg-black sm:w-[370px] sm:h-[104px] sm:px-[8px] sm:py-[12px] border-2 rounded-md border-[#232323]">
                  <div className="w-full h-full flex justify-center items-center  px-3">
                    {/* img */}
                    <div className="w-auto h-full">
                      <Image width={60} height={70} alt="" src="/boxshot.png" />
                    </div>
                    {/* text */}
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <span className="text-[16px]">Stranger Things</span>
                      <span className="text-[14px] text-blue-500">
                        İndiriliyor...
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] underline text-blue-500">
                        indir
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        {/* part 4 */}
        <div className="w-full sm:h-[700px] h-[560px]  border-b-8 border-[#232323]">
          <div className="w-full h-full container mx-auto ">
            <div className="w-full h-full flex flex-col sm:flex-row sm:p-20 p-10">
              {/* text side */}
              <div className="h-full sm:w-1/2 w-full">
                <div className="w-full h-full flex flex-col items-center justify-center text-center">
                  <span className="sm:text-[48px] text-[32px] font-semibold">
                    İstediğiniz her yerde izleyin
                  </span>
                  <span className="sm:text-[24px]">
                    Telefonda, tablette, bilgisayarda, televizyonda sınırsız
                    film ve dizi izleyin..
                  </span>
                </div>
              </div>
              {/* image side */}
              <div className="sm:w-1/2 w-full h-full">
                <div className="w-full h-full flex justify-end relative ">
                  <Image
                    width={700}
                    height={500}
                    alt=""
                    src="/device-pile.png"
                  />
                  <div className="absolute sm:w-[480px] w-[210px] sm:h-[270px] sm:right-28 sm:top-12 top-6 right-20">
                    <video muted loop playsInline autoPlay>
                      <source src="/video-devices.m4v" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* part 5  */}
        <div className="w-full  sm:h-[700px] h-[560px]  border-b-8 border-[#232323] ">
          <div className="w-full h-full container mx-auto sm:py-20 py-10 ">
            <div className="w-full h-full flex flex-col sm:flex-row">
              {/* img side */}
              <div className="sm:w-1/2 w-full h-full relative">
                <div className="w-full h-full flex justify-end ">
                  <Image width={700} height={500} alt="" src="/cocuk.png" />
                </div>
              </div>
              {/* text side */}
              <div className="sm:w-1/2 w-full h-full">
                <div className="w-full h-full flex flex-col items-center justify-center text-center sm:text-start">
                  <span className="sm:text-[48px] text-[32px] font-semibold">
                    Çocuklarınız için profiller oluşturun
                  </span>
                  <span className="sm:text-[24px]">
                    Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde
                    çocuklarınız, sadece onlara özel bir alanda en sevdikleri
                    karakterlerle maceralara atılabilir.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* sıkca sorulanlar... */}
         <div className="w-full sm:min-h-[1000px] border-b-8 border-[#232323]">
          <div className="w-full h-full container mx-auto">
            <div className="w-full h-full sm:py-20 py-10">
              {/* title */}
              <h1 className="text-[30px] sm:text-[50px] font-bold text-center">
                Sıkça Sorulan Sorular
              </h1>
              {/* dropdowns */}
              <div className="w-full h-full flex flex-col gap-y-2 px-5 sm:px-0  ">
                {dropwDown.map((item, index) => (
                  <div
                    className={` w-full bg-[#2D2D2D] ${
                      isRotated[item.id] ? "" : ""
                    }`}
                    key={index}
                  >
                    <div
                      onClick={() => handleRotate(item.id)}
                      className="cursor-pointer w-full h-full flex justify-between items-center sm:p-6 p-3 hover:bg-[#3E3E3E] border-b-2 border-black "
                    >
                      <span className="sm:text-[24px]">{item.title}</span>
                      <span className="sm:text-[30px]">
                        <button
                          className={`text-[30px] transform ${
                            isRotated[item.id] ? "rotate-45" : ""
                          }`}
                        >
                          <AiOutlinePlus />
                        </button>
                      </span>
                    </div>
                    <div
                      className={`w-full d-block p-6 h-auto bg-[#2D2D2D]  ${
                        isRotated[item.id]
                          ? "opacity-100 transition-all duration-500 ease-in-out"
                          : "opacity-0 hidden transition-all duration-500 ease-in-out"
                      }`}
                    >
                      <span className="sm:text-[24px] h-auto">
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* e-posta input */}
              <div className="w-full h-auto mt-[45px] flex items-center justify-center  ">
                <div className="sm:w-[1000px] w-full h-auto flex flex-col items-center justify-center gap-y-5 sm:px-20 px-5 sm:py-5">
                  <span className="sm:text-[21px] text-[18px] text-center">
                    İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar
                    ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.
                  </span>
                  <div className="w-full flex flex-col sm:flex-row gap-y-5 items-center justify-center gap-x-5 ">
                    <Input
                      addProps="sm:h-14 h-10 sm:w-[400px] w-[300px]"
                      placeholder="E-posta adresi"
                    />
                    <button className="bg-[#E50914] text-white sm:text-[25px] sm:h-14 h-11 w-[120px] sm:w-[175px]  font-semibold rounded-sm hover:bg-[#943126] transition-all ">
                      {`${"Başlayın >"}`}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="w-full h-[auto] sm:my-20 py-5 px-5  ">
          <div className="w-full h-full container mx-auto  ">
            <div className="w-full h-full flex flex-col gap-y-5 text-[#b3b3b3] text-[18px] ">
              <span className="text-[16px] sm:text-[20px] text-left">
                Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın
              </span>
              <div className="flex justify-between sm:items-center gap-x-2 underline text-[14px]">
                <div className="flex flex-col w-1/4 gap-y-3 text-left">
                  <span>
                    <a href="#">SSS</a>
                  </span>
                  <span>
                    <a href="#">Yatırımcı İlişkileri</a>
                  </span>
                  <span>
                    <a href="#">Kullanım Koşulları</a>
                  </span>
                  <span>
                    <a href="#">Bize Ulaşın</a>
                  </span>
                </div>
                <div className="flex flex-col w-1/4 gap-y-3 text-left">
                  <span>
                    <a href="#">Yardım Merkezi</a>
                  </span>
                  <span>
                    <a href="#">İş İmkanları</a>
                  </span>
                  <span>
                    <a href="#">Gizlilik</a>
                  </span>
                  <span>
                    <a href="#">Hız Testi</a>
                  </span>
                </div>
                <div className="flex flex-col w-1/4 gap-y-3 text-left">
                  <span>
                    <a href="#">Hesap</a>
                  </span>
                  <span>
                    <a href="#">Hediye Kartı Kullan</a>
                  </span>
                  <span>
                    <a href="#">Çerez Tercihleri</a>
                  </span>
                  <span>
                    <a href="#">Yasal Hükümler</a>
                  </span>
                </div>
                <div className="flex flex-col w-1/4 gap-y-3 text-left">
                  <span>
                    <a href="#">Medya Merkezi</a>
                  </span>
                  <span>
                    <a href="#">İzleme Yolları</a>
                  </span>
                  <span>
                    <a href="#">Kurumsal Bilgiler</a>
                  </span>
                  <span>
                    <a href="#">Sadece Netflix'te</a>
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                    <select
                      className="bg-transparent py-[4px] px-[26px] border-[2px] border-white rounded-sm w-[130px]  "
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
                    <span className="text-left mt-2">Netflix Türkiye</span>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// input
function Input(props) {
  const { addProps, placeholder, ...inputProps } = props;

  return (
    <div>
      <label className="relative block cursor-text w-full">
        <input
          type="text"
          className={`placeholder-[6px] text-xs peer border outline-none px-4 pt-2 bg-transparent ${addProps}`}
          required
          {...inputProps}
        ></input>
        <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
          {placeholder}
        </span>
      </label>
    </div>
  );
}

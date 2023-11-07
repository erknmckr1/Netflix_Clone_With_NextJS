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
  const handleRotate = () => {
    setIsRotated((prev) => !prev);
  };
  return (
    <div className="w-screen h-auto">
      <div className="w-full h-full">
        {/* part 1 */}
        <div className="w-full h-[700px] relative border-b-8 border-[#232323]">
          <div className="w-full h-full absolute z-40 ">
            <div className="w-full h-full container mx-auto">
              {/* navbar start */}
              <div className="w-full h-[92px] py-6 px-12 flex">
                {/* logo */}
                <div className="w-1/3 h-full">
                  <div className="w-[150px] h-[40px]">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={150}
                      height={40}
                      className="w-[150px] h-[40px]"
                    />
                  </div>
                </div>
                <div className="w-2/3 h-full flex items-center justify-between  ">
                  <div></div>
                  <div className="">
                    <select
                      className="bg-transparent py-[4px] px-[26px] border-[2px] border-white rounded-sm  "
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
                    <button className="bg-[#E50914] text-white w-[100px] h-[32px] rounded-sm ms-4 hover:bg-[#943126] transition-all ">
                      Oturum Aç
                    </button>
                  </div>
                </div>
              </div>
              {/* navbar end */}
              <div className="w-full h-[calc(700px_-_92px)] py-[72px]">
                <div className="w-full h-full flex flex-col items-center justify-center ">
                  <div className="w-1000px h-[250px] flex justify-center flex-col items-center">
                    <p className="text-[60px] font-semibold">Alası Var</p>
                    <p className="text-[24px] mt-[16px]">
                      En iyi dizi, film, belgesel ve çok daha fazlası burada.
                    </p>
                    <p className="text-[20px] mt-[16px]">
                      İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar
                      ulaşmak için tek yapmanız gereken e-posta adresinizi
                      girmek.
                    </p>
                    <form className="w-full h-full bg-transparent">
                      <div className="w-full h-auto flex items-center justify-center gap-x-2 mt-6">
                        <Input
                          placeholder="E-posta adresi"
                          addProps="h-14 w-[410px] border-2 border-white px-3"
                          value={eposta}
                          onChange={(e) => setEposta(e.target.value)}
                        />
                        <button className="bg-[#E50914] text-white text-[25px] h-14 w-[175px] font-semibold rounded-sm hover:bg-[#943126] transition-all ">
                          Başlayın
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
        {/* part */}
        <div className="w-full  h-[700px]  border-b-8 border-[#232323]">
          <div className="w-full h-full container mx-auto ">
            <div className="w-full h-full flex p-20">
              {/* text side */}
              <div className="h-full w-1/2">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <span className="text-[48px] font-semibold">
                    İstediğiniz her yerde izleyin
                  </span>
                  <span className="text-[24px]">
                    Telefonda, tablette, bilgisayarda, televizyonda sınırsız
                    film ve dizi izleyin..
                  </span>
                </div>
              </div>
              {/* image side */}
              <div className="w-1/2 h-full">
                <div className="w-full h-full flex justify-end relative ">
                  <Image
                    width={700}
                    height={500}
                    alt=""
                    src="/device-pile.png"
                  />
                  <div className="absolute w-[480px] h-[270px] right-28 top-12">
                    <video muted loop playsInline autoPlay>
                      <source src="/video-devices.m4v" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* part 2  */}
        <div className="w-full  h-[700px]  border-b-8 border-[#232323] ">
          <div className="w-full h-full container mx-auto py-20 ">
            <div className="w-full h-full flex">
              <div className="w-1/2 h-full relative">
                <div className="w-full h-full flex justify-end ">
                  <Image width={700} height={500} alt="" src="/part2Img.jpg" />
                </div>
                {/* download  */}
                <div className="absolute bottom-10 right-[164px] z-40 bg-black w-[370px] h-[104px] px-[8px] py-[12px] border-2 rounded-md border-[#232323]">
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
              {/* text side */}
              <div className="w-1/2 h-full">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <span className="text-[48px] font-semibold">
                    Çevrimdışı izlemek için içerikleri indirin
                  </span>
                  <span className="text-[24px]">
                    En sevdiğiniz içerikleri kolayca kaydedin ve her zaman
                    izleyecek bir şeyleriniz olsun.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* part 3 */}
        <div className="w-full  h-[700px]  border-b-8 border-[#232323]">
          <div className="w-full h-full container mx-auto ">
            <div className="w-full h-full flex p-20">
              {/* text side */}
              <div className="h-full w-1/2">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <span className="text-[48px] font-semibold">
                    İstediğiniz her yerde izleyin
                  </span>
                  <span className="text-[24px]">
                    Telefonda, tablette, bilgisayarda, televizyonda sınırsız
                    film ve dizi izleyin..
                  </span>
                </div>
              </div>
              {/* image side */}
              <div className="w-1/2 h-full">
                <div className="w-full h-full flex justify-end relative ">
                  <Image
                    width={700}
                    height={500}
                    alt=""
                    src="/device-pile.png"
                  />
                  <div className="absolute w-[480px] h-[270px] right-28 top-12">
                    <video muted loop playsInline autoPlay>
                      <source src="/video-devices.m4v" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* part 4  */}
        <div className="w-full  h-[700px]  border-b-8 border-[#232323] ">
          <div className="w-full h-full container mx-auto py-20 ">
            <div className="w-full h-full flex">
              <div className="w-1/2 h-full relative">
                <div className="w-full h-full flex justify-end ">
                  <Image width={700} height={500} alt="" src="/cocuk.png" />
                </div>
              </div>
              {/* text side */}
              <div className="w-1/2 h-full">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <span className="text-[48px] font-semibold">
                    Çocuklarınız için profiller oluşturun
                  </span>
                  <span className="text-[24px]">
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
        <div className="w-full min-h-[1000px] border-b-8 border-[#232323]">
          <div className="w-full h-full container mx-auto">
            <div className="w-full h-full py-20">
              {/* title */}
              <h1 className="text-[50px] font-bold text-center">
                Sıkça Sorulan Sorular
              </h1>
              <div className="w-full h-full flex flex-col gap-y-2  ">
                {dropwDown.map((item,index)=>(
                  <div className="w-full h-[85px] bg-[#2D2D2D]" key={index}>
                  <div className="w-full h-full flex justify-between items-center p-6 hover:bg-[#3E3E3E] transition-all border-b-2 border-black ">
                    <span className="text-[24px]">{item.title}</span>
                    <span className="text-[30px]">
                      <button
                        onClick={handleRotate}
                        className={`text-[30px] transform ${
                          isRotated ? "rotate-45" : ""
                        }`}
                      >
                        <AiOutlinePlus />
                      </button>
                    </span>
                  </div>
                  <div
                    className={`w-full p-6 h-auto bg-[#2D2D2D] transition-all duration-300 ${
                      isRotated ? "opacity-100 " : "opacity-0 hidden"
                    }`}
                  >
                    <span className="text-[24px]">
                     {item.description}
                    </span>
                  </div>
                </div>
                ))}
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

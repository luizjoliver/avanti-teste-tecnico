import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import BackgroundSale from "../assets/saleImg.png";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <NavBar />

      <article className="w-full h-[510px] mt-20 md:mt-[148px] flex justify-center bg-grayavanti-300 shadow-md">
        <div className="h-full w-full xl:w-3/4 flex flex-row">
          {/* IMAGEM */}
          <div className="relative w-[400px] md:w-1/2 max-w-[705px] h-full">
            <Image
              src={BackgroundSale}
              alt="Sale"
              className="w-full h-full object-cover object-[75%_center] md:object-fill"
              width={705}
              height={510}
              priority
            />
          </div>

          {/* TEXTO */}
          <div className="w-full md:w-1/2 flex flex-col gap-2 items-center justify-center uppercase px-4 md:px-0">
            <h2 className="text-3xl md:text-6xl 2xl:text-8xl font-thin text-center">
              <span className="font-bold">Super</span>Sale
            </h2>
            <p className="text-blueavanti text-md md:text-xl lg:text-2xl tracking-widest font-semibold mt-2 text-center">
              Itens selecionados com até
            </p>
            <p className="text-blueavanti text-3xl md:text-5xl lg:text-6xl font-bold mt-2">
              50%off
            </p>
          </div>
        </div>
      </article>

      <div className="w-full h-screen"></div>
    </main>
  );
}
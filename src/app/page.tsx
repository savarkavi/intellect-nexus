import Image from "next/image";
import localFont from "next/font/local";

const futureEdge = localFont({
  src: "./fonts/FutureEdge.otf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 900",
});

export default function Home() {
  return (
    <div
      className={`${futureEdge.className} flex h-full items-center justify-center`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <p className="neonRedText -mb-2 w-full text-lg uppercase italic">
            Be on
          </p>
          <h1 className={`text-6xl font-bold uppercase italic text-white`}>
            Intellect Nexus
          </h1>
          <div className="flex items-center justify-between text-2xl italic">
            <p className="neonRedText w-full uppercase">Only the best of</p>
            <h2 className="neonRedText text-3xl uppercase">Internet</h2>
          </div>
        </div>
        <div className="relative h-[500px] w-full">
          <Image
            src="/landingPageImg.jpg"
            alt="landing page image"
            fill
            className="object-cover p-2"
          />
        </div>
      </div>
    </div>
  );
}

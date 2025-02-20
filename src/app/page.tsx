import Board from "@/components/board";
import FlipCard from "@/components/flipcard";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      <div className="w-full h-96 relative overflow-hidden">
        <Image
          src={"/landingpage.jpg"}
          alt="Fading Image"
          layout="fill"
          objectFit="cover"
          className="opacity-0 animate-fadeIn"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-wrap justify-center gap-6 p-6">
            <FlipCard
              frontContent="Hover to Flip"
              backContent="Unhover to Flip Back"
            />
            <FlipCard
              frontContent="Click to Flip"
              backContent="Click to Flip Back"
              flipOnClick
            />
          </div>
        </div>
        <div>
          <Board />
        </div>
        <div>Scroll Animation</div>
      </div>
    </div>
  );
}

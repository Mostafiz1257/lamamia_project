import Image from "next/image";
import Hero from "public/hero.png"

export default function Home() {
  return (
    <div className=" flex space-x-12 justify-center items-center mt-[100px]">
      <div className="w-1/2 space-y-5">
        <h1 className=" text-4xl font-bold">Better design for your digital product</h1>
        <p className=" text-xl font-bold">Turning your idea to reality, We bring the world together tech industry</p>
        <button>See our works</button>
      </div>
      <div className="w-1/2">
        <Image className=" w-[500px] h-[300px] object-cover"  src={Hero} alt="hero"></Image>
      </div>
    </div>
  )
}

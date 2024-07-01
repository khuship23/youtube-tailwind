import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <img src="/photo.jpg" className =" rounded-xl" alt="photo"></img>
    <div className="grid grid-cols-12 pt-2">
      <div className="col-span-1">
      <img className="rounded-full w-12 h-12" src="/image.png" alt="photo"></img>
      </div>
      <div className="col-span-11 pl-2">
        <div>
        Hard mock coding interview
        </div>
        <div className="col-span-11  text-gray-400 text-base">
         coding channel
        </div>
        <div className="col-span-11  text-gray-400 text-base">
        46 Mn | 13 days ago
        </div>
      </div>
      
      
    </div>
    
   </div>
  );
}

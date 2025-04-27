import Image from "next/image";
import Hello from "./hello";

const Profil = () =>{
    return(
        <div className="mt-5 grid grid-cols-2 w-full gap-30 justify-items-center items-center ">

            {/*greeting speech*/}
          <div className="flex flex-col ml-30">
            <Hello/>
            <p className="font-bold text-7xl ">I'm <span className="italic text-yellow-400 underline">Benoit Mbole Ateba,</span>
           <br/>Software Engeneer<br/>Based in Germany </p>
           <p className="mt-3">I'm a beginner Software Engeneer with 1 year in the field.</p>
            </div>  

            {/*HProfil photo section*/}
           <div>
            <Image
            src="/Profile.png"
            alt="This is my profile photo"
            width={700}
            height={300}
            />
           </div>
        </div>
    )
}

export default Profil;
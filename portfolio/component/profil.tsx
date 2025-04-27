import Image from "next/image";
import Hello from "./hello";

const Profil = () => {
    return (
        <div className="mt-5 grid grid-cols-2 w-full gap-[2rem] justify-items-center items-center ">

            {/*greeting speech*/}
            <div className="flex flex-col ml-[3rem]">
                <Hello />
                <p className="font-bold xl:text-7xl text-3xl ">I&apos;m <span className="italic text-yellow-400 underline">Benoit Mbole Ateba,</span>
                    <br />Software Engeneer<br />Based in Germany </p>
                <p className="mt-[3rem] text-muted-foreground">I&apos;m an entry level Software Engineer with 2+ Years experience in the field collaborating in various open source projects and building personal projects.</p>
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
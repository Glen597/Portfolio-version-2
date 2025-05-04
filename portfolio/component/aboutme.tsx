import Image from "next/image";

const AboutMe = () =>{
return(
<div className="flex flex-row items-center justify-around py-20">
<Image className=" rounded-full"
src={"/developerServices.png"}
alt="services Presentation"
width={700}
height ={800}
/>
<div className="flex flex-col items-center justify-between w-200">
<div className="flex  items-center ">
               <div className="w-5 h-0.5 bg-yellow-500 mb-2"></div>
                <p className="ml-[2px]  text-2xl  font-sans  text-[#2A2A2A] text-white ">About Me</p>
            </div>
            <p>Who is <span className="text">Benoit Mbole Ateba</span></p>
            <div>div</div>
            <div>div</div>
            <div>div</div>
            <div className="flex justify-between items-center">
            <div className="flex items-center bg-[#FEB33B] rounded-full w-[170] h-12 ">
                                    <button className="rounded-full bg-green-900 px-3 my-6 text-white py-[10] ml-[2] mt-[26]">Download cv</button>
                                    <a className="bg-white rounded-full ml-[9] ">
                                        <Image
                                            src="/arrow.svg"
                                            alt="Play button"
                                            width={35}
                                            height={10}
                                        />
                                    </a>
                                </div>
                                <p>Benoit Mbole Ateba</p>
            </div>
                 
            
            
</div>
</div>)
}

export default AboutMe;
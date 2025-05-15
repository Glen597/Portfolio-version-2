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
<div className="flex  items-center justify-items-start ml-[-100]">
               <div className="w-5 h-0.5 bg-yellow-500 mb-2"></div>
                <p className="ml-[2px]  text-4xl  font-sans  text-[#2A2A2A] text-white  ">About Me</p>
            </div>
            <p className="text-6xl font-bold text-white">Who is <span className="text italic text-yellow-400">Benoit Mbole Ateba</span></p>
            <div className="text-xl text-white mt-[50px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                   <div className="text-xl flex gap-x-20">
                    <div className="flex flex-col">
                         <p className="text-yellow-400 mt-[50px] text-5xl font-bold">10+</p>
                         <p className="text-xl text-white">Project Completed</p>
                    </div>
                    <div className="flex flex-col">
                            <p className="text-yellow-400 mt-[50px] text-5xl font-bold">20+</p>
                         <p className="text-xl text-white">Industry Covered</p>
                    </div>
                    <div className="flex flex-col">
                            <p className="text-yellow-400 mt-[50px] text-5xl font-bold">1+</p>
                         <p className="text-xl text-white">Years Of experience</p>
                    </div>
                   </div>
           <div className="flex justify-between items-center mt-[50px] ">
            <div className="flex items-center bg-[#FEB33B] rounded-full w-[170] h-12  ">
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
                                <p className="ml-[100]">Benoit Mbole Ateba</p>
            </div>
                 
            
            
</div>
</div>)
}

export default AboutMe;
import Image from "next/image";
import ToggleText from "./toggleText";



const ServicesPage = () =>{
    return(
        <div className="mt-[100px] flex flex-col">
            <div className="flex  items-center ml-[117]">
                <Image className=" "
                src="/dash.svg"
                alt ="dash"
                width={40}
                height={30}
                />
                <p className="ml-[2px]  text-3xl  font-sans  text-[#2A2A2A] ">Services</p>
            </div>
            <div className="ml-[130px] flex items-center justify-between">
                <p className="text-7xl "><span className="text-yellow-400  ">Services</span> I Provide</p>
                 <div className="flex items-center mr-[130px]  ">
                                    <div className="flex items-center bg-[#FEB33B] rounded-full w-[200] h-12 ">
                                        <button className="rounded-full bg-green-900 px-3 my-6 text-white py-[10] ml-[2] mt-[26]">View All Services</button>
                                        <a className="bg-white rounded-full ml-[9] ">
                                        <Image
                                            src="/arrow.svg"
                                            alt="Play button"
                                            width={35}
                                            height={10}
                                        />
                                        </a>
                                    </div>
                                    <div className="pl-5 ">
                                        <button className=" border rounded-full border-solid border-green-900 px-[20] py-[10] text-green-900 font-medium ">Hire me</button>
                                    </div>
                                </div>
            </div>
            <div className="flex justify-between mt-[160px] mx-[130px]">
<div className=" bg-stone-200 w-[380px] h-[370px] rounded-xl flex flex-col"> 
    <Image className="rounded-full relative my-[30px]  mx-[30px]"
src="/web-developer.png"
alt="web-developer image"
width={80}
height={60}/>
<p className="font-bold text-[#3C3C3C] text-2xl mx-[20px] mb-[20px]">Web-Developer</p>
<p className="mx-[20px] text-xl overflow-hidden line-clamp-4 font-sans ">Building modern web apps with: ⚛️React.JS<br/> 🚀Next.js<br/> 🛠️Express<br/> API integration with 📡Axios<br/>Proficient in: <br/>🧱 HTML<br/> 🎨CSS<br/> ⚙️JavaScript<br/>🔷TypeScript.</p>
<ToggleText/>
</div>
<div className=" bg-stone-200 w-[370px] h-[350px] rounded-xl"> hello</div>
<div className=" bg-stone-200 w-[370px] h-[350px] rounded-xl"> hello</div>
<div className=" bg-stone-200 w-[370px] h-[350px] rounded-xl"> hello</div>
            </div>

        </div>
        
    );
}

export default ServicesPage;
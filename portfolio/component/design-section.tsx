import Image from "next/image";

const DesignCategories = () => {
    return (
        <div className="relative z-2">
            {/* Yellow banner with design categories */}
            <div className="bg-[#FEB33B] py-4 flex justify-center items-center text-3xl">
                <ul className="flex space-x-8 text-green-900 font-medium justify-around">
                    <div className="flex justify-between items-center space-x-8">
                        <div className="flex items-center space-x-8">
                            <p>Web Developer</p>
                            <Image src={"/star.png"} alt="Benoit Mbole Ateba" height={25} width={25} />
                        </div>
                        <div className="flex items-center space-x-8">
                            <p>Data Analyst</p>
                            <Image src={"/star.png"} alt="Benoit Mbole Ateba" height={25} width={25} />
                        </div>
                        <div className="flex items-center space-x-8">
                            <p>Discord Bot Developer</p>
                            <Image src={"/star.png"} alt="Benoit Mbole Ateba" height={25} width={25} />
                        </div>
                        <div className="flex items-center space-x-8">
                            <p>Webscrapping</p>
                        </div>
                    </div>
                </ul>
            </div>
            {/* Green inclined banner */}
            <div className="absolute inset-0 -z-10 h-full bg-green-900 transform -skew-y-2"></div>
        </div>
    );
};

export default DesignCategories;
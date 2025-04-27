
const DesignCategories = () => {
    return (
        <div className="relative z-2">
            {/* Yellow banner with design categories */}
            <div className="bg-[#FEB33B] py-4 flex justify-center items-center  text-3xl">
                <ul className="flex space-x-8 text-green-900 font-medium">
                    <li className="flex items-center">
                        App Design
                        <span className="mx-4 text-green-900 ">*</span>
                    </li>
                    <li className="flex items-center">
                        Website Design
                        <span className="mx-4 text-green-900 ">*</span>
                    </li>
                    <li className="flex items-center">
                        Dashboard
                        <span className="mx-4 text-green-900 ">*</span>
                    </li>
                    <li className="flex items-center">
                        Wireframe
                    </li>
                </ul>
            </div>
            {/* Green inclined banner */}
            
            <div className="absolute inset-0 -z-10 h-full bg-green-900 transform -skew-y-2"></div>

            
        </div>
    );
};

export default DesignCategories;
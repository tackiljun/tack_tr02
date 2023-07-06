import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
    return ( 
        <div className="container mx-auto min-w-[1280px] h-[100vh] bg-black text-white font-extrabold">
            <div className="mx-auto min-w-[1150px] bg-red-600 text-white font-extrabold">
                <div>
                    <SampleNav></SampleNav>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
     );
}
 
export default BasicLayout;
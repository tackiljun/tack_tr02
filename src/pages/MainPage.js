import TestLayout from "../layouts/TestLayout";
import BasicLayout from "../layouts/BasicLayout";


const MainPage = () => {

    //console.log("--------------- MAIN ---------------")

    return ( 

        <BasicLayout>
            <h2>MAIN PAGE</h2>
            <div className="overflow-hidden">
                <img src={require("../images/bgimg.jpg")} className="blur-sm" />
            </div>
        </BasicLayout>
     );
}

export default MainPage;
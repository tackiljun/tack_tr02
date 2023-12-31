import { Link } from "react-router-dom";


const SampleNav = () => {

    return ( 
        
        <div className="flex m-6 p-4 text-white font-extrabold">
            <div className="m-4 text-4xl border-2">
                <Link to="/" >MAIN</Link>
            </div>
            <div className="m-4 text-4xl border-2">
                <Link to="/about" >ABOUT</Link>
            </div>
            <div className="m-4 text-4xl border-2">
                <Link to="/board/list" >BOARD</Link>
            </div>
        </div>
     );
}
 
export default SampleNav;
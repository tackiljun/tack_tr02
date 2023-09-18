import { Link } from "react-router-dom";


const TestLayout = ({children}) => {

    return ( 
        
        <div>
            <div>
                <h2>
                    <Link to={"/"}>MAIN</Link> 
                </h2>
                <h2>
                    <Link to={"/about"}>ABOUT</Link>
                </h2>
            </div>
            <div>
                {children}
            </div>
        </div>
     );
}
 
export default TestLayout;
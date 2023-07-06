import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";


const router = createBrowserRouter([
    {
        path:"",
        element: <MainPage></MainPage>
    }     // path:"/---" 에서 /는 생략이 가능.
    ,
    {
        path:"about",
        element: <AboutPage></AboutPage>
    }
    ,
    {
        path:"board",
        //element: <div>Board</div>,
        children: [
            {
                path: "list",
                element: <ListPage></ListPage>
            }
        ]
    }
])

export default router;
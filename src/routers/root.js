import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";
import LoadingPage from "../pages/LoadingPage";
import { Suspense, lazy } from "react";


const Loading = <LoadingPage></LoadingPage>


const Board_Index = lazy(() => import("../pages/board/indexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))


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
        element: <Suspense fallback={Loading}>
                     <Board_Index />
                 </Suspense>,
        children: [
            {
                path: "list",
                //element: <ListPage></ListPage>
                element: <Suspense fallback={Loading}>
                             <Board_List />
                         </Suspense>
            }
            ,
            {
                path: "read/:bno",
                element: <Suspense fallback={Loading}>
                             <Board_Read />
                         </Suspense>
            }
        ]
    }
])

export default router;
import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";
import BasicLayout from "../../layouts/BasicLayout";


// const checkNull = (obj) => {

//     const result = {}

//     for(const attr in obj) {
//         const attrName = attr
//         const attrValue = obj[attr]

//         if( attrValue && attrValue !== 'null') {
//         result[attrName] = attrValue
//         }   
//     } 

//     return result
// }


const ListPage = () => {

    //console.log("--------------- BOARD LIST ---------------")

    const {queryObj, setSearch, moveRead, moveList} = useQueryObj()  
    //useSearchParams()

    // console.log(search)

    // const page = search.get("page") || 1
    // const size = search.get("size") || 10
    // const type = search.get("type")
    // const keyword = search.get("keyword")

    // const queryObj = checkNull({page, size, type, keyword})

    console.log("---------------queryObj---------------")
    console.log(queryObj)

    const movePage = (num) => {
        console.log("----------NUM----------" + num)
        queryObj.page = num
        setSearch({...queryObj})
    }

    const moveSearch = (type, keyword) => {
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword
    
        setSearch({...queryObj})
      }

    return ( 

        <div>
            BOARD LIST PAGE
            
            <ListSearchComponent 
            moveSearch={moveSearch} 
            queryObj={queryObj}>
            </ListSearchComponent>

            <ListComponent 
            queryObj={queryObj} 
            movePage={movePage} 
            moveRead = {moveRead}>
            </ListComponent>

        </div>
     );
}
 
export default ListPage;
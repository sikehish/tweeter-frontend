import BaseUrl from "./BaseUrl";

const accessToken = localStorage.getItem("access token")
console.log(accessToken)
const config={
    headers:{
        "Authorization" : `Bearer ${accessToken}`
    }
}

function DoBookmarkAction (tweetId){
    return async function (dispatch){
        dispatch({
            type:"DO_BOOKMARK"
        })
        await BaseUrl.post("/t/bookmark",{tweetId},config)
        .then((res)=>{
            dispatch({
                type:"DO_BOOKMARK_SUCCESS",
                payload:res
            })
        })
        .catch((err)=>{
            dispatch({
                type:"DO_BOOKMARK_FAILED",
                payload:err
            })
        })
    }

}

export default DoBookmarkAction


function SeeBookmarkAction (){
    return async function (dispatch){
        dispatch({
            type:"SEE_BOOKMARK"
        })
        await BaseUrl.get("/t/bookmark",config)
        .then((res)=>{
            dispatch({
                type:"SEE_BOOKMARK_SUCCESS",
                payload:res
            })
        })
        .catch((err)=>{
            dispatch({
                type:"SEE_BOOKMARK_FAILED",
                payload:err
            })
        })
    }

}
export {SeeBookmarkAction}
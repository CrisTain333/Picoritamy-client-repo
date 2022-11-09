import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
            document.title = `${title} - Picoritamy`
    },[title])
}
export default useTitle;
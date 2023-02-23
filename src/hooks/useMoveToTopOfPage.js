import React,{useEffect} from 'react'


// this hook is used to scroll the wrapper container to the top when going to be rendered
function useMoveToTopOfPage(dependency) {
    useEffect(() => {
        window.scrollTo(0,0);
        const wrapper = document.getElementById("wrapper")
        wrapper.scrollTo(0, 0);
    }, [dependency])
}

export default useMoveToTopOfPage

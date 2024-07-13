import {useEffect} from "react";

const isElementInViewPort = (elementId, isInViewPort) =>{

    useEffect(() => {
        const handleScroll = () => {
            const theElement = document.getElementsByClassName(`${elementId}`);
            if (theElement.length > 0) {
                const squareDotsTopPosition = theElement[0].offsetTop;
                const squareDotsBottomPosition = squareDotsTopPosition + theElement[0].offsetHeight;
    
                const screenTop = window.scrollY;
                const screenBottom = screenTop + window.innerHeight;
    
                if (screenTop <= squareDotsBottomPosition && screenBottom >= squareDotsTopPosition) {
                    isInViewPort(true)
                }else{
                    isInViewPort(false)
                }
            }
        };
    
        const handleResize = () => {
            handleScroll(); // Recalculate positions on resize
        };
    
        // Initial check on mount
        handleScroll();
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
    
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
}

// export default isElementInViewPort;

// const IsElementInViewPort = (elementId, isInViewPort) =>{

//     const handleScroll = () => {
//         const theElement = elementId
//             const squareDotsTopPosition = theElement.offsetTop;
//             const squareDotsBottomPosition = squareDotsTopPosition + theElement.offsetHeight;

//             const screenTop = window.scrollY;
//             const screenBottom = screenTop + window.innerHeight;

//             if (screenTop <= squareDotsBottomPosition && screenBottom >= squareDotsTopPosition) {
//                 isInViewPort(true)
//             }else{
//                 isInViewPort(false)
//             }
//     };

//     const handleResize = () => {
//         handleScroll(); // Recalculate positions on resize
//     };

//     // Initial check on mount
//     handleScroll();

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleResize);

//     // Cleanup function
//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//         window.removeEventListener('resize', handleResize);
//     };
// }
// var isInViewPort
// const squareDots = document.getElementById('squareDots')
// IsElementInViewPort(squareDots[0], isInViewPort)
// if(isInViewPort === true){ 
// console.log('working')
// }
import { useEffect, useRef, useState } from "react"


const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    let hoverEnter = () => {
        setHovered(true)
    }
    
    let hoverLeave = () => {
        setHovered(false)
    }

    // adding event listeners to the 'ref' and returning this 'ref' so that listeners can be used with different elements.
    useEffect(() => {
        ref.current.addEventListener("mouseenter", hoverEnter)
        ref.current.addEventListener("mouseleave", hoverLeave)

        // BELOW CLEANUP CODE CAUSES ERROR: "TypeError: Cannot read property 'removeEventListener' of null"

        // return () => {
        //     ref.current.removeEventListener("mouseenter", hoverEnter)
        //     ref.current.removeEventListener("mouseleave", hoverLeave)        
        // }

    }, [])

    return {hovered, ref}
}

export default useHover
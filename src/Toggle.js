import React, { useState } from 'react'
import { useSpring, animated } from "react-spring"

const Toggle = () => {
    const [isToggled, setToggle] = useState(false);
    const fade = useSpring({
        // opacity: isToggled ? 1 : 0,
        color: isToggled ? "tomato" : "green",
        // fontSize: isToggled ? "2rem" : "5em",
        transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-50px,0)",
        
    })

return (
        <div>
            <animated.h1 style={fade}>Hello</animated.h1>
            <button onClick={() => setToggle(!isToggled)}>
                Toggle
            </button>
        </div>
    )
}

// const AnimatedTitle = animated(componentName)

export default Toggle

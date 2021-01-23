import React, { useState } from 'react'
import { useSpring, animated } from "react-spring"

const Toggle = () => {
    const [isToggled, setToggle] = useState(false);
    const {color, y} = useSpring({
        // opacity: isToggled ? 1 : 0,
        color: isToggled ? "tomato" : "green",
        // fontSize: isToggled ? "2rem" : "5em",
        y: isToggled ? 0 : 1,
        
    })

return (
        <div>
            <animated.h1 
            style={{
                transform: y.interpolate({
                    range: [0, .25, .50, .75, 1],
                    output: [0, -25, -50, -100, -50]
                }).interpolate(y => (`translate3d(0,${y}px,0)`)),
                color,
                }}
            >
                Hello
            </animated.h1>
            <button onClick={() => setToggle(!isToggled)}>
                Toggle
            </button>
        </div>
    )
}

// const AnimatedTitle = animated(componentName)

export default Toggle

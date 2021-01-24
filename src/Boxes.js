import React, {useState, useRef} from 'react'
import {animated, useTrail, useSpring, useChain, useTransition} from "react-spring"

const items = [0.2,0.4,0.5,0.6,0.79,1, 12, 42, 67, 324, 346, 2213, 52, 11, 98]

const Boxes = () => {
    const [on, toggle] = useState(false)

    const springRef = useRef()
    
    const transitionRef = useRef()
    
    const { size } = useSpring({
        ref: springRef,
        from: {size: "20%"},
        to: {size: on ? "100%" : "20%" }
    })
    //with trail
    // const trail = useTrail(items.length,{
    //         ref: transitionRef,
    //        from: { opacity: on ? 1 : 0,
    //         transform: "scale(0)"},
    //        to: { opacity: on ? 1 : 0,
    //         transform: on ? "scale(1)" : "scale(0)"}

    //      })
    const transition = useTransition(on ? items : [], item => item, {
            ref: transitionRef,
            trail: 400 / items.length,
            from: { 
                opacity: 0,
                transform: "scale(0)"
            },
            enter: { 
                opacity: 1,
                transform: "scale(1)"
            },
            leave: { 
                opacity: 0,
                transform: "scale(0)"
            },
            

         })



    useChain(on ? [springRef, transitionRef] : [transitionRef, springRef])

    return (
        <div className="full-height">
        <animated.div 
        style={{width: size, height: size}}
        className="boxes-grid-two" 
        onClick={() => toggle(!on)} >
            {/* {trail.map(animation => 
            <animated.div className="box-two" style={animation}/> 
            )} */}
            {transition.map(({item, key, props}) => 
            <animated.div className="box-two" key={key} style={props}/> 
            )}
        </animated.div>
        </div>
    )
}

export default Boxes

import React, { useState } from 'react'
import { useTransition, animated } from "react-spring"

const Toggle = () => {
    const [items, setItems] = useState([
    {
        letter: "N",
        key: 1
    },{
        letter: "i",
        key: 2
    },{
        letter: "m",
        key: 3
    },{
        letter: "a",
        key: 4
    }
]);
    // with a transition we can mount and unmount a component from the dom
    const transition = useTransition(items, item => item.key, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    return (
        <div>
            {transition.map(
                ({ item, key, props }) => (
                <animated.h1 key={key} style={props}>
                    {item.letter}
                </animated.h1>
                )
            )}
            
            <button onClick={() => setItems([{
                letter: "N",
                key: 1
            }])}>
                Toggle
            </button>
        </div>
    )


    // return (
    //     <div style={{position: "relative"}}>
    //         {transition.map(
    //             ({ item, key, props }) => (
    //             item ? ( 
    //             <animated.h1 key={key} style={props}>
    //                 Hello
    //             </animated.h1>
    //             ) : (
    //             <animated.h1 key={key} style={props}>
    //                 world
    //             </animated.h1>
    //             )
    //         ))}
            
    //         <button onClick={() => setToggle(!isToggled)}>
    //             Toggle
    //         </button>
    //     </div>
    // )
}

// const AnimatedTitle = animated(componentName)

export default Toggle

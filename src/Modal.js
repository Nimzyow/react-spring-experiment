import React, {useState} from 'react'
import {animated, useTransition} from "react-spring"

const Modal = ({closeModal, animation, pointerEvents}) => {
    return (
        <div className="modal" style={{ pointerEvents }}>
            <animated.div className="modal-card" style={animation}>
                <h1>Modal</h1>
                <button onClick={closeModal}>close</button>
            </animated.div>
        </div>
    )
}


const ModalWrapper = () => {
    const [on, toggle] = useState(false)

    const pointerEvents = on ? "all" : "none"

    const transition = useTransition(on, null, {
        from: { opacity: 0, transform: "translate3d(0, -40px, 0" },
        enter: { opacity: 1, transform: "translate3d(0, 0, 0" },
        leave: { opacity: 0, transform: "translate3d(0, -40px, 0" },
    })
    return (
        <div>
            <button onClick={() => toggle(!on)} >Open</button>
        {transition.map(
            ({item, key, props: animation}) => 
                item && <Modal pointerEvents={pointerEvents} animation={animation} closeModal={() => toggle(false)} />
            )}
            
            </div>
    )
}

export default ModalWrapper

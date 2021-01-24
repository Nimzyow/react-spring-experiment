import React, {useState} from 'react';
import { useSpring, animated } from "react-spring"
// import Routes from "./Routes"
import Nav from "./Nav"
import Modal from "./Modal"
import logo from './logo.svg';
import Accordion from "./Accordion"
import Gesture from "./Gesture"
import Waypoints from "./Waypoints"
import './App.css';
import Checkout from './Checkout';
import Boxes from './Boxes';

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  
  const navAnimation = useSpring({
    transform: isNavOpen ? "translate3d(0,0,0) scale(1)" : "translate3d(100%, 0, 0) scale(0.6)"
  })

  const fade = useSpring({
  from: {
      opacity: 0
    },
    opacity: 1
  });

    return (
      <animated.div className="App" >
        <header className="App-header">
          <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">Menu</button>
          {/* <Nav style={navAnimation}/> */}
        </header>
        <main>
          {/* <Routes /> */}
          <Checkout isOpen={isNavOpen} />
          <Modal/>
          <Accordion />
          <Boxes />
          {/* <Waypoints /> */}
        </main>
      </animated.div>
    );
  }

export default App;

import React, { useEffect, useState }from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import './components/Counter.css';
import About from './components/About';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import Test from './Test';
import './App.css';

function App(){
    const [toggle, updatetoggle] = useState(false)
    return(
        <div>
            <button onClick ={() => {
                updatetoggle(!toggle)
              }}
              >toggle
              </button>
              {toggle && <Test />}
        <div className='main'>
        <Header />
        <Counter />
        <Routes>
            <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        </Routes>
        </div>
        </div>
    );
}

export default App;
import React, { useRef } from 'react';
import "./App.css";
import Homepage from './container/homepage';
import Header from './components/header';

const App = () => {
  const sec2 = useRef(null);
  const sec3 = useRef(null);
  return (
    <div className="Container noScrollbar">
      <Header />
      <section className="section1 display-center" >
        <Homepage secs={{sec2, sec3}} />
      </section>
      <section ref={sec2} className="section2 display-center" >
        <span className="text-4xl text-white">Fuck you</span>
      </section>
      <section ref={sec3} className="section3 display-center" >
        <span className="text-4xl text-white">Fuck you again</span>
      </section>
    </div>
  )
}

export default App

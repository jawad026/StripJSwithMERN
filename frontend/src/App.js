import React, { useState } from 'react';
import './App.css';
import Stripe from './components/stripe';

const football = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGG0w08Y2_hkghf11fjEyVnJLiFGWLxTmayQ&usqp=CAU';

function App() {
  
  const [showForm, setShowForm] = useState(false)

    return (
      <div className="App">
      {showForm ? (
        <Stripe />
      ) : (
        <div>
          <h3>$100.00</h3>
          <img src={football} alt="Football" />
          <button onClick={() => setShowForm(true)}>BUY</button>
          </div>
      )}
    </div>
      // <div className="App">
      //   {
      //   showForm ? (
      //   <Stripe/>
      //    ) : (
      //   <>
      //   <h3>$100.00</h3>
      //    <img src={football}/> 
      //    <button onClick={()=>setShowForm(true)}>BUY</button>
      //    </>
      //    )
      //    }
      // </div>
    );
  
}

export default App;

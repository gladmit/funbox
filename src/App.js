import React, { useState } from "react";
import './components/app.css';
import Card from './components/card';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
    <div className="App" style={{ backgroundImage:  "url(/Img/prototype.png)", zIndex: 0 }} >
      <div className="backgroundShadow">
        <h1>Ты сегодня покормил кота?</h1>
        <div className="mainSection" >          
          <Card cardName="с фуа-гра" id="countFuagra" numPortion="10" present="мышь" foodWeight="0,5"/>          
          <Card cardName="с рыбой" id="countFish" numPortion="40" present="2 мыши" foodWeight="2"/>
          <Card cardName="с курой" id="countChicken" numPortion="100" present="5 мышей" foodWeight="5" happy="заказчик доволен"/>
        </div>
      </div>  
    </div>
    );
  }
}

export default App;

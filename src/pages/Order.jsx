import React from 'react';

import Navbar from '../components/Navbar/index';
import Orden from '../components/Orden/index';



const Order = props => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Orden title= "Special Beef Hot Dog" description="HotDog is a grilled or steamed food where susage is served in the slit of a partially sliced" cantidad="1"/>
      </div>
    </div>
  )
}


export default Order

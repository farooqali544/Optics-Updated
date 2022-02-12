import React from 'react';

function MainComponent() {
  return <form className='container'>
     
     <div className="contact-info">
         <input type="text" name='contact-no'/>
         <input type="text" name='serial-no'/>
         <input type="text"   name='name' />
         <input type="text"  name='o-date'/>
         <input type="text"  name='d-date'/>
         

     </div>
    <div className="top-right"></div>
    <div className="bottom-right"></div>
    </form>;
}

export default MainComponent;

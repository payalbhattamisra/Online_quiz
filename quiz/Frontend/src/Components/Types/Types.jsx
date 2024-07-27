import React from 'react';
import './Types.css';

function Types() {
  const showImage = (imageUrl) => {
    const displayedImage = document.getElementById('displayedImage');
    displayedImage.src = imageUrl;
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.style.display = 'block';
  };

  return (
    <div className='Types' id='type'>
      <h1>So Many Question Types to Choose From</h1>
      <div className="btns">
        <button className="button1" onClick={() => showImage('./pics/s1.png')}>Fill in the blank</button>
        <button className="button1" onClick={() => showImage('./pics/s2.png')}>Reorder</button>
        <button className="button1" onClick={() => showImage('./pics/s3.png')}>Multiple choice</button>
        <button className="button1" onClick={() => showImage('./pics/s4.png')}>Match</button>
        <button className="button1" onClick={() => showImage('./pics/s5.png')}>Draw</button>
        <button className="button1" onClick={() => showImage('./pics/s6.png')}>Drag & Drop</button>
      </div>
      {/* <div className='btnsss'>
        <button className="button1" onClick={() => showImage('./pics/s7.png')}>Video Response</button>
        <button className="button1" onClick={() => showImage('./pics/s8.png')}>Poll</button>
        <button className="button1" onClick={() => showImage('./pics/s9.png')}>Slides</button>
        <button className="button1" onClick={() => showImage('./pics/s10.png')}>Open ended</button>
        <button className="button1" onClick={() => showImage('./pics/s11.png')}>Drop down</button>
      </div> */}
      <div id="imageContainer"  >
        <img src="./pics/s1.png" alt="Displayed Images" id="displayedImage" />
      </div>
    </div>
  );
}

export default Types;



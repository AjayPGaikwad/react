
import React, { useState } from 'react';

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted ToUpperCase" ,"Succses");
    
  }
  
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted TO LowerCase" ,"Succses");
  }
  const handleClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared" ,"Succses");
    
  }

  const handleCopyText = () => {

    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied! " ,"Succses");
    
  }

  const handleExtraSpaces = () => {

    let newText = text.split(/ [ ]+/);

    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!" ,"Succses");
    

  }


  const handleOnChange = (event) => { setText(event.target.value) }
  const [text, setText] = useState('');

  return (
    <>
      <div className='container'>
        <div className="mb-3">
          <h1>{props.heading}</h1>

          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea><br />
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UPPERCASE</button>

          <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert To LOWER</button>
          <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

      </div>

      <div className='container my-3'>

        <h2>Your Text Summary</h2>
        <p> Enterder :{text.split(" ").length} Words and Carectors:{text.length}</p>
        <p>Minutes To Read :{0.008 * text.split(" ").length}Min</p>
        <h2>Previwe</h2>
        <p>{text.length > 0 ? text : "Enter SomeThing"}</p>
      </div>

    </>


  )
}

TextForm.defaultProp = { heading: 'Enter Text To Analyse' }

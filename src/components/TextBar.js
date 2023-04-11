import React, {useState} from 'react';

export default function TextBar(props) {
    const [text, setText] = useState("Enter the Text");

    let UpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    let LowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    let Capitalize = ()=>{
      let newText = text.split(" ").map(str=>str.charAt(0).toUpperCase()+str.slice(1)).join(" ");
      setText(newText);
  }

    let trim = ()=>{
      let newText = text.trim();
      setText(newText);
  }

    let clear = ()=>{
    
      setText('');
  }

  let extra=()=>{
    let newtext = text.split(/[ ]+/).join(" ");
    setText(newtext);
  }

  let copy=()=>{
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

    

    let Handle =(event)=>{
        setText(event.target.value);
    }
    
  return (
    //
    <> 
     <div> 
      <h4>Enter Your Text Below</h4>
    <div className="md-3">
      <textarea className="form-control my-1" id="MyBox" rows="10" cols="10" value={text} onChange={Handle} style={{margin:0}}></textarea>
    </div> 
    <button type="button" className="btn btn-primary my-1 mx-1"  onClick={UpperCase}>convert2UpperCase</button>
    <button type="button" className="btn btn-danger  mx-1 my-1" onClick={LowerCase}>convert2LowerCase</button>
    <button type="button" className="btn btn-info"   onClick={Capitalize}>capitalize</button>
    <button type="button" className="btn btn-secondary mx-1 my-1"   onClick={clear}>Clear</button>
    <button type="button" className="btn btn-warning mx-1 my-1"   onClick={trim}>Trim</button>
    <button type="button" className="btn btn-success mx-1 my-1"   onClick={extra}>Extra Space Remove</button>
    <button type="button" className="btn btn-outline-info mx-1" onClick={copy}>clipboard</button>
  </div>

      <div style={{color:props.mode==='dark'?'light':'dark'}}>
      <h4>No of Character  : {text.length}</h4>
      <h4>The Length of the words : {text.trim() === '' ? 0 : text.split(" ").length}</h4>
      <h4>Preview Text</h4>
      {text}
      </div>
  </>
  )
}

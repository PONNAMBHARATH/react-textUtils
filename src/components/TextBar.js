import React, {useState} from 'react';

export default function TextBar() {
    const [text, setText] = useState("Enter the Text");

    let UpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    let LowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    

    let Handle =(event)=>{
        setText(event.target.value);
    }

  return (
    // 
     <div> 
    <div className="md-3">
      <textarea className="form-control" id="MyBox" rows="10" cols="10" value={text} onChange={Handle} style={{margin:44}}></textarea>
    </div>
    <div className="container">
    <button type="button" className="btn btn-primary" style={{ marginTop: '20px' }} onClick={UpperCase}>convert2UpperCase</button><br></br>
    <button type="button" className="btn btn-danger" style={{ marginTop: '20px' }} onClick={LowerCase}>convert2LowerCase</button>
    </div>
  </div>
  )
}

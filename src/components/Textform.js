import React , {useState} from "react";

export default function Textform(props) {
    
  const [text, setText] = useState("");
  const handleUpClick = ()=>{
    console.log("uppercase was clicked " + text)
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleLoClick = ()=>{
    console.log("uppercase was clicked " + text)
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handleOnChange=(event)=>{
    console.log("text was  changed")
    setText(event.target.value)
  }
  const handleClearClick = ()=>{
    console.log("text was cleared");
    let newText = ("");
    setText(newText)
  }
  const handleCapitalizeClick = ()=>{
   const newText = text.split(" ")
   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
   .join(" ")
  
   setText(newText)
  }
  const handleCopyClick = ()=>{
    let text = document.getElementById("myBox");
    text.select()
    navigator.clipboard.writeText(text.value);

  }
   const handleExtraClick = ()=>{
    let newText = text.split(/[  ]+/)
    setText(newText.join(" "))

  }
  


  return (
    <>
    <div className="container"  style={{color:props.mode==="dark"? "white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="container my-3">
        <textarea className="form-control my-3" value= {text} onChange={handleOnChange} id="myBox" rows="9" style = {{backgroundColor:props.mode==="light"? "white":"#010636", color:props.mode==="dark"? "white":"black"}}>
    
        </textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}   >Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}   >Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick} >Capitalize</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraClick} >Remove extra spaces</button>
      </div>
    
      <div className="container my-3"  style={{color:props.mode==="dark"? "white":"black"}}>
        <h2 my-3>Your text summary</h2>
        <p><i>{text.split(" ").length} words and {text.length} characters</i></p>
        <p>{0.008*text.split(" ").length} minutes to read the text</p>
        <h3>Preview</h3>
        <p>{text}</p>

      </div>

    </>
  );
}

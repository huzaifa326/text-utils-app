import React, {useState} from 'react'


export default function TextForm(props) {
 
   //===============================================================
   const [text, setText] = useState('');

    const handleUpClick = ()=>{
      //setText('huzzi');
    let newtext = text.toUpperCase()
    setText(newtext);
    props.showAlert('Converted to Upper-Case', 'success')
  }
 //===============================================================
    const handleOnChange = (event)=>{
    setText(event.target.value);
   }
 //===============================================================
    const  handleLoClick = ()=>{
    let newtext = text.toLowerCase()
    setText(newtext);
    props.showAlert('Converted to Lower-Case', 'success')
    }
 //===============================================================
    const  handleClear = ()=>{
      setText('');
      props.showAlert('Text is Clear', 'success')
    }
 //===============================================================
 const handleCopy= ()=>{
  navigator.clipboard.writeText(text);
   props.showAlert('Text is Copy', 'success')
 }
 //===============================================================
    const handleExtraSpaces= ()=>{
      let newText= text.split(/[ ]+/)
      setText(newText.join(" "));
      props.showAlert('Extra-Spaces has been removed', 'success')
    }
 //===============================================================
return (
  <div>
   
    <div class="mb-3"  >
    <h1 style={{color: props.mode === 'light'? 'dark':'light'}} htmlFor="exampleFormControlTextarea1" class="form-label">{props.title}</h1>
    <textarea style={{ backgroundColor: props.mode === 'light'? 'white':'#899fc3', color: props.mode === 'light'? 'dark':'light'}}  value={text} onChange={handleOnChange} class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>                                                                     
   
    <div>
    <button className="grid gap-3 btn btn-primary mx-1 my-1" disabled ={text.length===0} type="button" onClick={handleUpClick}  >Convert to Uppercase</button>
    <button className="grid gap-3 btn btn-primary mx-1 my-1" disabled ={text.length===0} type="button" onClick={handleLoClick}  >Convert to Lowercase</button>
    <button className="grid gap-3 btn btn-primary mx-1 my-1" disabled ={text.length===0} type="button" onClick={handleClear}  >Clear Text</button>
    <button className="grid gap-3 btn btn-primary mx-1 my-1" disabled ={text.length===0} type="button" onClick={handleCopy}  >Copy Text</button>
    <button className="grid gap-3 btn btn-primary mx-1 my-1" disabled ={text.length===0} type="button" onClick={handleExtraSpaces}  >Remove Extra Space</button>
   </div>

    
    <div className = "container my-3" style={{color: props.mode === 'light'? 'dark':'light'}} >
    <h2>Your Text Summary </h2>                      
    <p>Text Contain {text.length} words and {text.split(/\s+/).filter((a)=>{return a.length!=0}).length} Characters</p>
    <p>{0.08*text.split(" ").filter((a)=>{return a.length!=0}).length} Time Consume for reading this text</p>
    <h4>Preview of Above Text</h4>
    <p> {text.length>0? text:'Enter text in above text-box to preview it here.'}</p>
    </div>
    
  </div>
  )
}

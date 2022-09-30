import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
// text="new start"; wrong way to cahnge state
//setText("New Text");
 const handleupclick = ()=>{
  //console.log("Uppercase was clicked" + text);
  let newText=text.toUpperCase();
  setText(newText);
 }
 const handlelowclick = ()=>{
   let newText=text.toLowerCase();
  setText(newText);
 } 
 const handleitnow = ()=>{
  let newText=" ";
 setText(newText);

} 
 const handleonchange = (event)=>{
 // console.log("On Change ");
    setText(event.target.value)
    props.showAlert
 }
 const handlecopy = ()=>{
  console.log("Shrey Wants to copy");
  var text=document.getElementById("mybox");
 text.select();
 navigator.clipboard.writeText(text.value);

 }
 const handlespaces =()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
 }

  return (
    <>
    <div className="container" style={{color:props.mode=='dark'?'white':'black' }}>
     <h1>{props.heading}</h1 >
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}} id="mybox" rows="18"></textarea>
</div>
 <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to upper case</button>
 <button className="btn btn-primary mx-1" onClick={handlelowclick}>Convert to lower case</button>
 <button className="btn btn-primary mx-1" onClick={handleitnow}>Clear</button>
 
 <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text </button>
 <button className="btn btn-primary mx-1" onClick={handlespaces}>Remove Spaces </button>
 
 
    </div>
    <div className="container my-3" style={{color:props.mode=='dark'?'white':'black' }}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length}characters</p>
      <p>{0.005*text.split(" ").length} minutes read</p>
      
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above text box to preview it here"}</p>
      </div>
    </>
  )
}

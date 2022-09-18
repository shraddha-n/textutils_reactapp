import React,{useState} from 'react'



export default function Textfrom(props) {
    const [text,setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpperCaseOnClick=()=>{
        setText(text.toLocaleUpperCase());
        if(text === null || text === ''){
            props.showAlert("danger","Please Enter Text")
        }else{
            props.showAlert("success","Converted to UpperCase")
        }    
    }
    const handleLowerCaseOnClick =()=>{
       
        setText(text.toLocaleLowerCase());
        if(text === null || text === ''){
            props.showAlert("danger","Please Enter Text")
        }else{
            props.showAlert("success","Converted to LowerCase")
        }
    }
    return (
    <>
    <div className="container"  style={{color:props.mode === 'dark' ?'white':'black'}} >
    <h3>{props.heading}</h3>
        <div>
            <textarea  style={{backgroundColor:props.mode === 'dark' ?'#123568':'white',color:props.mode === 'dark' ?'white':'black'}} value={text} placeholder="Enter text here" onChange={handleOnChange} className="form-control" rows="8"  ></textarea>
        </div>
        <button className='btn btn-primary my-3 mx-2' style={{backgroundColor:props.mode === 'dark' ?'white':'#123568',color:props.mode === 'dark' ?'black':'white'}} onClick={handleUpperCaseOnClick}>Convert Upper Case</button>
        <button className='btn btn-primary my-3 mx-2' style={{backgroundColor:props.mode === 'dark' ?'white':'#123568',color:props.mode === 'dark' ?'black':'white'}} onClick={handleLowerCaseOnClick}>Convert Lower Case</button>
        <div className='container'>
            <h4>Your Text summary</h4>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
    </div>
        
    </>

  )
}


import { useState } from "react";
import Nav from "./Nav";
export default function Header({getKeywords}){
//  const onChangeHandler = (event) =>{
//     const value = event.target.value === '' ? false:true;
//    setKeyWords(event.target.value);
//     setActive(value)
//  }
   const [active, setActive]=useState(false);
    const [keyWords,setKeyWords] = useState('')

    return(
        <>
        <header style={{background: `${active ?  "#346739":"#79AE6F"}`}}>
            <div className="logo" >Awsome News</div>
          <input  onChange={getKeywords}
          />
          {/* <p>The Keyword are: {keyWords}</p> */}
          <Nav/>
        </header>
        </>
    );
}
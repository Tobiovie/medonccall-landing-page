import { useEffect, useMemo, useRef, useState } from "react"

let words=['Purchase Prescribed Drugs','Consult Healthcare Professionals','All In One App']
let letterIndex=0
let wordIndex=0
let len=words[wordIndex].length
    
const Writer=()=>{
    const text =useRef()
    useEffect(()=>{
       const intr=setInterval(() => {
          if(wordIndex<words.length){
            if(letterIndex<words[wordIndex].length){
                text.current.textContent=text.current.textContent.concat(words[wordIndex][letterIndex])
                letterIndex+=1
             }else if(letterIndex==words[wordIndex].length){
               setTimeout(() => {
                    text.current.textContent=text.current.textContent.slice(0,len-1)
                    len-=1
               }, 1000);
                if(len==0){
                    wordIndex+=1
                    letterIndex=0
                    len=words[wordIndex].length
                 }
             }
          }else{
            wordIndex=0
            letterIndex=0
            len=words[wordIndex].length
          }
       }, 140);
       return ()=>{
        clearInterval(intr)
       }
    },[])
    return (
        <div id='writer-box'>
            <span className="writer" ref={text}></span><div id="blink"></div>
        </div>
    )
}
export default Writer
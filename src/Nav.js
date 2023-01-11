import reddot from './pictures/red-dot.svg'
import cancel from './pictures/cancel.svg'
import hamburger from './pictures/hamburger.svg'
import { useEffect, useMemo, useRef, useState, useLayoutEffect, useCallback } from 'react'
const Nav=()=>{
    const [navshow,setNavshow]=useState(false)
    const [hover,sethover]=useState(false)
    const [scroll,setscroll]=useState(window.screenY)
    const [win,setwin]=useState('')
    useLayoutEffect(()=>{
        setscroll(window.scrollY)
    },[])
    const Scrollevent=()=>{
        if(window.scrollY>scroll){
            setwin('nav-down')
        }else{
            setwin('nav-up')
        }
        setscroll(window.scrollY)
    }
    useEffect(()=>{
        window.addEventListener('scroll',Scrollevent)
        return ()=>{
            window.removeEventListener('scroll',Scrollevent)
        }
    },[scroll])
    return (
        <nav className={win}>
            <div className='first-nav'>
                <div className='med-icon-box'>
                   <p>MedOncall</p>
                   <div className='dots'><img src={reddot} alt=''/><img src={reddot} alt=''/><img src={reddot} alt=''/></div>
                </div>
                <img onClick={()=>setNavshow(!navshow)} className={`icon ${navshow?'spin':''}`} src={navshow?cancel:hamburger} alt=''/>
            </div>
            <div id='secnav' className={`sec-nav ${navshow?'show-sec-nav':''}`}>
                <div className='solute-box'>Features<img onMouseOver={()=>sethover(true)} onMouseOut={()=>sethover(false)} className={`arrow`} src='https://medoncall-fab0f.web.app/static/media/Vector.b1086b3b.svg' alt=''/>
                    <div className={`solute-nav`}>
                        <div>Book consultation</div>
                        <div>Drug store</div>
                    </div>
                </div>
                <div>FAQ</div>
                <div>Contact</div>
                <div className='button'>Get it Now</div>
            </div>
        </nav>
    )
}
export default Nav
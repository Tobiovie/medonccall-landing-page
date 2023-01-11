import Nav from "./Nav"
import reddot from './pictures/red-dot.svg'
import videoicon from './pictures/video.svg'
import telephone from './pictures/telephone.svg'
import chatbox from './pictures/chatbox.svg'
import kite from './pictures/kite.svg'
import clock from './pictures/clock-icon.svg'
import bell from './pictures/bell-icon.svg'
import location from './pictures/location-icon.svg'
import facebook from './pictures/icon-facebook.svg'
import twitter from './pictures/icon-twitter.svg'
import instagram from './pictures/icon-instagram.svg'
import Group from "./Group"
import Writer from "./components/Writer"

const Main=()=>{
    return (
        <div>
            <Nav/>

            <div className='first-cont'>
                <div className='typebox-parent'>
                    <Writer/>
                    <div className="tr">
                        Get connected with highly experienced medical healthcare practioners at your own
                        time. No waits, no commuting delay.Professionals anywhere anytime. <span>How easy can that be</span>
                    </div>
                    <div className='button-box'>
                        <p>Download now</p>
                        <p>Explore features</p>
                    </div>
                </div>
                <div class="ski">
                    <div class="img2">
                        <div id='white1' className="white"><img  class="" src={videoicon} alt=""/></div>
                        <div id='white2' className="white"><img className="t" src={chatbox} alt=""/></div>
                        
                    </div>
                    <div class="img">
                        <img src="https://medoncall-fab0f.web.app/static/media/line_one.6e1ec428.svg" alt=""/>
                        <img src="https://medoncall-fab0f.web.app/static/media/line_two.99c64c88.svg" alt=""/>
                    </div>
                    <div id='white3' className="white"><img className="" src={telephone} alt=""/></div>
                </div>
            </div>

            <div>
                <div className="second-cont">
                    <div className="cont">
                        <div className='bigkite-box'>
                            <img className="" src={kite} alt=""/>
                            <img className="kite" src="https://medoncall-fab0f.web.app/static/media/Rectangle%2013.cc916e6c.svg" alt=""/>
                        </div>
                        <img src="https://medoncall-fab0f.web.app/static/media/Vector9.3be08267.svg" alt=""/>
                    </div>
                    <div className='flex'>
                        <img className='phone-size' src='https://medoncall-fab0f.web.app/static/media/Rectangle1.320067d1.png' alt=''/>
                        <div className='flex-group'>
                            <div>
                                <div className="pic-box"><img src={clock} alt=''/></div>
                                <p>Thousands of specialist at your disposal</p>
                                <p>
                                    At Medoncall, We ensure that the best of practioners attend to your request providing 
                                    the highest quality of medical services for a quick and samless recovery.
                                </p>
                            </div>
                            <div>
                                <div className="pic-box"><img src={bell} alt=''/></div>
                                <p>Cost-friendly prices</p>
                                <p>
                                    With our unique telemedicine solution, you do not have to break the bank to Get
                                    top-notch medical consultations that enable you and your loved ones acesess all-iclusive
                                    and affordable healthcare services.
                                </p>
                            </div>
                            <div>
                                <div className="pic-box"><img src={location} alt=''/></div>
                                <p>Scheduled home visit</p>
                                <p>Even if you require physical attention, we will still come to you ensuring optinum convenience as promised.</p>
                            </div>
                            <img className="arrow" src='https://medoncall-fab0f.web.app/static/media/Vector8.aefc3665.svg' alt=''/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='third-sec'>
                <div>Do more with MedOncall</div>
                <div className='service-box-parent'>
                    <div className='service-box'>
                        <Group>
                            <div className='section-parent'>
                                <section>
                                    <p>Pick a service</p>
                                    <img class='angle' src='https://medoncall-fab0f.web.app/static/media/ForwardArrow.2ede6e71.svg' alt=''/>
                                </section>
                                <div className='animate'></div>
                            </div>
                            <div>
                                Choose a service to get professional in a specialized field, Whether general checkup, Emergency, Body and nutrion,
                                there is a consultant for it.
                            </div>
                        </Group>
                        <Group>
                            <div  className='section-parent'>
                                <section>
                                    <p>Connect virtually</p>
                                    <img  class='angle' src='https://medoncall-fab0f.web.app/static/media/ForwardArrow.2ede6e71.svg' alt=''/>
                                </section>
                                <div className='animate'></div>
                            </div>
                            <div>
                                Whatever means of commuinication you prefer- video calling,audio calling or texting
                                is adequate. keep it in mind that all information divulged will be treated confidencially.
                            </div>
                        </Group>
                        <Group>
                            <div className='section-parent'>
                                <section>
                                    <p>Need medicatons</p>
                                    <img  class='angle' src='https://medoncall-fab0f.web.app/static/media/ForwardArrow.2ede6e71.svg' alt=''/>
                                </section>
                                <div className='animate'></div>
                            </div>
                            <div>
                                We provide an online pharmacy where you order prescribed medication. for quality
                                assurace purposes we source our product directly from the manufacturers.
                            </div>
                        </Group>
                    </div>
                    <img className='phone' height='730' width='330' src='https://medoncall-fab0f.web.app/static/media/Rectangle2.6c76acc2.png' alt=''/>
                </div>
            </div>

            <div className="utility" id='fourth-sec'>
                <div className="text">It only gets better...</div>
                <div className="utility" id='cont-box'>
                    <div className="utility wrapping">
                        <div id='wr'>
                            <p className="red-text">Flexible Health Plan</p>
                            <p>
                                We work within your budget offering you a varieties of packages
                                for you, your families, and your employees with the best services included.
                            </p>
                        </div>
                        <div id='wr'>
                            <p className="red-text">Covid compliant practices</p>
                            <p>
                                Concern about covid, be rest assured; our doctors are highly experienced
                                to administer treatment, taking into all the preventive measures when visiting our home.
                            </p>
                        </div>
                    </div>
                    <div className='none' id="three-phones">
                        <img className="medium" src='https://medoncall-fab0f.web.app/static/media/consultation1.7588fa20.png' alt=''/>
                        <img className="arrow" src='https://medoncall-fab0f.web.app/static/media/Vector11.d644a8c6.svg' alt=''/>
                        <img id="big-phone" src='https://medoncall-fab0f.web.app/static/media/consultation2.720aaf54.png' alt=''/>
                        <img className="arrow" src='https://medoncall-fab0f.web.app/static/media/Vector10.76db3e72.svg' alt=''/>
                        <img className="medium" src='https://medoncall-fab0f.web.app/static/media/consultation3.43e2c551.png' alt=''/>
                    </div>
                    <div className="button">Learn more about this</div>
                </div>
            </div>

            <div className="utility" id="fifth-sec">
                <div className="utility" id="pharm-box">
                    <p className="text pharmacy">Pharmacy? you have it on the same app?</p>
                    <p className="button">Read more</p>
                </div>
                <div className="utility wrapping" id="drug-all">
                    <img className='none' id="curve-arrow" src='https://medoncall-fab0f.web.app/static/media/Vector13.851a0cc9.svg' alt=''/>
                    <div className="drug-box utility">
                        <div className="pic-box"><img src='https://medoncall-fab0f.web.app/static/media/drugs.62a7744d.svg' alt=''/></div>
                        <p className="red-text">Buy over the counter</p>
                        <p>Buy regular medicine you'd get from the pharmacist without necessary prescription.</p>
                    </div>
                    <div className="utility drug-box">
                        <div className="pic-box"><img src='https://medoncall-fab0f.web.app/static/media/Condrugs.f1db0333.svg' alt=''/></div>
                        <p className="red-text">Buy prescription drugs</p>
                        <p>Get medicine prescribed by your personal doctor or pharmacist on medoncall or anywhere else.</p>
                    </div>
                </div>
            </div>

            <div className='none' id='sixth-sec'>
                <div className="text health-text">Stay ahead with the latest health news</div>
                <div className="back-box">
                    <div></div>
                    <div><p className="para1 design">Vaccine</p></div>
                    <div><p className="para2 design">Break Through</p></div>
                    <div><p className="para3 design">Research</p></div>
                </div>
            </div>

            <div className="utility" id="seventh-sec">
                <div className="get">Get it on App Store</div>
                <div className="wrapping utility" id="store">
                    <img src='https://medoncall-fab0f.web.app/static/media/googleplay.59320bb7.svg' alt=''/>
                    <img src='https://medoncall-fab0f.web.app/static/media/Applestore.56c2e69e.svg' alt=''/>
                </div>
            </div>

            <footer>
                <div className="utility" id="foot1">
                    <div className='med-icon-box'>
                        <p>MedOncall</p>
                        <div className='dots'><img src={reddot} alt=''/><img src={reddot} alt=''/><img src={reddot} alt=''/></div>
                    </div>
                    <div id="fulltext" className="small-font">Adsress: Lorem ipsum dolor sit amet,consectetur adipisicing elit.Ab recusandae neque porro est illum magnam consequuntur minus reprehenderit? recusandae neque porro est 
                        EmailAddress: info@medoncall.com
                    </div>
                </div>
                <div className="utility" id="foot2">
                    <div>Company</div>
                    <div className="share small-font">
                        <p>Pricing</p>
                        <p>About us</p>
                        <p>Privacy policy</p>
                        <p>Terms of Use</p>
                    </div>
                </div>
                <div className="utility" id="foot3">
                    <div>Features</div>
                    <div className="share small-font">
                        <p>Book store</p>
                        <p>Drug consultation</p>
                    </div>
                </div>
                <div className="utility" id="foot4">
                    <div>Help</div>
                    <div className="small-font">Freqeuntely Asked Questions</div>
                </div>
                <div className="small-font" id="foot5">Made with ❤️ by <a href=''>Apptide Technologies</a></div>
                <div className="utility" id="foot6">
                    <img src={facebook} alt=''/>
                    <img src={twitter} alt=''/>
                    <img src={instagram} alt=''/>
                </div>
                <div className="utility small-font" id="foot7">(c)Copy 2021 | All Rights Reserved | Medoncall</div>
            </footer>
        </div>
    )
}
export default Main
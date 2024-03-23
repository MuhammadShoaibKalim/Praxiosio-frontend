import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './style.css';
import flaskImg from "../assets/images/flask.png";
import keysImg from "../assets/images/keys.png";
import pharmacyImg from "../assets/images/pharmacy.png";
import programingImg from "../assets/images/programming.png";
import backgroundVideo from '../assets/videos/background.mp4';
import logo1 from '../assets/images/logo1.png';
import sitelogo from '../assets/images/SKPlogo.jpg';
import centerlogo from '../assets/images/centerlogo.jpg';
const Home = () => {
    const rotations = ["PRAXISIO", "CHEMICALS", "CODES", "CALCULATIONS", "MEDICINES"];
    const texts = [
        "We provide you ChatGPT-4.0 based information in a convenient way.",
        "You can see the reactions of chemicals to chemicals in a convenient way and a lot more.",
        "You can compile more than 25 programming languages and convert them into other languages and a lot more.",
        "You can calculate/solve any expression and get details by using formulas and much more.",
        "You can get information on all diseases, their medicine, and more."
    ];

    const [bannerText1, setBannerText] = useState('WELCOME TO PRAXISIO');
    const [showRightBox, setShowRightBox] = useState(false);
    const [ImageCart,setImage]=useState(null)
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);

    useEffect(() => {
        let currentIndex = 0;
    
        // Initialize Typed instances for headings
        const headingTyped = new Typed(headingRef.current, {
            strings: rotations,
            typeSpeed: 200,
            backSpeed: 300,
            loop: false, // Disable looping initially
            showCursor: true,
            onComplete: () => {
                // Enable looping once all headings are typed
                headingTyped.loop = false;
            }
        });
    
        // Initialize Typed instances for paragraphs
        const paragraphTyped = new Typed(paragraphRef.current, {
            strings: texts,
            typeSpeed:20,
            backSpeed:25,
            loop: false, // Disable looping initially
            showCursor: true,
            onComplete: () => {
                // Enable looping once all paragraphs are typed
                paragraphTyped.loop = false;
            }
        });
    
        // Cleanup function
        return () => {
            // Stop looping and destroy Typed instances
            headingTyped.loop = false;
            paragraphTyped.loop = false;
            headingTyped.destroy();
            paragraphTyped.destroy();
        };
    }, []);
    
    const handleChemicalsClick = (cardName) => {
       
        document.getElementById('banner').scrollIntoView({ behavior: 'smooth' });
        if (cardName === 'Chemicals') {
            
            setShowRightBox(true);
         
            setBannerText(
                <div>
                    <li>1. Get details of all chemicals.</li>
                    <li>2. Get details of periodic table elements.</li>
                    <li>3. Get details of all metals.</li>
                    <li>4. Get details of different molecules.</li>
                    <li>5. Get details of atoms & their parts.</li>
                    <li>6. Get details of separation techniques.</li>
                    <li>7. See reaction of chemicals to chemicals.</li>
                    <li>8. Get details of reactions in step-by-step</li>
                    <li>9. Save the reaction and their details.</li>
                    <li>10. Translate results into any language <br/>and listen.</li>
                    <li>11. Remove plagiarism before copying.</li>
                    <li>12. Know recommendations for quantity <br/> adjustments.</li>
                    <li>13. Know about cautions of reactions.</li>
                    <li>And more.</li>
                </div>
            );
            setImage(
                <div>
                    <img src={flaskImg} className="img-fluid" alt="" />
                    <h6>Chemicals</h6>
                </div>
            );

           
        } else if (cardName === 'Codes') {
            setShowRightBox(true)
            setBannerText(
                <div>
                    <ul>
                        <li>1. Compile more than 25 programming languages.</li>
                        <li>2. Translate different programming languages <br></br>
                            to others and get details of translated code.</li>
                        <li>3. Concise the code into less line.</li>
                        <li>4. Get details of errors and fix them.</li>
                        <li>5. Get the syntax and rules of different language.</li>
                        <li>6. Save the written code.</li>
                        <li>7. Get already created required code in any language.</li>
                        <li>8. Get recommendations for modifications of code.</li>
                        <li>9. Remove the plagiarism before coping.</li>
                        <li>10. Translate the details into a different language.</li>
                        <li>11. Listen to the written details.</li>
                        <li>And more.</li>
                    </ul>
                </div>
            );
            setImage(
                <div>
                    <img src={programingImg} className="img-fluid" alt="" />
                    <h6>Codes</h6>
                </div>
                
            );
        } else if (cardName === 'Calculations') {
            setShowRightBox(true);
            setBannerText(
                <div>
                    <ul>
                        <li>1. All types of math questions solved.</li>
                        <li>2. All types of Physics/Chemistry numerical solutions.</li>
                        <li>3. Formula explanation which is used in the <br></br>
                        solution and creation of formula detail.</li>
                        <li>4. More than 1 method to solve one question.</li>
                        <li>5. Answer using graphs (if possible) with dummy<br></br>
                             values more and less than given values.</li>
                        <li>6. Recommendations to increase and decrease the values.</li>
                        <li>7. Save the result like other sections.</li>
                        <li>8. Ask anything, can translate the answer and can listen.</li>
                        <li>9. Can learn in a step-by-step way like in the compiler section.</li>
                        <li>10. Detail of all formulas will be given in detail button.</li>
                        <li>read more</li>
                    </ul>
                </div>
            );
            setImage(
                <div>
                    <img src={keysImg} className="img-fluid" alt="" />
                    <h6>Calculations</h6>
                </div>
            );
        } else if (cardName === 'Medicines') {
            setShowRightBox(true);
            setBannerText(
                <div>
                    <ul>
                        <li>1. The user can get detail related to following <br></br>things such as:
                            <ul>
                                <li>a. Human</li>
                                <li>b. Animals</li>
                                <li>c. Plants</li>
                                <li>d. Reptiles</li>
                                <li>e. Insects</li>
                                <li>f. Birds</li>
                                <li>g. Fishes</li>
                                <li>h. Bacteria/Fungi</li>
                            </ul>
                        </li>
                        <li>2. User can get how to stay/keep healthy.</li>
                        <li>3. Parts and parts of parts of these <br></br>
                         things and their position in the body/thing.</li>
                        <li>4. Can get the detail of physical changes.</li>
                        <li>5. Can know about symptoms.</li>
                        <li>6. Can know about Diseases.</li>
                        <li>7. About Medicines of diseases.</li>
                        <li>8. About exercises for physical changes.</li>
                        <li>9. Can know about the combination of <br></br>
                        medicine to be used and also some similar medicines.</li>
                        <li>10. Causes of this disease</li>
                        <li>11. Side effects of the medicines.</li>
                        <li>12. Elements of which the medicine is created</li>
                        <li>13. History and detail of the medicine</li>
                        <li>14. How/Where to get/create the medicine.</li>
                        <li>15. How to create alternative of this medicine.</li>
                        <li>16. User can save like in other sections.</li>
                        <li>17. Can see images of species (Get from API if <br></br> possible or cancel it)</li>
                        <li>18. Can ask the questions</li>
                        <li>19. Can translate the details and listen <br></br> in any language</li>
                        <li>read more</li>
                    </ul>
                </div>
            );
            setImage(
                <div>
                    <img src={pharmacyImg} className="img-fluid" alt="" />
                    <h6>Medicines</h6>
                </div>
            );
        }
    };
    

    return (
        <div className="background-video">
            <video autoPlay muted loop id="video-background">
                <source src={backgroundVideo} type="video/mp4" />
            </video>

            <div className="header" id='banner'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-start">
                            <div className="left-logo">
                                <a href="#.">
                                   <span><h5><strong>SKP</strong>&nbsp;DEVELOPER</h5></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="center-logo">
                                <a href="#.">
                                     <span><h5><strong>PRAXISIO</strong></h5></span>
                                     </a>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-end">
                            <div className="login-button">
                                <input type="radio" className="btn-check" name="options-base" id="option5" autoComplete="off" />
                                <label className="btn rounded-pill" htmlFor="option5">
                                    LOGIN
                                </label>

                                <input type="radio" className="btn-check btn" name="options-base" id="option6" autoComplete="off"/>
                                <label className="btn bg-white text-black rounded-pill" htmlFor="option6">
                                    SIGNUP
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="banner-left-text">
                                <h3 ref={headingRef} className="txt-rotate heading cursor"></h3>
                                <p ref={paragraphRef} className="cursor paragraph"></p>
                            </div>
                        </div>
                        {showRightBox &&  
                            <div className="col-md-5 p-0" data-aos="fade-down-left"  data-aos-duration="2000" id="right" >
                                <div className="banner-right-text d-flex align-items-center ">
                                    <div className="banner-image text-center">
                                        {/* Display image based on user click */}
                                        {ImageCart}
                                    </div>
                                    <div className="banner-text bannerText">
                                        <marquee behavior="scroll" direction="up"  loop="-1" id='marquee' truespeed='100' scrolldelay='70'>
                                            <ul>
                                               <li id='demo'>{bannerText1}</li>
                                            </ul>
                                        </marquee>
                                    </div>
                                </div>
                                <div className="button-box text-end">
                                    <a href="#." className="btn rounded-pill btn-primary">
                                        DIVE IN
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {/* Services Box and other JSX elements */}

            <div className="services">
       
               <div className="container">
               
                   <div className="row" >
                       <div className="col-md-3 d-flex align-items-center justify-content-center" id="first">
                           <div className="services-box"  onClick={() => handleChemicalsClick('Chemicals')} >
                               <div className="services-icon">
                                   <img src={flaskImg} className="img-fluid" alt="" />
                               </div>
                              <div>
                               
                               </div>
                               <div className="services-text">
                                   <h5>CHEMICALS</h5>
                                  {/* {showText && <p>Additional text or content to be shown when icon is clicked.</p>} */}
                               </div>
                           </div>
                       </div>
                       <div className="col-md-3 d-flex align-items-center justify-content-center" id="Third">
                           <div className="services-box text-center" onClick={() => handleChemicalsClick('Codes')}>
                               <div className="services-icon">
                                   <img src={programingImg} className="img-fluid" alt=""  />
                               </div>
                               <div className="services-text">
                                   <h5>CODES</h5>
                            </div>
                           </div>
                       </div>
                      <div className="col-md-3 d-flex align-items-center justify-content-center" id="Third">
                           <div className="services-box" onClick={() => handleChemicalsClick('Calculations')}>
                            <div className="services-icon" >
                                   <img src={keysImg} className="img-fluid" alt="" />
                               </div>
                               <div className="services-text">
                                   <h5>CALCULATIONS</h5>
                               </div>
                           </div>
                      </div>
                       <div className="col-md-3 d-flex align-items-center justify-content-center" id='Four'>
                        <div className="services-box" onClick={() => handleChemicalsClick('Medicines')}>
                               <div className="services-icon">
                                  <img src={pharmacyImg} className="img-fluid" alt="" />
                           </div>
                               <div className="services-text">
                                  <h5>MEDICINES</h5>
                               </div>
                           </div>
                       </div>
                   </div>
            </div>
           </div>
            <div className="overlay-content">
                <div className=" text-center">
                    <p className="">A project of SKP Developers by <a href=""> Muhammad Muqeem Malik</a></p>
                    <img src={logo1} alt="hallo" width="20px" className="image" />&nbsp;<span className=""><a href="">University of Education Lahore</a></span>
                </div>
            </div>
        </div>
    );
}

export default Home;








             
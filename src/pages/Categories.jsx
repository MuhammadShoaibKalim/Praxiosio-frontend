import react from 'react'
import { IoLanguageSharp } from "react-icons/io5";
import { GrAssistListening } from "react-icons/gr";
import { FaRegSave } from "react-icons/fa";
import { CgFileRemove } from "react-icons/cg";
import { TbReload } from "react-icons/tb";
import { LuTestTube } from "react-icons/lu";

// import {ContentCopyIcon, RecordVoiceOverIcon ,  SaveIcon,TbReload} from '@mui/icons-material/ContentCopy';

import "./categories.css"

const Categories = () => {
  return (
    <div className='main-div'>
           <div className='left-side-div'> 
             <div className='search-bar-one'></div>
             <div className='add-box-one'>
              <h2 style={{textAlign:"center", paddingTop:"45px"}}>Adds box-1 </h2>
             </div>
             <div className='search-bar-two'></div>
             <div className='add-box-two'>
              <h2 style={{textAlign:"center", paddingTop:"125px"}}>Adds Box-2</h2>
             </div>
           </div>
           <div className='right-side-div'>
            <div className='chemicals'>
                   <div style={{paddingLeft:"10px"}}><h2>Chemicals</h2></div>
                    <div className='textarea'>
                     <textarea name="textarea" id="" cols="123" rows="5"> hello</textarea>
                  </div>
            </div>
            <div className='main-banner-1'>
              <div>
                <h2 style={{textAlign:"center", paddingTop:"24px"}}> Advertisment Box-1 </h2>
              </div>
            </div>
            <div className='information-box'>
              <div><h2 style={{color:"blue", padding:"5px"}}>Information Box</h2></div>
              <div className='info-box'>
                <hr />
                <div className='chemical-name'><h4 style={{paddingLeft:"5px"}}>Chemical Name:</h4></div>
                <div className='info-input-box'>
                   <p>Details</p> 
                   <p>History</p> 
                   <p>Nature</p> 
                   <p>Structure</p> 
                   <p>Formula/Expression</p> 
                   <p>Reaction</p>  
                </div>
              </div>
            </div>
            <div className='main-banner-2'>
              <div>
                <h2 style={{textAlign:"center", paddingTop:"24px"}}> Advertisment Box-2 </h2>
              </div>
            </div>
            <div className='reaction-labs'>
              <div className='reaction-lab'><h2> Reaction Lab</h2> </div>
            <div className='chem-chem'>
              <div><button>Chemical</button></div>
                <div className='to'><p>To</p></div>
               <div> <button>Chemical</button></div>
              </div>
              <div>
                <div className='reaction-cube'> 
                   <p> <LuTestTube style={{fontSize:"100px", marginRight:"20px"}}/></p>  
                   <p> <LuTestTube style={{fontSize:"100px", marginRight:"20px"}}/></p> 
                </div>
                <div className='quantity'>
                   <p>Qunatity 1 <input type="text" /> ML</p>
                   <p>Qunatity 2 <input type="text" /> ML</p>
                </div>
              </div>
              <p className='line'>-----------------------------</p>
              <div className='Heat-amount'><p>Heat <input type="text" />`C</p></div>
              <div className='chemical-add'> 
                  <div><button>Chemical 1</button></div>
                  <div><button>Chemical 2</button></div>
                   <div><p>+</p></div>
    
              </div>
              <div className='result'>
                <button>Result</button> 
              </div>
              
            </div>
            <div className='main-banner-3'>
              <div>
                <h2 style={{textAlign:"center", paddingTop:"24px"}}> Advertisment Box-3 </h2>
              </div>
            </div>
            <div className='results'>
              <h2>Result</h2>
            </div>
            <div className='traslation-div'>
               <div className='icons'>
                <div className='icon-sign'><p><IoLanguageSharp style={{fontSize:"40px"}}/></p>
                <p>Translate</p>
                </div>
                <div className='icon-sign'><p><GrAssistListening style={{fontSize:"40px"}}/></p>
                <p>Listen</p>
                </div>
                <div className='icon-sign'><p><CgFileRemove style={{fontSize:"40px"}}/></p>
                <p>Remove Plagrism </p>
                </div>
                <div className='icon-sign'><p><TbReload style={{fontSize:"40px"}}/></p>
                <p>Reload</p>
                </div>
              </div>
            </div> 
            <div className='main-banner-4'>
              <div>
                <h2 style={{textAlign:"center", paddingTop:"24px"}}> Advertisment Box-4 </h2>
              </div>
            </div>
           
           </div>
    </div>
  )
}

export default Categories

// import SaveIcon from '@mui/icons-material/Save';
// import { CgFileRemove } from "react-icons/cg";


/*
<p> <IoLanguageSharp style={{fontSize:"40px"}}/></p>
                <p> <GrAssistListening style={{fontSize:"40px"}}/></p>
                <p><FaRegSave style={{fontSize:"40px"}}/></p> 
                <p><CgFileRemove style={{fontSize:"40px"}}/></p> 
                <p><TbReload style={{fontSize:"40px"}}/></p>
*/ 
import React, { useState } from 'react';
import './Sidebar.css'; // Import CSS file

function Sidebar() {

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleItemClick = (item) => {
    setSearchText(item);
  
  };

  return (
    <div>
      <section>
      <nav className='searchbar'>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange} // Update state on input change
        />
        <span className="search-icon">&#128269;</span>
      </div>
      <ul>
        <li><a href="#" onClick={() => handleItemClick('HTML/CSS')}>HTML/CSS</a></li>
        <li><a href="#" onClick={() => handleItemClick('JAVASCRIPT')}>JAVASCRIPT</a></li>
        <li><a href="#" onClick={() => handleItemClick('REACT')}>REACT</a></li>
        <li><a href="#" onClick={() => handleItemClick('REACT NATIVE')}>REACT NATIVE</a></li>
        <li><a href="#" onClick={() => handleItemClick('ANGULAR.JS')}>ANGULAR.JS</a></li>
        <li><a href="#" onClick={() => handleItemClick('VUE.JS')}>VUE.JS</a></li>
        <li><a href="#" onClick={() => handleItemClick('NODE.JS')}>NODE.JS</a></li>
        <li><a href="#" onClick={() => handleItemClick('MONGODB')}>MONGODB</a></li>
        <li><a href="#" onClick={() => handleItemClick('NEXT.JS')}>NEXT.JS</a></li>
        <li><a href="#" onClick={() => handleItemClick('JAVA')}>JAVA</a></li>
        <li><a href="#" onClick={() => handleItemClick('C')}>C</a></li>
        <li><a href="#" onClick={() => handleItemClick('C++')}>C++</a></li>
        <li><a href="#" onClick={() => handleItemClick('C#')}>C#</a></li>
        <li><a href="#" onClick={() => handleItemClick('OBJECTIVE C')}>OBJECTIVE C</a></li>
        <li><a href="#" onClick={() => handleItemClick('TYPESCRIPT')}>TYPESCRIPT</a></li>
        <li><a href="#" onClick={() => handleItemClick('SWIFT')}>SWIFT</a></li>
        <li><a href="#" onClick={() => handleItemClick('RUBY')}>RUBY</a></li>
        <li><a href="#" onClick={() => handleItemClick('FLUTTER/DART')}>FLUTTER/DART</a></li>
        <li><a href="#" onClick={() => handleItemClick('ICONIC')}>ICONIC</a></li>
        <li><a href="#" onClick={() => handleItemClick('PYTHON')}>PYTHON</a></li>
        <li><a href="#" onClick={() => handleItemClick('KOTLIN')}>KOTLIN</a></li>
        <li><a href="#" onClick={() => handleItemClick('R')}>R</a></li>
        <li><a href="#" onClick={() => handleItemClick('EXPRESS')}>EXPRESS</a></li>
        <li><a href="#" onClick={() => handleItemClick('ASSEMBLY')}>ASSEMBLY</a></li>
        <li><a href="#" onClick={() => handleItemClick('LINUX')}>LINUX</a></li>
        <li><a href="#" onClick={() => handleItemClick('ADJANGO')}>ADJANGO</a></li>
        <li><a href="#" onClick={() => handleItemClick('LARAVEL')}>LARAVEL</a></li>
        <li><a href="#" onClick={() => handleItemClick('RUST')}>RUST</a></li>
        <li><a href="#" onClick={() => handleItemClick('HANDLEBARS')}>HANDLEBARS</a></li>
        <li><a href="#" onClick={() => handleItemClick('Jquery')}>Jquery</a></li>
        <li><a href="#" onClick={() => handleItemClick('CAFFESCRIPT')}>CAFFESCRIPT</a></li>
        
      </ul>
    </nav>
    
        
        <article>
        <div className='main-box'>
          <h2>Main Banner </h2>
        </div>
          <h2 className='info'>INFORMATION BOX</h2>

          <div className='card'>
            <div className='react'>
              <h1>REACT:</h1>
            </div>
            <div className='links'>
              <nav>
                <ul>
                  <li><a href="#">OVERVIEW</a></li>
                  <li><a href="#">EXPLANATION</a></li>
                  <li><a href="#">SYNTAX</a></li>
                  <li><a href="#">HISTORY</a></li>
                  <li><a href="#">SCOPE</a></li>
                </ul>
              </nav>
            </div>
          </div>

<hr style={{color:"blue"}}></hr>

          <div className='card2'>
            <div className='search2'>
            <p>
Since the content after the navbar depends entirely on the functionality of your website, I can't provide specific code</p>
<div className="search-container2">
        <input
          type="text"
          placeholder="Write the required code statement here"
          value={searchText}
          onChange={handleInputChange} // Update state on input change
        />
        <span className="search-icon2">&#128269;</span>
      </div>
            </div>
          </div>
          

          <div className='main-box'>
          <h2>Main Banner </h2>
        </div>

          <h2 className='info'>CODE EDITOR</h2>
          <div className='card3'>
            <div className='plus'>
              <h1>C++</h1>
            </div>

            <div className='links'>
              <nav>
                <ol>
           <li>#Include&lt;iostream&gt;</li>
                  <li>using named std;</li>
                 <li>main() &#123;</li>
                  <li>cout&lt;&lt;&quot;Hello World;&quot;</li>
                  <li>&#125;</li>
                </ol>
              </nav>
            </div>

           <div className='inner'>
            <h5>HTML</h5>
            <h5>CSS</h5>
            <h5>JAVASCRIPT</h5>
            <h5>+</h5></div>
          </div>


           
          <div className='main-box'>
          <h2>Main Banner </h2>
        </div>

        <h2 className='info'>INFORMATION BOX</h2>
        <div className='card4'>
            <div className='links'>
              <nav>
                <ul>
                  <li><a href="#">RESULT1</a></li>
                  <li><a href="#">RESULT2</a></li>
                  <li><a href="#">RESULT3</a></li>
                  <li><a href="#">RESULT4</a></li>
                  <li><a href="#">RESULT5</a></li>
                  <li><a href="#">RESULT6</a></li>
                </ul>
                <div className='ads'>
              <h4>Large Rectangle Ad</h4>
               </div>
               <h4 style={{color:" rgba(209, 73, 10, 0.5)"}}>RESULT WILL BE LOADED IN 00:00 S</h4>
              </nav>
            </div>
          </div>

          
        </article>
        
        
      
      
      </section>
     
     
  
    </div>
  );
}

export default Sidebar;

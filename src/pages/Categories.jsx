import react, {useState} from 'react';
import './categories.css';
import { IoSearchSharp } from "react-icons/io5";

const Categories = () => {
  // State to keep track of the selected country
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Function to handle click event on country links
  const handleCountryClick = (countryId) => {
    setSelectedCountry(countryId);
  };

  return (
    <div className='main'>


      
      <div className="sidenav">
        <div className="search-container">
          <input type='search' placeholder="Search" />
          <IoSearchSharp className="search-icon" />
        </div>
        {/* Sidebar with country links */}
        <a href="#1" onClick={() => handleCountryClick(1)}>Nepal</a>
        <a href="#2" onClick={() => handleCountryClick(2)}>India</a>
        <a href="#3" onClick={() => handleCountryClick(3)}>China</a>
        <a href="#4" onClick={() => handleCountryClick(4)}>Bhutan</a>
        <a href="#5" onClick={() => handleCountryClick(5)}>Pakis</a>
        <a href="#6" onClick={() => handleCountryClick(6)}>Lanka</a>
        <a href="#7" onClick={() => handleCountryClick(7)}>Nepal</a>
        <a href="#8" onClick={() => handleCountryClick(8)}>India</a>
        <a href="#9" onClick={() => handleCountryClick(9)}>China</a>
        <a href="#10" onClick={() => handleCountryClick(10)}>Bhutan</a>
        <a href="#11" onClick={() => handleCountryClick(11)}>Pakis</a>
        <a href="#12" onClick={() => handleCountryClick(12)}>Lanka</a>
        <div className="box-section">
        {/* Your content for the box section */}
        <h2>Adds Section</h2>
        <p>This is the content of the box section.</p>
      </div>
      </div>

      <div className="content">
        {/* Render content based on selected country */}
        {selectedCountry === 1 && (
          <>
            <h2>Nepal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
            </p>
          </>
        )}
        {selectedCountry === 2 && (
          <>
            <h2>India</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
            </p>
          </>
        )}
        {selectedCountry === 3 && (
          <>
            <h2>China</h2>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
           </p>
          </>
        )}
       

       {selectedCountry === 4 && (
          <>
            <h2>Nepal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
            </p>
          </>
        )}
        {selectedCountry === 5 && (
          <>
            <h2>India</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
            </p>
          </>
        )}
        {selectedCountry === 6 && (
          <>
            <h2>China</h2>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
           </p>
          </>
        )}


{selectedCountry === 7 && (
          <>
            <h2>Nepal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
   <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
            </p>
          </>
        )}
        {selectedCountry === 8 && (
          <>
            <h2>India</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.


              <br/>
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.

            </p>
          </>
        )}
        {selectedCountry === 9 && (
          <>
            <h2>China</h2>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
           </p>
          </>
        )}

{selectedCountry === 10 && (
          <>
            <h2>Nepal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
            </p>
          </>
        )}
        {selectedCountry === 11 && (
          <>
            <h2>India</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
            </p>
          </>
        )}
        {selectedCountry === 12 && (
          <>
            <h2>China</h2>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facere ullam et quod porro excepturi omnis, doloremque quisquam. 
              Optio at itaque quia. Sint sequi, saepe ex dolorum aspernatur eos voluptatem modi.
           </p>
          </>
        )} 
      </div>
    </div>
  );
}

export default Categories;

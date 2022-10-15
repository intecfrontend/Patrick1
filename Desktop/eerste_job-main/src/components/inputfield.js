import React, { useState } from 'react'
import '../App.css';
import searchIcon from "../assets/search.png"
import ONnetwerklogo from "../assets/ONnetwerk.svg"
import { Link } from 'react-router-dom'
import { stringify } from 'querystring';

function Inputfield({btntxt, inputplaceholder}) {
  const [BladQuery, setBladQuery] = useState('');


  // console.log('value3 is:' + (JSON.stringify(bladQuery)));


  const handleChange = event => {
    setBladQuery(event.target.value);

    console.log('value is:', event.target.value);
    console.log('value2 is:' + BladQuery);
  };

  
  return (
    <>

      <div className="ONntwk__inputcontainer">
        <img src={ONnetwerklogo} alt="ONlogo" className="ONntwk__logo" />

        <div className="ONntwk__inputwrapper">
          <input
            name="BladQuery"
            onChange={handleChange}
            value={BladQuery}
            className="ONntwk__input" placeholder={inputplaceholder} type="text" />
          <Link className="ONntwk__sidebutton" to={`search/${BladQuery}`}>


            <img src={searchIcon} alt="searchIcon" className="Nntwk__searchIcon" />
          </Link>
        </div>
        <div className="ONntwk__laatst">{btntxt}</div>
      </div>
    </>
  )
}

export default Inputfield
import React, { useState } from 'react'
import '../App.css';
import searchIcon from "../assets/search.png"
// import ONnetwerklogo from "../assets/ONnetwerk.svg"
import axios from "axios";
import { Link } from 'react-router-dom'


function InputSolo(props) {
  const [BladQuery, setBladQuery] = useState('');
  const bladQuery = props.BladQuery;


  // console.log('value3 is:' + (JSON.stringify(bladQuery)));


  const handleChange = event => {
    setBladQuery(event.target.value);

    console.log('value is:', event.target.value);
    console.log('value2 is:' + BladQuery);
  };
  return (
    <>
      <div className="ONntwk__inputwrapper">


      <input
            name="BladQuery"
            onChange={handleChange}
            value={BladQuery}
            className="ONntwk__input" placeholder="Zoek naar een magazine, catalogus of infoblad  " type="text" />
          <Link className="ONntwk__sidebutton" to={`${BladQuery}`}>


            <img src={searchIcon} alt="searchIcon" className="Nntwk__searchIcon" />
          </Link>


      </div>
    </>
  )
}

export default InputSolo
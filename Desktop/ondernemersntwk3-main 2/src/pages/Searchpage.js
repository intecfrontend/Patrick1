import React, { useState } from 'react'
import searchIcon from "../assets/search.png"
import { Link } from 'react-router-dom'
import HeaderInput from '../components/headerInput';

import FirmaCardsContainer from '../components/FirmaItems/Item-firmaLogoCont'

function SearchPage(props) {
  const [BladQuery, setBladQuery] = useState('');
  const bladQuery = props.BladQuery;
  const ondertxt = props.ondertxt;
  // const [ondertxt, setOndertxt] = useState('Parent')

  const handleChange = event => {
    setBladQuery(event.target.value);

    console.log('value is:', event.target.value);
    console.log('value2 is:' + BladQuery);
  };

  return (
    <div className="App">
      <div className="ONntwk__main">
        <div className="ONntwk__mainVertical ">
        <HeaderInput />


          <div className="ONntwk__inputwrapper">
            <input
              name="BladQuery"
              onChange={handleChange}
              value={BladQuery}
              className="ONntwk__input" placeholder="Ternat" type="text" />
            <Link className="ONntwk__sidebutton" to="/magazines">


              <img src={searchIcon} alt="searchIcon" className="Nntwk__searchIcon" />
            </Link>
          </div>

          <FirmaCardsContainer />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;

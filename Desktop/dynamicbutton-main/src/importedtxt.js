import React from 'react'
import './App.css';
// https://github.com/intecfrontend/ReactDataExtYellow
// https://www.youtube.com/watch?v=UrpNtB61qyo&t=235s
function importedtxt({changeWord, btntxt, btnclass}) {
  return (
    <>
      <h1 className={btnclass} >mailsender</h1>
      <button onClick={()=> changeWord('Benedikt')}>
        {btntxt}
      </button>
      
    </>)

}


export default importedtxt
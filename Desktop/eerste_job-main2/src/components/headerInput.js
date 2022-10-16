import React from 'react'
import ONnetwerklogo from "../assets/ONnetwerk.svg"
import HeaderInput from "./inputfieldSolo"


export default function headerInput() {
  return (
    <div>
      <div className="ONntk__header">
        <img src={ONnetwerklogo} alt="ONlogo" className="ONntwk__headerONLogo" />
        <div className="ONntwk__HeaderInputplacer">
          <HeaderInput />
        </div>

        <div className="ONntwk__buttonHeaderwrapper ">
          <div className="ONntwk__bluecardbtn ONntwk__btncont">
            <div className="ONntwk__bluecardbtn ONntwk__regularbtn">ALLE NETWERKEN </div>
          </div>
          <div className="ONntwk__bluecardbtn ONntwk__btncontaanmelden">
            <div className="ONntwk__bluecardbtn ONntwk__regularbtn">AANMELDEN</div>
          </div>

          <select className="ONntwk__bluecardbtn ONntwk__taalbtn">
            <option lassName="ONntwk__taalOptie" value="NL">NL</option>
            <option lassName="ONntwk__taalOptie" value="FR">FR</option>
            <option lassName="ONntwk__taalOptie" value="EN">EN</option>
            <option lassName="ONntwk__taalOptie" value="DE">DE</option>
          </select>
        </div>
      </div>
    </div >
  )
}

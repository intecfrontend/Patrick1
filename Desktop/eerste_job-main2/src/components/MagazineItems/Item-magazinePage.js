import React from 'react'
import LogoItem from "./Firmalogos/Kruidvatlogo.svg"
import cornericon from "./cornericon.svg"
import '../../App.css';

function firmaitem() {
  return (
    <>
      <div className="">
        <div className="">
          <img src={LogoItem} alt="logoItem" className="catalogImage" />

          <div className="ONntwk__FirmaItemTitle">Kruidvat Ternat</div>
          <div className="ONntwk__FirmaItemSubTitle">...magazines<br />...catalogi</div>

          <div className="ONntwk__buttonwrapper ">
            <div className="ONntwk__bluecardbtn ONntwk__btncont">
              <div className="ONntwk__bluecardbtn ONntwk__regularbtn">VOLGEN </div>
            </div>
            <div className="ONntwk__bluecardbtn ONntwk__btncont">
              <div className="ONntwk__bluecardbtn ONntwk__ontdekbtn">ONTDEK MEER
                <span className="">
                  <img className="ONntwk__cornericon" src={cornericon} alt="worldicon" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default firmaitem
import React from 'react'
import savelogo from "./magazines_assets/savelogo.svg"
import ADlogo from "./magazines_assets/ADdelhaizelogo.svg"
import '../../App.css';
import styled from 'styled-components';

const ItemBuitenBorder = styled.div`
     border-radius: 10px;
     width: 200px;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;      
      transition: all .5s;
      &:hover {transform: scale(1.06);}
`;
const ItemBorder = styled.div`
     Border: rgba(99, 99, 99, 0.2) 1px solid;
     border-radius: 10px;
     width: 250px;
      height: 270px;
      display: flex;
      flex-direction: column;
      padding: 10px;
      box-shadow: rgba(99, 99, 99, 0.3) 2px 2px 8px 0px;
background: white;

  
`;
const MagazineItemTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin: 30px 0px 0px 30px
`;
const MagazineItemSubTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin: 10px 0px 10px 30px
`;
const Logo = styled.img`
height: 120px;
  width: auto;
}
`;

function Magazineitem() {
  return (
    <>

      <ItemBuitenBorder>
        <ItemBorder>

        <img src={savelogo} className="MAG_savelogo" alt="savelogo" />
        <img src={magazine1} className="MAG_magazine" alt="magazine" />



          <div className="ONntwk__buttonwrapper ">


          </div>

        </ItemBorder>
      </ItemBuitenBorder>
    </>
  )
}

export default Magazineitem
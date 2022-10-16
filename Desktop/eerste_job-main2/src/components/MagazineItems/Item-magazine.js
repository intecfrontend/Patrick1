import React from 'react'

import savelogo from "./magazines_assets/savelogo.svg"
import boek from "./magazines_assets/boek.svg"
import ADlogo from "./magazines_assets/ADdelhaizelogo.svg"
import '../../App.css';
import styled from 'styled-components';
import { Daata } from "./data";


const ItemBuitenBorder = styled.div`
     border-radius: 10px;
     width: 280px;
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: center; 
      background: rgb(228, 228, 228);
      flex-direction: column;     
      transition: all .5s;
      &:hover {transform: scale(1.06);}
`;
const ItemBorder = styled.div`
     Border: rgba(99, 99, 99, 0.2) 1px solid;
     border-radius: 10px;  overflow: hidden; /* Hide scrollbars */
     width: 213px;
      height: 280px;
      display: flex;
      flex-direction: column;
      position:relative;
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
const Magazine = styled.img`
height: 108%;
  width: auto;
  position: absolute;
  top: -5px;
  left: -16px;
`
const Logosave = styled.img`
height: 20%;
  width: auto;
  position: absolute;
  top: 0px;
  left: 180px;
z-index:999;
background: white;
`;
const Datetxt = styled.div`
color: gray;
font-size: 12px;
width: 223px;
margin-top: 5px;
display: flex;
justify-content: space-between;
`;
const Kleinboek = styled.img`
width: 10%
`;

function Magazineitem() {
  return (
    <>
      {Daata.map((ijustneedone) => (

        <ItemBuitenBorder>
          <ItemBorder>
            <Logosave src={savelogo} alt="savelogo" />
            <Magazine src={`${ijustneedone.image}`} alt={`${ijustneedone.image}`} />
          </ItemBorder>
          <Datetxt>  01-08-2022
            <Kleinboek src={boek} alt="boek" />
            01-08-2022
          </Datetxt>
        </ItemBuitenBorder>
      ))}
    </>
  )
}

export default Magazineitem
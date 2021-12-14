import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// prettier-ignore
export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <StyleHeader>
      <header className="flex"> 
        <div className="container flex">
          <a href="#"><img src="img/logo.png" alt="logo-img"/></a>
            <div className="menu-icon outer-shadow hover-in-shadow" onClick={()=> setOpen(!open)}>
              <span className={open && "active"}></span>                
            </div>
            <nav className={open && "active"}>
              {dataHeader.map((data) => (
                <ul className="flex">
                  <li><a href="#home" className="inner-shadow color-active">{t('themeColors')}</a></li>
                  <li><a href="#abouti" className="outer-shadow hover-in-shadow">{data.about}</a></li>
                  <li><a href="#services" className="outer-shadow hover-in-shadow">{data.services}</a></li>
                  <li><a href="#portfolio" className="outer-shadow hover-in-shadow">{data.portfolio}</a></li>
                  <li><a href="#contact" className="outer-shadow hover-in-shadow">{data.contact}</a></li>
                </ul>
              ))}
            </nav>
         </div>
        </header>
      </StyleHeader>
    )
}

const StyleHeader = styled.header`
  header {
    position: fixed;
    width: 100%;
    height: 100px;

    .container {
      justify-content: space-between;

      img {
        width: 40px;
        height: 40px;
      }

      .menu-icon {
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        user-select: none;
        z-index: 10;

        span {
          position: relative;
          height: 2px;
          width: 18px;

          &:before,
          &:after {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.3s ease;
          }
        }

        span:before {
          top: -6px;
        }

        span:after {
          top: 6px;
        }

        span.active {
          background: transparent;
          transition: all 0.3s ease;
        }

        span.active::before {
          top: 0;
          transform: rotate(-45deg);
          transition: all 0.3s ease;
        }

        span.active::after {
          top: 0;
          transform: rotate(45deg);
          transition: all 0.3s ease;
        }
      }

      .menu-icon:after {
        border-radius: 50%;
      }

      nav {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0;
        visibility: hidden;
        overflow-y: auto;
        transition: all 0.3s ease-out;

        ul {
          min-height: 100vh;
          flex-direction: column;

          li {
            margin-bottom: 20px;
            text-align: center;

            &:last-child {
              margin-bottom: 0;
            }

            a {
              font-size: 28px;
              font-weight: 600;
              display: block;
              width: 150px;
              padding: 10px 0;
              text-transform: capitalize;
              border-radius: 30px;
              transition: all 0.3s ease;

              &:after {
                border-radius: 30px;
              }
            }
          }
        }
      }

      nav.active {
        visibility: visible;
        opacity: 1;
        z-index: 1;
        transition: all 0.3s ease;
      }
    }
  }

  @media (min-width: 992px) {
    header {
      .container {
        .menu-icon {
          display: none;
        }

        nav {
          opacity: 1;
          visibility: visible;
          position: relative;
          z-index: 1;
          background-color: transparent;

          ul {
            min-height: 100%;
            flex-direction: row;
            justify-content: flex-end;
            padding: 10px 0;

            li {
              margin-bottom: 0;
              margin-left: 20px;

              &:last-child {
                margin-right: 5px;
              }

              a {
                font-size: 16px;
                padding: 10px 0;
                width: 125px;
              }
            }
          }
        }
      }
    }
  }

  /* MEDIA QUERRIES */
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1800px) {
  }
`;

const dataHeader = [
  {
    home: "home",
    about: "abouti",
    services: "services",
    portfolio: "portfolio",
    contact: "contact",
  },
];

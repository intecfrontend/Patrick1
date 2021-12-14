import { useState, useEffect, useRef } from "react";
import { init } from "ityped";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import il8n from 'i18next'

// prettier ignore
export default function Hero() {
  const [open, setOpen] = useState(false);
  const [jobtitle,setJobtitle] = useState({
    french:["prof", "React.js Developer", "Shopify Developer"],
    english:["teacher", "React.js Developer", "Shopify Developer"],
    dutch:["leraar", "React.js Developer", "Shopify Developer"]
  })
  const textRef = useRef();
  console.log("gekozen taal" + il8n.language)

  useEffect(() => {

    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: il8n.language === 'en'? jobtitle.english:(il8n.language ==='fr'? jobtitle.french:jobtitle.dutch),
    });
    
  }, []);
  const { t } = useTranslation();

  return (
    <StyleHero>
      <div className="hero flex">
        <div className="container flex">
          <div class="image">
            <div class="img-box inner-shadow">
              <img
                src="img/web-design-agency.png"
                class="outer-shadow"
                alt="profile-pic image"
              />
            </div>
          </div>
          <div class="text">
            {console.log(il8n.language)}
            <p>Hi there!{t('greeting')}</p>
            <h2>I'm Neal Van de Velde</h2>
            <p>
              <span ref={textRef}></span>
            </p>
            <a href="# class="button outer-shadow hover-in-shadow">
              More About Me
            </a>
          </div>
        </div>
      </div>
    </StyleHero>
  );
}

const StyleHero = styled.section`
  .hero {
    width: 100%;
    height: 100%;

    .container {
      height: 100vh;
      padding: 100px 0;
      flex-direction: column;
      justify-content: space-evenly;

      .image {
        width: 100%;

        .img-box {
          width: 250px;
          display: block;
          margin: auto;
          border-radius: 50%;
          padding: 15px;
          margin-bottom: 40px;

          img {
            width: 100%;
            border-radius: 50%;
            border: 10px solid transparent;
          }
        }
      }

      .text {
        max-width: 100%;
        color: #fff;
        text-align: center;

        .ityped-cursor {
          animation: blink 1s;
        }

        @keyframes blink {
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .button {
          margin-top: 30px;
          padding: 10px 25px;
          font-size: 16px;
          font-weight: 500;
          color: var(--skin-color);
          background-color: transparent;
          line-height: 1.5;
          cursor: pointer;
          border-radius: 30px;
          transition: all 0.3s ease;
          display: inline-block;
          border: none;

          &::after {
            border-radius: 30px;
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    .home-content {
      flex-direction: row;
      justify-content: space-between;
      padding: 50px 0;
    }
    .home-section .home-text,
    .home-section .home-img {
      text-align: left;
    }
    .home-section .home-text {
      order: 0;
    }
    .home-content .home-img .img-box {
      max-width: 350px;
      margin-right: 5px;
    }
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

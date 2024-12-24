import React from "react";
import "./App.css";
import Image1 from "./assets/images/1.png";
import Image2 from "./assets/images/2.png";
import Image3 from "./assets/images/3.png";
import Background from "./assets/images/bacgraunt.png";
import Let from "./assets/images/let.png";
import Monday from "./assets/images/monday.png";
import Morpheus from "./assets/images/morpheus.png";
import Oracle from "./assets/images/oreacle.png";
import Playgon from "./assets/images/playgon.svg";
import Qalam from "./assets/images/qalam.png";
import Samsung from "./assets/images/samsung.png";
import Segment from "./assets/images/segment.png";
import Uchinchi from "./assets/images/uchinchi.png";

function App() {
  return (
    <>
      <img className="images" src={Background} alt="Oracle" />
      <img className="images2" src={Playgon} alt="Oracle" />
      <img className="images3" src={Playgon} alt="Oracle" />
      <header>
        <p>ShapeVoice</p>
        <ul>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Template</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
        <div className="battns">
          <button className="signIn">Sign In</button>
          <button className="StartFree">Start Free</button>
        </div>
      </header>
      <div className="container">
        <div className="header">
          <div className="managing">
            <h1>Managing business payments has never been easier</h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything.
            </p>
            <div className="buttons">
              <button className="button">Our Process</button>
              <div className="seeHow">
                <a href="#" class="play-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>

                <p>See How It Works</p>
              </div>
            </div>
          </div>
          <div className="form">
            <p>Get Started for Free</p>
            <input type="email" placeholder="Email Address" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="button">GET STARTED</button>
          </div>
        </div>

        <div className="trusted">
          <p>Trusted By Over 100+ Startups and freelance business</p>
          <div className="logos">
            <img src={Monday} alt="Oracle" />
            <img src={Morpheus} alt="Morpheus" />
            <img src={Samsung} alt="Samsung" />
            <img src={Oracle} alt="Monday.com" />
            <img src={Segment} alt="Segment" />
          </div>
        </div>

        <div className="section">
          <h2>Believing neglected so so allowance</h2>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
          <button>We so opinion friends me message as delight.</button>
        </div>
        <div className="content">
          <div className="card">
            <img className="bir" src={Image1} alt="" />

            <button>
              <img src={Let} alt="" />
            </button>
            <h3>Led Ask Possible Mistress</h3>
            <p>
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div className="card">
            <img className="bir" src={Image2} alt="" />

            <button>
              <img src={Qalam} alt="" />
            </button>
            <h3>Led Ask Possible Mistress</h3>
            <p>
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div className="card">
            <img className="bir" src={Image3} alt="" />

            <button>
              <img src={Uchinchi} alt="" />
            </button>
            <h3>Led Ask Possible Mistress</h3>
            <p>
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
        </div>
        <div className="track">
          <p>Track your crytpo portfolio on the best way possible</p>
          <button className="cheskIn">Check It Out</button>
        </div>
      </div>
    </>
  );
}

export default App;

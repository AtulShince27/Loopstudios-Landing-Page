import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import DrawerAppBar from './components/navigation-bar';
import { StyledEngineProvider } from '@mui/material';
import image from './images/desktop/image-grid.jpg'
function App() {
  return (
    <div className="App">
      <div id="main-website">
        <div id="page1">
          <div class="nav-bar">
            <div className="company-logo"></div>
            <div className="nav-items">About</div>
            <div className="nav-items">Careers</div>
            <div className="nav-items">Events</div>
            <div className="nav-items">Products</div>
            <div className="nav-items">Support</div>
          </div>
          <div id="page1-content">
            <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
          </div>    
        </div>
        <div id="page2">
          <div className="page2-content-container">
            <div className="illustration">

            </div>
            <div className="text-content">
              <div id="overlap-box"></div>
              <h1>THE LEADER IN INTERACTIVE VR</h1>
              <p>
              Founded in 2011, Loopstudios has been producing world-class virtual reality 
              projects for some of the best companies around the globe. Our award-winning 
              creations have transformed businesses through digital experiences that bind 
              to their brand.
              </p>
            </div>
          </div>
        </div>
        <div id="page3">
          <div id="page3-descriptor-row">
            <div id="creations-text">
              OUR CREATIONS
            </div>
            <div id="see-all-text">
              <button>SEE ALL</button>
            </div>
          </div>
          <div className="creation-grid">
            <div className="creation-card" id='deep-earth-img'>
              <p>DEEP EARTH</p>
            </div>
            <div className="creation-card" id='night-arcade-img'>
              <p>NIGHT ARCADE</p>
            </div>
            <div className="creation-card" id='soccer-team-vr-img'>
              <p>SOCCER TEAM VR</p>
            </div>
            <div className="creation-card" id='the-grid-img'>
              <img src={image} alt="" />
              <p>THE GRID</p>
            </div>
            <div className="creation-card" id='up-above-vr-img'>
              <p>FROM UP ABOVE VR</p>
            </div>
            <div className="creation-card" id='pocket-borealis-img'>
              <p>POCKET BOREALIS</p>
            </div>
            <div className="creation-card" id='curiosity-img'>
              <p>THE CURIOSITY</p>
            </div>
            <div className="creation-card" id='fisheye-img'>
              <p>MAKE IT FISHEYE</p>
            </div>
          </div>
        </div>
        <div id="page-footer">
          <div className="company-links-column">
            <div className='company-logo'></div>
            <div className="company-links">
              <div className="link">About</div>
              <div className="link">Careers</div>
              <div className="link">Events</div>
              <div className="link">Products</div>
              <div className="link">Support</div>
            </div>
          </div>
          <div className="company-social-media">
            <div id='social-media-row'>
              <div className='social-media-icons' id='facebook-icon'></div>
              <div className='social-media-icons' id='pinterest-icon'></div>
              <div className='social-media-icons' id='instagram-icon'></div>
              <div className='social-media-icons' id='twitter-icon'></div>
            </div>
            <div id='copyrights-text'>
              <p>© 2021 Loopstudios. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Atul Shince</a>.
      </div>
    </div>
  );
}

export default App;

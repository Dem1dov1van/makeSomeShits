import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header>
        <img src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"></img>
      </header>
      <navbar>
        <div className="navigation">
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Messages</a>
          </div>
          <div>
          <a>Music</a>
          </div>
          <div>
          <a>Settings</a>
          </div>
        </div>

      </navbar>
      <content>
        <img src="https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2019/CA-Chris-Ogonek-Picture-Controls/Media/Chris-Ogonek-Picture-Controls-Vivid.low.jpg"></img>
        <div className="Posts">
          <div>New post</div>
          <div>Post</div>
        </div>
      </content>
    </div>
  );
}

export default App;

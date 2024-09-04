//add interactivity - useState hook
import { useState } from 'react';

//small components
function ToggleTheme() {
  //always declare state var at top
  const [theme, setTheme] = useState('Light');
  return (
    <>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}>
        Toggle Theme
      </button>
    </>
  );
}

function PasswordShowHide() {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <p>{visibility ? 'Password: myPassword' : 'Password: **********'}</p>
      <button onClick={() => setVisibility(!visibility)}>
        Show/ Hide Password
      </button>
    </>
  );
}

function ExpandCollapseText() {
  const [expanded, setExpanded] = useState(false);
  const text =
    'This is a longer text that is typically hidden unless expanded.';

  {
    /* trim text, state var to show data, display button label */
  }
  return (
    <>
      <p>{expanded ? text : `${text.substring(0, 20)}...`}</p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
    </>
  );
}

function ShowActiveTab() {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <>
      <button onClick={() => setActiveTab('Home')}>Home</button>
      <button onClick={() => setActiveTab('Profile')}>Profile</button>
      <button onClick={() => setActiveTab('Messages')}>Messages</button>
      <p>Content of {activeTab} tab.</p>
    </>
  );
}

function AdjustFontSize() {
  const [fontSize, setFontSize] = useState(14);
  return (
    <>
      <p style={{ fontSize: `${fontSize}px` }}>Adjust my font size</p>
      <button onClick={() => setFontSize(fontSize + 1)}>Increase Size</button>
      <button onClick={() => setFontSize(fontSize - 1)}>Decrease Size</button>
    </>
  );
}
function App() {
  return (
    <main>
      <ToggleTheme />
      <hr />

      <PasswordShowHide />
      <hr />

      <ExpandCollapseText />
      <hr />

      <ShowActiveTab />
      <hr />

      <AdjustFontSize />
    </main>
  );
}

export default App;

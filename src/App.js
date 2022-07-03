import React from 'react';
import './App.css';
import { SearchPanel } from './features/SearchPanel/SearchPanel';
import { MainPanel } from './features/MainPanel/MainPanel';
import { SubredditsPanel } from './features/SubredditsPanel/SubredditsPanel';

function App() {
  return (
    <div className="App">
      <header>
        <SearchPanel />
      </header>
      <main>
        <p style={{ fontSize: "72px" }}>Hello, I am Lurkit!</p>
        <MainPanel />
        <SubredditsPanel />
      </main>
    </div>
  );
}

export default App;

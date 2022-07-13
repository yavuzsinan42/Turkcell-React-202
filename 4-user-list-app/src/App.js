
import './App.css';
import UserList from "./components/UserList"
import UserDetail from './components/UserDetail';
import { useState } from 'react';

function App() {
  const [activeUserId, setActiveUserId] = useState(null)
  return (
    <div className="App">
      <div><UserList setActiveUserId={setActiveUserId}/></div>
      {activeUserId && <div><UserDetail activeUserId={activeUserId} /></div>}
     

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ChatPage from './pages/ChatPage';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:4000');
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div>
          <Routes>
            <Route exacth path='/' element={
              (
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                </header>
              )
            }></Route>
            <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

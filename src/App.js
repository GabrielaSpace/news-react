import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { userContext } from './context/usercontext';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState("");
  const login = (name) => setUser(name);
  const logout = () => setUser(""); 
  const data = {
    user,
    login,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={data}>
      <Header />
        <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

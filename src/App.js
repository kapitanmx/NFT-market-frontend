import React from "react";

// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Marketplace from './components/Marketplace';
import SearchResults from './components/SearchResults';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import UserWallet from './components/UserWallet';

//Styles
import { GlobalStyle } from './GlobalStyle'

const headerTitles = ['home', 'marketplace', 'user', 'signup'];
const marketplaceDropdownTitles = []; 
const userDropdownTitles = ['userprofile', 'userwallet'];
const HomeContent = {
  "heroTitle" : "NFT Market",
  "heroSubtitle" : "The modern e-commerce solution",
  "heroText" : "Cretated by Mikołaj Wołoszyn",
}

const App = () => (
  <Router>
    <Header 
      titles={headerTitles} 
      dropdown={userDropdownTitles}
    />
    <Routes>
    <Route 
        path='/' 
        element={
          <Home 
            heroTitle={HomeContent.heroTitle}
            heroSubtitle={HomeContent.heroSubtitle}
            heroText={HomeContent.heroText}
          />
        }/>
      <Route 
        path='/home' 
        element={
          <Home 
            heroTitle={HomeContent.heroTitle}
            heroSubtitle={HomeContent.heroSubtitle}
            heroText={HomeContent.heroText}
          />
        }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/marketplace' element={<Marketplace />}/>
      <Route path='/userprofile' element={<UserProfile/>}/>
      <Route path='/userwallet' element={<UserWallet />}/>
    </Routes>
    <GlobalStyle/>
  </Router>
);

export default App;

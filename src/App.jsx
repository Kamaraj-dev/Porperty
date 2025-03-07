
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import PropertyList from './component/PropertyList';

import SearchBar from './component/SearchBar';
import SearchSection from './component/SearchSection';

const App=()=> {
  return (
    <div className="">
      <Header/>
      <SearchBar/>
      <PropertyList/>
      <Home/>
      <SearchSection/>
      <Footer/>
    </div>
  );
};

export default App;

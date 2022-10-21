import './App.css';
import { React } from 'react';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Categories from './components/Categories';
import Output from './components/Output';
function App() {
  return (
    <div className="bg-slate-100 h-full w-full ">
      <NavBar />
      <Title />
      <Categories />
      <Output />
      <Output />
      <Output />
      <Output />
      <Output />
      <Output />
      <Output />
    </div>
  );
}

export default App;

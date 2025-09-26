import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner inProgressCount={0} resolvedCount={0} />

    <h1 className='text-center'>Welcome</h1> 
    </>
  )
}

export default App

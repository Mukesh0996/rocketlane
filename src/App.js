import { useEffect } from 'react';
import './App.css';
import Reaction from './components/Reaction/Reaction';

function App() {

  const getUsers = async () => {
    const response = await fetch("https://artful-iudex.herokuapp.com/users");
    const responseData = await response.json();
    return responseData;
  }
  useEffect(() => {
   getUsers().then(users => {
     console.log(users);
   })
  },[])
  return (
    <div className="App">
    
    </div>
  );
}

export default App;

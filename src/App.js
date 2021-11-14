import { useContext, useEffect } from 'react';
import './App.css';
import User from './components/User/User';
import { StoreContext } from './store/store';

function App() {

  const ctx = useContext(StoreContext);

  useEffect(() => {
    ctx.getAllUsers();
    ctx.getAllReactions();
    ctx.getAllUsersReactions();  
  },[]);
  
  return (
    <div className="App">
     { ctx.isLoading && <div className="appLoading"><div></div><div></div> <div></div></div>}
       { !!ctx.users && ctx.users.filter(user => user.id.toString() === "4").map(user => <User key={user.id} user_id={user.id} fName={user.first_name} lName={user.last_name} image={user.avatar} email={user.email}/>) }
    </div>
  );
}

export default App;

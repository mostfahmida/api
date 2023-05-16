import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';
import Spiner from './components/Spiner';

function App() {
  const [ListOfUser, setListOfUser] = useState([])
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((users) => {
          setListOfUser(users.data);
          setIsLoading(false);
        })
        .catch((err) => console.log("error", err));
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1>USER LIST</h1>
      <hr/>
      {isLoading? <Spiner/>: <UserList ListOfUser={ListOfUser}/>}
      </header>
    </div>
  );
}

export default App;

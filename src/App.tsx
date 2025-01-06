import { useState } from "react";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/user/UserProfile";


const App = () => {
   
   const [userName, setUserName] = useState('quincylarson')

  return (
    <main className='alignment mt-10'>
      <div>
        <SearchForm userName={userName} setUserName={setUserName} />
        <UserProfile userName={userName} />
      </div>
    </main>
  );
};
export default App;

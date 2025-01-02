import { useState } from "react";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/user/UserProfile";


const App = () => {
   
   const [userName, setUserName] = useState('ashish-makwana01')

  return (
    <main className='alignment mt-10 md:mt-20'>
      <div>
        <SearchForm userName={userName} setUserName={setUserName} />
        <UserProfile userName={userName} />
      </div>
    </main>
  );
};
export default App;

import UserForm from "./components/UserForm";
import FormData from "./components/FormData";
import {useState} from 'react'

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:  ""
  })

  // const displayFormData = (firstNameDisplay) => {
  //   setFirstName(firstNameDisplay)
  // }

  return (
    <div className="App">
      <UserForm state={ state } setState={ setState }/>
      <FormData data={ state } />
    </div>
  );
}

export default App;

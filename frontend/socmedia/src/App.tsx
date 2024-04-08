import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AccountSettings from "./pages/AccountSettings";
import User from "./pages/User";
import NavBar from "./components/NavBar";

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/signup"
              element={<Signup />}
            />
            <Route 
              path="/account-settings"
              element={<AccountSettings />}
            />
            <Route 
              path="/user"
              element={<User />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
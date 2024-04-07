import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AccountSettings from "./pages/AccountSettings";

function App () {
  return (
    <div className="App">
      <BrowserRouter>
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
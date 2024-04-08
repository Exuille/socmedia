import { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewsfeedBar from "./components/NewsfeedBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/User";
import Feed from "./pages/Feed";
import AccountSettings from "./pages/AccountSettings";
import Messages from "./pages/Messages";
import Right from "./pages/Right";

// Common layout for pages with NewsfeedBar
interface PageWithNewsfeedBarLayoutProps {
  children: ReactNode;
}

const PageWithNewsfeedBarLayout = ({
  children,
}: PageWithNewsfeedBarLayoutProps) => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <NewsfeedBar />
    {children}
    <Right />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route
            path="/user"
            element={
              <PageWithNewsfeedBarLayout>
                <User />
              </PageWithNewsfeedBarLayout>
            }
          />
          <Route
            path="/feed/*"
            element={
              <PageWithNewsfeedBarLayout>
                <Feed />
              </PageWithNewsfeedBarLayout>
            }
          />
          <Route
            path="/messages/*"
            element={
              <PageWithNewsfeedBarLayout>
                <Messages />
              </PageWithNewsfeedBarLayout>
            }
          />
          <Route
            path="/account-settings/*"
            element={
              <PageWithNewsfeedBarLayout>
                <AccountSettings />
              </PageWithNewsfeedBarLayout>
            }
          />

          {/* Routes with NavBar */}
          <Route
            path="/login"
            element={
              <>
                <NavBar />
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <NavBar />
                <Signup />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

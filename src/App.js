import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import SignInPage from './pages/SigninPage/SignInPage'
import SignUpPage from "./pages/signupPage/SignUpPage"
import HomePage from "./pages/homePage/HomePage"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SignInPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <Route exact path="/news-uk.com">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

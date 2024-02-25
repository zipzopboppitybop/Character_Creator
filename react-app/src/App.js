import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from './components/SplashPage'
import UserCharacters from "./components/Characters/UserCharacters";
import Spells from "./components/Spells";
import CharacterCreatorName from "./components/Characters/CharacterBuilder/CharacterCreatorName";
import CharacterPage from "./components/Characters/CharacterPage/";
// import "CharacterPage.css";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/" >
            <Navigation isLoaded={isLoaded} />
            <SplashPage />
          </Route>
          <Route path="/characters/build/:id/race">
            <Navigation isLoaded={isLoaded} />
            <CharacterCreatorName />
          </Route>
          <Route path="/characters/:id">
            <Navigation isLoaded={isLoaded} />
            <CharacterPage />
          </Route>
          <Route path="/characters">
            <Navigation isLoaded={isLoaded} />
            <UserCharacters />
          </Route>
          <Route path="/spells/:school?">
            <Navigation isLoaded={isLoaded} />
            <Spells />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

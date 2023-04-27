import React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import Auth0ProviderWithHistory from "./auth0Provider";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

return 
(<BrowserRouter>
<Auth0ProviderWithHistory>
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
      <Footer />
    </div>
</Auth0ProviderWithHistory>
</BrowserRouter>);  
};

export default App;

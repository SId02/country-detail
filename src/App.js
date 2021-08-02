import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import "./App.css"
function App() {
 const client = new ApolloClient({
   cache: new InMemoryCache(),
   uri: "https://countries.trevorblades.com",
 });
  return (
     <ApolloProvider client={client}>
        <Router>
            <div className="App">
              <Navbar />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
              </Switch>
          </div>
       </Router>
      </ApolloProvider>
     
  );
}

export default App;


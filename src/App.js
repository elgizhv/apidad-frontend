import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import { client } from "./context/ApolloContext";
import SessionWrapper from "./hoc/SessionWrapper";
import About from "./pages/About";
import Category from "./pages/Category";
import Downloads from "./pages/Downloads";
import Home from "./pages/Home/Home";
import Product from "./pages/Product";

function Routes() {
  return (
    <Layout>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/category/:id" component={Category} />
      <Route path="/product/:id" component={Product} />
      <Route path="/downloads" component={Downloads} />
    </Layout>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <SessionWrapper>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </SessionWrapper>
    </ApolloProvider>
  );
}

export default App;

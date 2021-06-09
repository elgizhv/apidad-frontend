// import { Link } from "react-router-dom";

import Collaborate from "./components/Collaborate";
import Hero from "./components/Hero";
import Hire from "./components/Hire";
import NewProducts from "./components/NewProducts";
import Suggestion from "./components/Suggestion";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Hire></Hire>
      <NewProducts></NewProducts>
      <Suggestion></Suggestion>
      <Collaborate></Collaborate>
    </div>
  );
}

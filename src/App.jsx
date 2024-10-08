import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

    return (
        <div>
          <Navbar />
          <Hero />
          <section className="card-list">{cards}</section>
        </div>
    );
}

export default App;

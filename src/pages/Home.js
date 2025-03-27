import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header className="hero">
      <a href="/">
        <img src="xd.jpg" alt="Adobe XD Logo" className="logo" />
      </a>

        <h1>Adobe XD Platform</h1>
        <p>Push the boundaries of design work</p>
      </header>

      <section className="documentation">
        <h2>Documentation</h2>
        <p>Everything you need to extend the Adobe XD experience</p>

        <div className="cards">
          <div className="card">
            <img src="img1.png" alt="Plugin APIs" />
            <h3>Plugin APIs</h3>
            <p>Bring your ideas and features to XD</p>
            <a href="/plugin-apis">Create a plugin</a>
          </div>

          <div className="card">
            <img src="/xd.jpg" alt="Cloud APIs" />
            <h3>Cloud Content APIs</h3>
            <p>Connect XD designs to your product</p>
            <a href="/cloud-apis">Start integrating</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

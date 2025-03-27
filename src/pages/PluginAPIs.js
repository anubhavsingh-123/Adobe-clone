import React from "react";
import "./PluginAPIs.css";

function PluginAPIs() {
  return (
    <div className="plugin-apis">
      <header className="header">
        <h1>Plugin APIs</h1>
        <p>Bring new features and capabilities to XD</p>
      </header>

      <section className="content">
        <p>
          Shape the future of design by creating plugins for yourself, your team, or the world. To share a plugin for all XD users, submit it to Adobe. After review, you’ll be published in the XD Plugin Manager.
        </p>

        <div className="cards">
          <div className="card">
            <img src="/img3.jpg" alt="Develop Icon" />
            <h3>Develop</h3>
            <p>API documentation, code tutorials, and samples</p>
          </div>

          <div className="card">
            <img src="/img1.png" alt="Design Icon" />
            <h3>Design</h3>
            <p>UX patterns, UI elements, and design guidelines</p>
          </div>

          <div className="card">
            <img src="/img2.png" alt="Share Icon" />
            <h3>Share</h3>
            <p>Submission checklist, packaging, and marketing</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PluginAPIs;

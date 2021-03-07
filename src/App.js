import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FilesUpload from "./components/FilesUpload";

function App() {
  return (
    <div className="container" >
      <h1>React JS File Uploader</h1>
      
      <FilesUpload />
    </div>
  );
}

export default App;

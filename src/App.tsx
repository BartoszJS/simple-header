import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Information from "./components/Information";

function App() {
  const [handleClose1, setHandleClose1] = useState(false);
  const [handleClose2, setHandleClose2] = useState(false);
  const [handleClose3, setHandleClose3] = useState(false);

  return (
    <div className='App'>
      <Navbar />
      <Information
        open={handleClose1}
        onClick={() => {
          setHandleClose1(!handleClose1);
          setHandleClose2(false);
          setHandleClose3(false);
        }}
      />
      <Information
        open={handleClose2}
        onClick={() => {
          setHandleClose1(false);
          setHandleClose2(!handleClose2);
          setHandleClose3(false);
        }}
      />
      <Information
        open={handleClose3}
        onClick={() => {
          setHandleClose1(false);
          setHandleClose2(false);
          setHandleClose3(!handleClose3);
        }}
      />
    </div>
  );
}

export default App;

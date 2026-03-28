import { useCallback, useEffect, useState } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(12);
  const [numberallowed, setnumberAllowed] = useState(false);
  const [charecterallowed, setcharecterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // FIXED password logic
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (charecterallowed) str += "!@#$%^&*()_+-={}[];:<>,.?/";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberallowed, charecterallowed]);

  // generate default password first time
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  // copy function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="container">
      {/* PASSWORD BOX */}
      <div className="password-box">
        <span className="password">{password}</span>
        <button className="copy-btn" onClick={copyToClipboard}>
          copy
        </button>
      </div>

      {/* CONTROLS */}
      <div className="options">
        <input
          type="range"
          min={4}
          max={20}
          value={length}
          className="range"
          onChange={(e) => setLength(e.target.value)}
        />
        <span>Length ({length})</span>

        <input
          type="checkbox"
          checked={numberallowed}
          onChange={() => setnumberAllowed((prev) => !prev)}
        />
        <label>Numbers</label>

        <input
          type="checkbox"
          checked={charecterallowed}
          onChange={() => setcharecterAllowed((prev) => !prev)}
        />
        <label>Characters</label>
      </div>

      {/* GENERATE BUTTON */}
      <button onClick={passwordGenerator} style={{ marginTop: "20px" }}>
        Generate
      </button>
    </div>
  );
}

export default App;

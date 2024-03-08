import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RegisterForm from "./components/Register/RegisterForm";

const App: React.FC = () => {
  let heroData = [
    { text1: "Voice Your Choice", text2: "Where Every Vote Counts!" },
    { text1: "Unlock Your Vote", text2: "Shaping the Future Together!" },
    { text1: "Vote Smart, Vote Strong", text2: "Let Your Voice Echo!" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              heroData={heroData}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={playStatus}
              setPlayStatus={setPlayStatus}
            />
          }
        />
        <Route path="/api/register/save" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default App;

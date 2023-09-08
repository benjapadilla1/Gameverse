import { Route, Routes } from "react-router-dom";
import App from "../App";
import Hangman from "../components/hangman/Hangman";
import RecalledMinds from "../components/mindgame/RecalledMinds";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/recalledminds" element={<RecalledMinds />} />
      </Routes>
    </>
  );
}

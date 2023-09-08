import { useEffect, useState } from "react";
import EnglishGame from "./EnglishGame";
import LanguageSwitch from "../LanguageSwitch";
import SpanishGame from "./SpanishGame";

function Hangman() {
  const [language, setLanguage] = useState<string>("en");
  useEffect(() => {
    const storedLanguage: string = localStorage.getItem("language") || "en";
    setLanguage(storedLanguage);
  }, []);

  const handleLanguage = (language: string) => {
    setLanguage(language);
    localStorage.setItem("language", JSON.stringify(language));
  };

  return (
    <div className="h-screen">
      {language === "es" ? (
        <h1 className="text-6xl text-center font-bold">Juego del ahorcado</h1>
      ) : (
        <h1 className="text-6xl text-center font-bold">Hangman game</h1>
      )}
      <LanguageSwitch
        onChangeLanguage={handleLanguage}
        currentLanguage={language}
      />
      {language === "es" ? <SpanishGame /> : <EnglishGame />}
    </div>
  );
}

export default Hangman;

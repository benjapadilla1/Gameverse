import { useEffect, useState } from "react";
import EnglishGame from "./components/EnglishGame";
import LanguageSwitch from "./components/LanguageSwitch";
import SpanishGame from "./components/SpanishGame";
function App() {
  const [language, setLanguage] = useState<string>("en");
  useEffect(() => {
    const storedLanguage: string = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);

  const handleLanguage = (language: string) => {
    setLanguage(language);
    localStorage.setItem("language", JSON.stringify(language));
  };

  return (
    <div className="h-screen">
      {language === "en" ? (
        <h1 className="text-6xl text-center font-bold">Hangman game</h1>
      ) : (
        <h1 className="text-6xl text-center font-bold">Juego del ahorcado</h1>
      )}
      <LanguageSwitch
        onChangeLanguage={handleLanguage}
        currentLanguage={language}
      />
      {language === "en" ? <EnglishGame /> : <SpanishGame />}
    </div>
  );
}

export default App;

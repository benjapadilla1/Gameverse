import LanguageSwitch from "./components/LanguageSwitch";
import { EnglishWords } from "./utils/data";
import { randomWord } from "./utils/randomWord";
import { useState } from "react";

function App() {
  const [random] = useState<number>(randomWord());
  const selectedWord = EnglishWords[random].word;
  console.log(selectedWord);
  const hiddenWord = Array.from(selectedWord).map((char) =>
    char === " " ? " " : "_"
  );
  console.log(hiddenWord);
  return (
    <>
      <h1 className="text-6xl text-center font-bold">Hangman game</h1>
      <LanguageSwitch />
      <h2 className="text-4xl text-center">
        The word you would have to guess is:
      </h2>
      <div className="h-3/4 flex items-center flex-col justify-center">
        {EnglishWords.map((word, i) => (
          <div className="flex justify-center items-center " key={i}>
            {i === random ? (
              <span className="text-6xl text-center tracking-widest">
                {hiddenWord}
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter a letter!"
        className="block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
      />
    </>
  );
}

export default App;

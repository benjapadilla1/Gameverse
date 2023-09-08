import { EnglishWords } from "../../utils/data";
import { randomWord } from "../../utils/randomWord";
import React, { useEffect, useState } from "react";
import { RiRestartFill } from "react-icons/ri";
function EnglishGame() {
  const [letter, setLetter] = useState<string>("");
  const [lives, setLives] = useState<number>(3);
  const [random] = useState<number>(randomWord());
  const [wrongLetter, setWrongLetter] = useState<string[]>([]);

  const selectedWord = EnglishWords[random].word;
  console.log(selectedWord);
  const [hiddenWord, setHiddenWord] = useState<string[]>(
    Array.from(selectedWord).map((char) => (char === " " ? " " : "_"))
  );

  useEffect(() => {
    if (!hiddenWord.includes("_")) {
      alert("You have won");
    }
  }, [hiddenWord]);

  const handleLetter = (letter: string) => {
    const newHidden = [...hiddenWord];

    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        newHidden[i] = letter;
      }
    }
    setHiddenWord(newHidden);
    setLetter("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (selectedWord.includes(value)) {
      handleLetter(value);
    } else {
      setWrongLetter([...wrongLetter, value]);
      setLives(lives - 1);
    }
  };
  return (
    <div className="h-screen">
      {lives > 0 ? (
        <>
          <div className="flex items-center justify-center">
            <span className="flex-1 text-4xl">
              The word you would have to guess is:
            </span>
            <p className="flex-2 text-4xl">
              Lives:
              {Array.from({ length: lives }, (_, i) => (
                <span key={i}>❤</span>
              ))}
            </p>
          </div>
          <div className="flex items-center flex-col justify-start">
            <p className="text-3xl">Wrong letters: {wrongLetter.join(", ")} </p>
            {EnglishWords.map((word, i) => (
              <div className="flex justify-center items-center" key={i}>
                {i === random ? (
                  <span className="text-6xl text-center tracking-widest">
                    {hiddenWord}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Enter a letter!"
              className="block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3 mt-5"
              value={letter}
              onChange={handleInputChange}
            />
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-10 items-center flex-col ">
          <p className="text-3xl ">You have lost</p>
          <p className="text-2xl mt-5">The word was: {selectedWord}</p>
          <button
            onClick={() => window.location.reload()}
            className="inline-block"
          >
            Play again
            <RiRestartFill className="text-6xl" />
          </button>
        </div>
      )}
    </div>
  );
}

export default EnglishGame;

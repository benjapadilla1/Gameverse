const LanguageSwitch = () => {
  return (
    <div className="flex gap-5 items-end ">
      <button
      // onClick={() => changeLanguage("en")} // Cambiar a inglés
      // disabled={currentLanguage === "en"}
      >
        English
      </button>
      <button
      // onClick={() => changeLanguage("es")} // Cambiar a español
      // disabled={currentLanguage === "es"}
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSwitch;

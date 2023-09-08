import React from "react";

interface LanguageSwitchProps {
  onChangeLanguage: (language: string) => void;
  currentLanguage: string;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  onChangeLanguage,
  currentLanguage,
}) => {
  return (
    <div className="flex gap-5 items-end">
      <button
        onClick={() => onChangeLanguage("en")}
        disabled={currentLanguage === "en"}
      >
        English
      </button>
      <button
        onClick={() => onChangeLanguage("es")}
        disabled={currentLanguage === "es"}
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSwitch;

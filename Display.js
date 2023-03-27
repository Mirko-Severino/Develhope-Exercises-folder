import React, { useContext } from "react";
import { LanguageContext } from "./Language";

export default function DisplayLanguage() {
  const lang = useContext(LanguageContext);
  return (
    <div>
      {lang === "it" && "Hai scelto la lingua italiana"}
      {lang === "en" && "You have chosen the english language"}
      {lang === "ch" && "您选择了意大利语"}
    </div>
  );
}

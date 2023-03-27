import React, { Component } from "react";
import { LanguageContext } from "./Language";

export default class DisplayLanguage extends Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(lang) => {
            return (
              <div>
                {lang === "it" && "Hai scelto la lingua italiana"}
                {lang === "en" && "You have chosen the english language"}
                {lang === "ch" && "您选择了意大利语"}
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

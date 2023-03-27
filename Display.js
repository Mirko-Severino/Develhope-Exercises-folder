import React, { Component } from "react";
import { LanguageContext } from "./LanguageContext";

export default class DisplayLanguage extends Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(lang) => {
            switch (lang) {
              case "it":
                return <p>Ciao mondo!</p>;
              case "en":
                return <p>Hello world!</p>;
              case "ch":
                return <p>你好，世界！</p>;
              default:
                return <p>Language not supported.</p>;
            }
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

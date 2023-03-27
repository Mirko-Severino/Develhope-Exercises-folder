import React from "react";
import DisplayLanguage from "./Display";
import { LanguageContext } from "./Language";

export default class App extends React.Component {
  state = {
    lang: "it",
  };

  handleLangChange = (e) => {
    this.setState({ lang: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <select onChange={this.handleLangChange}>
            <optgroup>
              <option value="it">Italiano</option>
              <option value="en">Inglese</option>
              <option value="ch">Cinese</option>
            </optgroup>
          </select>
          <LanguageContext.Provider value={this.state.lang}>
            <DisplayLanguage />
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

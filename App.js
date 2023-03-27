import React, { Component } from "react";
import DisplayLanguage from "./Display";
import { LanguageContext } from "./Language";

export default class App extends Component {
  state = {
    lang: "it",
  };

  handleLangChange = (e) => {
    this.setState({ lang: e.target.value });
  };

  onLogin = (user) => {
    console.log(user);
  };
  render() {
    const styles = {
      list: "border overflow-hidden rounded-md m-2 w-[346px]",
      listItem:
        "border-b flex justify-between p-2 even:bg-slate-100 last:border-none",
      deleteBtn:
        "transition ease-in-out duration-200 text-xs hover:text-red-600 hover:scale-105",
    };

    return (
      <div className="flex justify-center items-center">
        <select
          onChange={this.handleLangChange}
          className="border p-1 border-slate-700 rounded-md m-4"
        >
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
    );
  }
}

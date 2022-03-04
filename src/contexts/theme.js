import * as React from "react";

const ThemeContext = React.createContext();

const ThemeConsumer = ThemeContext.Consumer;
const ThemeProvider = ThemeContext.Provider;
export { ThemeContext, ThemeConsumer, ThemeProvider }

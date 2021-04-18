import "./App.scss";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Example from "./components/Example";
import Book from "./components/Book";

import { isBrowser } from "react-device-detect";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Header />
        {isBrowser && <Example />}
        <Book />
      </div>
    </>
  );
}

export default App;

import "./App.scss";
import { CssBaseline, Container, Typography, Grid } from "@material-ui/core";
import Header from "./components/Header";
import Example from "./components/Example";
import Book from "./components/Book";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
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

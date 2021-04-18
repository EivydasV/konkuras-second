import "./App.scss";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Example from "./components/Example";
import Book from "./components/Book";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Header />
        <Example />
        <Book />
        {/* <IconButton aria-label="delete">
          <ArrowDownwardIcon fontSize="secondary" />
        </IconButton> */}
      </div>
    </>
  );
}

export default App;

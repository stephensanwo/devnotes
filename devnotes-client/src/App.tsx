import { Route, BrowserRouter, Routes } from "react-router-dom";
import StyledHeader from "./components/StyledHeader";
import { Home, Folder, Notes, NoteItem } from "./pages";
import "./App.scss";
import { NoteContextProvider } from "./context/notes";

const App = () => (
  <NoteContextProvider>
    <BrowserRouter>
      <StyledHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/folders/:userId" element={<Folder />} />
        <Route exact path="/folders/:userId/:folderId" element={<Notes />} />
        <Route
          exact
          path="/folders/:userId/:folderId/:noteId"
          element={<NoteItem />}
        />
      </Routes>
    </BrowserRouter>
  </NoteContextProvider>
);

export default App;

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateBookPage from "./pages/CreateBookPage";
import UpdateBook from "./components/UpdateBook"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addbook" element={<CreateBookPage />} />
        <Route path="/updatebook/:id" element={<UpdateBook />} />
      </Routes>
    </div>
  );
}

export default App;

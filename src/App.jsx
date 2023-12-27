import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home, User, Vtc } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/vtc" element={<Vtc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

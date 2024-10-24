import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <div className="core-container">
      <Navbar/>
      <main className="main">
        {/*<Header />*/}
        <Outlet/>
      </main>
    </div>
  )
}

export default App

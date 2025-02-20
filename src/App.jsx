import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TabSwitcher from "./components/TabSwitcher";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-black">
      <Header />
      <TabSwitcher />
        <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TabSwitcher from "./components/TabSwitcher";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen max-w-screen mx-auto">
      <Header />
      <TabSwitcher />
        <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import Footoer from "./Footoer";
import ModalRouter from "./Modals/index";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footoer></Footoer>
      <ModalRouter />
    </div>
  );
}

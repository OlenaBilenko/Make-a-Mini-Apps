import Calc from "./components/Calc/Calc";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  console.log(window.location.pathname);
  const Router = window.location.pathname === "/todo" ? TodoList : Calc;
  return (
    <>
      <Header />
      <Router />
    </>
  );
};

export default App;

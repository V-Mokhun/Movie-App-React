import React from "react";
import AppRouter from "./AppRouter";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;

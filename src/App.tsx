import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>¡Choose what game you would like to play!</h1>
      <div className="">
        <Link to={"/hangman"}> Hangman</Link>
        <Link to={"/recalledminds"}> Recalled minds</Link>
      </div>
    </>
  );
};

export default App;

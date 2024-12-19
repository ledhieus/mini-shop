import AllRoute from "./components/AllRoute";
import "./App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { generateToken } from "./helper/generateToken";
function App() {
  useEffect(()=> {
    if(!localStorage.getItem('user_token')){
      const token = generateToken()
      localStorage.setItem('user_token', token);
    }
  },[])
  return (
    <>
      <AllRoute/>
    </>
  );
}

export default App;

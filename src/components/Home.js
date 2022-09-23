import React from "react";
import {useNavigate} from 'react-router-dom';
function Home(){
    const navigate = useNavigate()
    const handleclick = () => {
        navigate("/about");
    };
    return(
        <>
        <p>This is the Home page</p>
        <button onClick={handleclick}>Click me</button>
        </>
    );
}
export default Home;
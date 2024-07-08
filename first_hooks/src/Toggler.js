import React, { useState } from "react";
import useToggle from "./hooks/useToggle";
function Toggler(){
    const [isHappy, toggleIsHappy] = useToggle(true)
    return <h1 onClick={toggleIsHappy}>{isHappy ? "😄" : "😔"}</h1>

}
export default Toggler;
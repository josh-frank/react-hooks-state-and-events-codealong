import React, { useState } from "react";

function Toggle() {

  const [ toggleStatus, setToggleStatus ] = useState( false );

  function toggleClick() { setToggleStatus( toggleStatus => !toggleStatus ) }

  return <button style={ { background: toggleStatus ? "red" : "white" } } onClick={ toggleClick }>{ toggleStatus ? "ON" : "OFF" }</button>;
}

export default Toggle;

import React from 'react';

function Header ({handleAllDelete}){
  console.log("Header가 렌더링 되었습니다.")
  const titStyle = {
    display : "flex",
    justifyContent : "space-between",
    alignItems : "end"
  }

  const btnStyle2 = {
    float:"right",
    color:"#777",
    background : "#ccc",
    padding : '5px 10px',
    border : "none",
    cursor : "pointer",
    width : "100px",
    height : "30px",
  }

  
  return(
    <div className="title" style={titStyle}>
      <h1>오늘할일 LIST</h1>
      <button style={btnStyle2} onClick={handleAllDelete}>DELETE ALL</button>
   </div>
  )
}

export default Header;
import React, { useState } from 'react';

function From ({value,setValue,handleSubmit}){
  console.log("Form이 렌더링 되었습니다.")

  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(value)
  }
  
  return (
    <form style={{display:"flex", paddingTop:20} } onSubmit={handleSubmit}>
      <input style={{flex:10, padding:10}} type="text" name="value" placeholder='오늘 할일을 입력하세요.' value={value} onChange={handleChange}/>
      <input style={{flex:1, padding:10}} type="submit" value="추가"/>
    </form>
  )
}

export default From;
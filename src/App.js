import './App.css';
import React, { useState } from'react';
import Form from './component/Form';
import Header from './component/Header';
import List from './component/List';

function App() {
  console.log("App이 렌더링 되었습니다.")
  const [value, setValue] = useState('')
  const [todoData, setTodoData] = useState([])
  

  //아이디는 오늘날짜로해서 새로운 배열의 객체를 추가 시킨다.
  const handleSubmit = (e) => {
    e.preventDefault() // 새로고침 일어나지 않게 하는 명령어
    let newTodo = {
      id:Date.now(),
      title:value,
      complete:false
    }
    setTodoData([...todoData,newTodo])
    console.log(todoData)
    setValue('')
  }

  const handleAllDelete = () => {
    console.log("전체삭제");
    setTodoData([]);
  }

  return (
    <div className='container'>
      <div className="listBox">
       <Header handleAllDelete={handleAllDelete}/>
       <List  setTodoData={setTodoData} todoData={todoData}/>
        {/*form 영역*/}
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
      </div>
    </div>
  );
}

export default App;

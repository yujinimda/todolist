import React, { useState } from 'react';

const List = React.memo(({ setTodoData, todoData }) => {
  console.log("List가 렌더링 되었습니다.");

  const getStyle = (completed) => ({
    padding: '20px',
    borderBottom: '1px solid #ccc',
    textDecoration: completed ? "line-through" : "none",
  });

  const handleChkChange = (id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.complete = !data.complete;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleDelete = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleEditToggle = (id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.isEdit = !data.isEdit;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleEditChange = (e, id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.editContent = e.target.value;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleEditSave = (id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = data.editContent;
        data.isEdit = false; // 저장 후 편집 모드를 종료합니다.
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const btnStyle = {
    float: "right",
    color: "#777",
    background: "#ccc",
    padding: '5px 10px',
    border: "none",
    cursor: "pointer",
  };

  const btnStyle2 = {
    float: "right",
    color: "#777",
    background: "#ccc",
    padding: '5px 10px',
    border: "none",
    cursor: "pointer",
    marginLeft: "10px",
  };

  const textareaStyle = {
    width: "280px",
  };

  return (
    <>
      {todoData.map((data) => (
        <div style={getStyle(data.complete)} key={data.id}>
          <input
            type="checkbox"
            checked={data.complete}
            onChange={() => handleChkChange(data.id)}
          />
          {data.isEdit ? (
            <>
              <textarea
                style={textareaStyle}
                value={data.editContent || data.title} // 초기 값은 기존 제목으로 설정
                onChange={(e) => handleEditChange(e, data.id)}
              ></textarea>
              <button style={btnStyle2} onClick={() => handleEditToggle(data.id)}>Edit 취소</button>
              <button style={btnStyle} onClick={() => handleEditSave(data.id)}>Edit 완료</button>
            </>
          ) : (
            <>
              {data.title}
              <button style={btnStyle2} onClick={() => handleEditToggle(data.id)}>Edit</button>
              <button style={btnStyle} onClick={() => handleDelete(data.id)}>DELETE</button>
            </>
          )}
        </div>
      ))}
    </>
  );
});

export default List;

import { useState } from 'react';
import './App.css';

function App() {

  let post = "양주시 맛집";
  const setId = "contents";

  const [title, changeTitle] = useState(['양주 맛있는 떡볶이 가게', '양주 맛있는 베이커리카페', '양주 애견동반 카페']); //destructuring 문법
  let [likes, addedLikes] =  useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <header className="nav_black">
        <h1 id={setId}>여기가 블로그의 헤-더</h1>
      </header>
      <div className='list'>
        <h4>글제목</h4>
        <p>3월 09일 발행</p>
      </div>
      <div className='list'>
        <h4>
          <p onClick={_=>{
            setModal(true);
          }}>
            { title[0] }
          </p>
          <button onClick={_=>{
            let copy = [...title];
            copy[0] = '양주 맛있는 칼국수 가게';  // reference data type 공부하기
            changeTitle(copy);
          }}>
            <span>좋아요우😍</span><span>{ likes }</span>
          </button>
        </h4>
        <p>3월 09일 발행</p>
      </div>
      <div className='list'>
        <h4>
          <p>{ title[1] } </p>
          <button onClick={_=> addedLikes(likes+1)}>
            <span>좋아요우😍</span><span>{ likes }</span>
          </button>
        </h4>
        <p>3월 09일 발행</p>
      </div>
      <div className='list'>
        <h4>
          <p>{ title[2] } </p>
        </h4>
        <p>3월 09일 발행</p>
      </div>
      <div style={{backgroundColor: 'pink'}}>
        { post }
      </div>
      
      { modal == true ? <Modal/> : null }
    </div>
  );
}


  

const Modal=_=>{
  
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;

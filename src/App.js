import { useState } from 'react';
import './App.css';

function App() {

  let post = "양주시 맛집";
  const setId = "contents";

  const [title, changeTitle] = useState(['양주 맛있는 떡볶이 가게', '양주 맛있는 베이커리카페', '양주 애견동반 카페']); //destructuring 문법
  let [likes, addedLikes] =  useState(0);
  let [modal, setModal] = useState(false);
  let [titleIndex, setTitleIndex] = useState(0);

  return (
    <div className="App">
      <header className="nav_black">
        <h1 id={setId}>여기가 블로그의 헤-더</h1>
      </header>
      {
        title.map((el, i)=>{
          return (
            <div className='list' key={i}>
              <h4 onClick={_=>{ setModal(true); setTitleIndex(i) }}>
                { el }</h4>
              <p onClick={_=>{
                let copy = [...title];
                copy[0] = '양주 맛있는 칼국수 가게';  // reference data type 공부하기
                changeTitle(copy);
              }} >3월 09일 발행</p>

              <button onClick={_=> addedLikes(likes+1)}>
                <span>좋아요우😍</span><span>{ likes }</span>
              </button>
            </div>
          )
        })
      }
      
      { modal == true ? <Modal changeTitle={changeTitle} detail={title} titleIndex={titleIndex}  /> : null }
    </div>
  );
}
  

const Modal=props=>{
  
  return (
    <div className='modal'>
      <h4>{ props.detail[props.titleIndex] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=> { props.changeTitle(['양주 맛있는 불고기 가게', '양주 맛있는 식물원카페', '양주 한옥 카페']) }}>글 수정</button>
    </div>
  )
}


export default App;

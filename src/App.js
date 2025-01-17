import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  // state 정의 시작
  let post = "첫 블로그 글";
  //현재 선택한 글의 인덱스를 저장
  let [currentIndex, setCurrentIndex] = useState(0);
  //스테이트 생성
  let [title, setTitle] = useState([
    "인천 돈까스 맛집",
    "남자 코트 추천",
    "자바 독학",
  ]);
  let [date, setDate] = useState(["2월 17일", "2월 18일", "2월 19일"]);
  let [like, setLike] = useState([0, 0, 0]);
  // 상세내용
  let [content, setContent] = useState([
    "인천 돈까스 겁나 맛있음",
    "남자 바바리 코트 명품",
    "자바 겁나 어려움",
  ]);
  let [index, setIndex] = useState([0, 1, 2]);
  let [showModal, setshowModal] = useState(false);

  // state 정의 종료

  function addLike(num) {
    let aaa = [...like];
    aaa[num] = aaa[num] + 1;
    setLike([...aaa]);
  }
  function changeTitle(num) {
    //현제 타이틀 값을 비교
    let change = [...title];
    //만약에 타이틀이 남자이면
    if (change[1] == "남자 코트 추천") {
      change[1] = "여자 코트 추천";
    } else {
      change[1] = "남자 코트 추천";
    }

    let qwe = [...like];
    qwe[num] = 0;
    setTitle([...change]);
    setLike([...qwe]);
  }
  function topAlig() {
    let copyT = [...title];
    copyT.sort((x, y) => {
      if (x < y) return -1;
      if (x > y) return 1;
      else return 0;
    });
    setTitle([...copyT]);
  }
  function downAlig() {
    let copyTi = [...title];
    copyTi.sort((x, y) => {
      if (x > y) return -1;
      if (x < y) return 1;
      else return 0;
    });
    setTitle([...copyTi]);
  }

  return (
    <div className="App">
      <div className="black-bg">React로 만드는 블로그</div>
      <div>
        <div>
          <button onClick={() => topAlig()}>오름차순</button>
          <button onClick={() => downAlig()}>내림차순</button>
        </div>
      </div>
      {title.map(function (x, y) {
        return (
          <div className="list">
            {/* 리스트 시작 */}
            
            <h4
              onClick={() => {
                setCurrentIndex(y);
                setIndex(y);
                if(index != y){
                  setshowModal(true)
                }else if(index == y && showModal ==false){
                  setshowModal(true)
                }else setshowModal(false)
                // if (index === y && showModal) {
                //   setshowModal(false);
                //   setIndex(null);
                // } else {
                //   setIndex(y);
                //   setshowModal(true);
                // }
                // if(showModal == false){
                //   setshowModal(true);
                // }
                // if(showModal == true){
                //   setshowModal(false);
                // }
              }}
            >
              {title[y]}
              <span onClick={(e) =>{e.stopPropagation();addLike(y)} }>👍{like[y]}</span>
            </h4>
            <p>작성일 : {date[y]}</p>
          </div>
        );
      })}

      {/* 남자 코트 추천 */}
      {/* 버튼을 클릭 -> 여자 추천 콘트로 변환*/}
      {/* 좋아요는 0으로 */}
      {/* <div className="list">
        <h4>
          {title[1]}
          <span onClick={() => addLike(1)}>👍</span>
          {like[1]}
          <span>
            <button onClick={() => changeTitle(1)}>변경</button>
          </span>
        </h4>
        <p>작성일 : {date[1]}</p>
      </div>
      <div className="list">
        <h4>
          {title[2]}
          <span onClick={() => addLike(2)}>👍{like[2]}</span>
        </h4>
        <p>작성일 : {date[2]}</p>
      </div> */}
      {/* 리스트 종류 */}
      {/* 상세 페이지 시작 */}
      {/* return 안쪽에서는 if,for,switch를 모씀 */}
      {
        // 삼항연산자는 쓸수 있음
        //자식 콤포넌트에 전달할 props를
        // 작성(기술) 하면 됨
        showModal == true ? (
          <Modal
            title={title[index]}
            date={date[index]}
            content={content[index]} 
            color = 'red'
          />
        ) : null
      }
      {/* 상세페이지 종료 */}
    </div>
  );
}

export default App;

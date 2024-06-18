import "./App.css";
import { useState } from "react";

function App() {
    let [title, modifyTitle] = useState(["남자코트 추천", "강남우동맛집", "JS독학"]);
    let [thumbsUp, c] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [index, setIndex] = useState(0);
    let [inputValue, setInputValue] = useState('');

    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ color: "skyBlue", fontSize: "20px" }}>블로그임</h4>
            </div>
            <button
                onClick={() => {
                    let copy = [...title];
                    copy[0] = '여자코트 추천';
                    modifyTitle(copy);
                }}
            > 타이틀 변경 버튼
            </button>

            <button onClick={() => {
                let sortTitle = [...title].sort();
                modifyTitle(sortTitle);
            }}>정렬</button>


            <button onClick={() => {
                setModal(!modal);
            }}>modal창 숨김</button>


            {
                title.map(function (a, i) {
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => {
                                setModal(!modal);
                                setIndex(i);
                            }}>
                                {title[i]}
                                <span onClick={(e) => {
                                    //이벤트 버블링을 막기위한 stopPropagation
                                    e.stopPropagation();
                                    let copy = [...thumbsUp];
                                    copy[i] = copy[i] + 1;
                                    c(copy);
                                }} >
                                    👍</span> {thumbsUp[i]} </h4>
                            <p>6월 3일 발행</p>
                        </div>
                    )
                })
            }

            {/* 숙제: 1. 글 추가 버튼( 입력값 타이틀 리스트에 추가) */}
            {/* 숙제: 2. 글 삭제 버튼( 각 리스트에 버튼으로 존재) */}
            <input onChange={(e) => { setInputValue(e.target.value); console.log(inputValue); }}></input>

            {
                modal === true ? <Modal title={title} modifyTitle={modifyTitle} index={index} /> : null
            }
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.title[props.index]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                let copy = [...props.title];
                copy[0] = "여자코트 추천";
                props.modifyTitle(copy);
            }}>글수정</button>
        </div>
    )
}

export default App;

import { useRef, useState } from 'react';

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();

    const contentInput = useRef();

    const [state, setState] = useState({
        author:"",
        content:"",
        emotion: 1,
    })

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = () => {
        if(state.author.length < 1) {
            authorInput.current.focus();
            alert("작성자 이름을 작성해주세요.")
            return ;
        }

        if(state.content.length < 5){
            contentInput.current.focus();
            alert("일기 내용은 최소 5글자 이상 입력해주세요.")
            return ;
        }

        onCreate(state.author, state.content, state.emotion);
        alert('저장 성공');
        setState({
            author: "",
            content: "",
            emotion: 1,
        });
    }

    return (
    <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div className='emotion-div'>
            <label className='emotion-name'>오늘의 감정 점수 : </label>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <div>
            <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState}/>
        </div>
        <div>
            <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState}/>
        </div>
        <div>
            <button className='save' onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>
    );
}

export default DiaryEditor;
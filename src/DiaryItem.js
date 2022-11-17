const DiaryItem = ({author, content, created_date, emotion, id, onDelete}) => {
    return (
        <div className="DiaryItem">
            <div className="info">
                <div className="author">작성자 : {author}<span>(감정점수 : {emotion})</span> </div>
                <div className="date">{new Date(created_date).toLocaleString()}</div>
                <br />
            </div>
            <div className="content">{content}</div>
            <button onClick={() => {
                console.log(id);
                if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)){
                    onDelete(id)
                }
            }}>삭제하기</button>
        </div>
    )

}

export default DiaryItem;
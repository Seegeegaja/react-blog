function Modal(props) {
  return (
    <div className="modal">
      <h4>제목 : {props.title}</h4>
      <p>날짜 : {props.date}</p>
      <p>상세내용 : {props.content}</p>
    </div>
  );
}

export default Modal;

import React, { useRef } from 'react';
import './AddPost.css';

function AddPost({ onAddPost }) {
  const postTextRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const date = new Date();

    const post = {
      comment: postTextRef.current.value,
      date: date,
      avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=John',
      name: `'Случайный пользователь Вконтакте' ${Math.random()}`,
    };

    onAddPost(post);
    postTextRef.current.value = '';
  }

  return (
    <form className="comment_form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Введите Ваше сообщение..."
        ref={postTextRef}
      />
      <button className="flat_button">Отправить</button>
    </form>
  );
}

export default AddPost;

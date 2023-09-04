import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import './Post.css';

function Post({ comment, name, avatar, date }) {
  const postDate = new Date(date);

  return (
    <li>
      <div className="post_container">
        <div className="avatar">
          <img src={avatar} />
        </div>
        <div className="central_part">
          <div className="nick_name">{name}</div>
          <div className="comment">{comment}</div>
          <div className="post_footer">
            <div className="sub_data">
              <span>
                {postDate.toLocaleTimeString('ru-RU', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
              <span className="blue_text">Комментировать</span>
              <span className="blue_text">Тет-а-тет</span>
            </div>
          </div>
        </div>

        <div className="like_icon blue_text">
          <span>
            Мне нравится <AiFillHeart />
          </span>
        </div>
      </div>
    </li>
  );
}

export default Post;

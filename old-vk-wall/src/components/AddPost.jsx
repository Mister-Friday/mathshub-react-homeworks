import React, { useRef } from 'react';
import './AddPost.css';

function AddPost({ onAddPost }) {
  const postTextRef = useRef();

  const createUser = async () => {
    const response = await fetch(
      'https://api.parser.name/?api_key=YOUR_KEY&endpoint=generate&country_code=RU&results=1'
    );

    const responseJson = await response.json();
    const user = responseJson.data[0];

    const firstName = user.name.firstname.name;
    const lastName = user.name.lastname.name;
    const gender = user.name.firstname.gender;

    const manExterior = ['dannyPhantom', 'mrClean', 'dougFunny', 'fonze'];
    const womanExterior = ['full', 'mrClean', 'mrT', 'pixie'];

    const getRandomArrElement = (arr) => {
      const arrLength = arr.length;

      let rand = Math.random() * arrLength;

      rand = Math.floor(rand);

      return arr[rand];
    };

    let hair = getRandomArrElement(manExterior);

    console.log('hair=', hair);

    if (gender !== 'm') {
      hair = getRandomArrElement(womanExterior);
    }

    return {
      name: firstName,
      lastName: lastName,
      gender: gender,
      hair: hair,
      // mouth: getRandomArrElement(mouths),
    };
  };

  async function submitHandler(event) {
    event.preventDefault();
    const date = new Date();

    const userData = await createUser();

    const userName = `${userData.name} ${userData.lastName}`;

    const post = {
      comment: postTextRef.current.value,
      date: date,
      avatar: `https://api.dicebear.com/7.x/micah/svg?seed=${userName}&hair=${userData.hair}`,
      name: userName,
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

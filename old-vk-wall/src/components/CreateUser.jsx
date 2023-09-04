import React from 'react';

function CreateUser() {
  const onCreateUserHandler = async () => {
    const response = await fetch(
      'https://api.parser.name/?api_key=YOUR_KEY&endpoint=generate&country_code=RU&results=1'
    );

    const responseJson = await response.json();
    const user = responseJson.data[0];

    console.log('user =', user);

    const firstName = user.name.firstname.name;
    const lastName = user.name.lastname.name;
    const gender = user.name.firstname.gender;

    const newResponse = await fetch(
      'https://api.dicebear.com/7.x/pixel-art/svg'
    );

    // const symbols = '0123456789abcdf'.split('');

    const manExterior = {
      hairs: ['dannyPhantom', 'mrClean', 'dougFunny', 'fonze'],
    };
    const womanExterior = ['full', 'mrClean', 'mrT', 'pixie'];

    const getRandomArrElement = (arr) => {
      const arrLenght = arr.lenght;
      let rand = Math.random() * (arrLenght + 1);
      return arr[rand];
    };

    let hair = getRandomArrElement(manExterior);

    if (gender !== 'm') {
      const hair = getRandomArrElement(womanExterior);
    }

    return {
      name: firstName,
      lastName: lastName,
      gender: gender,
      hair: hair,
    };
  };

  return <button onClick={onCreateUserHandler}>Create User</button>;
}

export default CreateUser;

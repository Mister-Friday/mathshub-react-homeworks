import { createSlice } from '@reduxjs/toolkit';

const initialtitlesState = {
  categories: [
    {
      title: 'Action (set A)',
      image: '',
      cards: [
        {
          title: 'cry',
          translation: 'плакать',
          image: 'img/cry.jpg',
          audioSrc: 'audio/cry.mp3',
        },
        {
          title: 'dance',
          translation: 'танцевать',
          image: 'img/dance.jpg',
          audioSrc: 'audio/dance.mp3',
        },
        {
          title: 'dive',
          translation: 'нырять',
          image: 'img/dive.jpg',
          audioSrc: 'audio/dive.mp3',
        },
        {
          title: 'draw',
          translation: 'рисовать',
          image: 'img/draw.jpg',
          audioSrc: 'audio/draw.mp3',
        },
        {
          title: 'fish',
          translation: 'ловить рыбу',
          image: 'img/fish.jpg',
          audioSrc: 'audio/fish.mp3',
        },
        {
          title: 'fly',
          translation: 'летать',
          image: 'img/fly.jpg',
          audioSrc: 'audio/fly.mp3',
        },
        {
          title: 'hug',
          translation: 'обнимать',
          image: 'img/hug.jpg',
          audioSrc: 'audio/hug.mp3',
        },
        {
          title: 'jump',
          translation: 'прыгать',
          image: 'img/jump.jpg',
          audioSrc: 'audio/jump.mp3',
        },
      ],
    },
    {
      title: 'Action (set B)',
      image: '',
      cards: [
        {
          title: 'open',
          translation: 'открывать',
          image: 'img/open.jpg',
          audioSrc: 'audio/open.mp3',
        },
        {
          title: 'play',
          translation: 'играть',
          image: 'img/play.jpg',
          audioSrc: 'audio/play.mp3',
        },
        {
          title: 'point',
          translation: 'указывать',
          image: 'img/point.jpg',
          audioSrc: 'audio/point.mp3',
        },
        {
          title: 'ride',
          translation: 'ездить',
          image: 'img/ride.jpg',
          audioSrc: 'audio/ride.mp3',
        },
        {
          title: 'run',
          translation: 'бегать',
          image: 'img/run.jpg',
          audioSrc: 'audio/run.mp3',
        },
        {
          title: 'sing',
          translation: 'петь',
          image: 'img/sing.jpg',
          audioSrc: 'audio/sing.mp3',
        },
        {
          title: 'skip',
          translation: 'пропускать, прыгать',
          image: 'img/skip.jpg',
          audioSrc: 'audio/skip.mp3',
        },
        {
          title: 'swim',
          translation: 'плавать',
          image: 'img/swim.jpg',
          audioSrc: 'audio/swim.mp3',
        },
      ],
    },
    {
      title: 'Animal (set A)',
      image: '',
      cards: [
        {
          title: 'cat',
          translation: 'кот',
          image: 'img/cat.jpg',
          audioSrc: 'audio/cat.mp3',
        },
        {
          title: 'chick',
          translation: 'цыплёнок',
          image: 'img/chick.jpg',
          audioSrc: 'audio/chick.mp3',
        },
        {
          title: 'chicken',
          translation: 'курица',
          image: 'img/chicken.jpg',
          audioSrc: 'audio/chicken.mp3',
        },
        {
          title: 'dog',
          translation: 'собака',
          image: 'img/dog.jpg',
          audioSrc: 'audio/dog.mp3',
        },
        {
          title: 'horse',
          translation: 'лошадь',
          image: 'img/horse.jpg',
          audioSrc: 'audio/horse.mp3',
        },
        {
          title: 'pig',
          translation: 'свинья',
          image: 'img/pig.jpg',
          audioSrc: 'audio/pig.mp3',
        },
        {
          title: 'rabbit',
          translation: 'кролик',
          image: 'img/rabbit.jpg',
          audioSrc: 'audio/rabbit.mp3',
        },
        {
          title: 'sheep',
          translation: 'овца',
          image: 'img/sheep.jpg',
          audioSrc: 'audio/sheep.mp3',
        },
      ],
    },
    {
      title: 'Animal (set B)',
      image: '',
      cards: [
        {
          title: 'bird',
          translation: 'птица',
          image: 'img/bird.jpg',
          audioSrc: 'audio/bird.mp3',
        },
        {
          title: 'fish',
          translation: 'рыба',
          image: 'img/fish1.jpg',
          audioSrc: 'audio/fish.mp3',
        },
        {
          title: 'frog',
          translation: 'жаба',
          image: 'img/frog.jpg',
          audioSrc: 'audio/frog.mp3',
        },
        {
          title: 'giraffe',
          translation: 'жирафа',
          image: 'img/giraffe.jpg',
          audioSrc: 'audio/giraffe.mp3',
        },
        {
          title: 'lion',
          translation: 'лев',
          image: 'img/lion.jpg',
          audioSrc: 'audio/lion.mp3',
        },
        {
          title: 'mouse',
          translation: 'мышь',
          image: 'img/mouse.jpg',
          audioSrc: 'audio/mouse.mp3',
        },
        {
          title: 'turtle',
          translation: 'черепаха',
          image: 'img/turtle.jpg',
          audioSrc: 'audio/turtle.mp3',
        },
        {
          title: 'dolphin',
          translation: 'дельфин',
          image: 'img/dolphin.jpg',
          audioSrc: 'audio/dolphin.mp3',
        },
      ],
    },
    {
      title: 'Clothes',
      image: '',
      cards: [
        {
          title: 'skirt',
          translation: 'юбка',
          image: 'img/skirt.jpg',
          audioSrc: 'audio/skirt.mp3',
        },
        {
          title: 'pants',
          translation: 'брюки',
          image: 'img/pants.jpg',
          audioSrc: 'audio/pants.mp3',
        },
        {
          title: 'blouse',
          translation: 'блузка',
          image: 'img/blouse.jpg',
          audioSrc: 'audio/blouse.mp3',
        },
        {
          title: 'dress',
          translation: 'платье',
          image: 'img/dress.jpg',
          audioSrc: 'audio/dress.mp3',
        },
        {
          title: 'boot',
          translation: 'ботинок',
          image: 'img/boot.jpg',
          audioSrc: 'audio/boot.mp3',
        },
        {
          title: 'shirt',
          translation: 'рубашка',
          image: 'img/shirt.jpg',
          audioSrc: 'audio/shirt.mp3',
        },
        {
          title: 'coat',
          translation: 'пальто',
          image: 'img/coat.jpg',
          audioSrc: 'audio/coat.mp3',
        },
        {
          title: 'shoe',
          translation: 'туфли',
          image: 'img/shoe.jpg',
          audioSrc: 'audio/shoe.mp3',
        },
      ],
    },
    {
      title: 'Emotions',
      image: '',
      cards: [
        {
          title: 'sad',
          translation: 'грустный',
          image: 'img/sad.jpg',
          audioSrc: 'audio/sad.mp3',
        },
        {
          title: 'angry',
          translation: 'сердитый',
          image: 'img/angry.jpg',
          audioSrc: 'audio/angry.mp3',
        },
        {
          title: 'happy',
          translation: 'счастливый',
          image: 'img/happy.jpg',
          audioSrc: 'audio/happy.mp3',
        },
        {
          title: 'tired',
          translation: 'уставший',
          image: 'img/tired.jpg',
          audioSrc: 'audio/tired.mp3',
        },
        {
          title: 'surprised',
          translation: 'удивлённый',
          image: 'img/surprised.jpg',
          audioSrc: 'audio/surprised.mp3',
        },
        {
          title: 'scared',
          translation: 'испуганный',
          image: 'img/scared.jpg',
          audioSrc: 'audio/scared.mp3',
        },
        {
          title: 'smile',
          translation: 'улыбка',
          image: 'img/smile.jpg',
          audioSrc: 'audio/smile.mp3',
        },
        {
          title: 'laugh',
          translation: 'смех',
          image: 'img/laugh.jpg',
          audioSrc: 'audio/laugh.mp3',
        },
      ],
    },
  ],
};

const slicetitlesConfig = {
  name: 'titles',
  initialState: initialtitlesState,
  reducers: {},
};

const titlesSlice = createSlice(slicetitlesConfig);

export default titlesSlice;

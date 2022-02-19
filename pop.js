const pops = [
  {
    id: 'tonic-id',
    title: 'Tonic',
    details: ['Canopy', 'Back End dev', 2021],
    image: 'images/awesomebook.png',
    description:
        'In this project, we build a basic website that allows users to add/remove books from a list. we achieved that by using JavaScript objects and arrays. we will also do dynamically modify the DOM and add basic events.',
    technologyList: ['Html', 'Css', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
  {
    id: 'facebook-id',
    title: 'Multi-Post',
    details: ['Canopy', 'Back End dev', 2015],
    image: 'images/railsbudgetapp.PNG',
    description:
        'The project is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    technologyList: ['Ruby', 'Rails', 'Bootstrap'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
  {
    id: 'uber-id',
    title: 'Tonic',
    details: ['Canopy', 'Back End dev', 2015],
    image: 'images/Snapshoot-Portfolio3.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
  {
    id: 'twitter-id',
    title: 'Twitter',
    details: ['Canopy', 'Back End dev', 2015],
    image: 'images/Snapshoot-Portfolio4.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
];

const seeProjectButtons = document.querySelectorAll('.showpopup');
const container = document.querySelector('.project-container');

pops.forEach((pop) => {
  const div = document.createElement('div');
  div.className = 'project-card';
  const article = document.createElement('article');
  article.className = 'popup-container';
  const div
});

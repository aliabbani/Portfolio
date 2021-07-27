const projects = [
  {
    id: 'tonic-id',
    title: 'Tonic',
    details: ['Canopy', 'Back End dev', 2015],
    image: './img/snapshot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
  {
    id: 'facebook-id',
    title: 'Facebook',
    details: ['Canopy', 'Back End dev', 2015],
    image: './img/sectionthree.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
  {
    id: 'uber-id',
    title: 'Uber',
    details: ['Canopy', 'Back End dev', 2015],
    image: './img//sectiontwo.png',
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
    image: './img/sectionfour.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
];

const section = document.querySelector('.project-container');
projects.forEach((project) => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `
          <div>
          <h2>${project.title}<span class="material-icons"> close </span></h2>
          </div>
          <div>
          <ul>
              <li >${project.details[0]}</li>
              <li >${project.details[1]}</li>
              <li >${project.details[2]}</li>
            </ul>
          </div>
          <div>
            <img src=${project.image} alt="tonic1" class="mob">            
          </div>
          <div>
            <p>${project.description}</p>
          </div>
          <div>
            <ul>
              <li >${project.technologyList[0]}</li>
              <li >${project.technologyList[1]}</li>
              <li >${project.technologyList[2]}</li>
            </ul>
          </div>
            <div>
            <button >${project.firstButton}</button>
            <button >${project.secondButton}</button>
            </div>
          </div>
         `;
});

const seeProjectButtons = document.querySelectorAll('.showpopup');

seeProjectButtons.forEach((button) => {
  projects.forEach((project) => {
    if (button.id === project.id) {
      button.addEventListener('click', () => {
        const popUpSection = document.createElement('section');
        popUpSection.innerHTML = `
           <article class="popup-container">
            <div class="popup-header">
            <h2 class="popup-h2">${project.title}</h2>
            <span class="material-icons close-popup"> close </span>
            </div>
            <div class="popup-canopy">
            <span >${project.details[0]}</span>
            <ul class="popup-canopy">             
                <li >${project.details[1]}</li>
                <li >${project.details[2]}</li>
              </ul>
            </div>
            <div class="popup-image">
              <img src=${project.image}>
            </div>
            <div class="desktop-version">
              <div class="popup-description">
                <p>${project.description}</p>
              </div>
              <div class="destop-tech">
                <div class="popup-technology">
                  <span >${project.technologyList[0]}</span>
                  <span >${project.technologyList[1]}</span>
                  <span >${project.technologyList[2]}</span>
                </div>
                <div class="popup-button">
                  <button >${project.firstButton}<i class="fa fa-external-link"></i></button>
                  <button >${project.secondButton}<i class="fa fa-github"></i></button>
                </div>
              <div>
            </div>
            </article>
      `;

        section.appendChild(popUpSection);
        const closeButton = document.querySelector('.close-popup');
        closeButton.addEventListener('click', () => {
          section.removeChild(popUpSection);
        });
      });
    }
  });
});

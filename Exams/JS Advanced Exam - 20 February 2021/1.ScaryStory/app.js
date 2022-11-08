window.addEventListener("load", solve);

function solve() {

  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');

  let listOfStories = document.getElementById('preview-list');
  let main = document.getElementById('main');

  document.getElementById('form-btn').addEventListener('click', (ev) => {
      ev.preventDefault();

      let firstNameValue = firstName.value;
      let lastNameValue = lastName.value;
      let ageValue = age.value;
      let storyTitleValue = storyTitle.value;
      let genreValue = genre.value;
      let storyValue = story.value;

      if(!firstNameValue || !lastNameValue || !ageValue || !genreValue || !storyTitleValue || !storyValue) {
        return;
      }

      createDOMElements(firstNameValue, lastNameValue, ageValue, storyTitleValue, genreValue, storyValue);
      clearInputFileds();
  });

  function createDOMElements(firstNameValue, lastNameValue, ageValue, storyTitleValue, genreValue, storyValue) {
    let li = document.createElement('li');

    let scaryStory = addStory(firstNameValue, lastNameValue, ageValue, storyTitleValue, genreValue, storyValue);

    let saveBTN = document.createElement('button');
    saveBTN.classList.add('save-btn');
    saveBTN.textContent = 'Save Story';
    saveBTN.addEventListener('click', (e) => {
      main.innerHTML = '';
      let h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';

      main.appendChild(h1);
    });

    let editBTN = document.createElement('button');
    editBTN.classList.add('edit-btn');
    editBTN.textContent = 'Edit Story';
    editBTN.addEventListener('click', (e) => {
      e.preventDefault();
      listOfStories.remove();

      firstName.value = firstNameValue;
      lastName.value = lastNameValue;
      age.value = ageValue;
      storyTitle.value = storyTitleValue;
      genre.value = genreValue;
      story.value = storyValue;
    });

    let deleteBTN = document.createElement('button');
    deleteBTN.classList.add('delete-btn');
    deleteBTN.textContent = 'Delete Story';
    deleteBTN.addEventListener('click', (e) => {
      let currentStory = e.target.parentNode.parentNode;

      currentStory.remove();
      e.preventDefault();
    });

    li.appendChild(scaryStory);
    li.appendChild(saveBTN);
    li.appendChild(editBTN);
    li.appendChild(deleteBTN);

    listOfStories.appendChild(li);
  }

  function addStory(firstNameValue, lastNameValue, ageValue, storyTitleValue, genreValue, storyValue) {
    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;

    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${ageValue}`;

    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitleValue}`;

    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genreValue}`;

    let pStory = document.createElement('p');
    pStory.textContent = `${storyValue}`;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    return article;
  }

  function clearInputFileds() {
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    genre.value = '';
    story.value = '';
  }
}

function solve(){

   let author = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');
   let listOfPosts = document.getElementsByTagName('section')[1];
   let ol = document.getElementsByTagName('ol')[0];

   document.getElementsByClassName('btn create')[0].addEventListener('click', (ev) => {
      ev.preventDefault();

      let authorValue = author.value;
      let titleValue = title.value;
      let categoryValue = category.value;
      let contentValue = content.value;

      if(!authorValue || !titleValue || !categoryValue || !contentValue) {
         return;
      }

      createDOMElements(authorValue, titleValue, categoryValue, contentValue);
      clearInputFileds();
   });

   function createDOMElements(authorValue, titleValue, categoryValue, contentValue) {
      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = `${titleValue}`;

      let pCategory = document.createElement('p');
      let strongCategory = document.createElement('strong');
      pCategory.textContent = `Category:`;
      strongCategory.textContent = `${categoryValue}`;
      pCategory.appendChild(strongCategory);
      
      let pCreator = document.createElement('p');
      let strongCreator = document.createElement('strong');
      pCreator.textContent = `Creator:`;
      strongCreator.textContent = `${authorValue}`;
      pCreator.appendChild(strongCreator);

      let pContent = document.createElement('p');
      pContent.textContent = `${contentValue}`;

      let divButtons = document.createElement('div');
      divButtons.classList.add('buttons');

      let deleteBTN = document.createElement('button');
      deleteBTN.classList.add('btn');
      deleteBTN.classList.add('delete');
      deleteBTN.textContent = 'Delete';
      deleteBTN.addEventListener('click', (e) => {
         let currentPost = e.target.parentNode.parentNode;

         currentPost.remove();
      });

      let archiveBTN = document.createElement('button');
      archiveBTN.classList.add('btn');
      archiveBTN.classList.add('archive');
      archiveBTN.textContent = 'Archive';
      archiveBTN.addEventListener('click', (e) => {
         let currentPost = e.target.parentNode.parentNode;
         currentPost.remove();

         let li = document.createElement('li');
         li.textContent = `${titleValue}`;
         

         ol.appendChild(li);
      }); 

      divButtons.appendChild(deleteBTN);
      divButtons.appendChild(archiveBTN);

      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(divButtons);

      listOfPosts.appendChild(article);
   }

   function clearInputFileds() {
      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';
   }
}

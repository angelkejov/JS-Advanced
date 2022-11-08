function search() {
   let towns = Array.from(document.querySelectorAll("ul li"));
   let input = document.getElementById('searchText').value;

   let counter = 0;
   for(let t of towns) {
      let text = t.textContent;

      if(text.includes(input)) {
         t.style.textDecoration = "underline";
         t.style.fontWeight = "bold";
         counter++;
      } else {
         t.style.textDecoration = "none";
         t.style.fontWeight = "normal";
      }
   }

   document.getElementById("result").innerText = `${counter} matches found`;
}

const books = [
    {
        isbn: "1600506460320",
        title: "Great book",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
    },
];

// console.log(books);

const listItems = document.querySelector("ul");

console.log(listItems)

let html = "";

for (let i = 0; i < books.length; i++) {
 
 let remove = "❌"

   html += `<div class="books-list"> 
   <h3>${books[i].isbn}</h3>
   <p>${books[i].title}</p>
   <p>${remove}</p>
   </div>
   `;

console.log(html);

}

listItems.innerHTML = html;
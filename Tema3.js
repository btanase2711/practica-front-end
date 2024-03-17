/* Plecând de la structura de HTML de mai jos sa se facă următoarele folosind javascript:
1.Primul h1 sa fie afișat cu o culoare gri inchisa - rgba(0, 0, 0, 0.75)*/

const firstParagraph = document.querySelector(".first-paragraph");

//firstParagraph.textContent = "ce mai faci?";

firstParagraph.style.color = "rgba(0, 0, 0, 0.7)";

/* 2.Al doilea h1 sa afiseze textul “Welcome to my website” pe un background gri deschis - rgba(0, 0, 0, 0.2)*/

const secondParagraph = document.querySelector(".second-paragraph");

secondParagraph.textContent = "Welcome to my website";
secondParagraph.style.backgroundColor = "rgba(0, 0, 0, 0.2)";

/*3.Paragraful din div sa înceapă cu lungimea întregului text între paranteze. 
De exemplu dacă textul este “Descrierea mea” textul afișat sa fie “(14) Descrierea mea”*/

const firstP = document.querySelector(".the-real-first-paragraph");

firstP.textContent = "(" + firstP.textContent.length + ")" + firstP.textContent;

/*4.Primul item din lista sa fie afișat pe background roșu*/

const firstItemList = document.querySelector(".first-list-item");

firstItemList.style.backgroundColor = "red";

/*5.Toate item-urile din lista care conțin numere pare ( 2, 4 ) sa fie afișate pe un 
background gri deschis - rgba(0, 0, 0, 0.2), textul sa aibă culoarea rgba(0, 0, 0, 0.8), iar font-weight 700*/

const evenListItem = document.querySelectorAll(".even-item");

for (i = 0; i < evenListItem.length; i++) {
  evenListItem[i].style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  evenListItem[i].style.color = "rgba(222, 0, 0, 0.8)";
  evenListItem[i].style.fontWeight = "600";
}

/*6.Folosindu-te de replace înlocuiește textul din ultimul item în “Last item 5”*/

const lastItem = document.querySelector(".last-item");

/* let lastItemText = lastItem.textContent;

lastItemText.replace("Item 5", "Last Item 5");
lastItem.textContent = lastItemText.replace("Item 5", "Last Item 5"); */
lastItem.textContent = lastItem.textContent.replace("Item 5", "Last Item 5");

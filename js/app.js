'use strict';

// get form id:
let form = document.getElementById('form');
//////////////////////////////////////////////////////////////////////////////////
//check localstorage:
if (localStorage.getItem('article') === null) {
  localStorage.setItem('article', JSON.stringify([]));
}

// constructor:
function Article(
  articlename,
  articletitel,
  articlesubject,
  articlecontent,
  creationday,
  numberoflikes
) {
  this.articlename = articlename;
  this.articletitel = articletitel;
  this.articlesubject = articlesubject;
  this.articlecontent = articlecontent;
  this.creationday = creationday;
  this.numberoflikes = numberoflikes;
  //   this.articleimg=`./img/${articleimg}.jpg`;
}
Article.all = [];
getlocaldata();

function getrandomnumber() {
  return Math.random() * (500 - 1) + 1;
}

// get data from the form
form.addEventListener('submit', submithandel);
function submithandel(event) {
  event.preventDefault();

  let articlename = event.target.name.value;
  let articletitel = event.target.titel.value;
  let articlesubject = event.target.subject.value;
  let articlecontent = event.target.textarea.value;
  let creationday = `${event.target.day.value}${event.target.month.value}${event.target.year.value}`;
  let numberoflikes = getrandomnumber();
  console.log(numberoflikes);
  // let articleimg= event.ta..value;
  new Article(
    articlename,
    articletitel,
    articlesubject,
    articlecontent,
    creationday,
    numberoflikes
  );
  // store data in local storge:
  localStorage.setItem('article', JSON.stringify(Article.all));
  //clear form data
  form.reset();
  getlocaldata();
}

// get local storage
function getlocaldata() {
  let localdata = localStorage.getItem('article');
  if (localdata) {
    Article.all = JSON.parse(localStorage.getItem('article'));
    render();
  }
}

//render function
function render() {
  let rightsection = document.getElementById('rightsection');
  rightsection.appendChild(divcontainer);
  let divcontainer = document.createElement('div');

  for (let i = 0; i < Article.all.length; i++) {
    let h1 = document.createElement(h1);
    h1.innerHTML = Article.all[i].articletitel;
    let img = document.createElement('img');
    img.src = './img.asac_ltuc.jpg';
    img.setAttribute('width', '100px');
    img.setAttribute('height', '50px');

    let authour = document.createElement('h1');
    authour.textContent = 'Yahya Albashar';

    let date = document.createElement('h2');
    date.innerHTML = Article.all[i].creationday;

    let likes = document.createElement('h1');
    likes.innerHTML = Article.all[i].numberoflikes;

    let subject = document.createElement('h1');
    subject.innerHTML = Article.all[i].articlesubject;

    let content = document.createElement('h1');
    content.innerHTML = Article.all[i].articlecontent;

    divcontainer.appendChild(h1);
    divcontainer.appendChild(img);
    divcontainer.appendChild(authour);
    divcontainer.appendChild(date);
    divcontainer.appendChild(likes);
    divcontainer.appendChild(subject);
    divcontainer.appendChild(content);

    let articlenumber = document.createElement('h1');
    articlenumber.textContent = i + 1;
    divcontainer.appendChild(articlenumber);
  }
  rightsection.appendChild(divcontainer);
}
getlocaldata();

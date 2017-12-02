const students = document.querySelectorAll('.student-list li');
const numOfStudents = students.length;
const studentsPerPage = 10;
let numOfPages = Math.ceil(numOfStudents / studentsPerPage);

/*
This function displays a "page" or a list of ten students based which
"page number" the user selected.
*/
function showPage(pageNum) {
  hide();
  let displayFirstOnPage = (pageNum * 10) - 10;
  let displayLastOnPage = (pageNum * 10) - 1;
  for (let i = 0; i < students.length; i++) {
    if (i >= displayFirstOnPage && i <= displayLastOnPage) {
      students[i].style.display = 'list-item';
    }
  }
}

/*
This function hides the students.
*/
function hide() {
  for (let i = 0; i < students.length; i++) {
    students[i].style.display = 'none';
  }
}

/*
This function creates html based on number of pages needed.
 <div class="pagination">
    <ul>
      <li>
        <a href="#">1</a>
*/
function createPageLinks(numOfPages) {
  let div = document.createElement('div');
  div.className = 'pagination';
  document.querySelector('div.page').appendChild(div);
  let ul = document.createElement('ul');
  div.appendChild(ul);
  for (let i = 1; i <= numOfPages; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = '#';
    a.innerHTML = i;
    ul.appendChild(li).appendChild(a);
  }
}
createPageLinks(numOfPages);

/*
This function loads the first page and makes active page one.
*/
function loadFirstPage(numOfPages) {
  document.getElementsByTagName('a')[0].className = 'active';
  if (numOfPages > 1) {
    for (let i = 0; i < students.length; i++) {
      if (i < studentsPerPage) {
        students[i].style.display = 'list-item';
      } else {
        students[i].style.display = 'none';
      }
    }
  }
}
loadFirstPage(numOfPages);

/*
This function creates the links to the different "pages" or lists of students.
It will call the showPage function to display the proper list of students based
on which link the user clicks.
*/
function appendPageLinks(students) {
  const pageLinks = document.getElementsByTagName('a');
  for (let i = 0; i < pageLinks.length; i++) {
    pageLinks[i].addEventListener('click', (event) => {
      let pageNum = parseInt(event.target.textContent);
      let makeActive = document.getElementsByTagName('a');
      for (let i = 0; i < makeActive.length; i++) {
        makeActive[i].className = '';
      }
      makeActive[pageNum - 1].className = 'active';
      showPage(pageNum);
    });
  }
}
appendPageLinks(students);

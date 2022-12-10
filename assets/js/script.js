// set submit type to Add task button After clicking Add task button 
function submitFun() {
  document.getElementById("add-task").setAttribute("type", "submit");
}

// Assigning the selected task ID to delete button query after clicking that button
var deleteID;
function ClickedID(Id) {
  deleteID = Id;
  let hrefValue = document.getElementById("del-id").getAttribute("href");
  let splitedValue = hrefValue.split("=");
  let hValue = splitedValue[0].concat("=" + deleteID);
  document.getElementById("del-id").setAttribute("href", hValue);
}

// Putting line - through style to tasks after clicking complete radio button
function accknowTaskComplete() {
  let tasks = document.getElementsByName("task-box");
  var dueDates = document.getElementsByClassName("due-date-to");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener('click', function (event) {
      dueDates[i].style.textDecoration = "line-through";
      for (let j = 0; j < tasks.length; j++) {
        if (j != i) {
          dueDates[j].style.textDecoration = "none";
        }
      }
      event.stopPropagation();
    })
  }
}

// Showing the time text as required, Some modification in Date format
function changeTimeText() {
  var timeElement = document.getElementsByClassName("due-date-to");
  for (let i = 0; i < timeElement.length; i++) {
    let text = timeElement[i].innerHTML;
    let modifiedText = text.split(" 05:30");
    timeElement[i].innerHTML = modifiedText[0];
  }
}

// Change the background colour of Category types according to category type
function changeBackgroundCategory() {
  var categoryElement = document.getElementsByClassName("category-name");
  for (let i = 0; i < categoryElement.length; i++) {
    let text = categoryElement[i].innerText;
    if (text == "School") {
      categoryElement[i].style.background = "orange";
    }
    else if (text == "Personal") {
      categoryElement[i].style.background = "Blue";
    }
    else if (text == "Work") {
      categoryElement[i].style.background = "purple";
    }
    else if (text == "Cleaning") {
      categoryElement[i].style.background = "green";
    }
    else {
      categoryElement[i].style.background = "gray";
    }
  }
}

// This needs to be updated to show the date format in DD/MM/YYYY
function mydate1() {
  d = new Date(document.getElementById("dt").value);
  dt = d.getDate();
  mn = d.getMonth();
  mn++;
  yy = d.getFullYear();
  document.getElementById("dt").value = dt + "/" + mn + "/" + yy
}

// Calling all the required functions
changeTimeText();
changeBackgroundCategory();
accknowTaskComplete();


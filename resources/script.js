const toDark = document.getElementById("dark");
const navigationItems = document.getElementsByClassName("navigation_item"); 
const projectListItem = document.getElementsByClassName("projects_list_item");
const projectListItemArray = Array.from(projectListItem);
const navigationItemsArray = Array.from(navigationItems);
let darkMode = false;

function toggleItDark () {
    if (darkMode) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkMode = false;
        toDark.innerHTML = "Dark";
        projectListItemArray.forEach(item => item.style.color = "black");
        navigationItemsArray.forEach(item => item.style.color = "black");
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"; 
        darkMode = true;
        toDark.innerHTML = "Light";
        projectListItemArray.forEach(item => item.style.color = "white");
        navigationItemsArray.forEach(item => item.style.color = "white");
    }
 }
 
toDark.addEventListener("click", toggleItDark);

 
console.log("I'm here");
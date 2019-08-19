function showTab (evt, tabName, color) {
var i, tablink, tabcontent;
tabcontent = document.getElementsByClassName("tabcontents");
for(i =0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}

tablink = document.getElementsByClassName("tablinks");
for(i=0; i < tablink; i++) {
tablink[i].className = tablink[i].className.replace (" active", "");
tablink[i].style.backgroundColor = "";
}



document.getElementById(tabName).style.display ="block";
evt.currentTarget.className += " active";
}

 const openTab = document.querySelector('.activer i.click');
 const switcher = document.getElementsByClassName('styleSwitcher')[0];

 openTab.onclick = function(e){
     e.preventDefault();
     switcher.classList.toggle("active");
     console.log("salam")

 }
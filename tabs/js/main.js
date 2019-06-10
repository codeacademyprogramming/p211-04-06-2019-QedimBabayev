"use strict"


const tabLinks = [...document.querySelectorAll(".complex a ")];
tabLinks.forEach(function (link) {
    link.onclick = function (e) {
        e.preventDefault();

        //find currently active

        const preActive = document.querySelector(".complex a.active");
        const preActiveDiv = document.querySelector(".text-wrapper div.active");
        preActive.classList.remove('active');
        preActiveDiv.classList.remove('active');


        this.classList.add('active');


        const href = this.getAttribute("href");
        document.querySelector(href).classList.add('active');

    }
})



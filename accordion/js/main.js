"use strict"



const acc = [...document.getElementsByClassName('accordion')];
acc.forEach(function (link) {
    link.addEventListener("click", function () {

        const preActiveAcc = document.querySelector('.accordion.active');
        const preActivePanel = document.querySelector('.panel.active');
        preActiveAcc.classList.remove('active');
        preActivePanel.classList.remove('active');
        this.classList.add("active");
        let panel = this.nextElementSibling;
        panel.classList.add("active");

    })

})

"use strict";


ymaps.ready(init);
    function init(){
        const map = document.getElementById("map");

        map.style.height = `${innerHeight}px`;
        map.style.width = `${innerWidth}px`;

        let myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        });
    }

addEventListener("resize", (event) => {
    const map = document.getElementById("map")
    map.style.height = `${innerHeight}px`;
    map.style.width = `${innerWidth}px`;
});
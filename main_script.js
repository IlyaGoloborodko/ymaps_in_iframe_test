"use strict";

addEventListener("resize", (event) => {
    console.log(`
    Внешняя высота: ${outerHeight};
    Внешняя ширина: ${outerWidth}`
    );
    const frame = document.getElementById("main_frame");
    frame.style.height = `${outerHeight/2}px`;
    frame.style.width = `${outerWidth/2}px`;

});
function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random"); // Change to "#move-random" if it's an ID

if (moveRandom) {
    moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
    });
} else {
    console.error("Element not found: .move-random");
}

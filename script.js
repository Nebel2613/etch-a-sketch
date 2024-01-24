const btn = document.querySelector("button");
let input = 16;
create(input);

function create(input) {
    let SIZE = 100/input;
    //Destroy and create container
    const old = document.querySelector(".container");
    const body = document.querySelector("body");
    body.removeChild(old);
    const container = document.createElement("div");
    container.classList.add("container")
    body.appendChild(container);
    //fill it up
    for (let i = 0; i < input * input; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.cssText = `width: ${SIZE}%; height : ${SIZE}%`;
    container.appendChild(pixel);
    pixel.addEventListener("mouseenter", ()=>{
        pixel.style.backgroundColor = "black";
    })
}
}
//event listener on button
btn.addEventListener("click", function () {
    input = parseInt(prompt("Enter the number of pixels on the side of the grid(Ex: 16 for a 16*16 grid", "16"));
    create(input);
})

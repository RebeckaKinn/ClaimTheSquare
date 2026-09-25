updateView();
function updateView() {
    model.app.display.innerHTML = generateSquares();
}

function generateSquares() {
    let html = "";
    for (let i = 0; i < 64; i++) {
        const element = model.data.squares.find(to => to.index == i);
        if (element) {
            html += `<div>${element.text}</div>`
        } else {
            html += `<div>heh</div>`
        }
    }
    return html;
}

init();
async function init() {
    await getData();
console.log(model.data.colors)
    updateView();
}
function updateView() {
    model.app.display.innerHTML = `
        <h1>Claim the Square</h1>
        <section>${displayInputForm()}</section>
        <section class="squareGrid">${generateSquares()}</section>
    `;
}

function generateSquares() {
    let html = "";
    for (let i = 0; i < 64; i++) {
        const element = model.data.squares.find(to => to.index == i);
        if (element) {
            html += `
            <div style="color: ${element.foreColor}; background-color: ${element.backColor}">
                ${element.text}
            </div>`
        } else {
            html += `
            <div>
                <button onclick="claimSquare(${i})">claim</button>
            </div>`
        }
    }
    return html;
}

function displayInputForm() {
    return `
        <input type="text" placeholder="Enter text" oninput="model.viewState.claimSquare.text = this.value">
        <select onchange="model.viewState.claimSquare.foreColor = this.value">
            <option value="" selected hidden>Forground Color</option>
            ${generateColorOptions()}
        </select>
        <select onchange="model.viewState.claimSquare.backColor = this.value">
            <option value="" selected hidden>Background Color</option>
            ${generateColorOptions()}
        </select>
    `;
}

function generateColorOptions() {
    let html = "";
    
    for (const color of model.data.colors) {
        html += `<option value=${color}>${color}</option>`;
    }
    return html;
}
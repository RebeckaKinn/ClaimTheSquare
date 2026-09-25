getData();
async function getData() {
    const response = await axios.get('/noe');
    model.app.display.innerText = response.data;
}
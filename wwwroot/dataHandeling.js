getData();
async function getData() {
    const response = await axios.get('/getSquares');
    model.data.squares = response.data;
}
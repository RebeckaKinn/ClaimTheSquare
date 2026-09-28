
async function getData() {
    const response = await axios.get('/getSquares');
    console.log(response)
    model.data.squares = response.data;
}
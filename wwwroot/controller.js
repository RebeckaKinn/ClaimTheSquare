function claimSquare(newIndex) {
    const inputs = model.viewState.claimSquare;
    if (inputs.text == null || inputs.foreColor == null || inputs.backColor == null || inputs.text.trim().length == 0) return;
    model.data.squares.push({
        text: inputs.text,
        foreColor: inputs.foreColor,
        backColor: inputs.backColor,
        index: newIndex,
    });
    resetViewStateInputs();
    updateView();
}

function resetViewStateInputs() {
    model.viewState.claimSquare.text = null;
    model.viewState.claimSquare.foreColor = null;
    model.viewState.claimSquare.backColor = null;
}
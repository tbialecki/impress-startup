$('pre').click(function (event) {
    zoom.to({
        element: this
    });
    event.preventDefault();
});
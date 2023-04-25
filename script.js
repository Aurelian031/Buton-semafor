const interval = 10; // seconds

function changeColor() {
    const myButton = document.getElementById('myButton');
    if (myButton.style.backgroundColor === 'red') {
        myButton.style.backgroundColor = 'yellow';
    } else if (myButton.style.backgroundColor === 'yellow') {
        myButton.style.backgroundColor = 'green';
    } else {
        myButton.style.backgroundColor = 'red';
    }
}
 setInterval(() => {
    changeColor();
}, interval * 1000);
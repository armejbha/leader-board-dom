const titleColor = document.getElementsByClassName('colors');
for (const title of titleColor) {
    title.style.color = 'red';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(0, 173, 165, 0.952';
}
document.getElementById('adding').addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerText = 'Problem solving';
    document.getElementById('list').appendChild(li);
});

document.getElementById('numberAdd').addEventListener('click', function () {
    const number = document.getElementById('numbers');
    // const newNum = parseInt(inputText);
    const inputText = number.value;
    const input = parseInt(inputText);
    if (input >= 5) {
        numberAdd.style.display = 'none';
    }
    else {
        const newNum = input + 1;
        number.value = newNum;
    }

})

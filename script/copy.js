var ship = document.querySelector('#player');
var position = 500;

function insert() {
    const fire = document.createElement("img");
    fire.src = '/work/Уник/WbeGame/image/Fire.png';
    document.querySelector('.container').appendChild(fire);
}

window.addEventListener('keydown', function(e) {
    if (e.key == 'a' || e.key == 'A') {
        ship.style.left = position - 10 + "px";
        position -= 5;
    }
    if (e.key == 'd' || e.key == 'D') {
        ship.style.left = position + 10 + "px";
        position += 5;
    }
    if (e.key = 'space') {
        insert();
    }
});
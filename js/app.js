const tap = document.querySelectorAll('.tap');
const sound = document.querySelectorAll('audio');
const colors = [ 'darkblue', 'red', 'green', 'yellow', 'palevioletred', 'brown' ];

tap.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        sound[i].currentTime = 0;
        sound[i].play();

        bub(i);
    });

    const bub = index => {
        const bodyHead = document.querySelector('.body-head');
        const div = document.createElement('div');
        bodyHead.appendChild(div);
        div.style.background = colors[index]
        div.animationName = 'jump' ;
        
        setTimeout(() => {
            div.remove();
        },1500)
    }
})
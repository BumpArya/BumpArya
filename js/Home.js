window.addEventListener("load", (event) => {
    let el = document.getElementById('tilt')
    const height = el.clientHeight
    const width = el.clientWidth
    el.addEventListener('mousemove', handleMove)
    function handleMove(e) {
        const xVal = e.layerX
        const yVal = e.layerY
        const yRotation = 20 * ((xVal - width / 2) / width)
        const xRotation = -20 * ((yVal - height / 2) / height)
        const string = 'perspective(500px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
        el.style.transform = string
    }
    el.addEventListener('mouseout', function () { el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)' })
    el.addEventListener('mousedown', function () { el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)' })
    el.addEventListener('mouseup', function () { el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)' })

    consoleText(['Hello World!', 'I am Arya'], 'text', ['black', 'black']);

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function () {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;
            } else {
                con.className = 'console-underscore'
                visible = true;
            }
        }, 400)
    }
});


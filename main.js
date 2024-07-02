b1 = document.getElementById('b1')
option = document.getElementById('option')
english = document.getElementById('english')
tamil = document.getElementById('TAMIL')
englishaud = document.getElementById('englishaud')
english1 = document.getElementById('english1')
option1 = document.getElementById('option1')
tamilaud = document.getElementById('tamilaud')
tamil1 = document.getElementById('tamil1')


function open1(event) {
    event.target.remove()
}

function open2() {
    option.style.display = 'block'
    option1.play()
}

function close2(event) {
    alert('you cheat gay nigga')
}

function open3() {
    english.style.display = 'block'
    english1.play()
    englishaud.play()
    englishaud.addEventListener('ended',function () {
        alert('you won nigga')
        location.reload()
    })
}

function open4() {
    tamil.style.display = 'block'
    tamil1.play()
    tamil1.addEventListener('ended', function () {
        tamilaud.play()
    })
    tamilaud.addEventListener('ended',function () {
        alert('you won nigga')
        location.reload()
    })
}

function close3(event) {
    alert('you lose nigga')
    location.reload()
}


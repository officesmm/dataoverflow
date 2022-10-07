var i = 0;
var x = setInterval(function () {
    document.getElementById("datalist").innerHTML += addingDataNext(1000);
    if (i == 100000) {
        clearInterval(x);
    }
}, 100);


function addingDataNext(nextRowCount) {
    rowCount = nextRowCount + i;
    trGroup = '';
    while (i < rowCount) {
        if (i % 2 == 0) {
            trGroup += '<tr class="table-info">' +
                '<th scope="row">' + (i + 1) + '</th>' +
                '<td>' + getCurrentJPDate() + '</td>' +
                '<td>' + generateRandomCharacter(16) + '</td>' +
                '<td>' + '+81' + generateRandomInteger(10).toString() + '</td>' +
                '</tr>';
        } else {
            trGroup += '<tr class="table-light">' +
                '<th scope="row">' + (i + 1) + '</th>' +
                '<td>' + getCurrentJPDate() + '</td>' +
                '<td>' + generateRandomCharacter(16) + '</td>' +
                '<td>' + '+81' + generateRandomInteger(10).toString() + '</td>' +
                '</tr>';
        }
        i++;
    }
    return trGroup;
}

function getCurrentJPDate() {
    const today = new Date(Date.now());
    return today.getFullYear().toString() + (today.getMonth() + 1).toString().padStart(2, '0') + today.getDate().toString().padStart(2, '0') + today.getHours().toString().padStart(2, '0') + today.getMinutes().toString().padStart(2, '0') + today.getSeconds().toString().padStart(2, '0') + today.getMilliseconds().toString().padStart(3, '0');
}

function generateRandomCharacter(characterLength) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < characterLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
function generateRandomInteger(numberLength) {
    var max = '';
    for (var i = 0; i < numberLength; i++) {
        max += '9';
    }
    return String(Math.floor(Math.random() * parseInt(max)) + 1).padStart(numberLength, '0');
}
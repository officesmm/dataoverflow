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
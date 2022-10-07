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

function generateArray(len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push({
            ID: i,
            generateDate: getCurrentJPDate(),
            personalCode: generateRandomCharacter(16),
            phoneNumber: '+81' + generateRandomInteger(10).toString()
        });
    }
    return arr;
}

function generateJSON(len) {
    return JSON.stringify(generateArray(len));
}
function showVerticalMessage(str) {
    if ( str.toString().length > 7) {
        str = str.slice(0, 7);
    }
    if (str[0] == "s") {
        console.log(str[0].toUpperCase());
        str = str.slice(1);
    }

    for (let char of str) {
        console.log(char);
    }
}
showVerticalMessage("strada");
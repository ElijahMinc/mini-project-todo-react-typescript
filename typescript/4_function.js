function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a };
    }
    return { x: a, y: b };
}
console.log('empty', position());
console.log('One param', position(42));
console.log('Two params', position(10, 15));

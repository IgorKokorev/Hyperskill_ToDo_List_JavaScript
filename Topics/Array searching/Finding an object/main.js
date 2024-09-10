function search(objects) {
// Write your code here
    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        if (object.name === "John" && object.age === 30) {
            return i;
        }
    }
    return -1;
}
let obj = {name: 'korea'};


let newOnj = JSON.parse(JSON.stringify(obj));

object.defineProperty(obj, name, {
    get() {
        return newObj.name;
    },
    set(value) {
        newObj.name = value;
        observer();
    }
});
function observer() {
    username.innerText = obj.name;
}

setTimeout(() => {usuername.value = obj.name}, 3000);

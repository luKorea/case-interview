let obj = {};
obj = new Proxy(obj, {
    get(target, prop) {
        target[prop] = obj;
    },
    set(target, prop, value) {
        target[prop] = value;
        observer();
    }
});
function observer() {
    username.innerHTML = obj.name;
}

setTimeout(() => {
    obj.name = 'korea';
}, 3000);

username.oninput = () => {
    obj.name = this.value;
};
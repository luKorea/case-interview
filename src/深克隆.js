let obj = {
    name: 'korea',
    age: 20,
    date: new Date(),
    reg: new RegExp()
};

let newObj = JSON.parse(JSON.stringify(obj));
console.log(newObj);


function deepClone(obj) {
    if (obj === null) return null;
    if (obj !== 'object') return obj;
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    let newObj = new obj.constructor();
    for (let key in obj) {
        // 判断是否是私有属性，是私有属性，在做拷贝操作
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj;
}

console.log(deepClone({}));
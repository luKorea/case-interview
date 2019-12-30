let obj = {
    name: 'korea',
    age: 20
};

let esCopy = {...obj};
console.log(esCopy);

let newObj = {};
for (let key in obj) {
    if (obj.hasOwnProperty(key)){
        newObj[key] = obj[key];
    }
}
console.log(newObj);
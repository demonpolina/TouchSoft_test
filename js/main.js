console.log('Task 1');

const sayHello = (name) => {
    const firstLetter=name[0].toUpperCase();
    const rest = name.slice(1);
    console.log(firstLetter+rest.toLowerCase());
}

sayHello('maRk');

//----------------------

console.log('Task 2');
const filterStrings = (arr, n) => {

    let newArr = [];
     
    let i = 0;
    arr.forEach(el => {
        if (el.length <= n) {
            newArr[i] = el;
            i++;
        }
    });

    console.log(newArr);
};

filterStrings(['Somethinh that is long', 'Short', 'Well, okay'], 10)
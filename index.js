function writeCards(arr, eventName) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArr
}

function countDown(nbr) {
    while (nbr >= 0) {
        console.log(nbr)
        nbr--
    }
}
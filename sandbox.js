function countSameNumber(arr){
    let output = 0
    let obj = {}
    arr.forEach(e => {
        if(obj[e]) {
            output += 1
            obj[e] = 0
        } else {
            obj[e] = 1
        }
    })
    return output
}


console.log(countSameNumber([5, 7, 7, 9, 10, 4, 5, 10, 6, 5]))
console.log(countSameNumber([10, 20, 20, 10, 10, 30, 50, 10, 20]))
console.log('======')



function countSpecialChar(string) {
    let arr = string.split(' ')
    let char = `!@#$%^&*()_+={}:"<>/.,;'[]`
    let output = []
    for (let i = 0; i < arr.length; i++) {
            for (let k = 0; k < char.length; k++) {
                if (arr[i].includes(char[k])) {
                    output.push(arr[i])
                }
            }
    }
    return arr.length - output.length
}




console.log(countSpecialChar('Kemarin Shopia per[gi ke mall'))
console.log(countSpecialChar('Berapa u(mur minimal[ untuk !mengurus ktp?'))
console.log(countSpecialChar('Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda'))
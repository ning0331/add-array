input.onButtonPressed(Button.A, function () {
    list_A.push(9)
    length = list_A.length
    basic.showNumber(length)
})
let length = 0
let list_A: number[] = []
list_A = [0, 1, 2, 3, 4, 5]
basic.showNumber(list_A[0])

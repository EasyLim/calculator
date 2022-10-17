const btnlist = [
    "ob:(",
    "clear:",
    "n0:0",
    "n1:1",
    "n2:2",
    "n3:3",
    "n4:4",
    "n5:5",
    "n6:6",
    "n7:7",
    "n8:8",
    "n9:9",
    "dot:.",
    "equal:",
    "cb:)",
    "divide:/",
    "plus:+",
    "minus:-",
    "mult:*"
]

let buttons = {}
let stack = ''
let result = document.getElementById('result')
let bresult = document.getElementById('before-result')

for (let btn of btnlist) {
    let splited = btn.split(':')
    let e = splited[0]
    console.log(e)
    buttons[e] = document.getElementById(e)
    buttons[e].onclick = () => {
        stack += splited[1]
        result.innerText = stack
    }
}

buttons.clear.onclick = () => {
    stack = stack.slice(0, stack.length - 1)
    result.innerText = stack
    if (stack.length == 0) result.innerText = 0
}

buttons.equal.onclick = () => {
    let r = 0
    try {
        bresult.innerText = stack + '='
        r = eval(stack)
    } catch {
        result.innerText = 'Error'
        return stack = ''
    }
    result.innerText = r
    stack = r
}
let line = "JavaScript for all";

//edit

const stack = [];

for (let i = 0; i < line.length; i++) {
    stack.push(line[i]);
}

let atvirksciaiEilute = '';
while (stack.length > 0) {
    atvirksciaiEilute += stack.pop();
}

console.log(atvirksciaiEilute);
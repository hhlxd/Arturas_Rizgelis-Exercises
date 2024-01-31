let eilute = 'JavaScript for all';
let stack = [];

for (let i = 0; i < eilute.length; i++) {
  stack.push(eilute[i]);
}

while (stack.length > 0) {
  process.stdout.write(stack.pop());
}

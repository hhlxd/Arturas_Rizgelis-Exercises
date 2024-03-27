let pplinFamily = window.prompt("how many ppl (max:2)");
let parent1 = 0;
let parent2 = 0;
let income = 0;
let totalincome;

if(pplinFamily == 1){
    parent1 = window.prompt("1 person income");
    income = parent1 > 1500 ? "Bank gives out loan." : "Bank refuse give out loan.";
    console.log(income);
} else if(pplinFamily == 2){
    parent1 = window.prompt("1 family member income per month?");
    parent2 = window.prompt("2 family members income per month?");
    totalincome = parent1 + parent2;
    income = totalincome > 5000 ? "Bank gives out loan." : "Bank refuse give out loan.";
    console.log(income);
} else {
    console.log("more than two ppl bank refuse give out loan.")
}
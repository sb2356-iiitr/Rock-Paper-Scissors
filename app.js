let hs = 0, cs = 0;
const user_sc_span = document.getElementById('user-sc');
const comp_sc_span = document.getElementById('comp-sc');
const sb_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const action_div = document.querySelector('.action-m > p');


function compChoice() {
    const choices = ['r', 'p', 's'];
    let c = Math.floor(Math.random() * 10);
    c = c%3;
    return choices[c];
}

function game(user_c) {
    const comp_c = compChoice();
    if (user_c === 'r') {
        if (comp_c === 's') {
            hs++;
            action_div.innerHTML = "User's Rock beats Comp's Scissor";
        } else if (comp_c === 'p') {
            cs++;
            action_div.innerHTML = "Comp's Paper beats User's Rock";
        } 
        else 
        action_div.innerHTML = "Tie!";
    } else if (user_c === 'p') {
        if (comp_c === 's') {
            cs++;
            action_div.innerHTML = "Comp's Scissor beats User's Paper";
        } else if (comp_c === 'r') {
            hs++;
            action_div.innerHTML = "User's Paper beats Comp's Rock";
        } 
        else 
        action_div.innerHTML = "Tie!";
    } else if (user_c === 's') {
        if (comp_c === 'p') {
            hs++;
            action_div.innerHTML = "User's Scissor beats Comp's Paper";
        } else if (comp_c === 'r') {
            cs++;
            action_div.innerHTML = "Comp's Rock beats User's Scissor";
        }
        else 
        action_div.innerHTML = "Tie!";
    }
    user_sc_span.innerHTML = hs;
    comp_sc_span.innerHTML = cs;
    if (hs === 5) {
        result_div.innerHTML = "User Won!";
    } else if (cs === 5) {
        result_div.innerHTML = "Comp Won!";
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        if (hs>=5 || cs>=5) {
            return;
        }
        game('r');
    })
    paper_div.addEventListener('click', function () {
        if (hs>=5 || cs>=5) {
            return;
        }
        game('p');
    })
    scissor_div.addEventListener('click', function () {
        if (hs>=5 || cs>=5) {
            return;
        }
        game('s');
    })
    
}

main();
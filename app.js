let hs = 0, cs = 0;
const user_sc_span = document.getElementById('user-sc');
const comp_sc_span = document.getElementById('comp-sc');
const sb_div = document.querySelector('scoreboard');
const result_div = document.querySelector('result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function compChoice() {
    const choices = ['r', 'p', 's'];
    let c = Math.floor(Math.random() * 10);
    c = c%3;
    return choices[c];
}

function win() {
    hs++;
}

function game(user_c) {
    const comp_c = compChoice();
    if (user_c === 'r') {
        if (comp_c === 's') {
            hs++;
        } else if (comp_c === 'p') {
            cs++;
        } 
    } else if (user_c === 'p') {
        if (comp_c === 's') {
            cs++;
        } else if (comp_c === 'r') {
            hs++;
        } 
    } else if (user_c === 's') {
        if (comp_c === 'p') {
            hs++;
        } else if (comp_c === 'r') {
            cs++;
        }
    }
    rock_div.addEventListener('click', function () {
        game('r');
    })
}

function main(params) {
    rock_div.addEventListener('click', function () {
        game('r');
    })
    paper_div.addEventListener('click', function () {
        game('p');
    })
    scissor_div.addEventListener('click', function () {
        game('s');
    })
}


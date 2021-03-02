let hs = 0, cs = 0;
const user_sc_div = document.getElementById('user-sc');
const comp_sc_div = document.getElementById('comp-sc');




for (let i = 0; i < 5; i++) {
    let h = parseInt(prompt("\n0-Rock, 1-Paper, 2-Scissor"));
    let c = Math.floor(Math.random() * 10);
    c = c%3;
    if (h === 0) {
        if (c === 2) {
            hs++;
            console.log("H beat C");
        } else if (c === 1) {
            cs++;
            console.log("c beat h");
        } else {
            console.log("Tie");
        }
    } else if (h === 1) {
        if (c === 2) {
            cs++;
            console.log("c beat h");
        } else if (c === 0) {
            hs++;
            console.log("h beat c");
        } else {
            console.log("Tie");
        }
    } else if (h === 2) {
        if (c === 1) {
            hs++;
            console.log("H beat C");
        } else if (c === 0) {
            cs++;
            console.log("c beat h");
        } else {
            console.log("Tie");
        }
    }
}
if (hs > cs) {
    console.log("H won!");
} else if (cs > hs) {
    console.log("C won!");
} else {
    console.log("It's a draw");
}



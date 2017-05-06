var slaying = true;

while (slaying) {
    if (youHit === true) {
        console.log("You hit the dragon!");
    } else {
        console.log("The dragon defeated you!");
    }
    slaying = false;
}

var youHit = function () {
    Math.floor(Math.random() * 2);
};

var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;
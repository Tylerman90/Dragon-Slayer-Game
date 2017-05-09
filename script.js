var slaying = true;

while (slaying) {
    if (youHit) {
        console.log("You hit the dragon!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You slayed the Dragon!");
             slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("The dragon defeated you!");
        slaying = false;
    }
}

var youHit = function () {
    Math.floor(Math.random() * 2);
};

var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;
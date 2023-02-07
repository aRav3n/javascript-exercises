const findTheOldest = function(people) {
    let oldestPerson = {
        name: "",
        yearOfBirth: 1,
        yearOfDeath: 1,
    };
    let length = people.length;
    for(let i = 0; i < length; i++) {
        let deathYearOfPerson;
        if("yearOfDeath" in people[i]){
            deathYearOfPerson = people[i].yearOfDeath;
        } else {
            deathYearOfPerson = new Date().getFullYear();
            people[i].yearOfDeath = deathYearOfPerson;
        };
        let lifeSpanOfPerson = deathYearOfPerson - people[i].yearOfBirth;
        let deathYearOfOldestPerson = oldestPerson.yearOfDeath;
        let lifeSpanOfOldestPerson = deathYearOfOldestPerson - oldestPerson.yearOfBirth;
        console.log({lifeSpanOfOldestPerson})
        if(lifeSpanOfPerson > lifeSpanOfOldestPerson){
            oldestPerson = people[i];
        };
        console.log({oldestPerson})
    };
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

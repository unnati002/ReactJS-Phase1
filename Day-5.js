let a={
    firstName:"Beyoncé ",
    middleName:"Giselle",
    lastName:"Knowles",
    occupation:"Singer,songwriter,actress,recordproducer,dancer",
    noOfSongs:"176",
    latestSong:"Spirit-The Lion King",
    noOfawards:"432",
    birthdate:"September 4, 1981",
    yearOfexperience:"16"
};
    getfullname=()=>{
        return`${a.firstName}${a.middleName}${a.lastName}`;
    };
    getBio=()=>{
        return`FullName :${a.firstName}${a.middleName}${a.lastName}\nDateOfBirth: ${a.birthdate}\nOccupation: ${a.occupation}`;
    };
    getInfo=()=>{
        return`Name: ${a.firstName}\nNoOfSongs: ${a.noOfSongs}\nNoOfAwards: ${a.noOfawards}\nLatestSong: ${a.latestSong}`;
    };

console.log("\nFull Name of the Character:");
console.log(getfullname());
console.log("\nBio of the Character:");
console.log(getBio());
console.log("\nMore information about the character:");
console.log(getInfo());
console.log("\nFirstname of the Character:");
console.log(a.firstName);
console.log(`NoOfSongs: ${a.noOfSongs}\nYearOfExperience: ${a.yearOfexperience}`);
let b={
    firstName:"Ariana",
    middleName:"Grande-Butera",
    lastName:"Grande-Butera",
    occupation:"Singer,songwriter,actress",
    noOfSongs:"236",
    latestSong:"Needy",
    noOfawards:"81",
    birthdate:"June 26, 1993",
    yearOfexperience:"19"
};
let p={...b,...a};
console.log(p);


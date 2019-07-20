class Character{
    constructor(firstName,middleName,lastName,occupation,noOfSongs,latestSong,noOfawards,birthdate,yearOfexperience)
    {
        this.firstName=firstName;
        this.middleName=middleName;
        this.lastName=lastName;
        this.occupation=occupation;
        this.noOfSongs=noOfSongs;
        this.latestSong=latestSong;
        this.noOfawards=noOfawards;
        this.birthdate=birthdate;
        this.yearOfexperience=yearOfexperience;
    }
    getfullname=()=>{
        return`${this.firstName}${this.middleName}${this.lastName}`;
    };
    getBio=()=>{
        return`FullName :${this.firstName}${this.middleName}${this.lastName}\nDateOfBirth: ${this.birthdate}\nOccupation: ${this.occupation}`;
    };
    getInfo=()=>{
        return`Name: ${this.firstName}\nNoOfSongs: ${this.noOfSongs}\nNoOfAwards: ${this.noOfawards}\nLatestSong: ${this.latestSong}`;
    };

}
let s=new Character("Beyoncé ",
"Giselle",
"Knowles",
"Singer,songwriter,actress,recordproducer,dancer",
"176",
"Spirit-The Lion King",
"432",
"September 4, 1981",
"16");
console.log("\nFull Name of the Character:");
console.log(s.getfullname());
console.log("\nBio of the Character:");
console.log(s.getBio());
console.log("\nMore information about the character:");
console.log(s.getInfo());
console.log("\nFirstname of the Character:");
console.log(s.firstName);
console.log(`NoOfSongs: ${s.noOfSongs}\nYearOfExperience: ${s.yearOfexperience}`);
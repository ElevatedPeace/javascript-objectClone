// Question 1
function InstagramPost(handleOfAuthor, content, links, views, likes) 
{
    this.author = handleOfAuthor;
    this.authorContent = content;
    this.imageLink = links;
    this.authorViews = views;
    this.authorLikes = likes;
}

// Question2
const post1 = new InstagramPost("Daniel", "Food in Nigeria", "https://facebook.com", "3,000 views", "10k likes");
const post2 = new InstagramPost("femi", "Dancing", "https://facebook.com", "300 views", "1k likes");

console.log(post1);
console.log(post2);

// Question3
// 3a)
function Person(name, age, location) {
   return{
    name : name,
    age : age,
    location : location,
   } 
}
const Musa = Person("Musa Dawodu","19","Lekki, Lagos State");
console.log(Musa);

// 3b)
function JambScores(Eng, Govt, Lit, CRK) {
    return{
        Eng : Eng,
        Govt : Govt,
        Lit : Lit,
        CRK : CRK,
    }
}
const musaScores = JambScores("70", "85", "82", "94");
console.log(musaScores);

// Adding MusaScores as an object to Musa object.
Musa.JambScores = musaScores;
console.log(Musa);

// Question4 Ways to clone an object
// a) Spread operator
let data = {
    name: "Alice",
    age: "18",
};
let dataCopy = {...data, Musa};
console.log(dataCopy);


// b) Object.assign
let data2 = {
    name: "Alice",
    age: "18",
};
data2.name= "Peace";
let dataCopy2 = Object.assign({Musa}, data2);
console.log(dataCopy2);


// c) JSON.parse
let data3 = {
    name: "Alice",
    age: "18",
};
data3.name= "Grace";
let dataCopy3 = JSON.parse(JSON.stringify(data3));
console.log(dataCopy3);

// Question5
var presidentialCandidates = {
    AAC: "Omoyele Sowore",
    ACCORD: "Christopher Imumolen",
    APC: "Bola Ahmed Tinubu",
    LP: "Peter Obi",
    NNPP: "Rabiu Kwankwaso",
    PDP: "Atiku Abubakar",
};


for (const value in presidentialCandidates) {
    console.log(`${presidentialCandidates[value]} is the presidential candidate of ${value}`)
}

// for(let [ party, value] of Object.entries(presidentialCandidates)) {
//   console.log(`${value} is the presidential candidate of ${party}`)
// }


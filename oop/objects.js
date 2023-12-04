function createUser(username, score){
    this.username = username;
    this.score = score;

}

createUser.prototype.increment = function(){
 this.score++;
// console.log(score)
}

createUser.printMe= function(){
    console.log(`the scroe is ${this.score}`);
}
const Adharsh = new createUser("Adharsh",8);
const Rajesh = new createUser("Rajesh",9);

// console.log(Adharsh.increment());
console.log(Adharsh.printMe);


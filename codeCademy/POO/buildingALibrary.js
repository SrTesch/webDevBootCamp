class Media{
    constructor(title, ratings){
      this._title = title;
      this._ratings = ratings;
      this._isCheckedOut = false;
    }
  
    get title(){
      return this._title;
    }
    
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    
    set modifyChecked(value){
      this._isCheckedOut = value;
    }
    
    get ratings(){
      return this._ratings;
    }
    toggleCheckOutStatus(){
      if(this._isCheckedOut){
        this._isCheckedOut = false;
      }else{
        this._isCheckedOut = true;
      }
    }
    getAverageRating(){
      let average = 0;
      let sum = 0;
      this._ratings.forEach(function(num){sum += num});
      average = sum/this._ratings.length;
      return average;
    }
    addRating(value){
      this._ratings.push(value);
    }
}
  
class Book extends Media{
    constructor(author, title, pages){
      super(title, []);
      this._author = author;
      this._pages = pages;
    }
    get autor(){
      return this._author;
    }
  
    get pages(){
      return this._pages;
    }
}
  
class Movie extends Media{
    constructor(director, title, runTime){
      super(title, []);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runTime;
    }
}

const historyOfEverything = new Book("Bill Bryson", 'A Short History of Nearly', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating().toFixed(2));

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(`Speed Is checked out? ${speed.isCheckedOut}`)
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating().toFixed(2));
let menu = {
    _meal : '',
    _price : 0,
    set meal(mealToCheck){
      if(typeof(this._meal) == 'string')
        return this._meal = mealToCheck;
    },
    set price(priceToCheck){
      if(typeof(this._price)== 'number')
        return this._price = priceToCheck;
    },
    get todaysSpecial(){
      if(this._meal && this._price)
        return `Today's Special is ${this._meal} for $${this._price}!`
      else
        return `Meal or price was not set correctly!`
    }
}
menu.price = 20
menu.meal = 'patinho'
console.log(menu.todaysSpecial)
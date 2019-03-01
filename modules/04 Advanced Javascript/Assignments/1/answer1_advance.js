
console.log("******************************");
//Start Answer29

    function Video(title, uploader, seconds){
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;

  
}



Video.prototype.watch = function (sec) {
        try {
            console.log(`You watched all ${sec} seconds of ${this.title}!`);
        } catch (error) {
            console.log("Oops... An error occured");
        }
    }
var data = []

for (var i = 0; i < 5; i++) {
    var v = new Video("video "+i, "The neerd youtuber", 60 + Math.floor(Math.random() * (60)));
    data.push(v);  
}


data[0].watch(5);
data[1].watch(24);
//END Answer29


//Start Answer28

console.log("******************************");
var BankAccount = function(number , owner){
this.number = number;
this.owner = owner;
this.balance = 0 ;

}


BankAccount.prototype.withdraw = function(amount){
this.balance -= amount; 
}

BankAccount.prototype.deposit = function(amount){
this.balance += amount; 
}


BankAccount.prototype.getBalance = function(){
console.log(`number : ${this.number} name: ${this.owner} balance : ${this.balance}`);
}


var bankAccount1 = new BankAccount("111","avi");
var bankAccount2 = new BankAccount("222","moshe");
var bankAccount3 = new BankAccount("333","david");

bankAccount1.deposit(1000);
bankAccount2.deposit(1000);
bankAccount3.deposit(1000);

bankAccount1.withdraw(200);
bankAccount2.withdraw(500);
bankAccount3.withdraw(1500);

bankAccount1.getBalance();
bankAccount2.getBalance();
bankAccount3.getBalance();
console.log("******************************");
//END Answer29


//Start answer 27
console.log("******************************");
var Validator = function(){

}


Validator.prototype.isBoolean = function(value){
     return  typeof value === "boolean";
}

Validator.prototype.isError = function(value){
     return myError instanceof Error;
}

Validator.prototype.isNaN = function(value){
     return  !(typeof value === "number");
     }

     Validator.prototype.isNull = function(value){
        return value === null;
     }

     Validator.prototype.isNumber = function(value){
     return  typeof value === "number";
     }
     Validator.prototype.isObject = function(value){
     return  typeof value === "object";
     }

     Validator.prototype.isJson = function(value){
      try{
         return  typeof JSON.parse(value) === "object";
        }
        catch(e) {
          return false;
      }
     }
   
     Validator.prototype.isRegExp = function(value){
     return  value instanceof RegExp;
     }

     Validator.prototype.isChar = function(value){
       return value.length === 1 && (value.match(/[a-z]/i) !== null);
     }

     Validator.prototype.isSame = function(value1 , value2){
     return  (typeof value1 === typeof value2);
     }



var ob = new Validator();

var v_ch ="A";
var v_bool =  true;
var v_num = 100;
var v_null = null;
var v_reg = /[a-z]/i;
var v_json = '{"name":"aviyot","age":"39"}';
var v_Error = new Error('foo');
var v_arr =[1,2,3];


console.log(v_bool  + "is Boolean" + ob.isBoolean(v_bool));
console.log(v_num  + "is Boolean" + ob.isBoolean(v_num));



var myError = new Error('foo');
var myString = "Whatever";
console.log(myError + " is Error: " + ob.isError(myError));
console.log(myString + " is Error: " + ob.isError(myString));

console.log(v_ch + " is NaN: " + ob.isNaN(v_ch));
console.log(v_num+ " is NaN: " + ob.isNaN(v_num));

console.log(v_null + " is Null: " + ob.isNull(v_null));
console.log(v_bool + " is Null: " + ob.isNull(v_bool));


console.log(v_num + " is Number: "+ob.isNumber(v_num));
console.log(v_ch + "is Number: "+ ob.isNumber(v_num));


console.log(v_arr + " is Object: " + ob.isObject(v_arr));
console.log(v_num + " is Object: " + ob.isObject(v_num));


console.log( v_json + " is JSON: " + ob.isJson(v_json));
console.log( v_arr + " is JSON: " + ob.isJson(v_arr));


console.log(v_reg + " is RegExp: " + ob.isRegExp(v_reg));
console.log(v_ch + " is RegExp: " + ob.isRegExp(v_ch));


console.log(v_ch + " is Char: " + ob.isChar(v_ch));
console.log(v_num + "is Char: " + ob.isChar(v_num));

console.log(v_null + " " + v_arr + "is Same: " + ob.isSame(v_null,v_arr));
console.log(v_num + " " + v_ch + "is Same: " + ob.isSame(v_num,v_ch));
console.log("******************************");

//End Answer 27
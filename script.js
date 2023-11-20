//function login() {
    //var x = document.getElementById("fname").value;
    //document.getElementById("submission").innerHTML = x;
  //}



//var x = document.getElementById("form");

//let fname = document.forms["form"]["fname"].value;



//function bankDetails(fname, lname, address, balance, password){
//  alldetails = function(){
//    return `First name:  ${fname}`
    
//};
//return {
//  fname, lname, address, balance, password, alldetails
//};
//}

//document.getElementById("forms").innerHTML =
//char1.lifeLeft();

//$("form").submit(function (event) { 
  //let obj_form = $(this).serializeArray(); 
  //obj_form.forEach(function (input) { 
      //console.log(input.name + ":" + input.value); 
  //}) 
  //event.preventDefault(); 
//}); 

//copied and altered
class customer { //declare customers class (blueprint)
  constructor(fname="",address="", password="", conpassword="", accountNum="") { //declare properties of customer class
    this.fname = fname;
    this.address = address;
    this.password = password;
    this.conpassword = conpassword;
    this.balance = 0;
    this.accountNum = accountNum;
  }

  increaseBalance(increase) { //function to add a value to the customers balance
    this.balance += increase;
  }

  reduceBalance(reduction) { //function to deduct a value from the customers balance
    this.balance += reduction;
  }

  printCustomer() { //function to print values of the customer object to console log
    console.log("first name: ", this.fname);
    console.log("address: ", this.address);
    console.log("password: ", this.password);
    console.log("conpassword: ", this.conpassword);
    console.log("balance: ", this.balance);
    console.log("account number: ", this.accountNum);
  }
}

customers = []; //declare customers array

function addCustomer() { //function to register a new customer (no validation)
  let newCust = new customer() //create a new customer object to set properties
  newCust.fname = document.getElementById("fname").value; //set first name of new customer object to value of text box
  newCust.address = document.getElementById("lname").value;
  newCust.password = document.getElementById("password").value;
  newCust.conpassword = document.getElementById("conPassword").value;
  newCust.accountNum = generateBankAccountNumber();
  newCust.printCustomer(); //call printcustomer() function of new customer object to write values to console log
  customers.push(newCust); //add new customer object to customers array
  console.log(customers);
}

function loginCustomer() { //function to log a customer into their account
  let fname = document.getElementById("fname").value;
  let password = document.getElementById("password").value;
  for(i=0;i<customers.length;i++) {
    if(customers[i].fname.toLowerCase()==fname.toLowerCase() & customers[i].password==password) {
      let welcomeText = document.getElementById("Welcome");
      let balanceValueText = document.getElementById("balance_value");
      welcomeText.innerHTML = "Welcome " + customers[i].fname + ",";
      balanceValueText.innerHTML = "your balance is: £" + customers[i].balance;
      let balanceDiv = document.getElementById("balance");
      balanceDiv.style = "display: block;"
      break;
    }
  }
}

function listCustomers() { //function to loop through all customers in the customers array and print their values
  for(i=0;i<customers.length;i++) {
    customers[i].printCustomer();
  }
}
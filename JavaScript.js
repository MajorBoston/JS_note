function valid(form) {
  let fail = false;
  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;
  let RePassword = form.RePassword.value;
  let gender = form.gender.value;

  let adr_pattern = /[0-9a-zA-Z_]+@[a-zA-Z]+\.[a-z]{2,3}/i; 

  if(name == "" || name == " ")
      fail = "Ви не ввели своє ім'я";
  else if(email.split('@').length - 1 == 0)
      fail = "Ви невірно ввели Email"
  // else if(adr_pattern.test(email) == false)
  //     fail = "Ви невірно ввели Email"
  else if(password == "")
      fail = "Ви не ввели пароль";
  else if(password != RePassword)
      fail = "Паролі не співпадають";
  else if(gender == "")
      fail = "Ви не вказали стать";
  if(fail)
    alert(fail);
  else
      window.location = "http://google.com";
}

// let id = setInterval("myFunct_1()", 1000);
// let counter = 0;

// function myFunct_1() {
//     counter++;
//     alert("Секунд пройшло - " + counter);
//     if(counter == 3) clearInterval(id);
// }

let counter = 0;
function timer () {
    counter++;
    document.getElementById("count").innerHTML = counter;
    setTimeout("timer()", 1000);
}

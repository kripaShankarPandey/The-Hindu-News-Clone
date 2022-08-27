
  document.querySelector("form").addEventListener("submit", myfun);
  function myfun(event) {
    event.preventDefault();
    let name = document.querySelector(".name").value;
    let number = document.querySelector(".number").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".pass").value;
    localStorage.setItem("name", name);
    localStorage.setItem("number", number);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    alert("Signup sucessfully");
    window.location.href = "login.html";
  }
  // function myfun1(event) {

  // }


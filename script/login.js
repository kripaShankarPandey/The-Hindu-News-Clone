
  document.querySelector("form").addEventListener("submit",myfun);
  function myfun(event)
  {
       event.preventDefault();
    let ls_mail=localStorage.getItem("email");
    let ls_pass=localStorage.getItem("password")
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#pass").value;
    console.log(ls_mail,ls_pass);
    if(ls_mail==email && ls_pass==password)
    {
      alert("login success");
    window.location.href = "index.html";
    }
    else
    {
      alert("Incorrect email or password");
    }

  }
  

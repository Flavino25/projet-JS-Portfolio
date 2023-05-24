const Url ="http://localhost:5678/api/user/login/";
const flog = document.querySelector("#flog");
flog.addEventListener('submit' , function(e) { 
  e.preventDefault();
  const user = {
      email: e.target.querySelector(".input1").value,
      password: e.target.querySelector(".input2").value
  }
  const stringuser=JSON.stringify('user')
  window.localStorage.setItem('user',stringuser)
  const emailOfuser = e.target.querySelector(".input1").value;
  const passwordOfUser = e.target.querySelector(".input2").value;
  
  const firstIdentifier = "sophie.bluel@test.tld";
  const lastIdentifier = "S0phie";
  const userIdentifier = { 
      email: "sophie.bluel@test.tld",
      password: "S0phie"
  }
  const payload = JSON.stringify(user)
  fetch(Url, { 
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: payload
  }).then((res) => res.json())

  if (JSON.stringify(user) === JSON.stringify(userIdentifier)) { 
      window.location = "./indexban.html";
      

       } else if (emailOfuser !== firstIdentifier){ 
          document.querySelector("#message").classList.add('warning')

       } else if (passwordOfUser !== lastIdentifier) { 
          document.querySelector("#message2").classList.add('warning')
       } else { 
          document.querySelector('#flog').innerHTML = "Accés Refusé"
       }
        
  } );

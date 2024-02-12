import './style.css'
const login = document.getElementById('login');
const password = document.getElementById('password');
const avatar = document.getElementById('avatar');
const submit = document.getElementById('submit');
const profilewrap = document.getElementById('profilewrap');

const loginValue = login.value
const passwordValue = password.value

const Users = []
console.log(loginValue.length, passwordValue.length)
class User {
  constructor(  
    login,
    password,
    avatar,
  ){
    this.login = login;
    this.password = password;
    this.avatar = avatar || `./public/avatarbydefault.png`;
    this.regtime = new Date;
  }
  
  getLogin(){
    return this.login;
  }
  getPass(){
    return this.password;
  }
  getAvatar(){
    return this.avatar;
  }
  getRegtime(){
    return this.regtime;
  }
}

function isValid() {
  if(login.value.length >= 3 && password.value.length >= 6) return true
}

submit.addEventListener('click', () => {
  console.log(login.value)
  console.log(password.value)

  const userArr = new User(login.value, password.value, avatar.value)
  if(isValid()) {
    Users.push(userArr)
    console.log(Users)
  } else console.log('Invalid login or password')
})

submit.addEventListener('click', () => {
  profilewrap.innerHTML += `
        <div class="profilelogin">${Users[0].getLogin()}</div>
        <div class="profilepassword">${Users[0].getPass()}</div>
        <div class="profileavatar"><img src="${Users[0].getAvatar()}"></div>
        <div class="regdate">${Users[0].getRegtime()}</div>
  `
})





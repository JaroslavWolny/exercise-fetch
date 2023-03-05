import './style.css'
import javascriptLogo from './javascript.svg'

function app(){
  const loaderButton = document.getElementById('loader');
  loaderButton.addEventListener('click', async (e) => {
    const {data} = await fetch('https://reqres.in/api/users')
      .then(res => {
        if (res.ok){
          return res.json();
        } else {
          throw Error('Blabla');
        }
      });
      
      const htmlA = data.map(user => {
        const {first_name, last_name, avatar} = user;
        return `
          <div class="user" style="padding:0.5em;">
            <img src="${avatar}" />
            <p class="name">${first_name + ' ' + last_name}</p>
          </div>
        `
      });

      const joinedHTML = htmlA.join('');

      document.getElementById('users').innerHTML = joinedHTML;
      

  })
}

document.querySelector('#app').innerHTML = `
<div id="main">
  <h1>Zaměstnanci</h1>
  <div class="card">
    <button id="loader" type="button">Načti zaměstnance</button>
  </div>
  <p id="users" style="display: flex;"></p>
</div>
`

app();

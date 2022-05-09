const modalOpenBtn = document.querySelector('#open-modal');
const modalCloseBtn = document.querySelector('#close-btn');
const submitBtn = document.querySelector('#submit-btn');
const openModal = document.querySelector('#modal');
const signupForm = document.querySelector('#user-signup-form');

const user_id = document.querySelector('#user_id');
const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const zip = document.querySelector('#zip');
const personal_number = document.querySelector('#personal_number');
const mobile_number = document.querySelector('#mobile_number');
const gender = document.querySelector('#gender');
const email = document.querySelector('#email');
const status = document.querySelector('#status');


modalOpenBtn.addEventListener("click", ()=>{
    openModal.classList.add('visible');
  }) 

modalCloseBtn.addEventListener("click", ()=>{
    openModal.classList.remove('visible');
  })

  
  async function getUsers(){
    try {
      const response = await fetch('http://api.kesho.me/v1/user-test/index');
      const users = await response.json();
      renderUsers(users);
    } catch (e){
      console.log('Error - ', e);
    }
  }
  getUsers();


  
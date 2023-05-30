alert("Dear customer, For better viewing experience on our site, make sure there is adequate internet connection around you, if that is not handled, there are vital parts of our site that would not load properly, or may not even load at all...Thank you for undersanding.")


// -------functionalities for the toggle menu

const toggleBtn = document.querySelector('.toggleBtn')
const toggleBtnIcon = document.querySelector('.toggleBtn i')
const dropDownMenu = document.querySelector('.dropdown-menu')


toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')

    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// -------funtionalities for the email
const email = document.getElementById('email');

function validateEmail(){
    if (email.value == ""){
        alert('please write your email');
        return false
    }
    if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        alert('Email is invalid!')
        return false;
    }
    window.location.reload();
    alert("Thank you for subscribing to PARLO Newsletter, we will keep you updated on any current information on our services.");
    return true;
}

var login_btn = document.querySelector(".login");
var modal_login_show = document.querySelector(".modal-login");
var modal_overlay = document.querySelector(".modal-overlay");
var modal_login_close = modal_login_show.querySelector(".modal-login-close");
var form = modal_login_show.querySelector("form");
var login_field = modal_login_show.querySelector("[id=user-login]");
var pass_field = modal_login_show.querySelector("[id=user-pass]");
var storage = localStorage.getItem("login");




login_btn.addEventListener("click", function(event) 
    {
        event.preventDefault();
        modal_login_show.classList.add("modal-content-show");
        modal_overlay.classList.add("modal-content-show");

        if (storage) {
            login_field.value = storage;
            pass_field.focus();
        } else {
            login_field.focus();
        }
    });

modal_login_close.addEventListener("click", function(event)
    {
        event.preventDefault();
        modal_login_show.classList.remove("modal-content-show");
        modal_overlay.classList.remove("modal-content-show");
    });

form.addEventListener("submit", function(event) 
    {
        if (!login_field.value || !pass_field.value) {
            event.preventDefault();
            console.log("Нужно ввести логин и пароль");
        }
        else {
            localStorage.setItem("login", login_field.value);
        }
    });



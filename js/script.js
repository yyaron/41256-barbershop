// modal login var:

var login_btn = document.querySelector(".login");
var modal_login_show = document.querySelector(".modal-login");
var modal_overlay = document.querySelector(".modal-overlay");
var modal_login_close = modal_login_show.querySelector(".modal-login-close");
var form = modal_login_show.querySelector("form");
var login_field = modal_login_show.querySelector("[id=user-login]");
var pass_field = modal_login_show.querySelector("[id=user-pass]");
var storage = localStorage.getItem("login");


// modal map var:

var map_btn = document.querySelector(".map");
var modal_map_show = document.querySelector(".modal-map");
var modal_map_close = document.querySelector(".modal-map-close");
var map_2_btn = document.querySelector(".map-2");


// modal login events:

login_btn.addEventListener("click", function(event) 
    {
        event.preventDefault();
        modal_login_show.classList.add("modal-content-show");
        modal_overlay.classList.add("modal-overlay-show");

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
        modal_login_show.classList.remove("modal-error");
        modal_overlay.classList.remove("modal-overlay-show");
    });

form.addEventListener("submit", function(event) 
    {
        if (!login_field.value || !pass_field.value) {
            event.preventDefault();
            modal_login_show.classList.remove("modal-error");
            modal_login_show.offsetWidth = modal_login_show.offsetWidth;
            modal_login_show.classList.add("modal-error");
            console.log("Нужно ввести логин и пароль");
        }
        else {
            localStorage.setItem("login", login_field.value);
        }
    });

window.addEventListener("keydown", function(event)
    {
        if (event.keyCode === 27) {
            if (modal_login_show.classList.contains("modal-content-show")) {
                modal_login_show.classList.remove("modal-content-show");
                modal_login_show.classList.remove("modal-error");
                modal_overlay.classList.remove("modal-overlay-show");
            }
        }
});


// modal map events:

map_btn.addEventListener("click", function(event)
    {
        event.preventDefault();
        modal_map_show.classList.add("modal-content-show");
        modal_overlay.classList.add("modal-overlay-show");
    });

map_2_btn.addEventListener("click", function(event)
    {
        event.preventDefault();
        modal_map_show.classList.add("modal-content-show");
        modal_overlay.classList.add("modal-overlay-show");
    });

modal_map_close.addEventListener("click", function(event)
    {
        event.preventDefault();
        modal_map_show.classList.remove("modal-content-show");
        modal_overlay.classList.remove("modal-overlay-show")
    });

window.addEventListener("keydown", function(event)
    {
        if (event.keyCode === 27) {
            if (modal_map_show.classList.contains("modal-content-show")) {
                modal_map_show.classList.remove("modal-content-show");
                modal_overlay.classList.remove("modal-overlay-show");
            }
        }
    });
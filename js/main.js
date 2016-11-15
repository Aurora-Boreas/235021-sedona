  var link = document.querySelector(".btn-order");
  var popup = document.querySelector(".form-popup");
  var date_in = popup.querySelector("[name=date-in]");
  var date_out = popup.querySelector("[name=date-out]");
  
  link.addEventListener("click", function(event) {
    event.preventDefault();
    
    var popup = document.querySelector(".form-popup");
    popup.classList.toggle("form-popup-show");
  });

  popup.addEventListener("submit", function(event) {
    if (!date_in.value || !date_out.value) {
        event.preventDefault();
        return alert("Введите дату заезда и дату выезда!");
    }
  }); 

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("form-popup-show")) {
        popup.classList.remove("form-popup-show");
      }
    }
  });

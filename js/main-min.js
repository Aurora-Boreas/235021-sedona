var link=document.querySelector(".btn-order"),popup=document.querySelector(".form-popup"),date_in=popup.querySelector("[name=date-in]"),date_out=popup.querySelector("[name=date-out]");link.addEventListener("click",function(a){a.preventDefault();var b=document.querySelector(".form-popup");b.classList.toggle("form-popup-show"),date_in.focus()}),popup.addEventListener("submit",function(a){return date_in.value&&date_out.value?void 0:(a.preventDefault(),alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0437\u0430\u0435\u0437\u0434\u0430 \u0438 \u0434\u0430\u0442\u0443 \u0432\u044b\u0435\u0437\u0434\u0430!"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&popup.classList.contains("form-popup-show")&&popup.classList.remove("form-popup-show")});
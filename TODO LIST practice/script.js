const btns = document.querySelectorAll(".favorite-icon"); //nodelist

btns.forEach((btn) => { //nodelistはarrayと同じメソッドが使える
  btn.addEventListener("click", () => {
    if(btn.classList.contains("filled")) {
      btn.classList.remove("filled");
      btn.innerHTML = "&#9825;";
    } else {
        btn.classList.add("filled");
        btn.innerHTML = "&#10084;";
    }
  })
})

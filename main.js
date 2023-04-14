window.addEventListener("load", function () {
    const toggle = document.querySelector(".icon");
    const menu = document.querySelector(".nav__list");
    toggle && toggle.addEventListener("click", handleToggleMenu);
    function handleToggleMenu(e) {
      menu && menu.classList.add("active");
    }
    document.addEventListener("click", handleClickOutside);
    function handleClickOutside(e) {
      if (e.target.matches(".icon") || e.target.matches(".nav__list, .nav__list *"))
        return;
      menu && menu.classList.remove("active");
    }
  });



document.getElementById('next').onclick = function () {
    const widthItem = document.querySelector('.product__list-item').offsetWidth;
    document.getElementById('product__contain').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function () {
  const widthItem = document.querySelector('.product__list-item').offsetWidth;
  document.getElementById('product__contain').scrollLeft -= widthItem;
}  
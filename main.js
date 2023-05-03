
  const toggle = document.querySelector('.icon');
  const menu = document.querySelector('.nav__list');
  let modal = document.querySelector('.modal');
  toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu.classList.add("active");
    modal.classList.add("open");
  }
  modal.addEventListener("click", function(e){
    if (e.target == e.currentTarget){
      menu.classList.remove("active");
      modal.classList.remove("open");
    }
  });


  document.getElementById('next').onclick = function() {
      const widthItem = document.querySelector('.product__list-item').offsetWidth;
      document.getElementById('product__contain').scrollLeft += widthItem;
  }
  document.getElementById('prev').onclick = function() {
    const widthItem = document.querySelector('.product__list-item').offsetWidth;
    document.getElementById('product__contain').scrollLeft -= widthItem;
  }  



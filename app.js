const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
	header.style.backgroundColor = '#29323c';
	} else {
	header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
	hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

AOS.init({
	duration: 1200,
})

const sections=document.querySelectorAll('section');
const sectionsPos={};

sections.forEach((section)=>{
  sectionsPos[section.id]=section.offsetTop;
});

window.onscroll=()=>{
  var scrollPos=document.documentElement.scrollTop || document.body.scrollTop;
  for(var id in sectionsPos){
    if(sectionsPos[id]<=scrollPos+100){
      var style=getComputedStyle(document.querySelector(`section[id*=${id}]`))
      var color=style.backgroundColor;
      console.log(color);
      document.querySelector('.active').style.color="#808080";
       document.querySelector('.active').classList.remove('active'); document.querySelector(`a[href*=${id}]`).classList.add('active');
      document.querySelector(`a[href*=${id}]`).style.color=color;
    }
  }
}

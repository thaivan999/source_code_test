
    const header = document.querySelector('header');
let oldScroll = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY; 
  const viewportHeight = window.innerHeight; 
  if (scrollTop > viewportHeight) { 
    if (oldScroll > scrollTop) {
      header.classList.add('active'); 
    } else {
      header.classList.remove('active');
    }
  } else {
    header.classList.remove('active');
  }
  oldScroll = scrollTop; 
});

    
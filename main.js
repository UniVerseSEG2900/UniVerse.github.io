/* Create the observer */
const observer = new IntersectionObserver(entries => {
/* Loop over the entries */
entries.forEach(entry => {
    /* True if the element is visible */
    const square = entry.target.querySelector('.designimg');
    if (entry.isIntersecting) {
      entry.target.classList.add('designimg-animation'); /* play animation */
      return;
    }
  });
});

/* Tell the observer which elements to track*/
observer.observe(document.querySelector('.designrectangle')); /* Watching the background rectangle instead of img because img won't be there at start */

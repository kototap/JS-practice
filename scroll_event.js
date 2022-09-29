const scrollContent = document.querySelector('.scroll');
for(let i = 0; i < 1000; i++) {
  scrollContent.textContent += ` テキスト ${i} `
}
window.addEventListener('scroll', function(){
  console.log(`スクロール量は${window.scrollY}px です`);
});

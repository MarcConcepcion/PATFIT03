function initDanceTabs() {
  const tabs  = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.dance-card');
  
  if (!tabs.length) return;
  
  tabs.forEach(btn => {
    btn.addEventListener('click', function () {
   
      tabs.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
     
      const filter = this.dataset.filter;
      
     
      cards.forEach(card => {
        const cardCategory = card.dataset.category || '';
        
        if (filter === 'all') {
          card.style.display = 'flex'; 
        } else if (cardCategory.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
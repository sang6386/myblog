document.querySelectorAll('.tag-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const tag = e.target.dataset.tag;
    document.querySelectorAll('.post-card').forEach(card => {
      card.style.display = tag === 'all' || card.dataset.tags.includes(tag) ? 'block' : 'none';
    });
    document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  });
});

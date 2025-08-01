// Example JS (You can expand later)
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert("This would open the full blog post page.");
  });
});
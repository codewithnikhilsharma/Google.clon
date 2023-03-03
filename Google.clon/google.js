// Search bar functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query !== '') {
    window.location.href = `https://www.google.com/search?q=${query}`;
  }
});

// Dropdown menu functionality
const dropdownMenu = document.querySelector('.dropdown');

dropdownMenu.addEventListener('mouseenter', () => {
  const dropdownList = dropdownMenu.querySelector('ul');
  dropdownList.style.display = 'block';
});

dropdownMenu.addEventListener('mouseleave', () => {
  const dropdownList = dropdownMenu.querySelector('ul');
  dropdownList.style.display = 'none';
});

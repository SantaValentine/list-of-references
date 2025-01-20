const links = document.querySelectorAll('a');

links.forEach(link => {
    const href = link.getAttribute('href');

    if (href.startsWith('http://') || href.startsWith('https://')) {
        link.classList.add('dashed-underline');
        link.setAttribute('target', '_blank');
    }
});

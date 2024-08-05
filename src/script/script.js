document.getElementById('mode_icon').addEventListener('click', () => {
    const modeIcon = document.getElementById('mode_icon');
    const forms = document.querySelectorAll('form');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (modeIcon.classList.contains('fa-smile')) {
        modeIcon.classList.replace('fa-smile', 'fa-skull');
    } else {
        modeIcon.classList.replace('fa-skull', 'fa-smile');
    }

    forms.forEach(form => form.classList.toggle('dark'));
   
        if (image1.style.display === 'none') {
            image1.style.display = 'block';
            image2.style.display = 'none';
        } else {
            image1.style.display = 'none';
            image2.style.display = 'block';
        }
    });
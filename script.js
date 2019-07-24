document.getElementById('scroll').addEventListener('click', myScroll);

function myScroll () {
    let openedElements = document.getElementsByClassName('block_active');
    let activeElement = openedElements[openedElements.length - 1];
    let nextElement = activeElement.nextElementSibling;
    if (nextElement) {
        nextElement.classList.add("block_active");
        window.scrollTo({
            top: nextElement.offsetTop,
            behavior: 'smooth',
        })
    } else {
        console.log('Конец :)');
    }

}
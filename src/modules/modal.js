const modal = () => {
    const modal = document.querySelector('.popup')
    const popupContent = document.querySelector('.popup-content')
    const popupData = {
            count: -445,
            speed: 20,
            startPos: -1200,
            endPos: 0
        };

    const showPopup = () => {

        popupData.startPos > popupData.endPos ? popupData.count -= popupData.speed : popupData.count += popupData.speed;
        popupContent.style.transform = `translateX(${popupData.count}px)`;

        if (popupData.startPos > popupData.endPos ? popupData.count > popupData.endPos : popupData.count < popupData.endPos) {
            requestAnimationFrame(showPopup);
        }
    };

    const modalClose = () => {
        modal.style.display = 'none'
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.popup-close') || e.target.classList.contains('popup')) {
            modalClose()
        } else if (e.target.closest('.popup-btn')) {
            modal.style.display = 'block';
            if (screen.width > 768) {
                popupData.count = popupData.startPos;
                requestAnimationFrame(showPopup);
            }
        }
    })
};

export default modal
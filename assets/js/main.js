const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const modalCls = ['.child-modal'];

modalCls.forEach(cls => {
    const modal = document.querySelector(cls);
    const modalOpenBtns = document.querySelectorAll(`${cls}__open`);
    const modalCloseBtn = document.querySelector(`${cls} .modal-close`);
    const modalBg = document.querySelector(`${cls} .modal-bg`);
    const modalBtn = document.querySelector(`${cls} .close-btn`);

    const modalClose = () => {
        bodyVisible();
        modal.classList.remove('active');
        modal.classList.add('end-active');
        setTimeout(() => {
            modal.classList.remove('end-active');
        }, 400);
    }

    if (modalOpenBtns.length) {
        modalOpenBtns.forEach(btn => {
            btn.onclick = e => {
                e.preventDefault();
                modal.classList.add('active');
                bodyHidden();
            }
        })
    }

    modalCloseBtn.onclick = () => modalClose();
    modalBg.onclick = () => modalClose();
    modalBtn.onclick = () => modalClose();

})
// modals end
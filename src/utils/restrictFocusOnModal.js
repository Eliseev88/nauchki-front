export const restrictFocusOnModal = (ref, cancel = false) => {
    let lastElem = ref.elements[ref.elements.length - 1];
    let firstElem = ref.elements[0];

    if (cancel) {
        lastElem.onkeydown = null;
        firstElem.onkeydown = null;
        return;
    }

    lastElem.onkeydown = function (e) {
        if (e.key === 'Tab' && !e.shiftKey) {
            firstElem.focus();
            return false;
        }
    };

    firstElem.onkeydown = function (e) {
        if (e.key === 'Tab' && e.shiftKey) {
            lastElem.focus();
            return false;
        }
    };
}

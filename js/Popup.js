class Popup {
    constructor(popupButtonId, popupContainerId) {
        this.popupButton = document.getElementById(popupButtonId);
        this.popupContainer = document.getElementById(popupContainerId);

        this.preventDefault = this.preventDefault.bind(this);
        this.disableScroll = this.disableScroll.bind(this);
        this.enableScroll = this.enableScroll.bind(this);
        this.showPopup = this.showPopup.bind(this);
        this.hidePopup = this.hidePopup.bind(this);

        this.popupButton.addEventListener("click", this.showPopup);
        this.popupContainer.addEventListener("click", this.hidePopup);
    }

    preventDefault(e) {
        e.preventDefault();
    }

    disableScroll() {
        window.addEventListener('touchmove', this.preventDefault, { passive: false });
        window.addEventListener('keydown', this.preventDefault, { passive: false });
        window.addEventListener('wheel', this.preventDefault, { passive: false });
    }

    enableScroll() {
        window.removeEventListener('touchmove', this.preventDefault, { passive: false });
        window.removeEventListener('keydown', this.preventDefault, { passive: false });
        window.removeEventListener('wheel', this.preventDefault, { passive: false });
    }

    showPopup() {
        this.popupContainer.style.display = "block";
        this.disableScroll();
    }

    hidePopup(event) {
        if (event.target === this.popupContainer) {
            this.popupContainer.style.display = "none";
            this.enableScroll();
        }
    }
}

const section02_content_03_table_img1 = new Popup("section02-content-03-table-img1", "section02-content-03-table-img1-popup");
const section02_content_03_table_img2 = new Popup("section02-content-03-table-img2", "section02-content-03-table-img2-popup");
const section02_content_03_table_img3 = new Popup("section02-content-03-table-img3", "section02-content-03-table-img3-popup");
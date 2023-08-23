const ssOpenModalBtn = document.querySelector(".el-store-header-mobile-menu-button");
const ssModal = document.querySelector(".el-store-container");
const ssCloseModalBtn = document.querySelector(".el-store-mobile-menu-modal-close-button");

ssOpenModalBtn.addEventListener("click", SsToggleModal);
ssCloseModalBtn.addEventListener("click", SsToggleModal);

function SsToggleModal() {
    ssModal.classList.toggle("hidden");
}
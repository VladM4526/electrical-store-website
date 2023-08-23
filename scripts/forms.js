import Notiflix from 'notiflix';

const elStoreFormSubscription = document.querySelector(".el-store-footer-form");
const elStoreFormSubscriptionInput = document.querySelector(".el-store-footer-input");

function subscribeForm(e) {
    e.preventDefault();

    const messageForUserFirst = "Please enter your email";
    const messageForUserSecond = "You are successfully subscribed";

    const emptyInput = elStoreFormSubscriptionInput.value;
    const fulledInput = !elStoreFormSubscription.value

    if (emptyInput === "") {
        Notiflix.Notify.warning(messageForUserFirst);
    } else if (fulledInput) {
        Notiflix.Notify.success(messageForUserSecond);
    }

    elStoreFormSubscription.reset();
}

elStoreFormSubscription.addEventListener("submit", subscribeForm);
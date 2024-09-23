// user-build function for input field data
function getInputAsNumber(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueAsNumber = Number(inputValue);
    return inputValueAsNumber;
}

// user-build function for text field data
function getTextAsNumber(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueAsNumber = Number(textValue);
    return textValueAsNumber;
}

// user-build function for donation cards
function donationHandle(buttonId, donationInputNumberId, totalDonationId, totalAmountId, historySection, titleId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        let donateAmount = getInputAsNumber(donationInputNumberId);
        let currentDonationAmount = getTextAsNumber(totalDonationId);
        let totalAmount = getTextAsNumber(totalAmountId);

        if (isNaN(donateAmount) || donateAmount <= 0) {
            document.getElementById(donationInputNumberId).value = '';
            alert('Invalid Donation Amount');
            return;
        }

        if (donateAmount > totalAmount) {
            document.getElementById(donationInputNumberId).value = '';
            alert("You don't have sufficient balance");
            return;
        }

        currentDonationAmount += donateAmount;
        document.getElementById(totalDonationId).innerText = currentDonationAmount.toFixed(2);
        document.getElementById(donationInputNumberId).value = '';

        totalAmount -= donateAmount;
        document.getElementById(totalAmountId).innerText = totalAmount.toFixed(2);

        let title = document.getElementById(titleId).textContent;

        let history = document.getElementById(historySection);
        let newHistory = document.createElement('div');

        newHistory.innerHTML = `
            <div class="flex flex-col p-5 bg-white border border-border-color rounded-2xl">
                <h3 class="text-lg font-bold">
                    ${donateAmount.toFixed(2)} Taka is ${title}
                </h3>
                <p id="history-date" class="text-sm md:text-base text-paragraph-color">
                </p>
            </div>
            `

        history.insertBefore(newHistory, history.firstChild);

        const date = new Date();
        newHistory.querySelector("#history-date").innerText = "Date: " + date.toString();

        const displayModal = document.getElementById('my_modal_1');
        displayModal.showModal();
    });
};

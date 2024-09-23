function getInputElementValueAsNumber(id) {
    const inputElementValue = document.getElementById(id).value;
    const inputValueAsNumber = parseFloat(inputElementValue);
    return inputValueAsNumber;
}

function getTextElementValueAsNumber(id) {
    const textElementValue = document.getElementById(id).innerText;
    const textValueAsNumber = parseFloat(textElementValue);
    return textValueAsNumber;
}


function donationManagement(buttonId, donationInputId, currentDonationId, totalAmountId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const donateAmount = getInputElementValueAsNumber(donationInputId);
        let currentAmount = getTextElementValueAsNumber(currentDonationId);
        let totalAmount = getTextElementValueAsNumber(totalAmountId);

        if (isNaN(donateAmount) || donateAmount < 0) {
            alert('Invalid Donation Amount');
            return;
        }

        if (donateAmount > totalAmount) {
            alert("You don't have sufficient balance");
            return;
        }

        currentAmount += donateAmount;
        document.getElementById(currentDonationId).innerText = currentAmount;

        document.getElementById(donationInputId).value = '';

        totalAmount -= donateAmount;
        document.getElementById(totalAmountId).innerText = totalAmount;
    });
}

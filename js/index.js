// let totalAmount = getTextElementValueAsNumber('total-amount');
// let noakhaliAmount = getTextElementValueAsNumber('noakhali-amount');
// let feniAmount = getTextElementValueAsNumber('feni-amount');
// let protestAmount = getTextElementValueAsNumber('protest-amount');
// console.log({ totalAmount, noakhaliAmount, feniAmount, protestAmount });



// document.getElementById('noakhali-donate-btn')
//     .addEventListener('click', function () {
//         let noakhaliDonateAmount = getInputElementValueAsNumber('noakhali-donate-amount');

//         if (isNaN(noakhaliDonateAmount) || noakhaliDonateAmount < 0) {
//             alert('Invalid Donation Amount');
//             return;
//         }

//         if (noakhaliDonateAmount > totalAmount) {
//             alert("You don't have sufficient balance");
//             return;
//         }

//         noakhaliAmount += noakhaliDonateAmount;
//         document.getElementById('noakhali-amount').innerText = noakhaliAmount;
//         document.getElementById('noakhali-donate-amount').value = '';
//         totalAmount -= noakhaliDonateAmount;
//         document.getElementById('total-amount').textContent = totalAmount;
//     });


donationManagement('noakhali-donate-btn', 'noakhali-donate-amount', 'noakhali-amount', 'total-amount', 'history-section', 'noakhali-heading');
donationManagement('feni-donate-btn', 'feni-donate-amount', 'feni-amount', 'total-amount', 'history-section', 'feni-heading');
donationManagement('protest-donate-btn', 'protest-donate-amount', 'protest-amount', 'total-amount', 'history-section', 'quota-heading');
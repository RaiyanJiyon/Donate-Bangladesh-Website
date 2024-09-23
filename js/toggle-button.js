const donationButton = document.getElementById('donation-btn');
const historyButton = document.getElementById('history-btn');

donationButton.addEventListener('click', function () {
    donationButton.classList.add('bg-primary-color');
    donationButton.classList.remove('bg-white');
    historyButton.classList.remove('bg-primary-color');
    historyButton.classList.add('bg-white');

    document.getElementById('card-section').classList.remove('hidden')

})

historyButton.addEventListener('click', function () {
    historyButton.classList.add('bg-primary-color');
    historyButton.classList.remove('bg-white');
    donationButton.classList.remove('bg-primary-color');
    donationButton.classList.add('bg-white');

    document.getElementById('card-section').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
})
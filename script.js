document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("calculateBtn");

    button.addEventListener("click", function () {
        let amountInput = document.getElementById("amount");
        let amount = amountInput.value.trim();

        if (amount === "" || isNaN(amount) || amount <= 0) {
            alert("🚨 يرجى إدخال مبلغ صحيح!");
            return;
        }

        let amountNumber = parseFloat(amount);
        let tax = Math.ceil(amountNumber * 1.05);

        let resultElement = document.getElementById("result");
        resultElement.innerText = `💵 ${tax} كريديت 💰`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ تم تحميل script.js بنجاح!");

    // التأكد من أن الزر موجود
    let button = document.getElementById("calculateBtn");
    if (!button) {
        console.error("🚨 الزر غير موجود في HTML!");
        return;
    }

    button.addEventListener("click", function () {
        let amountInput = document.getElementById("amount");

        // التأكد من أن حقل الإدخال موجود
        if (!amountInput) {
            console.error("🚨 حقل الإدخال غير موجود!");
            return;
        }

        let amount = amountInput.value.trim();

        // التأكد من أن الإدخال صحيح
        if (amount === "" || isNaN(amount) || amount <= 0) {
            alert("🚨 يرجى إدخال مبلغ صحيح!");
            return;
        }

        // تحويل الإدخال إلى رقم وحساب الضريبة
        let amountNumber = parseFloat(amount);
        let tax = Math.ceil(amountNumber * 1.05);

        // تحديث النتيجة
        let resultElement = document.getElementById("result");
        if (!resultElement) {
            console.error("🚨 عنصر النتيجة غير موجود!");
            return;
        }

        resultElement.innerText = `💵 ${tax} ديسكورد كوينز 💰`;
        console.log(`✅ المبلغ المدخل: ${amountNumber}, المبلغ بعد الضريبة: ${tax}`);
    });
});

document.getElementById("calculator-tab").addEventListener("click", () => {
    document.getElementById("calculator-section").classList.remove("hidden");
    document.getElementById("converter-section").classList.add("hidden");
    document.getElementById("calculator-tab").classList.add("active");
    document.getElementById("converter-tab").classList.remove("active");
});

document.getElementById("converter-tab").addEventListener("click", () => {
    document.getElementById("converter-section").classList.remove("hidden");
    document.getElementById("calculator-section").classList.add("hidden");
    document.getElementById("converter-tab").classList.add("active");
    document.getElementById("calculator-tab").classList.remove("active");
});

function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Введите оба числа!");
        return;
    }

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Деление на ноль невозможно!");
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById("calc-result").textContent = result;
    console.log(`Результат операции: ${result}`);
}

function convert() {
    const type = document.getElementById("conversion-type").value; 
    const value = parseFloat(document.getElementById("input-value").value); 

    if (isNaN(value)) {
        alert("Введите корректное значение!");
        return;
    }

    let result = 0;

    if (type === "temp") {
        const direction = confirm("Нажмите ОК для Цельсий → Фаренгейт или Отмена для Фаренгейт → Цельсий");

        if (direction) {
            result = (value * 9) / 5 + 32;
            result = `${value} °C = ${result.toFixed(2)} °F`;

        } else {
            result = ((value - 32) * 5) / 9;
            result = `${value} °F = ${result.toFixed(2)} °C`;
        }
    } else if (type === "distance") {

        const direction = confirm("Нажмите ОК для Километры → Мили или Отмена для Мили → Километры");

        if (direction) {
            result = value * 0.621371;
            result = `${value} км = ${result.toFixed(2)} миль`;

        } else {
            result = value / 0.621371;
            result = `${value} миль = ${result.toFixed(2)} км`;
        }
    }
    document.getElementById("conv-result").textContent = result;
    console.log(`Результат конвертации: ${result}`);
}


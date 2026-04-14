const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
let history = [];

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const expression = display.value;
        if (!expression) return;

        const result = eval(expression);
        
        addToHistory(expression, result);
        
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function addToHistory(expression, result) {
    const item = { expression, result };
    history.unshift(item); 
    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = "";
    history.forEach((entry, index) => {
        const div = document.createElement("div");
        div.className = "history-item";
        div.innerHTML = `<span>${entry.expression} =</span><strong>${entry.result}</strong>`;
        
        div.onclick = () => {
            display.value = entry.result;
        };
        
        historyList.appendChild(div);
    });
}

function clearHistory() {
    history = [];
    renderHistory();
}

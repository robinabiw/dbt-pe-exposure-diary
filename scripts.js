// You can add interactive logic here, like validating the form inputs, etc.



function saveData() {
    document.querySelectorAll('#content input, #content textarea').forEach(element => {
        const valueToStore = element.type === 'checkbox' ? element.checked : element.value;
        localStorage.setItem(element.id, valueToStore);
    });
    alert("Data saved successfully!");
}


function clearData() {
    document.querySelectorAll('#content input, #content textarea').forEach(element => {
        if (element.type === 'range') {
            element.value = '0';
        } else if (element.type === 'checkbox') {
            element.checked = false;
        } else {
            element.value = '';
        }
        localStorage.removeItem(element.id);
    });
    alert("Data cleared successfully!");
}


// Load saved data from localStorage when the page loads
window.onload = function() {
    document.querySelectorAll('#content input, #content textarea').forEach(element => {
        const storedValue = localStorage.getItem(element.id);
        if (storedValue !== null) {
            if (element.type === 'checkbox') {
                element.checked = storedValue === 'true';
            } else {
                element.value = storedValue;
            }
        }
    });
}


function changText() {
    document.getElementById("heading").innerHTML = "Hello javascript HTML";
    
}

function correct() {
    const button = document.getElementById("bt1");
    const wrongText = document.getElementById("heading2");
    button.addEventListener('click', () => {
        wrongText.innerHTML = 'I LOVE YOU JSD7';
    });
};
correct();
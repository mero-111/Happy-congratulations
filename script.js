const imageUpload = document.getElementById('imageUpload');
const idCard = document.getElementById('card');
const resetBtn = document.getElementById('remove');
const bgSizeRange = document.getElementById('bgSizeRange');
const sizeValue = document.getElementById('sizeValue');



function generateCard() {
    let happy = document.getElementById("Input").value;
    let name = document.getElementById("nameInput").value;
    let message = document.getElementById("messageInput").value;

    if (name.trim() === "" || message.trim() === "" || happy.trim() === "") {
        alert("الرجاء إدخال الاسم والرسالة والمناسبة!");
        return;
    }


    document.getElementById("cardName").innerText = name;
    document.getElementById("cardMessage").innerText = message;
    document.getElementById("title").innerText = happy;
    document.getElementById("card").classList.remove("hidden");
    document.getElementById("BTNdownload").classList.remove("hidden");
}

function downloadCard() {
    let card = document.getElementById("card");

    html2canvas(card).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "🎉مناسبة سعيدة🎉.png";
        link.click();
    });
}

function changeCardColor() {
    let color = document.getElementById("colorPicker");
    color.style.backgroundColor = color.value
    document.getElementById("card").style.backgroundColor = color.value;
};

function changeFontColorA() {
    let color = document.getElementById("colorPickerA");
    color.style.backgroundColor = color.value
    document.getElementById("title").style.color = color.value;
    document.getElementById("cardName").style.color = color.value;
    document.getElementById("cardMessage").style.color = color.value;
};




imageUpload.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
        idCard.style.backgroundImage = `url(${e.target.result})`;
    }

    reader.readAsDataURL(file);
    }
});






imageUpload.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
        idCard.style.backgroundImage = `url(${e.target.result})`;
    }

    reader.readAsDataURL(file);
    }
});

function RemovePhoto() {
        idCard.style.backgroundImage = 'none';
        imageUpload.value = '';
    };
    


    // تحكم في حجم الخلفية
    bgSizeRange.addEventListener('input', function () {
      const size = bgSizeRange.value;
      idCard.style.backgroundSize = `${size}%`;
      sizeValue.textContent = `${size}%`;
    });

    // ضبط القيمة الافتراضية
    idCard.style.backgroundSize = `${bgSizeRange.value}%`;


  

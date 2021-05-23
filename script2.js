//selecting all required elements
dropArea2 = document.querySelector(".drag-area2"),
    dragText2 = dropArea2.querySelector(".header2"),
    button2 = dropArea2.querySelector(".button2"),
    input2 = dropArea2.querySelector(".input2");
let file2; //this is a global variable and we'll use it inside multiple functions

button2.onclick = () => {
    input2.click(); //if user click on the button2 then the input2 also clicked
}

input2.addEventListener("change", function() {
    //getting user select file2 and [0] this means if user select multiple file2s then we'll select only the first one
    file2 = this.files[0];
    dropArea2.classList.add("active2");
    showFile2(); //calling function
});


//If user Drag File Over DropArea2
dropArea2.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea2.classList.add("active2");
    dragText2.textContent = "Release to Upload CSV";
});

//If user leave dragged File from DropArea2
dropArea2.addEventListener("dragleave", () => {
    dropArea2.classList.remove("active2");
    dragText2.textContent = "Drag & Drop to Upload CSV";
});

//If user drop File on DropArea2
dropArea2.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file2 = event.dataTransfer.files[0];
    showFile2(); //calling function
});

function showFile2() {
    let fileType2 = file2.type; //getting selected file type
    let validExtensions2 = ["text/comma-separated-values","application/pdf" , "text/csv", "application/csv", "application/excel", "application/vnd.ms-excel", "application/vnd.msexcel", "text/anytext"]; //adding some valid CSV extensions in array
    if (validExtensions2.includes(fileType2)) { //if user selected file is an CSV file
        let fileReader2 = new FileReader(); //creating new FileReader object
        fileReader2.onload = () => {
            let fileURL2 = fileReader2.result; //passing user file source in fileURL2 variable
            let imgTag2 = file2.name; //creating an img tag and passing user selected file source inside src attribute
            dropArea2.innerHTML = imgTag2; //adding that created img tag inside dropArea2 container
        }
        fileReader2.readAsDataURL(file2);
    } else {
        alert("This is not an CSV File!");
        dropArea2.classList.remove("active2");
        dragText2.textContent = "Drag & Drop to Upload CSV";
    }
}
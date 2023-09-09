let form1 = document.querySelector(".four form");
form1.onsubmit = function (e) {
    let nameval = document.querySelector(".four input[type='text']").value;
    let emailval = document.querySelector(".four input[type='email']").value;
    let textarea = document.querySelector(".four textarea").value;

    e.preventDefault();
    let all = "Name: " + nameval + "<br/>" + "email: " + emailval + "<br/>" + "Message: " + textarea;
    Email.send({
        SecureToken: "ae026f42-dbb9-425d-a9f3-dc645c2f5e98",
        To: 'salibmina470@gmail.com',
        From: "projectsad8@gmail.com",
        Subject: "New Message",
        Body: all
    }).then(
        message => alert(message)
    );
    return true;
}
let form2 = document.querySelector(".messageInContact form");
console.log(form2)
console.log(form1)
form2.onsubmit = function (e) {
    let namevalue = document.querySelector(".messageInContact input[type='text']").value;
    let emailvalue = document.querySelector(".messageInContact input[type='email']").value;
    let textareaue = document.querySelector(".messageInContact textarea").value;

    e.preventDefault();
    let all = "Name: " + namevalue + "<br/>" + "email: " + emailvalue + "<br/>" + "Message: " + textareaue;
    Email.send({
        SecureToken: "ae026f42-dbb9-425d-a9f3-dc645c2f5e98",
        To: 'salibmina470@gmail.com',
        From: "projectsad8@gmail.com",
        Subject: "New Message",
        Body: all
    }).then(
        message => alert(message)
    );
    return true;
}
// custom tooltips
let s1 = document.querySelector(".s1");
let afters1 = document.querySelector(".s1 div");
let s2 = document.querySelector(".s2");
let afters2 = document.querySelector(".s2 div");
let s3 = document.querySelector(".s3");
let afters3 = document.querySelector(".s3 div");
let s4 = document.querySelector(".s4");
let afters4 = document.querySelector(".s4 div");
let s5 = document.querySelector(".s5");
let afters5 = document.querySelector(".s5 div");
let s6 = document.querySelector(".s6");
let afters6 = document.querySelector(".s6 div");
let s7 = document.querySelector(".s7");
let afters7 = document.querySelector(".s7 div");
let s8 = document.querySelector(".s8");
let afters8 = document.querySelector(".s8 div");
let s9 = document.querySelector(".s9");
let afters9 = document.querySelector(".s9 div");
let s10 = document.querySelector(".s10");
let afters10 = document.querySelector(".s10 div");
let s11 = document.querySelector(".s11");
let afters11 = document.querySelector(".s11 div");

s1.addEventListener("click", function () {

    afters1.classList.add("visible");
    s1.classList.add("boxShadow");

    afters11.classList.remove("visible");
    afters2.classList.remove("visible");
    afters3.classList.remove("visible");
    afters4.classList.remove("visible");
    afters5.classList.remove("visible");
    afters6.classList.remove("visible");
    afters7.classList.remove("visible");
    afters8.classList.remove("visible");
    afters9.classList.remove("visible");
    afters10.classList.remove("visible");
    s11.classList.remove("boxShadow");
    s2.classList.remove("boxShadow");
    s3.classList.remove("boxShadow");
    s4.classList.remove("boxShadow");
    s5.classList.remove("boxShadow");
    s6.classList.remove("boxShadow");
    s7.classList.remove("boxShadow");
    s8.classList.remove("boxShadow");
    s9.classList.remove("boxShadow");
    s10.classList.remove("boxShadow");



    setTimeout(() => {
        afters1.classList.remove("visible");
        s1.classList.remove("boxShadow");
    }, 3000);
})

s2.addEventListener("click", function () {

    afters2.classList.add("visible");
    s2.classList.add("boxShadow");

    afters1.classList.remove("visible");
    afters11.classList.remove("visible");
    afters3.classList.remove("visible");
    afters4.classList.remove("visible");
    afters5.classList.remove("visible");
    afters6.classList.remove("visible");
    afters7.classList.remove("visible");
    afters8.classList.remove("visible");
    afters9.classList.remove("visible");
    afters10.classList.remove("visible");
    s1.classList.remove("boxShadow");
    s11.classList.remove("boxShadow");
    s3.classList.remove("boxShadow");
    s4.classList.remove("boxShadow");
    s5.classList.remove("boxShadow");
    s6.classList.remove("boxShadow");
    s7.classList.remove("boxShadow");
    s8.classList.remove("boxShadow");
    s9.classList.remove("boxShadow");
    s10.classList.remove("boxShadow");


    setTimeout(() => {
        afters2.classList.remove("visible");
        s2.classList.remove("boxShadow");
    }, 3000);
})
s3.addEventListener("click", function () {

    afters3.classList.add("visible");
    s3.classList.add("boxShadow");

    afters1.classList.remove("visible");
    afters2.classList.remove("visible");
    afters11.classList.remove("visible");
    afters4.classList.remove("visible");
    afters5.classList.remove("visible");
    afters6.classList.remove("visible");
    afters7.classList.remove("visible");
    afters8.classList.remove("visible");
    afters9.classList.remove("visible");
    afters10.classList.remove("visible");
    s1.classList.remove("boxShadow");
    s2.classList.remove("boxShadow");
    s11.classList.remove("boxShadow");
    s4.classList.remove("boxShadow");
    s5.classList.remove("boxShadow");
    s6.classList.remove("boxShadow");
    s7.classList.remove("boxShadow");
    s8.classList.remove("boxShadow");
    s9.classList.remove("boxShadow");
    s10.classList.remove("boxShadow");


    setTimeout(() => {
        afters3.classList.remove("visible");
        s3.classList.remove("boxShadow");
    }, 3000);
})
s4.addEventListener("click", function () {

    afters4.classList.add("visible");
    s4.classList.add("boxShadow");

    afters1.classList.remove("visible");
    afters2.classList.remove("visible");
    afters3.classList.remove("visible");
    afters11.classList.remove("visible");
    afters5.classList.remove("visible");
    afters6.classList.remove("visible");
    afters7.classList.remove("visible");
    afters8.classList.remove("visible");
    afters9.classList.remove("visible");
    afters10.classList.remove("visible");
    s1.classList.remove("boxShadow");
    s2.classList.remove("boxShadow");
    s3.classList.remove("boxShadow");
    s11.classList.remove("boxShadow");
    s5.classList.remove("boxShadow");
    s6.classList.remove("boxShadow");
    s7.classList.remove("boxShadow");
    s8.classList.remove("boxShadow");
    s9.classList.remove("boxShadow");
    s10.classList.remove("boxShadow");


    setTimeout(() => {
        afters4.classList.remove("visible");
        s4.classList.remove("boxShadow");
    }, 3000);
})
s5.addEventListener("click", function () {

    afters5.classList.add("visible");
    s5.classList.add("boxShadow");

    afters1.classList.remove("visible");
    afters2.classList.remove("visible");
    afters3.classList.remove("visible");
    afters4.classList.remove("visible");
    afters11.classList.remove("visible");
    afters6.classList.remove("visible");
    afters7.classList.remove("visible");
    afters8.classList.remove("visible");
    afters9.classList.remove("visible");
    afters10.classList.remove("visible");
    s1.classList.remove("boxShadow");
    s2.classList.remove("boxShadow");
    s3.classList.remove("boxShadow");
    s4.classList.remove("boxShadow");
    s11.classList.remove("boxShadow");
    s6.classList.remove("boxShadow");
    s7.classList.remove("boxShadow");
    s8.classList.remove("boxShadow");
    s9.classList.remove("boxShadow");
    s10.classList.remove("boxShadow");


    setTimeout(() => {
        afters5.classList.remove("visible");
        s5.classList.remove("boxShadow");
    }, 3000);
})
s6.addEventListener("click", function () {

    afters6.classList.add("visible");
    s6.classList.add("boxShadow");

    afters1.classList.remove("visible");
    afters2.classList.remove("visible");
    afters3.classList.remove("visible");
    afters4.classList.remove("visible");
    afters5.classList.remove("visible");
    afters11.classList.remove("visible");
    afters7.classList.remove("visible");
    afters8.classList.remove("visible");
    afters9.classList.remove("visible");
    afters10.classList.remove("visible");
    s1.classList.remove("boxShadow");
    s2.classList.remove("boxShadow");
    s3.classList.remove("boxShadow");
    s4.classList.remove("boxShadow");
    s5.classList.remove("boxShadow");
    s11.classList.remove("boxShadow");
    s7.classList.remove("boxShadow");
    s8.classList.remove("boxShadow");
    s9.classList.remove("boxShadow");
    s10.classList.remove("boxShadow");

    setTimeout(() => {
        afters6.classList.remove("visible");
        s6.classList.remove("boxShadow");
    }, 3000);
})
s7.addEventListener("click", function () {

    afters7.classList.add("visible");
    s7.classList.add("boxShadow");

    afters1.classList.remove("visible");
    afters2.classList.remove("visible");
    afters3.classList.remove("visible");
    afters4.classList.remove("visible");
    afters5.classList.remove("visible");
    afters6.classList.remove("visible");
    afters11.classList.remove("visible");
    afters8.classList.remove("visible");
    afters9.classList.remove("visible");
    afters10.classList.remove("visible");
    s1.classList.remove("boxShadow");
    s2.classList.remove("boxShadow");
    s3.classList.remove("boxShadow");
    s4.classList.remove("boxShadow");
    s5.classList.remove("boxShadow");
    s6.classList.remove("boxShadow");
    s11.classList.remove("boxShadow");
    s8.classList.remove("boxShadow");
    s9.classList.remove("boxShadow");
    s10.classList.remove("boxShadow");


    setTimeout(() => {
        afters7.classList.remove("visible");
        s7.classList.remove("boxShadow");
    }, 3000);
})
s8.addEventListener("click", function () {

    afters8.classList.add("visible");
    s8.classList.add("boxShadow");

    afters1.classList.remove("visible");
    afters2.classList.remove("visible");
    afters3.classList.remove("visible");
    afters4.classList.remove("visible");
    afters5.classList.remove("visible");
    afters6.classList.remove("visible");
    afters7.classList.remove("visible");
    afters11.classList.remove("visible");
    afters9.classList.remove("visible");
    afters10.classList.remove("visible");
    s1.classList.remove("boxShadow");
    s2.classList.remove("boxShadow");
    s3.classList.remove("boxShadow");
    s4.classList.remove("boxShadow");
    s5.classList.remove("boxShadow");
    s6.classList.remove("boxShadow");
    s7.classList.remove("boxShadow");
    s11.classList.remove("boxShadow");
    s9.classList.remove("boxShadow");
    s10.classList.remove("boxShadow");


    setTimeout(() => {
        afters8.classList.remove("visible");
        s8.classList.remove("boxShadow");
    }, 3000);
})
s9.addEventListener("click", function () {

    afters9.classList.add("visible");
    s9.classList.add("boxShadow");

    afters1.classList.remove("visible");
    afters2.classList.remove("visible");
    afters3.classList.remove("visible");
    afters4.classList.remove("visible");
    afters5.classList.remove("visible");
    afters6.classList.remove("visible");
    afters7.classList.remove("visible");
    afters8.classList.remove("visible");
    afters11.classList.remove("visible");
    afters10.classList.remove("visible");
    s1.classList.remove("boxShadow");
    s2.classList.remove("boxShadow");
    s3.classList.remove("boxShadow");
    s4.classList.remove("boxShadow");
    s5.classList.remove("boxShadow");
    s6.classList.remove("boxShadow");
    s7.classList.remove("boxShadow");
    s8.classList.remove("boxShadow");
    s10.classList.remove("boxShadow");
    s11.classList.remove("boxShadow");


    setTimeout(() => {
        afters9.classList.remove("visible");
        s9.classList.remove("boxShadow");
    }, 3000);
})
s10.addEventListener("click", function () {

    afters10.classList.add("visible");
    s10.classList.add("boxShadow");

    afters1.classList.remove("visible");
    afters2.classList.remove("visible");
    afters3.classList.remove("visible");
    afters4.classList.remove("visible");
    afters5.classList.remove("visible");
    afters6.classList.remove("visible");
    afters7.classList.remove("visible");
    afters8.classList.remove("visible");
    afters9.classList.remove("visible");
    afters11.classList.remove("visible");
    s1.classList.remove("boxShadow");
    s2.classList.remove("boxShadow");
    s3.classList.remove("boxShadow");
    s4.classList.remove("boxShadow");
    s5.classList.remove("boxShadow");
    s6.classList.remove("boxShadow");
    s7.classList.remove("boxShadow");
    s8.classList.remove("boxShadow");
    s9.classList.remove("boxShadow");
    s11.classList.remove("boxShadow");


    setTimeout(() => {
        afters10.classList.remove("visible");
        s10.classList.remove("boxShadow");
    }, 3000);
})

s11.addEventListener("click", function () {

    afters11.classList.add("visible");
    s11.classList.add("boxShadow");

    afters1.classList.remove("visible");
    afters2.classList.remove("visible");
    afters3.classList.remove("visible");
    afters4.classList.remove("visible");
    afters5.classList.remove("visible");
    afters6.classList.remove("visible");
    afters7.classList.remove("visible");
    afters8.classList.remove("visible");
    afters9.classList.remove("visible");
    afters10.classList.remove("visible");
    s1.classList.remove("boxShadow");
    s2.classList.remove("boxShadow");
    s3.classList.remove("boxShadow");
    s4.classList.remove("boxShadow");
    s5.classList.remove("boxShadow");
    s6.classList.remove("boxShadow");
    s7.classList.remove("boxShadow");
    s8.classList.remove("boxShadow");
    s9.classList.remove("boxShadow");
    s10.classList.remove("boxShadow");
    setTimeout(() => {
        afters11.classList.remove("visible");
        s11.classList.remove("boxShadow");
    }, 3000);
})

// portfolio
filterSelection("all")
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "showw");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "showw");
    }
}

// Show filtered elements
function AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    console.log(arr2)
    console.log(arr1)
    for (i = 0; i < arr2.length; i++) {
        console.log(arr1.indexOf(arr2[i]))
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
            console.log(element.className)
            console.log(arr1.indexOf(arr2[i]))
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
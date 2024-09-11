const form = document.getElementById('form__wrapper');
const submit__button = document.getElementsByClassName('submit__button');
const general__enquiry = document.getElementById('general__enquiry');
const support__request = document.getElementById('support__request');
const third__column = document.querySelector('.third__column');
const forth__column = document.querySelector('.forth__column');
const first__name = document.getElementById('first__name');
const second__name = document.getElementById('second__name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const consent = document.getElementById('i__consent');
const clean__fields = document.querySelectorAll('#first__name, #second__name, #email');
const queryType = document.querySelectorAll('input[name="QueryType"]'); 

function selectedQueryType(){
    for(const radio of queryType){
        if(radio.checked){
            return radio.value;
        }
    }
}


function updateStyle() {
    if (general__enquiry.checked) {
        third__column.classList.add('active');
        third__column.style.borderColor = 'hsl(161, 60%, 18%)';
        third__column.style.backgroundColor = 'rgb(205, 243, 231)';
        forth__column.classList.remove('active');
        forth__column.style.borderColor = '';
        forth__column.style.backgroundColor = '';
        console.log('general');
    } else if (support__request.checked) {
        forth__column.classList.add('active');
        forth__column.style.borderColor = 'hsl(161, 60%, 18%)';
        forth__column.style.backgroundColor = 'rgb(205, 243, 231)';
        third__column.classList.remove('active');
        third__column.style.borderColor = '';
        third__column.style.backgroundColor = '';
        console.log('support');
    } else {
        third__column.classList.remove('active');
        forth__column.classList.remove('active');
        third__column.style.borderColor = '';
        third__column.style.backgroundColor = '';
        forth__column.style.borderColor = '';
        forth__column.style.backgroundColor = '';
        console.log('both');
    }
}

general__enquiry.addEventListener('change', updateStyle);
support__request.addEventListener('change', updateStyle);



form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = {
        FirstName: first__name.value,
        SecondName: second__name.value,
        Email: email.value,
        QueryType: selectedQueryType(),
        Message: message.value
    }

    console.log(formData);

    let xhr = new XMLHttpRequest();
    // xhr.open('POST', '/');
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if (xhr.responseText == 'success'){
            alert(`✅Thanks ${formData.FirstName} ${formData.SecondName}! The form is submitted. We'll be in touch soon!`);
        } else{
            alert('Smth went wrong');
        }
    }

    xhr.send(JSON.stringify(formData));

    //   fetch(form.action, { 
    //     method : "POST",
    //     body : formData,
    //   }).then(response => console.log('Success!', response))
    //   .catch(() => console.error('Error!'));

    // clean__fields.forEach(input => {
    //     input.value = '';
    // })

    general__enquiry.checked = false;
    support__request.checked = false;
    message.value = '';
    consent.checked = false;
    third__column.style.borderColor = '';
    third__column.style.backgroundColor = '';
    forth__column.style.borderColor = '';
    forth__column.style.backgroundColor = '';
    
});

const form = document.querySelector("form");
const inputName = form.querySelector("input[name=name]");
const inputEmail = form.querySelector("input[name=email]");
const formMessage = form.querySelector("textarea[name=message]");
const inputs = [inputName, inputEmail, formMessage];



inputName.addEventListener("input", e => markFieldAsError(e.target, !testText(e.target, 3)));
inputEmail.addEventListener("input", e => markFieldAsError(e.target, !testEmail(e.target)));
formMessage.addEventListener("input", e => markFieldAsError(e.target, !testText(e.target, 5)));


const testText = function (field, lng) { 
    return field.value.length >= lng;
}

const testEmail = function (field) {
    const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    return reg.test(field.value);
};

const markFieldAsError = function (field, show) {
    if (show) {
        field.classList.add("field-error");
    } else {
        field.classList.remove("field-error");
        toggleErrorField(field, false);
    }
};


const toggleErrorField = function (field, show) {
    const errorText = field.nextElementSibling;
    if (errorText !== null) {
        if (errorText.classList.contains("form-error-text")) {
            errorText.style.display = show ? "block" : "none"; 
            errorText.setAttribute('aria-hidden', show);
        }
    }
};

const createFieldError = function (field, text) {
    removeFieldError(field); 

    const div = document.createElement("div");
    div.classList.add("form-error-text");
    div.innerText = text;

    if (field.nextElementSibling === null) {
        field.parentElement.appendChild(div);
    } else {
        if (!field.nextElementSibling.classList.contains("form-error-text")) {
            field.parentElement.insertBefore(div, field.nextElementSibling);
            console.log(field.parentElement);
        }
    }
};

const removeFieldError = function (field) {
    const errorText = field.nextElementSibling;
    if (errorText !== null) {
        if (errorText.classList.contains("form-error-text")) {
            errorText.remove();
        }
    }
};


form.addEventListener("submit", e => {
    
    // e.preventDefault();

    let formErrors = false;
    
    for (const el of inputs) {
        removeFieldError(el);
        el.classList.remove("field-error");
        
        if (!el.checkValidity()) {
            createFieldError(el, el.dataset.textError);
            el.classList.add("field-error");
            formErrors = true;
        }
    }
    
    if (!testText(inputName, 3)) {
        markFieldAsError(inputName, true);
        createFieldError(inputName, "name is too short");
        formErrors = true;
    }
    
    if (!testEmail(inputEmail)) {
        markFieldAsError(inputEmail, true);
        createFieldError(inputEmail, "email address is not valid");
        formErrors = true;
    }
    
    if (!testText(formMessage, 5)) {
        markFieldAsError(formMessage, true);
        createFieldError(formMessage, "message is too short");
        formErrors = true;
    }
    
    if (!formErrors) {
        const submit = form.querySelector("#submit");
        submit.classList.add("elem-is-busy");
        submit.disabled = true;
        inputName.readOnly = true;
        inputEmail.readOnly = true;
        formMessage.readOnly = true;
    }
});

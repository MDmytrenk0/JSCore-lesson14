let form = document.forms.form;
// --------------Task move----------------------------------
function showText() {
    form.exit.value = form.enter.value ? form.enter.value : form.exit.value;
    form.enter.value = '';
}
// --------------Task placeholder---------------------------
form.textplaceholder.addEventListener('blur', () => {
    event.target.placeholder = event.target.value ? event.target.value : event.target.placeholder;
    form.reset();
})



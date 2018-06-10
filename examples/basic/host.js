let validationConfig = {
    inputId: '#test-input',
    criteria: [
        {
            name: 'IsInteger',
            errorMessageId: '#not-number-message'
        }
    ]
}

document.querySelector('#test-input').addEventListener('keyup', () => {
    console.log('change');
    console.log(document.validateSingleInput(validationConfig));
})
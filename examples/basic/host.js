let validationConfig = {
    inputId: '#test-input',
    criterias: [
        {
            name: 'IsInteger',
            errorMessageId: '#not-number-message'
        },
        {
            name: 'IsNumberPositive',
            errorMessageId: '#not-positive-message'
        },
        {
            name: 'IsNumberMin',
            min: 10,
            errorMessageId: '#not-min-message'
        }
    ]
}

document.querySelector('#test-input').addEventListener('keyup', () => {
    window.validateSingleInput(validationConfig)
})
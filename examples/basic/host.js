let validationConfig = [{
    inputId: '#test-input',
    eventType: 'keyup',
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
}]

// document.querySelector('#test-input').addEventListener('keyup', () => {
//     townWatch.validateSingleInput(validationConfig)
// })

townWatch.setupValidators(validationConfig);
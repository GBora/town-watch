let validationConfig = {
    inputId: '#test-input',
    eventType: 'keyup',
    criterias: [
        {
            name: 'ConformsToRegex',
            pattern: 'da',
            errorMessageId: '#not-pattern'
        }
    ]
}

document.querySelector('#test-input').addEventListener('keyup', () => {
    townWatch.validateSingleInput(validationConfig)
})


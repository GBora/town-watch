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
            name: 'IsNumberOverMin',
            min: 10,
            errorMessageId: '#not-min-message'
        }
    ]
}]

townWatch.setupValidators(validationConfig);
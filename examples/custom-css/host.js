let validationConfig = {
    inputId: '#test-input',
    eventType: 'keyup',
    criterias: [
        {
            name: 'StringIsNotEmpty',
            errorMessageId: '#not-string-message'
        },
        {
            name: 'NotGeorge',
            errorMessageId: '#not-george-message'
        }
    ]
}

let customOptions = {
    criterias: {
        'NotGeorge': function (input, criteria) {
            return input.value.toLowerCase() !== 'george';
        }
    },
    cssClasses: {
        'validInputClass': 'custom-valid-input',
        'invalidInputClass': 'custom-invalid-input',
        'visibleErrorMessage': 'custom-visible-error-message'
    }   
}

document.querySelector('#test-input').addEventListener('keyup', () => {
    townWatch.validateSingleInput(validationConfig, customOptions)
})


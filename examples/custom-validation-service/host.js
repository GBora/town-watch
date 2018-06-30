let validationConfig = [{
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
},{
    inputId: '#test-input2',
    eventType: 'keyup',
    criterias: [
        {
            name: 'StringIsNotEmpty',
            errorMessageId: '#not-string-message2'
        },
        {
            name: 'NotGeorge',
            errorMessageId: '#not-george-message2'
        }
    ]
}]

let customOptions = {
    criterias: {
        'NotGeorge': function (input, criteria) {
            return input.value.toLowerCase() !== 'george';
        }
    }
}

let customValidationService = new townWatch.CustomValidationService(customOptions);

customValidationService.setupValidators(validationConfig);



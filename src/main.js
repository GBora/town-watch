import { applyCriteria } from './validator/validator';

import './style/main.scss';

window.validateMultipleInputs = (configs) => {
    let results = [];
    for (let I = 0;  i < configs.length; i++) {
        let config = configs[0];
        results.push(validateSingleInput(config));
    }
    return results.indexOf(false) === -1;
}

window.validateSingleInput = (config) => {
    let input = document.querySelector(config.inputId);
    let results = [];
    // Assume the input is valid
    input.classList.remove('tw-invalid-input');
    input.classList.add('tw-valid-input');
    // Go through the list of criterias
    for (let i = 0;  i < config.criterias.length; i++) {
        let criteria = config.criterias[i];
        // By default assume that the input is valid thus the message doesn't need to be visible
        if (criteria.errorMessageId) {
            let errorMessage = document.querySelector(criteria.errorMessageId);
            errorMessage.classList.remove('visible-error-message');
        }
        let criteriaValidity = applyCriteria(input, criteria);
        results.push(criteriaValidity);
        if (criteriaValidity === false) {
            input.classList.add('tw-invalid-input');
            input.classList.remove('tw-valid-input');
            if (criteria.errorMessageId) {
                let errorMessage = document.querySelector(criteria.errorMessageId);
                errorMessage.classList.add('visible-error-message');
            }
            return false;
        }
    }
    return results.indexOf(false) === -1;
}
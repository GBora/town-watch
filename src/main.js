import { applyCriteria } from './validator/validator';

import './style/main.scss';

window.validateMultipleInputs = (configs) => {
    for (let I = 0;  i < configs.length; i++) {
        let config = configs[0];
        
        if (!validateSingleInput(config)) {
            return false;
        }
    }
    return true;
}

window.validateSingleInput = (config) => {
    let input = document.querySelector(config.inputId);
    // Assume the input is valid
    input.classList.remove('tw-invalid-input');
    // Go through the list of criterias
    for (let i = 0;  i < config.criterias; i++) {
        let criteria = config.criterias[i];
        // By default assume that the input is valid thus the message doesn't need to be visible
        if (criteria.errorMessageId) {
            let errorMessage = document.querySelector(criteria.errorMessageId);
            errorMessage.classList.remove('visible-error-message');
        }
        if (!applyCriteria(input, criteria)) {
            if (criteria.errorMessageId) {
                let errorMessage = document.querySelector(criteria.errorMessageId);
                errorMessage.classList.add('visible-error-message');
                input.classList.add('tw-invalid-input');
                return false;
            }
        }
    }
    return true;
}
import { applyCriteria } from './validator/Validator';
import './style/main.scss';

export const validateMultipleInputs = (configs) => {
    let results = [];
    for (let i = 0;  i < configs.length; i++) {
        let config = configs[i];
        results.push(validateSingleInput(config));
    }
    return results.indexOf(false) === -1;
}

export const validateSingleInput = (config) => {
    let input = document.querySelector(config.inputId);
    let results = [];
    // Assume the input is valid
    input.classList.remove('tw-invalid-input');
    input.classList.add('tw-valid-input');
    for (let i = 0;  i < config.criterias.length; i++) {
        let criteria = config.criterias[i];
        // By default assume that the input is valid thus the message doesn't need to be visible
        if (criteria.errorMessageId) {
            let errorMessage = document.querySelector(criteria.errorMessageId);
            errorMessage.classList.remove('visible-error-message');
        }
    }
    // Go through the list of criterias
    for (let i = 0;  i < config.criterias.length; i++) {
        let criteria = config.criterias[i];
        let criteriaValidity = applyCriteria(input, criteria);
        results.push(criteriaValidity);
        if (criteriaValidity === false) {
            input.classList.add('tw-invalid-input');
            input.classList.remove('tw-valid-input');
            if (criteria.errorMessageId) {
                let errorMessage = document.querySelector(criteria.errorMessageId);
                errorMessage.classList.add('visible-error-message');
            }
            break;
        }
    }
    return results.indexOf(false) === -1;
}

export const setupValidators = (configs) => {
    for (let i = 0;  i < configs.length; i++) {
        let config = configs[i];
        if (config.eventType) {
            let input = document.querySelector(config.inputId);
            input.addEventListener(config.eventType, () => {
                validateSingleInput(config);
            })
        }
    }
}
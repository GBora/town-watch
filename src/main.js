import { applyCriteria } from './validator/Validator';
import './style/main.scss';

/**
 * Validates an array of configs which are for multiple inputs
 * @param {array} configs 
  * @returns {boolean} true if all the input pass all the criteria or 
 * false if at least one input fails one criteria
 */
export const validateMultipleInputs = (configs) => {
    let results = [];
    for (let i = 0;  i < configs.length; i++) {
        let config = configs[i];
        results.push(validateSingleInput(config));
    }
    return results.indexOf(false) === -1;
}

/**
 * Validates a single input using the configuration object passed
 * @param {object} config 
 * @returns {boolean} true if the input passes all the criteria or 
 * false if it fails at least one
 */
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

/**
 * Setups all the validations in the given config array to be run if
 *  the proper event happens in the browser
 * @param {array} configs 
 */
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
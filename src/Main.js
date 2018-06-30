import { applyCriteria } from './validator/Validator';
import { Config } from './config/Config';
import './style/main.scss';

/**
 * Validates an array of configs which are for multiple inputs
 * @param {array} configs 
 * @param {object} customOptions object containing extra user-defined criteria or other customizeable options
 * @returns {boolean} true if all the input pass all the criteria or 
 * false if at least one input fails one criteria
 */
export const validateMultipleInputs = (configs, customOptions) => {
    let results = [];
    for (let i = 0;  i < configs.length; i++) {
        let config = configs[i];
        results.push(validateSingleInput(config, customOptions));
    }
    return results.indexOf(false) === -1;
}

/**
 * Validates a single input using the configuration object passed
 * @param {object} config 
 * @param {object} customOptions object containing extra user-defined criteria or other customizeable options
 * @returns {boolean} true if the input passes all the criteria or 
 * false if it fails at least one
 */
export const validateSingleInput = (config, customOptions) => {
    let cssClasses;
    if (customOptions && customOptions.cssClasses) {
        cssClasses = customOptions.cssClasses;
    } else {
        cssClasses = Config.cssClasses;
    }
    
    let input = document.querySelector(config.inputId);
    let results = [];
    // Assume the input is valid
    input.classList.remove(cssClasses.invalidInputClass);
    input.classList.add(cssClasses.validInputClass);
    for (let i = 0;  i < config.criterias.length; i++) {
        let criteria = config.criterias[i];
        // By default assume that the input is valid thus the message doesn't need to be visible
        if (criteria.errorMessageId) {
            let errorMessage = document.querySelector(criteria.errorMessageId);
            errorMessage.classList.remove(cssClasses.visibleErrorMessage);
        }
    }
    // Go through the list of criterias
    for (let i = 0;  i < config.criterias.length; i++) {
        let criteria = config.criterias[i];
        let criteriaValidity = applyCriteria(input, criteria);
        results.push(criteriaValidity);
        if (criteriaValidity === false) {
            input.classList.add(cssClasses.invalidInputClass);
            input.classList.remove(cssClasses.validInputClass);
            if (criteria.errorMessageId) {
                let errorMessage = document.querySelector(criteria.errorMessageId);
                errorMessage.classList.add(cssClasses.visibleErrorMessage);
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
 * @param {object} customOptions object containing extra user-defined criteria or other customizeable options
 */
export const setupValidators = (configs, customOptions) => {
    for (let i = 0;  i < configs.length; i++) {
        let config = configs[i];
        if (config.eventType) {
            let input = document.querySelector(config.inputId);
            input.addEventListener(config.eventType, () => {
                validateSingleInput(config, customOptions);
            })
        }
    }
}

/**
* Class that serves to hold a user's custom options so that they not need to re-send them for every call
**/
export class CustomValidationService {
    /**
    * Constructor which receives the custom options to be stored
    * @param {object} customOptions object containing extra user-defined criteria or other customizeable options
    **/
    constructor(customOptions) {
        this.customOptions = customOptions;
    }

    /**
     * Setups all the validations in the given config array to be run if
     * the proper event happens in the browser, uses the custom options 
     * from the class instance
     * @param {array} configs 
     */
    setupValidators(configs) {
        setupValidators(configs, this.customOptions);
    }

    /**
     * Validates a single input using the configuration object passed,
     * uses the custom options from the class instance
     * @param {object} config 
     * @returns {boolean} true if the input passes all the criteria or 
     * false if it fails at least one
     */
    validateSingleInput(config) {
        return validateSingleInput(config, this.customOptions);
    }

    /**
     * Validates an array of configs which are for multiple inputs,
     * uses the custom options from the class instance
     * @param {array} configs 
     * @returns {boolean} true if all the input pass all the criteria or 
     * false if at least one input fails one criteria
     */
    validateMultipleInputs(configs) {
        let results = [];
        for (let i = 0;  i < configs.length; i++) {
            let config = configs[i];
            results.push(this.validateSingleInput(config));
        }
        return results.indexOf(false) === -1;
    }
}
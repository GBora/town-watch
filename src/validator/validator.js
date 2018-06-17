import { IsValidInput } from '../criteria/General/isValidInput';
import { IsChecked } from '../criteria/Checkbox/isChecked';
import { IsNumber } from '../criteria/Number/isNumber';
import { IsInteger } from '../criteria/Integer/isInteger'; 
import { IsNumberMin } from '../criteria/Number/isNumberMin';
import { IsNumberPositive } from '../criteria/Number/IsNumberPositive';
import { IsNumberMax } from '../criteria/Number/isNumberMax';
import { StringIsNotEmpty } from '../criteria/String/stringIsNotEmpty';

/**
 * Validates a single input after a single criteria
 * @param {object} input the DOM node representing the input that is to be validated 
 * @param {object} criteria the criteria object with which to validate 
 * @returns {boolean} true if the input passes all the criteria or 
 * false if it fails at least one
 */
export const applyCriteria = (input, criteria) => {
    switch(criteria.name) {
        case 'IsValidInput': {
            return IsValidInput(input);
        }
        case 'IsChecked': {
            return IsChecked(input);
        }
        case 'IsInteger': {
            return IsInteger(input);
        }
        case 'IsNumber': {
            return IsNumber(input);
        }
        case 'IsNumberMin': {
            return IsNumberMin(input, criteria);
        }
        case 'IsNumberPositive': {
            return IsNumberPositive(input);
        }
        case 'IsNumberMax': {
            return IsNumberMax(input, criteria);
        }
        case 'StringIsNotEmpty': {
            return StringIsNotEmpty(input);
        }
        default: {
            throw new Error('Criteria name not recognised, check if criteria exists by default or if it\'s been loaded');
        }
    }
}
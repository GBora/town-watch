import { IsValidInput } from '../criteria/General/IsValidInput';
import { IsChecked } from '../criteria/Checkbox/IsChecked';
import { IsNumber } from '../criteria/Number/IsNumber';
import { IsInteger } from '../criteria/Integer/IsInteger'; 
import { IsNumberOverMin } from '../criteria/Number/IsNumberOverMin';
import { IsNumberPositive } from '../criteria/Number/IsNumberPositive';
import { IsNumberUnderMax } from '../criteria/Number/IsNumberUnderMax';
import { StringIsNotEmpty } from '../criteria/String/StringIsNotEmpty';

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
        case 'IsNumberOverMin': {
            return IsNumberOverMin(input, criteria);
        }
        case 'IsNumberPositive': {
            return IsNumberPositive(input);
        }
        case 'IsNumberUnderMax': {
            return IsNumberUnderMax(input, criteria);
        }
        case 'StringIsNotEmpty': {
            return StringIsNotEmpty(input);
        }
        default: {
            console.error(`Criteria name ${criteria.name} not recognised, check if criteria exists by default or if it\'s been loaded`);
        }
    }
}
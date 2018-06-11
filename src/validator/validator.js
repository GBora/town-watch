import { IsValidInput } from '../criteria/isValidInput';
import { IsChecked } from '../criteria/isChecked';
import { IsNumber } from '../criteria/isNumber';
import { IsInteger } from '../criteria/isInteger'; 
import { IsNumberMin } from '../criteria/isNumberMin';
import { IsNumberPositive } from '../criteria/IsNumberPositive';

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
        default: {
            throw new Error('Criteria name not recognised, check if criteria exists by default or if it\'s been loaded');
            return true;
        }
    }
}
let chai = require('chai');
import {IsInteger} from '../src/criteria/Integer/isInteger'; 

chai.should();

describe('IsInteger criteria', () => {
    let input = {
        value: '1'
    };

    IsInteger(input).should.be.true;
});
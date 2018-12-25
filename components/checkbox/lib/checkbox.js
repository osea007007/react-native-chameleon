import { Component } from 'react';
import propTypes from 'prop-types';

/**
 * ---
 * page: test
 * ---
 *
 * 请使用
 */
export class Checkbox extends Component {
    render() {
        return null;
    }
}


Checkbox.propTypes = {
    /**
     * test must be true
     */
    test:propTypes.number.isRequired
};

export class Checkbox1 extends Component {
    render() {
        return null;
    }
}


Checkbox1.propTypes = {
    /**
     * test must be false
     */
    test:propTypes.number.isRequired
};
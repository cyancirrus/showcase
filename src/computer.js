import React from 'react'

function arrayContains(arr, elem) {
    return arr.indexOf(elem) !== -1
}

function add(x,y) {
    return x + y;
}
function subtract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function compute(x, y, operator) {
    if (operator == '+') {
        return add(x, y);
    }
    if (operator === '-') {
        return subtract(x, y);
    }
    if (operator === '*') {
        return multiply(x, y);
    }
    if (operator === '/') {
        return divide(x, y);
    }
}

function tryCompute(x, y, operator) {
    const supportedOperations = ['+', '-', '*', '/']
    const xInput = parseFloat(x);
    const yInput = parseFloat(y);
    const validation = (
        arrayContains(supportedOperations, operator) && 
        ! Number.isNaN(xInput) &
        ! Number.isNaN(yInput)
    );
    if (validation) {
        return compute(xInput, yInput, operator);
    }
}

class CalculatorInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onCalculatorChange(e.target.value);
    }
    render() {
        const calculatorField = this.props.calculatorField;
        const calculatorFieldName = this.props.calculatorFieldName;
        return (
            <fieldset>
                <legend>
                    Enter input for {calculatorFieldName}
                </legend>
                <input
                    value={calculatorField}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}

export default class Computer extends React.Component {
    constructor(props) {
        super(props);
        this.handleBaseNumber = this.handleBaseNumber.bind(this);
        this.handleAuxNumber = this.handleAuxNumber.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.state = {
            baseNumber: '',
            auxNumber: '',
            operator:''
        }
    }

    handleBaseNumber(e) {
        this.setState({baseNumber: e});
    }
    handleAuxNumber(e) {
        this.setState({auxNumber: e});
    }

    handleOperator(o) {
        this.setState({operator: o});
    }

    render() {
        const baseNumber = this.state.baseNumber
        const auxNumber = this.state.auxNumber
        const operator = this.state.operator
        const output = tryCompute(baseNumber, auxNumber, operator)
        return (
            <div>
                <CalculatorInput
                    calculatorFieldName='baseNumber'
                    calculatorField={baseNumber}
                    onCalculatorChange={this.handleBaseNumber}
                />
                <CalculatorInput
                    calculatorFieldName='auxNumber'
                    calculatorField={auxNumber}
                    onCalculatorChange={this.handleAuxNumber}
                />
                <CalculatorInput
                    calculatorFieldName='operator'
                    calculatorField={operator}
                    onCalculatorChange={this.handleOperator}
                />
            {output}
            </div>
        );
    }
}
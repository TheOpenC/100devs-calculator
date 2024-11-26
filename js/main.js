// required functions of calculator
// accept user inputs of number, operator and number
// should accept decimal numbers
// store inputs
// recognize inputs and perform calculations
// return result

// optional features:
// Should accept longer arithmetic operations
// display all inputs as they're being entered -- entire input string
// store previous total as start of next operation
// clear button should clear all entries
// should prevent invalid inputs (operators next to each other, two decimals)

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value } = target;
        if (!target.matches('button')) {
            return;
        } else {
            calculator.parseInput(value)
            // pass value to parse method
            //console.log(value)
        }
    })

const calculator = {
    dislayText: '0',
    prevTotal: null,
    
    parseInput(value){
        if(this.displayText === '0'){
            this.displayText = ''
        } 
        // have any of the special buttons been clicked? 
        switch(value) {
            case '=' :
                //calculate the answer
                break;
            case 'AC' :
                //clear the display
                break;
            case '.' :
                if(this.dislayText == 0) {
                    // '0.' into add text method
                } else {
                    //add value to text string
                }
                break;
            default:
                //add value to text string    

        }

        addText(value) {

        }
    }
}

//2:54:00
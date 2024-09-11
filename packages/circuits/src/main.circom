pragma circom 2.1.6;

include "circomlib/circuits/comparators.circom";

template AgeAbove18 () {
    signal input dobMonth;
    signal input dobYear;
    signal input currentDateMonth;
    signal input currentDateYear;
    signal output isAbove18;
    
    signal current <== currentDateMonth + currentDateYear;
    signal dob <== dobMonth + dobYear;

    isAbove18 <== LessThan(8)([current - dob, 18 * 12]);
}

component main { public [currentDateMonth, currentDateYear] } = AgeAbove18();
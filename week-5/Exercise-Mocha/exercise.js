module.exports = BMI;

function BMI(height, weight){
    return Math.round((( weight/ height ) / height) * 10) / 10;
}
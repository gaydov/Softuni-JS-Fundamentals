function calcSumAndVAT(input) {

    let sum = 0;
    let VAT = 0;

    for (let num of input) {

        sum += num;
    }

    VAT = sum * 0.20;

    console.log("sum = " + sum);
    console.log("VAT = " + VAT);
    console.log("total = " + (sum + VAT));
}
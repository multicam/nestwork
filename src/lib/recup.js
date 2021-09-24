const {pow} = Math

/***********************************************
 *              Present Value                  *
 * pv = fv / (1 + (rate / freq))^periods       *
 * pv = Present Value                          *
 * fv = Future Value                           *
 * rate = interest rate (expressed as %)       *
 * freq = compounding frequency                *
 * periods = number of periods until maturity  *
 ***********************************************/
function presentValue(fv, freq, rate, periods)
{
    return (fv / pow((1 + (rate / 100 / freq)), periods));
}

/************************************************
 *                Future Value                  *
 * fv = pv * (1 + (rate / freq))^periods        *
 * fv = Future Value                            *
 * pv = Present Value                           *
 * rate = interest rate (expressed as %)        *
 * freq = compounding frequency                 *
 * periods = number of periods until maturity   *
 ************************************************/
function futureValue(pv, freq, rate, periods)
{
    return (pv * pow(1 + (rate / 100 / freq), periods));
}

/************************************************
 *            Annualized Return                 *
 * r = (fv - pv) / pv / years                   *
 * fv = future value                            *
 * pv = present value                           *
 * years = term of loan in years                *
 ************************************************/
function annualizedReturn(fv, pv, years)
{
    return (fv - pv) / pv / years;
}

function monthlyPayment(pv, freq, rate, periods)
{
    rate = rate / 100 / freq;

    var x = pow(1 + rate, periods);
    return (pv * x * rate) / (x - 1);
}

/***********************************************
 *                 Annuity                     *
 * a = fv / (((1 + r / c)^n) - 1) / (r/c)      *
 * fv = future value                           *
 * r = interest rate                           *
 * c = compounding frequency                   *
 * n = total number of periods                 *
 ***********************************************/
function annuity(fv, freq, rate, periods)
{
    rate = rate / 100 / freq;
    return (fv / ((pow(1 + rate, periods) - 1)) * rate);
}

function calcAmortPrincipal(pymt, freq, rate, periods)
{
    rate = rate / 100 / freq;
    return (pymt * (1 - (1 / pow(1 + rate, periods))) / rate);
}

/***********************************************
 *  Convert to currency notation               *
 ***********************************************/
function toCurrency(num) {
    num = Math.round(num*100)/100;
    var currstring = num.toString();
    if (currstring.match(/\./)) {
        var curr = currstring.split('.');
    } else {
        var curr = [currstring, "00"];
    }
    curr[1] += "00";
    curr[2] = "";
    var returnval = "";
    var length = curr[0].length;

    // add 0 to decimal if necessary
    for (var i = 0; i < 2; i++)
        curr[2] += curr[1].substr(i, 1);

    // insert commas for readability
    for (i = length; (i - 3) > 0; i = i - 3) {
        returnval = "," + curr[0].substr(i - 3, 3) + returnval;
    }
    returnval = curr[0].substr(0, i) + returnval + "." + curr[2];
    return(returnval);
}

function regularDeposit(payment, freq, rate, periods)
{
    rate = rate / 100 / freq;
    return (payment * (pow(1 + rate, periods) - 1) / rate * (1 + rate));
}
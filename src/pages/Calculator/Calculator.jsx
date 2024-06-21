import AffordabilityCalculator from '../../components/AffordabilityCalculator/AffordabilityCalculator';
import DonutChart from '../../components/DonutChart/DonutChart';
import './Calculator.css';
import { useEffect, useLayoutEffect, useState } from 'react';

const Calculator = () => {
  const [submitButton, setSubmitButton] = useState(true);
  const [options, setOptions] = useState({
    activeOption: 'Purchase',
    downPaymentOption: '$',
    loanTermsOptions: 'Year',
    pmiOptions: '$',
    propertyTaxOptions: '%',
    ownersInsurance: '$',
    paymentBreakdown: 'Monthly Payment',
    increaseFrequencyOptions: 'Monthly',
    increaseLumpSumOptions: 'One time'
  });
  const handleOptionChange = (property, value) => {
    const temp = { ...options };
    temp[property] = value;

    if (property === 'increaseFrequencyOptions') {
      calculateSavings(value);
    }

    if (property === 'increaseLumpSumOptions') {
      calculateLumpSumSavings(value);
    }

    console.log({ property, value }, temp);
    setOptions(temp);
  };

  const [calculatorData, setCalculatorData] = useState({
    homeValue: 200000,
    downPayment: 0,
    mortgageAmount: 200000,
    loanTerms: 30,
    interestRate: 5,
    pmiYearly: 0,
    propertyTaxYearly: 0.6,
    homeOwnersInsurance: 1200,
    hoaDuesPerMonth: 0,
    firstPaymentDate: new Date().toISOString().substring(0, 10),
    extraPaymentPerMonth: 0
  });

  // calculation data
  const [rawData, setRawData] = useState({
    monthlyPMI: 0,
    totalPayment: 0,
    totalInterest: 0,
    monthlyPayment: 0,
    hoaDuesPerMonth: 0,
    monthlyInterest: 0,
    monthlyPropertyTax: 0,
    totalMonthlyPayment: 0,
    monthlyHomeInsurance: 0,
    extraPaymentPerMonth: 0
  });
  const [reducedLoanTerm, setReducedLoanTerm] = useState(0);
  const [additionalSaving, setAdditionalSaving] = useState(0);
  const [newPaymentAmount, setNewPaymentAmount] = useState(0);
  const [extraPaymentInput, setExtraPaymentInput] = useState('');
  const [lumpSumPaymentInput, setLumpSumPaymentInput] = useState('');

  /*
  * calculate monthly interest data
  */
  const calculateMonthlyInterest = (interest) => interest / 100 / 12;
  /*
  * calculate loan term in months
  */
  const loanTermsInMonths = () => options.loanTermsOptions === 'Year' ? calculatorData.loanTerms * 12 : calculatorData.loanTerms;
  /*
  * calculate monthly payment
  */
  const calculateMonthlyPayment = (amount) => {
    const mortgageAmount = amount;
    const monthlyInterest = calculateMonthlyInterest(calculatorData.interestRate);
    const monthlyLoanTerm = loanTermsInMonths();
    let monthlyPayment = mortgageAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, monthlyLoanTerm)) / (Math.pow(1 + monthlyInterest, monthlyLoanTerm) - 1);
    return monthlyPayment;
  }
  /*
  * calculate monthly property tax
  */
  const monthlyPropertyTax = () => ((calculatorData.propertyTaxYearly / 100) / 12) * calculatorData.homeValue;
  /*
  * calculate monthly home insurance
  */
  const monthlyHomeInsurance = () => (calculatorData.homeOwnersInsurance / 12);
  /*
  * calculate monthly PMI
  */
  const monthlyPMI = () => options.pmiOptions === '$' ? calculatorData.pmiYearly / 12 : (calculatorData.pmiYearly / 100) / 12 * calculatorData.homeValue;


  // update calculation on initial page load
  useEffect(() => {
    const pmiMonthly = monthlyPMI();
    const propertyTaxMonthly = monthlyPropertyTax();
    const homeInsuranceMonthly = monthlyHomeInsurance();
    const monthlyInterest = calculateMonthlyInterest(calculatorData.interestRate);
    const monthlyPayment = calculateMonthlyPayment(calculatorData.mortgageAmount);
    const totalMonthlyPayment = monthlyPayment + propertyTaxMonthly + homeInsuranceMonthly + pmiMonthly + calculatorData.hoaDuesPerMonth + calculatorData.extraPaymentPerMonth;
    const totalPayment = totalMonthlyPayment * loanTermsInMonths();
    const totalInterest = monthlyPayment * loanTermsInMonths() - calculatorData.mortgageAmount;

    setNewPaymentAmount(totalMonthlyPayment);
    setRawData({
      monthlyPMI: pmiMonthly,
      totalPayment: totalPayment,
      totalInterest: totalInterest,
      monthlyPayment: monthlyPayment,
      monthlyInterest: monthlyInterest,
      monthlyPropertyTax: propertyTaxMonthly,
      totalMonthlyPayment: totalMonthlyPayment,
      monthlyHomeInsurance: homeInsuranceMonthly,
      hoaDuesPerMonth: calculatorData.hoaDuesPerMonth,
      extraPaymentPerMonth: calculatorData.extraPaymentPerMonth,
    });
  }, []);

  const validateData = () => {
    if (options.downPaymentOption === '%') {
      setCalculatorData({ ...calculatorData, downPayment: calculatorData.homeValue * (calculatorData.downPayment / 100) });
    }
    if (options.pmiOptions === '%') {
      setCalculatorData({ ...calculatorData, pmiYearly: calculatorData.homeValue * (calculatorData.pmiYearly / 100) });
    }
    if (options.propertyTaxOptions === '%') {
      setCalculatorData({ ...calculatorData, propertyTaxYearly: calculatorData.homeValue * (calculatorData.propertyTaxYearly / 100) });
    }
    if (options.ownersInsurance === '%') {
      setCalculatorData({ ...calculatorData, homeOwnersInsurance: calculatorData.homeValue * (calculatorData.homeOwnersInsurance / 100) });
    }
    if (options.loanTermsOptions === 'Month') {
      setCalculatorData({ ...calculatorData, loanTerms: `${calculatorData.loanTerms} months` });
    }
  };

  const handleSubmit = () => {
    validateData();
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const getChartData = (rawData) => ({
    labels: [
      <span>Principal & Interest <span style={{ color: '#6c8971' }}>({formatter.format(rawData.monthlyPayment)})</span></span>,
      <span>Taxes<span style={{ color: '#6c8971' }}>({formatter.format(rawData.monthlyPropertyTax)})</span></span>,
      <span>Insurance<span style={{ color: '#6c8971' }}>({formatter.format(rawData.monthlyHomeInsurance)})</span></span>,
      <span>HOA Dues<span style={{ color: '#6c8971' }}>({formatter.format(rawData.hoaDuesPerMonth)})</span></span>,
      <span>PMI<span style={{ color: '#6c8971' }}>({formatter.format(rawData.monthlyPMI)})</span></span>,
      <span>Extra Payment<span style={{ color: '#6c8971' }}>({formatter.format(rawData.extraPaymentPerMonth)})</span></span>
    ],
    datasets: [
      {
        data: [
          rawData.monthlyPayment,
          rawData.monthlyPropertyTax,
          rawData.monthlyHomeInsurance,
          rawData.hoaDuesPerMonth,
          rawData.monthlyPMI,
          rawData.extraPaymentPerMonth
        ],
        backgroundColor: [
          '#e69135',
          '#51b1af',
          '#dd5076',
          '#3b94d9',
          '#d5d51e',
          '#7621ce',
        ]
      },
    ],
  });

  const convertMonthsToYearsAndMonths = (months) => {
    const wholeYears = Math.floor(months / 12);
    const remainingMonths = Math.round((months % 12) * 10) / 10;
    return `${wholeYears} years and ${remainingMonths} months`;
  }

  const calculateReducedLoanTerm = (newMonthlyPayment, mortgageAmount = calculatorData.mortgageAmount) => {
    const monthlyInterestRate = calculateMonthlyInterest(calculatorData.interestRate);
    const reducedTerm = Math.log10(newMonthlyPayment / (newMonthlyPayment - (mortgageAmount * monthlyInterestRate))) / Math.log10(1 + monthlyInterestRate);
    return Math.round(reducedTerm);
  }

  let tracker = 0;
  const calculateSavings = (frequency, extraPayment) => {
    let value = 0;

    if (extraPayment) {
      value = parseFloat(extraPayment);
    }
    else {
      value = parseFloat(extraPaymentInput);
    }

    if (frequency === 'Bi weekly') {
      value = value * 2;
    }
    else if (frequency === 'Weekly') {
      value = value * 4;
    }

    const temp = { ...rawData };
    temp['extraPaymentPerMonth'] = value;
    setRawData(temp);

    const newMonthlyPayment = rawData.monthlyPayment + value;
    const reducedTerm = calculateReducedLoanTerm(newMonthlyPayment);
    const newTotalPayment = newMonthlyPayment * reducedTerm;
    const newTotalInterest = newTotalPayment - calculatorData.mortgageAmount;

    const saving = Math.abs(rawData.totalInterest - newTotalInterest);
    setAdditionalSaving(saving);

    const payment = rawData.totalMonthlyPayment + value;
    setNewPaymentAmount(payment);

    const newTerm = Math.abs(loanTermsInMonths(calculatorData.loanTerms) - reducedTerm);
    setReducedLoanTerm(newTerm);

    return saving;
  }

  const calculateLumpSumSavings = (frequency, extraPayment) => {
    let value = 0;
    let mortgageAmount = calculatorData.mortgageAmount;

    if (extraPayment) {
      value = parseFloat(extraPayment);
    } else {
      value = parseFloat(lumpSumPaymentInput);
    }

    if (frequency === 'One time') {
      mortgageAmount = mortgageAmount - value;
      value = 0;
    } else if (frequency === 'Yearly') {
      value = value / 12;
    } else if (frequency === 'Quarterly') {
      value = value / 4;
    }

    const newMonthlyPayment = rawData.monthlyPayment + value;
    const reducedTerm = calculateReducedLoanTerm(newMonthlyPayment, mortgageAmount);
    const newTotalPayment = newMonthlyPayment * reducedTerm;
    const newTotalInterest = newTotalPayment - calculatorData.mortgageAmount;

    const saving = Math.abs(rawData.totalInterest - newTotalInterest);
    setAdditionalSaving(saving);

    const newTerm = Math.abs(loanTermsInMonths(calculatorData.loanTerms) - reducedTerm);
    setReducedLoanTerm(newTerm);

    return saving;
  }

  const handleInputChange = (e) => {
    let value = 0;
    if (e.target.id === 'firstPaymentDate') {
      value = e.target.value;
    }
    else {
      value = e.target.value ? parseFloat(e.target.value) : 0;
    }

    const temp = { ...calculatorData };
    temp[e.target.id] = value;
    setCalculatorData(temp);
  }

  return (
    <div id='calculator-container' className='main-content'>
      <div className='calculator-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <h2>Calculator</h2>
            <div className='calc-option-container'>
              <div className={`calc-option ${options.activeOption === 'Affordability Calculator' ? 'active' : ''}`} onClick={() => handleOptionChange('activeOption', 'Affordability Calculator')}>Affordability Calculator</div>
              <div className={`calc-option ${options.activeOption === 'Purchase' ? 'active' : ''}`} onClick={() => handleOptionChange('activeOption', 'Purchase')}>Purhcase</div>
              <div className={`calc-option ${options.activeOption === 'Refinance' ? 'active' : ''}`} onClick={() => handleOptionChange('activeOption', 'Refinance')}>Refinance</div>
              <div className={`calc-option ${options.activeOption === 'Rent vs Buy' ? 'active' : ''}`} onClick={() => handleOptionChange('activeOption', 'Rent vs Buy')}>Rent vs Buy</div>
              <div className={`calc-option ${options.activeOption === 'VA Purchase' ? 'active' : ''}`} onClick={() => handleOptionChange('activeOption', 'VA Purchase')}>VA Purchase</div>
              <div className={`calc-option ${options.activeOption === 'VA Refinance' ? 'active' : ''}`} onClick={() => handleOptionChange('activeOption', 'VA Refinance')}>VA Refinance</div>
              <div className={`calc-option ${options.activeOption === 'Debt-Service (DSCR)' ? 'active' : ''}`} onClick={() => handleOptionChange('activeOption', 'Debt-Service (DSCR)')}>Debt-Service (DSCR)</div>
              <div className={`calc-option ${options.activeOption === 'Fix & Flip' ? 'active' : ''}`} onClick={() => handleOptionChange('activeOption', 'Fix & Flip')}>Fix & Flip</div>
            </div>
          </div>
        </div>
        <div className='section-2-container'>
          <div className='section-2-content mx-auto'>
            <div className='calculator' style={{ display: options.activeOption === 'Purchase' ? 'block' : 'none' }}>
              <div className='calculator-content'>
                <h2>Purchase Calculator</h2>
                <div className='calculator-form'>
                  <label htmlFor="homeValue">Home Value</label>
                  <input type='text' id='homeValue' placeholder='$200,000' value={calculatorData.homeValue} onChange={handleInputChange} />
                  <label htmlFor="downPayment">Down Payment</label>
                  <input type='text' id='downPayment' placeholder='$0' value={calculatorData.downPayment} onChange={handleInputChange} />
                  <span className=' down-payment-btn-group'>
                    <div className='down-payment-btn-container'>
                      <span className={`btn ${options.downPaymentOption === '$' ? 'active' : ''}`} onClick={() => setOptions({ ...options, downPaymentOption: '$' })}>$</span>
                      <span className={`btn ${options.downPaymentOption === '%' ? 'active' : ''}`} onClick={() => setOptions({ ...options, downPaymentOption: '%' })}>%</span>
                    </div>
                  </span>
                  <label htmlFor="mortgageAmount">Mortgage Amount</label>
                  <input type='text' id='mortgageAmount' placeholder='$200,000.00' value={calculatorData.mortgageAmount} onChange={handleInputChange} />
                  <label htmlFor="loanTerms">Loan Terms</label>
                  <input type='text' id='loanTerms' placeholder='$24' value={calculatorData.loanTerms} onChange={handleInputChange} />
                  <span className=' down-payment-btn-group'>
                    <div className='down-payment-btn-container'>
                      <span className={`btn ${options.loanTermsOptions === 'Year' ? 'active' : ''}`} onClick={() => setOptions({ ...options, loanTermsOptions: 'Year' })}>Year</span>
                      <span className={`btn ${options.loanTermsOptions === 'Month' ? 'active' : ''}`} onClick={() => setOptions({ ...options, loanTermsOptions: 'Month' })}>Month</span>
                    </div>
                  </span>
                  <label htmlFor="interestRate">Interest Rate</label>
                  <input type='text' id='interestRate' placeholder='5' value={calculatorData.interestRate} onChange={handleInputChange} />
                  <label htmlFor="pmi">PMI (Yearly)</label>
                  <input type='text' id='pmiYearly' placeholder='$0' value={calculatorData.pmiYearly} onChange={handleInputChange} />
                  <span className=' down-payment-btn-group'>
                    <div className='down-payment-btn-container'>
                      <span className={`btn ${options.pmiOptions === '$' ? 'active' : ''}`} onClick={() => setOptions({ ...options, pmiOptions: '$' })}>$</span>
                      <span className={`btn ${options.pmiOptions === '%' ? 'active' : ''}`} onClick={() => setOptions({ ...options, pmiOptions: '%' })}>%</span>
                    </div>
                  </span>
                  <label htmlFor="propertyTax">Property Tax (Yearly)</label>
                  <input type='text' id='propertyTaxYearly' placeholder='0.6' value={calculatorData.propertyTaxYearly} onChange={handleInputChange} />
                  <span className=' down-payment-btn-group'>
                    <div className='down-payment-btn-container'>
                      <span className={`btn ${options.propertyTaxOptions === '$' ? 'active' : ''}`} onClick={() => setOptions({ ...options, propertyTaxOptions: '$' })}>$</span>
                      <span className={`btn ${options.propertyTaxOptions === '%' ? 'active' : ''}`} onClick={() => setOptions({ ...options, propertyTaxOptions: '%' })}>%</span>
                    </div>
                  </span>
                  <label htmlFor="ownersInsurance">Homeowners Insurance (Yearly)</label>
                  <input type='text' id='homeOwnersInsurance' placeholder='$1,200' value={calculatorData.homeOwnersInsurance} onChange={handleInputChange} />
                  <span className=' down-payment-btn-group'>
                    <div className='down-payment-btn-container'>
                      <span className={`btn ${options.ownersInsurance === '$' ? 'active' : ''}`} onClick={() => setOptions({ ...options, ownersInsurance: '$' })}>$</span>
                      <span className={`btn ${options.ownersInsurance === '%' ? 'active' : ''}`} onClick={() => setOptions({ ...options, ownersInsurance: '%' })}>%</span>
                    </div>
                  </span>
                  <label htmlFor="hoaDues">HOA Dues Per Month</label>
                  <input type='text' id='hoaDuesPerMonth' placeholder='$0' value={calculatorData.hoaDuesPerMonth} onChange={handleInputChange} />
                  <label htmlFor="firstPaymentDate">First Payment Date</label>
                  <input type='date' id='firstPaymentDate' placeholder='May 19, 2024' value={calculatorData.firstPaymentDate} onChange={handleInputChange} />
                  <label htmlFor="extraPaymentPerMonth">Extra Payment Per Month</label>
                  <input type='text' id='extraPaymentPerMonth' placeholder='$0' value={calculatorData.extraPaymentPerMonth} onChange={handleInputChange} />
                  <button type='submit' className='btn btn-info' disabled={submitButton} onClick={handleSubmit}> Get a Quote</button>
                </div>
              </div>
            </div>
            <div className='details-wrapper' style={{ display: options.activeOption === 'Purchase' ? 'flex' : 'none' }}>
              <div className='payment-details'>
                <div className='details'>
                  <div>All Payment</div>
                  <p>{formatter.format(rawData.totalPayment)}</p>
                </div>
                <div className='details'>
                  <div>Total Loan Amount</div>
                  <p>{formatter.format(calculatorData.mortgageAmount)}</p>
                </div>
                <div className='details'>
                  <div>Total Interest Paid</div>
                  <p>{formatter.format(rawData.totalInterest)}</p>
                </div>
              </div>
              <div className='payment-details alternative'>
                <div className='details'>
                  <div className='alternative'>Savings</div>
                  <p className='alternative'>{formatter.format(additionalSaving)}</p>
                </div>
                <div className='details' style={{ padding: '0 20px' }}>
                  <div className='alternative'>Payment Amount</div>
                  <p className='alternative'>{formatter.format(newPaymentAmount)}</p>
                </div>
                <div className='details'>
                  <div className='alternative'>Shorten Loan Term By</div>
                  <p className='alternative'>{convertMonthsToYearsAndMonths(reducedLoanTerm)}</p>
                </div>
              </div>
              <div className='payment-breakdown-container'>
                <h2>Payment Breakdown</h2>
                <DonutChart data={getChartData(rawData)} />
                <div className='calc-option-container alternative'>
                  <div className={`calc-option alternative ${options.paymentBreakdown === 'Monthly Payment' ? 'active' : ''}`} onClick={() => handleOptionChange('paymentBreakdown', 'Monthly Payment')}>Monthly Payment</div>
                  <div className={`calc-option alternative ${options.paymentBreakdown === 'Total Payment' ? 'active' : ''}`} onClick={() => handleOptionChange('paymentBreakdown', 'Total Payment')}>Total Payment</div>
                </div>
                <div className='calculator-details'>
                  <div className='detail'>
                    <div>Home Value:</div>
                    <p>{calculatorData.homeValue ? formatter.format(calculatorData.homeValue) : '$0.00'}</p>
                  </div>
                  <div className='detail'>
                    <div>Mortgage Amount:</div>
                    <p>{calculatorData.mortgageAmount ? formatter.format(calculatorData.mortgageAmount) : '$0.00'}</p>
                  </div>
                  <div className='detail'>
                    <div>Monthly Principal & Interest:</div>
                    <p>{rawData.monthlyPayment ? formatter.format(rawData.monthlyPayment) : '$0.00'}</p>
                  </div>
                  <div className='detail'>
                    <div>Monthly Extra Payment:</div>
                    <p>{rawData.extraPaymentPerMonth ? formatter.format(rawData.extraPaymentPerMonth) : '$0.00'}</p>
                  </div>
                  <div className='detail'>
                    <div>Monthly Property Tax:</div>
                    <p>{rawData.monthlyPropertyTax ? formatter.format(rawData.monthlyPropertyTax) : '$0.00'}</p>
                  </div>
                  <div className='detail'>
                    <div>Monthly Home Insurance:</div>
                    <p>{rawData.monthlyHomeInsurance ? formatter.format(rawData.monthlyHomeInsurance) : '$0.00'}</p>
                  </div>
                  <div className='detail'>
                    <div>Monthly PMI:</div>
                    <p>{rawData.monthlyPMI ? formatter.format(rawData.monthlyPMI) : '$0.00'}</p>
                  </div>
                  <div className='detail'>
                    <div>Monthly HOA Fees:</div>
                    <p>{calculatorData.hoaDuesPerMonth ? formatter.format(rawData.hoaDuesPerMonth) : '$0.00'}</p>
                  </div>
                </div>
              </div>
              <div style={{ rowGap: '5%', width: '50%', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
                <div className='payment-breakdown-container' style={{ width: '100%' }}>
                  <h2>Early Payoff Strategy</h2>
                  <div className='early-payoff-input'>
                    <label htmlFor="monthlyAdditional">Additional Monthly</label>
                    <input type="text" id='monthlyAdditional' placeholder='You can add below $500.00' value={extraPaymentInput} onChange={e => setExtraPaymentInput(e.target.value)} onBlur={(e) => calculateSavings(options.increaseFrequencyOptions, e.target.value)} />
                  </div>
                  <div className='early-payoff-input' style={{ paddingBottom: '32px' }}>
                    <label htmlFor="increaseFrequency">Increase Frequency</label>
                    <div id='increaseFrequency'>
                      <button className={`${options.increaseFrequencyOptions === 'Monthly' ? 'active' : ''}`} onClick={() => handleOptionChange('increaseFrequencyOptions', 'Monthly')}>Monthly</button>
                      <button className={`${options.increaseFrequencyOptions === 'Bi weekly' ? 'active' : ''}`} onClick={() => handleOptionChange('increaseFrequencyOptions', 'Bi weekly')}>Bi weekly</button>
                      <button className={`${options.increaseFrequencyOptions === 'Weekly' ? 'active' : ''}`} onClick={() => handleOptionChange('increaseFrequencyOptions', 'Weekly')}>Weekly</button>
                    </div>
                  </div>
                </div>
                <div className='payment-breakdown-container' style={{ width: '100%' }}>
                  <h2>Lump Sum Payment</h2>
                  <div className='early-payoff-input'>
                    <label htmlFor="monthlyAdditional">Lump Sum Addition</label>
                    <input type="text" id='monthlyAdditional' value={lumpSumPaymentInput} onChange={e => setLumpSumPaymentInput(e.target.value)} placeholder='You can add below $100k.00' onBlur={(e) => calculateLumpSumSavings(options.increaseLumpSumOptions, e.target.value)} />
                  </div>
                  <div className='early-payoff-input' style={{ paddingBottom: '32px' }}>
                    <label htmlFor="increaseFrequency">Increase Frequency</label>
                    <div id='increaseFrequency'>
                      <button className={`${options.increaseLumpSumOptions === 'One time' ? 'active' : ''}`} onClick={() => handleOptionChange('increaseLumpSumOptions', 'One time')}>One time</button>
                      <button className={`${options.increaseLumpSumOptions === 'Yearly' ? 'active' : ''}`} onClick={() => handleOptionChange('increaseLumpSumOptions', 'Yearly')}>Yearly</button>
                      <button className={`${options.increaseLumpSumOptions === 'Quarterly' ? 'active' : ''}`} onClick={() => handleOptionChange('increaseLumpSumOptions', 'Quarterly')}>Quarterly</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {options.activeOption === 'Affordability Calculator' && <AffordabilityCalculator />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator;
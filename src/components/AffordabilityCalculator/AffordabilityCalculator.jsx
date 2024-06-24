import { useState } from 'react';
import './AffordabilityCalculator.css';
import DonutChart from '../DonutChart/DonutChart';

const AffordabilityCalculator = ({ options, setOptions, calcData, setCalcData, handleOptionsChange, handleInputChange, getChartData, rawData, purchasePriceSliderValue, downPaymentSliderValue, handleSliderChange, formatter }) => {
  // const [options, setOptions] = useState({
  //   affordabilityOptions: 'Conventional',
  //   downPaymentOptions: '$',
  //   loanTermOptions: 'Year',
  //   propTaxYearly: '%',
  //   homeInsuranceYearly: '$',
  //   paymentFrequency: 'Year'
  // });

  // const [calcData, setCalcData] = useState({
  //   grossIncome: 5000,
  //   monthlyDebts: 1500,
  //   homePrice: 200000,
  //   downPayment: 0,
  //   loanAmount: 200000,
  //   loanTerm: 30,
  //   interestRate: 5,
  //   creditScore: 700,
  //   propTaxYearly: 0.6,
  //   homeInsuranceYearly: 1200,
  //   pmiYearly: 3000,
  //   hoaDuesMonthly: 0,
  //   annualFhaDuration: 30,
  //   upfrontMipPercentage: 1.75,
  //   annualMipPercentage: 0.55,
  //   VAfundingStatus: 'First Time Use of a VA Loan',
  //   VAfundingFee: 2.15,
  //   finalMortgageAmount: 200000,
  //   firstPaymentDate: new Date().toISOString().split('T')[0]
  // });

  // const handleOptionsChange = (option, optionValue) => {
  //   const temp = { ...options };
  //   temp[option] = optionValue;
  //   setOptions(temp);
  // }

  const handleCalcDataChange = (data, dataValue) => {
    const temp = { ...calcData };
    temp[data] = dataValue;
    setCalcData(temp);
  }

  const handleEmailMe = () => {
    console.log('Email Me');
  }

  return (
    <>
      <div className='afford-calc-container'>

        <div className='title'>
          <h4>Affordability Calculator</h4>
        </div>

        <div className='sub-calc-options'>
          <div className='tab-nav'>
            <ul>
              <li className={options.affordabilityOptions === 'Conventional' ? 'active' : ''} onClick={() => handleOptionsChange('affordabilityOptions', 'Conventional')}><strong>Conventional</strong></li>
              <li className={options.affordabilityOptions === 'FHA' ? 'active' : ''} onClick={() => handleOptionsChange('affordabilityOptions', 'FHA')}><strong>FHA</strong></li>
              <li className={options.affordabilityOptions === 'VA' ? 'active' : ''} onClick={() => handleOptionsChange('affordabilityOptions', 'VA')}><strong>VA</strong></li>
              <li className={options.affordabilityOptions === 'USDA' ? 'active' : ''} onClick={() => handleOptionsChange('affordabilityOptions', 'USDA')}><strong>USDA</strong></li>
              <li className={options.affordabilityOptions === 'Jumbo' ? 'active' : ''} onClick={() => handleOptionsChange('affordabilityOptions', 'Jumbo')}><strong>Jumbo</strong></li>
            </ul>
          </div>
        </div>

        <div className='sub-calc-content'>
          <div className='sub-calc-details'>

            {/* Gross Income and Monthly Debt Input Group */}
            <div className='input-group'>
              {/* Gross Income (Monthly) Input */}
              <div className='input-container'>
                <label>Gross Income (Monthly)</label>
                <input id='grossIncome' type='text' value={calcData.grossIncome} onChange={handleInputChange} />
              </div>

              {/* Monthly Debts Input */}
              <div className='input-container'>
                <label>Monthly Debts</label>
                <input type='text' value={calcData.monthlyDebts} onChange={(e) => { handleCalcDataChange('monthlyDebts', e.target.value) }} />
              </div>
            </div>

            {/* Home Price and Down Payment Input Group */}
            <div className='input-group'>
              {/* Home Price Input */}
              <div className='input-container'>
                <label>{options.affordabilityOptions === 'VA' ? 'Home Value' : 'Home Price'}</label>
                <input type='text' value={calcData.homePrice} onChange={(e) => { handleCalcDataChange('homePrice', e.target.value) }} />
              </div>

              {/* Down Payment Input */}
              <div className='input-container'>
                <label>Down Payment</label>
                <input type='text' value={calcData.downPayment} onChange={(e) => { handleCalcDataChange('downPayment', e.target.value) }} />
                <div className='input-options'>
                  <label htmlFor="" className={options.downPaymentOptions === '$' ? 'btn btn-primary active' : 'btn btn-primary'} onClick={(e) => handleOptionsChange('downPaymentOptions', '$')}>
                    $
                  </label>
                  <label htmlFor="" className={options.downPaymentOptions === '%' ? 'btn btn-primary active' : 'btn btn-primary'} onClick={(e) => handleOptionsChange('downPaymentOptions', '%')}>
                    %
                  </label>
                </div>
              </div>
            </div>

            {/* Loan Amount and Loan Term Input Group */}
            <div className='input-group'>
              {/* Loan Amount Input */}
              <div className='input-container'>
                <label>{options.affordabilityOptions === 'VA' ? 'Base Mortgage Amount' : 'Loan Amount'}</label>
                <input type='text' value={calcData.loanAmount} onChange={(e) => { handleCalcDataChange('loanAmount', e.target.value) }} />
              </div>

              {/* Loan Term Input */}
              <div className='input-container'>
                <label>Loan Term</label>
                <input type='text' value={calcData.loanTerm} onChange={(e) => { handleCalcDataChange('loanTerm', e.target.value) }} />
                <div className='input-options'>
                  <label htmlFor="" className={options.loanTermOptions === 'Year' ? 'btn btn-primary active' : 'btn btn-primary'} onClick={(e) => handleOptionsChange('loanTermOptions', 'Year')}>
                    Year
                  </label>
                  <label htmlFor="" className={options.loanTermOptions === 'Month' ? 'btn btn-primary active' : 'btn btn-primary'} onClick={(e) => handleOptionsChange('loanTermOptions', 'Month')}>
                    Month
                  </label>
                </div>
              </div>
            </div>

            {/* Interest Rate and Credit Score Input Group */}
            <div className='input-group'>
              {/* Interest Rate Input */}
              <div className='input-container'>
                <label>Interest Rate</label>
                <input type='text' value={calcData.interestRate} onChange={(e) => { handleCalcDataChange('interestRate', e.target.value) }} />
              </div>

              {/* Payment Frequency Input */}
              <div className='input-container' style={{ display: options.affordabilityOptions === 'VA' ? 'block' : 'none' }}>
                <label>Payment Frequency</label>
                <div className='input-options' style={{ width: '48%' }}>
                  <label htmlFor="" style={{ width: '50%' }} className={options.paymentFrequency === 'Year' ? 'btn btn-primary active' : 'btn btn-primary'} onClick={(e) => handleOptionsChange('paymentFrequency', 'Year')}>
                    Year
                  </label>
                  <label htmlFor="" style={{ width: '50%' }} className={options.paymentFrequency === 'Month' ? 'btn btn-primary active' : 'btn btn-primary'} onClick={(e) => handleOptionsChange('paymentFrequency', 'Month')}>
                    Month
                  </label>
                </div>
              </div>

              {/* HOA Dues (Monthly) Input */}
              <div className='input-container' style={{ display: options.affordabilityOptions === 'USDA' ? 'flex' : 'none' }}>
                <label>HOA Dues (Monthly)</label>
                <input type='text' value={calcData.hoaDuesMonthly} onChange={(e) => { handleCalcDataChange('hoaDuesMonthly', e.target.value) }} />
              </div>

              {/* Credit Score Input */}
              <div className='input-container' style={{ display: ['FHA', 'VA', 'USDA', 'Jumbo'].includes(options.affordabilityOptions) ? 'none' : 'flex' }}>
                <label>Credit Score</label>
                <select value={calcData.interestRate} onChange={(e) => { handleCalcDataChange('interestRate', e.target.value) }}>
                  <option value="620-639">620-639</option>
                  <option value="640-659">640-659</option>
                  <option value="660-679">660-679</option>
                  <option value="680-699">680-699</option>
                  <option value="700-719">700-719</option>
                  <option value="720-739">720-739</option>
                  <option value="740-759">740-759</option>
                  <option value="760+">760 and above</option>
                </select>
              </div>

              {/* Annual FHA Duration Input */}
              <div className='input-container' style={{ display: options.affordabilityOptions === 'FHA' ? 'flex' : 'none' }}>
                <label>Annual FHA Duration</label>
                <input type='text' value={calcData.annualFhaDuration} onChange={(e) => { handleCalcDataChange('annualFhaDuration', e.target.value) }} />
              </div>
            </div>

            {/* VA Funding Fee and VA Funding status Input Group */}
            <div className='input-group'>
              {/* VA Funding Status Input */}
              <div className='input-container' style={{ display: options.affordabilityOptions === 'VA' ? 'flex' : 'none' }}>
                <label>This is my...</label>
                <select value={calcData.VAfundingStatus} onChange={(e) => { handleCalcDataChange('VAfundingStatus', e.target.value) }}>
                  <option value="First Time Use of a VA Loan">First Time Use of a VA Loan</option>
                  <option value="I Have Used a VA Loan Before">I Have Used a VA Loan Before</option>
                  <option value="I am exempt from the VA funding fees">I am exempt from the VA funding fees</option>
                </select>
              </div>

              {/* VA Funding Fees Input */}
              <div className='input-container' style={{ display: options.affordabilityOptions === 'VA' ? 'flex' : 'none' }}>
                <label>VA Funding Fee</label>
                <input type='text' value={calcData.VAfundingFee} onChange={(e) => { handleCalcDataChange('VAfundingFee', e.target.value) }} />
              </div>

            </div>

            {/* Property Tax and Homeowners Insurance Input Group */}
            <div className='input-group'>
              {/* Prop Tax (Yearly) Input */}
              <div className='input-container' style={{ position: 'relative' }}>
                <label>Property Tax (Yearly)</label>
                <input type='text' value={calcData.propTaxYearly} onChange={(e) => { handleCalcDataChange('propTaxYearly', e.target.value) }} />
                <div className='input-options'>
                  <label htmlFor="" className={options.propTaxYearly === '$' ? 'btn btn-primary active' : 'btn btn-primary'} onClick={(e) => handleOptionsChange('propTaxYearly', '$')}>
                    $
                  </label>
                  <label htmlFor="" className={options.propTaxYearly === '%' ? 'btn btn-primary active' : 'btn btn-primary'} onClick={(e) => handleOptionsChange('propTaxYearly', '%')}>
                    %
                  </label>
                </div>
              </div>

              {/* Homeowners Insurance (Yearly) Input */}
              <div className='input-container'>
                <label>Home Insurance (Yearly)</label>
                <input type='text' value={calcData.homeInsuranceYearly} onChange={(e) => { handleCalcDataChange('homeInsuranceYearly', e.target.value) }} />
                <div className='input-options'>
                  <label htmlFor="" className={options.homeInsuranceYearly === '$' ? 'btn btn-primary active' : 'btn btn-primary'} onClick={(e) => handleOptionsChange('homeInsuranceYearly', '$')}>
                    $
                  </label>
                  <label htmlFor="" className={options.homeInsuranceYearly === '%' ? 'btn btn-primary active' : 'btn btn-primary'} onClick={(e) => handleOptionsChange('homeInsuranceYearly', '%')}>
                    %
                  </label>
                </div>
              </div>
            </div>

            {/* PMI, Final Mortgage Amount, HOA Dues, and First Payment Date Input Group */}
            <div className='input-group' style={{ display: options.affordabilityOptions === 'USDA' ? 'none' : 'grid' }}>
              {/* PMI (Yearly) Input */}
              <div className='input-container' style={{ display: ['FHA', 'VA'].includes(options.affordabilityOptions) ? 'none' : 'flex' }}>
                <label>PMI (Yearly)</label>
                <input type='text' value={calcData.pmiYearly} onChange={(e) => { handleCalcDataChange('pmiYearly', e.target.value) }} />
              </div>

              {/* Final Mortgage Amount Input */}
              <div className='input-container' style={{ display: options.affordabilityOptions === 'VA' ? 'flex' : 'none' }}>
                <label>Final Mortgage Amount</label>
                <input type='text' value={calcData.finalMortgageAmount} onChange={(e) => { handleCalcDataChange('finalMortgageAmount', e.target.value) }} />
              </div>

              {/* HOA Dues (Monthly) Input */}
              <div className='input-container'>
                <label>HOA Dues (Monthly)</label>
                <input type='text' value={calcData.hoaDuesMonthly} onChange={(e) => { handleCalcDataChange('hoaDuesMonthly', e.target.value) }} />
              </div>

              {/* First Payment Date Input */}
              <div className='input-container' style={{ display: ['VA'].includes(options.affordabilityOptions) ? 'flex' : 'none' }}>
                <label>First Payment Date</label>
                <input id='firstPaymentDate' type='date' value={calcData.firstPaymentDate} onChange={(e) => { handleCalcDataChange('firstPaymentDate', e.target.value) }} />
              </div>
            </div>

            {/* Upfront MIP and Annual MIP Group */}
            <div className='input-group' style={{ display: options.affordabilityOptions === 'FHA' ? 'grid' : 'none' }}>
              {/* Upfront MIP Input */}
              <div className='input-container'>
                <label>Upfront MIP (%)</label>
                <input type='text' value={calcData.upfrontMipPercentage} onChange={(e) => { handleCalcDataChange('upfrontMipPercentage', e.target.value) }} />
              </div>

              {/* Annual MIP Input */}
              <div className='input-container'>
                <label>Annual MIP (%)</label>
                <input type='text' value={calcData.annualMipPercentage} onChange={(e) => { handleCalcDataChange('annualMipPercentage', e.target.value) }} />
              </div>
            </div>

          </div>

          <button className='btn btn-primary' onClick={handleEmailMe}>EMAIL ME THIS</button>
        </div>

      </div>

      <div className='details-wrapper' style={{ flexDirection: 'column' }}>
        <div className='payment-breakdown-container' style={{ width: '100%' }}>
          <h2>Payment Breakdown</h2>
          <DonutChart data={getChartData(rawData)} />
        </div>
        <div className='card-container'>
          <div className='card-title'>
            <h4>Loan Details</h4>
          </div>
          <div className='card-content'>
            <ul>
              <li>
                <span>
                  Home Value: <br />
                  <span>$200,000.00</span>
                </span>
              </li>
              <li>
                <span>
                  Mortgage Amount: <br />
                  <span>$200,000.00</span>
                </span>
              </li>
              <li>
                <span>
                  Monthly Conventional Payment: <br />
                  <span>$1,073.64</span>
                </span>
              </li>
              <li>
                <span>
                  Down Payment: <br />
                  <span>$0.00</span>
                </span>
              </li>
              <li>
                <span>
                  Monthly Estimated PMI: <br />
                  <span>$250.00</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='details-wrapper' style={{ flexDirection: 'column', flexWrap: 'nowrap' }}>
        <div className='detail-container'>
          <span>
            <span>Monthly Mortgage Payment</span>
            <h2>$1,523.64</h2>
          </span>
          <span>
            <span>Loan Amount</span>
            <h2>$200,000.00</h2>
          </span>
        </div>
        <div className='detail-container'>
          <span>
            <span>Your Debt to Income Ratio</span>
            <h2>30.47% / 60.47%</h2>
          </span>
          <span>
            <span>Allowable Debt to Income Ratio</span>
            <h2>50% / 50%</h2>
          </span>
        </div>
        <div className='affordability-purchase-slider'>
          <div className='slider-wrapper'>
            <div className='slider'>
              <div className='slider-label'>
                <span>Purchase Price:</span>
                <strong>{formatter.format(purchasePriceSliderValue)}</strong>
              </div>
              <style>
                {
                  `.calculator-wrapper .affordability-purchase-slider .slider-wrapper .slider
                          > #purchase-price-slider::-webkit-slider-runnable-track {
                            background-size: ${purchasePriceSliderValue / 1000000 * 100}% 100%;
                          }`
                }
              </style>
              <input
                type="range"
                id='purchase-price-slider'
                className="form-range slider"
                min={0}
                step={10000}
                max={1000000}
                value={purchasePriceSliderValue}
                onChange={handleSliderChange}
                style={{
                  backgroundSize: `${(purchasePriceSliderValue / 1000000) * 100}% 100%`
                }}
              />
            </div>
          </div>
        </div>
        <div className='affordability-purchase-slider'>
          <div className='slider-wrapper'>
            <div className='slider'>
              <div className='slider-label'>
                <span>Purchase Price:</span>
                <strong>{formatter.format(downPaymentSliderValue > purchasePriceSliderValue ? purchasePriceSliderValue : downPaymentSliderValue)}</strong>
              </div>
              <style>
                {
                  `.calculator-wrapper .affordability-purchase-slider .slider-wrapper .slider
                          > #down-payment-slider::-webkit-slider-runnable-track {
                            background-size: ${downPaymentSliderValue / purchasePriceSliderValue * 100}% 100%;
                          }`
                }
              </style>
              <input
                type="range"
                id='down-payment-slider'
                className="form-range slider"
                min={0}
                step={10000}
                max={purchasePriceSliderValue}
                value={downPaymentSliderValue}
                onChange={handleSliderChange}
                style={{
                  backgroundSize: `${(downPaymentSliderValue / purchasePriceSliderValue) * 100}% 100%`
                }}
              />
            </div>
          </div>
        </div>
        <div className='affordability-description'>
          <b>Summary:</b>
          <span>Based on what you input into today your Total Payment would be <strong id="afdSummaryMortagePayment">$100.00</strong> on a <strong>Conventional Loan</strong> with a <strong id="afdSummaryDownPaymentPercent">0% Down Payment</strong>. Your <strong id="afdSummaryDebtToIncome">Debt-to-Income Ratio is 2%/32%</strong> and the <strong>maximum allowable on this program type is 50%/50%</strong>. Please confirm all these numbers for accuracy with your loan officer. The Monthly Debts Calculation is often where we see errors.</span>
        </div>
      </div>

    </>
  )
}

export default AffordabilityCalculator;
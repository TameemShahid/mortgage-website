import { useState } from 'react';
import './AffordabilityCalculator.css';

const AffordabilityCalculator = () => {
  const [options, setOptions] = useState({
    affordabilityOptions: 'Conventional',
    downPaymentOptions: '$',
    loanTermOptions: 'Year',
    propTaxYearly: '%',
    homeInsuranceYearly: '$'
  });

  const [calcData, setCalcData] = useState({
    grossIncome: 5000,
    monthlyDebts: 1500,
    homePrice: 200000,
    downPayment: 0,
    loanAmount: 200000,
    loanTerm: 30,
    interestRate: 5,
    creditScore: 700,
    propTaxYearly: 0.6,
    homeInsuranceYearly: 1200,
    pmiYearly: 3000,
    hoaDuesMonthly: 0,
  });

  const handleOptionsChange = (option, optionValue) => {
    const temp = { ...options };
    temp[option] = optionValue;
    setOptions(temp);
  }

  const handleCalcDataChange = (data, dataValue) => {
    const temp = { ...calcData };
    temp[data] = dataValue;
    setCalcData(temp);
  }

  const handleEmailMe = () => {
    console.log('Email Me');
  }

  return (
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

          <div className='input-group'>
            {/* Gross Income (Monthly) Input */}
            <div className='input-container'>
              <label>Gross Income (Monthly)</label>
              <input type='text' value={calcData.grossIncome} onChange={(e) => { handleCalcDataChange('grossIncome', e.target.value) }} />
            </div>

            {/* Monthly Debts Input */}
            <div className='input-container'>
              <label>Monthly Debts</label>
              <input type='text' value={calcData.monthlyDebts} onChange={(e) => { handleCalcDataChange('monthlyDebts', e.target.value) }} />
            </div>
          </div>

          <div className='input-group'>
            {/* Home Price Input */}
            <div className='input-container'>
              <label>Home Price</label>
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

          <div className='input-group'>
            {/* Loan Amount Input */}
            <div className='input-container'>
              <label>Loan Amount</label>
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

          <div className='input-group'>
            {/* Interest Rate Input */}
            <div className='input-container'>
              <label>Interest Rate</label>
              <input type='text' value={calcData.interestRate} onChange={(e) => { handleCalcDataChange('interestRate', e.target.value) }} />
            </div>

            {/* Credit Score Input */}
            <div className='input-container'>
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
          </div>

          <div className='input-group'>
            {/* Prop Tax (Yearly) Input */}
            <div className='input-container'>
              <label>Property Tax (Yearly)</label>
              <input type='text' value={calcData.propTaxYearly} onChange={(e) => { handleCalcDataChange('propTaxYearly', e.target.value) }} />
              <div className='input-options' style={{ right: '12.1rem' }}>
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

          <div className='input-group'>
            {/* PMI (Yearly) Input */}
            <div className='input-container'>
              <label>PMI (Yearly)</label>
              <input type='text' value={calcData.pmiYearly} onChange={(e) => { handleCalcDataChange('pmiYearly', e.target.value) }} />
            </div>

            {/* HOA Dues (Monthly) Input */}
            <div className='input-container'>
              <label>HOA Dues (Monthly)</label>
              <input type='text' value={calcData.hoaDuesMonthly} onChange={(e) => { handleCalcDataChange('hoaDuesMonthly', e.target.value) }} />
            </div>
          </div>

        </div>

        <button className='btn btn-primary' onClick={handleEmailMe}>EMAIL ME THIS</button>
      </div>

    </div>
  )
}

export default AffordabilityCalculator;
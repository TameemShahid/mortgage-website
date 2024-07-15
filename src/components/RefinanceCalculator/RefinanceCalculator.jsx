import { useEffect, useState } from 'react';
import './RefinanceCalculator.css';

const RefinanceCalculator = ({ options, setOptions, calcData, setCalcData, handleOptionsChange, handleInputChange, getChartData, rawData, purchasePriceSliderValue, downPaymentSliderValue, handleSliderChange, formatter }) => {
  const handleCalcDataChange = (data, dataValue) => {
    const temp = { ...calcData };
    temp[data] = dataValue;
    setCalcData(temp);
  }


  const [data, setData] = useState({
    originalLoanAmount: 0,
  });
  const [questionChoice, setQuestionChoice] = useState('lower_interest_paid');
  const [payingRefinanceCosts, setPayingRefinanceCosts] = useState('include_in_loan');

  useEffect(() => {
    console.log(questionChoice);
  }, [questionChoice])


  return (
    <>
      <div className='refinance-calc-container' style={{ minWidth: '320px' }}>

        <div className='title'>
          <h2>Refinance Calculator</h2>
        </div>

        <div className='content-padding-wrapper'>

          <h4>What is more important to you?</h4>

          <div className='question'>

            <div className='btn-group'>

              <label className={questionChoice == 'low_monthly_payment' ? 'active' : ''} htmlFor="low_monthly_payment" onClick={() => setQuestionChoice('low_monthly_payment')}>
                <input type="radio" className='radio-input' name="low_monthly_payment" id="low_monthly_payment" checked={questionChoice === 'low_monthly_payment'} />
                Low Monthly Payment
              </label>

              <label className={questionChoice == 'lower_interest_paid' ? 'active' : ''} htmlFor="lower_interest_paid" onClick={() => setQuestionChoice('lower_interest_paid')}>
                <input type="radio" className='radio-input' name="lower_interest_paid" id="lower_interest_paid" checked={questionChoice === 'lower_interest_paid'} />
                Lower Interest Paid
              </label>

            </div>

          </div>

          <h4>Current Loan</h4>

          <div className='input-group-custom'>
            <label htmlFor="originalLoanAmount">Original Loan Amount</label><br />
            <input type="text" name="originalLoanAmount" id="originalLoanAmount" value={calcData.originalLoanAmount} onChange={(e) => handleInputChange('originalLoanAmount', e.target.value)} />
          </div>

          <div className='input-group-custom'>
            <label htmlFor="originalRate">Original Rate</label><br />
            <input type="text" name="originalRate" id="originalRate" value={calcData.originalRate} onChange={(e) => handleInputChange('originalRate', e.target.value)} />
          </div>

          <div className='input-group-custom' style={{ position: 'relative' }}>
            <label htmlFor="originalLoanTerm">Original Loan Term</label><br />
            <input type="text" name="originalLoanTerm" id="originalLoanTerm" value={calcData.originalLoanTerm} onChange={(e) => handleInputChange('originalLoanTerm', e.target.value)} />
            <div className='btn-group-custom'>
              <label htmlFor="" className={options.originalLoanTerm === 'Year' ? 'active' : ''} onClick={() => handleOptionsChange('originalLoanTerm', 'Year')}>Year</label>
              <label htmlFor="" className={options.originalLoanTerm === 'Month' ? 'active' : ''} onClick={() => handleOptionsChange('originalLoanTerm', 'Month')}>Month</label>
            </div>
          </div>

          <div className='input-group-custom'>
            <label htmlFor="loanStartDate">Loan Start Date</label><br />
            <input type='date' name="loanStartDate" id="loanStartDate" value={calcData.loanStartDate} onChange={(e) => handleInputChange('loanStartDate', e.target.value)} />
          </div>

          <h4>New Loan</h4>

          <div className='input-group-custom'>
            <label htmlFor="currentLoanBalance">Current Loan Balance</label><br />
            <input type='text' name="currentLoanBalance" id="currentLoanBalance" value={calcData.currentLoanBalance} onChange={(e) => handleInputChange('currentLoanBalance', e.target.value)} />
          </div>

          <div className='input-group-custom'>
            <label htmlFor="cashOutAmount">Cash Out Amount</label><br />
            <input type='text' name="cashOutAmount" id="cashOutAmount" value={calcData.cashOutAmount} onChange={(e) => handleInputChange('cashOutAmount', e.target.value)} />
          </div>

          <div className='input-group-custom'>
            <label htmlFor="refinanceCosts">Refinance Costs</label><br />
            <input type='text' name="refinanceCosts" id="refinanceCosts" value={calcData.refinanceCosts} onChange={(e) => handleInputChange('refinanceCosts', e.target.value)} />
          </div>

          <div className='input-group-custom'>
            <label htmlFor="newLoanAmount">New Loan Amount</label><br />
            <input type='text' name="newLoanAmount" id="newLoanAmount" value={calcData.newLoanAmount} onChange={(e) => handleInputChange('newLoanAmount', e.target.value)} />
          </div>

          <div className='input-group-custom'>
            <label htmlFor="newRate">New Rate</label><br />
            <input type='text' name="newRate" id="newRate" value={calcData.newRate} onChange={(e) => handleInputChange('newRate', e.target.value)} />
          </div>

          <div className='input-group-custom' style={{ position: 'relative' }}>
            <label htmlFor="newLoanTerm">New Loan Term</label><br />
            <input type="text" name="newLoanTerm" id="newLoanTerm" value={calcData.newLoanTerm} onChange={(e) => handleInputChange('newLoanTerm', e.target.value)} />
            <div className='btn-group-custom'>
              <label htmlFor="" className={options.newLoanTerm === 'Year' ? 'active' : ''} onClick={() => handleOptionsChange('newLoanTerm', 'Year')}>Year</label>
              <label htmlFor="" className={options.newLoanTerm === 'Month' ? 'active' : ''} onClick={() => handleOptionsChange('newLoanTerm', 'Month')}>Month</label>
            </div>
          </div>

          <div className='input-group-custom'>
            <label htmlFor="newLoanStartDate">New Loan Start Date</label><br />
            <input type='date' name="newLoanStartDate" id="newLoanStartDate" value={calcData.newLoanStartDate} onChange={(e) => handleInputChange('newLoanStartDate', e.target.value)} />
          </div>

          <div className='input-group-custom'>
            <label htmlFor="payingRefinanceCosts">Paying Refinance Costs</label><br />
          </div>

          <div className='question'>

            <div className='btn-group'>

              <label className={payingRefinanceCosts === 'include_in_loan' ? 'active' : ''} htmlFor="payingRefinanceCosts" onClick={() => setPayingRefinanceCosts('include_in_loan')}>
                <input type="radio" className='radio-input' name="include_in_loan" id="include_in_loan" checked={payingRefinanceCosts === 'include_in_loan'} />
                Include in Loan
              </label>

              <label className={payingRefinanceCosts === 'pay_out_of_pocket' ? 'active' : ''} htmlFor="pay_out_of_pocket" onClick={() => setPayingRefinanceCosts('pay_out_of_pocket')}>
                <input type="radio" className='radio-input' name="pay_out_of_pocket" id="pay_out_of_pocket" checked={payingRefinanceCosts === 'pay_out_of_pocket'} />
                Pay out of Pocket
              </label>

            </div>

          </div>

        </div>

        <div className='button-wrapper'>
          <button className='email-button'>Email Me This</button>
        </div>

      </div>

      <div className='refinance-details'>

        <div className='column'>

          <div className='info-block'>
            <span>Your monthly payment will increase by $186 per month.</span>
          </div>

          <div className='dual-info-block'>
            <div className='info-block'>
              <span style={{ width: '100%' }}>Monthly Payment Increase</span><br />
              <h4>$186</h4>
            </div>
            <div className='info-block'>
              <span style={{ width: '100%' }}>Total Interest Difference</span><br />
              <h4>-$216,575</h4>
            </div>
          </div>

          <div className='card-item'>

            <div className='card-title'>
              <h4>Monthly Payment Comparison</h4>
            </div>

            <div className='card-details'>

              <div className='progress-label'>
                <p>Current Loan</p>
                <span>
                  <span>$</span>
                  <span>1,610</span>
                </span>
              </div>
              <div className='progress-bar'>
                <div className='progress'></div>
              </div>

              <div className='progress-label'>
                <p>New Loan</p>
                <span>
                  <span>$</span>
                  <span>1,796</span>
                </span>
              </div>
              <div className='progress-bar'>
                <div className='progress' style={{ backgroundColor: 'rgb(248, 215, 218)' }}></div>
              </div>

              <div className='progress-label'>
                <p>Monthly Payment Difference</p>
                <span>
                  <span>$</span>
                  <span>186</span>
                </span>
              </div>
              <div className='progress-bar'>
                <div className='progress' style={{ backgroundColor: 'rgb(248, 215, 218)' }}></div>
              </div>

            </div>

          </div>

        </div>

        <div className='column'>

          <div className='info-block'>
            <span>--</span>
          </div>

          <div className='dual-info-block'>
            <div className='info-block'>
              <span style={{ width: '100%' }}>Refinance Costs</span><br />
              <h4>$1,000</h4>
            </div>
            <div className='info-block'>
              <span style={{ width: '100%' }}>Time to Recoup Fees</span><br />
              <h4>-</h4>
            </div>
          </div>

          <div className='card-item'>

            <div className='card-title'>
              <h4>Total Interest Comparison</h4>
            </div>

            <div className='card-details'>

              <div className='progress-label'>
                <p>Current Loan Remaining Interest</p>
                <span>
                  <span>$</span>
                  <span>279,767</span>
                </span>
              </div>
              <div className='progress-bar'>
                <div className='progress'></div>
              </div>

              <div className='progress-label'>
                <p>New Loan Interest</p>
                <span>
                  <span>$</span>
                  <span>63,191</span>
                </span>
              </div>
              <div className='progress-bar'>
                <div className='progress' style={{ backgroundColor: 'rgb(93, 199, 111)' }}></div>
              </div>

              <div className='progress-label'>
                <p>Total Interest Difference</p>
                <span>
                  <span>-$</span>
                  <span>216,575</span>
                </span>
              </div>
              <div className='progress-bar'>
                <div className='progress' style={{ backgroundColor: 'rgb(93, 199, 111)' }}></div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default RefinanceCalculator
import './ApplyOnline.css';
import { useEffect, useState } from 'react';
import nameImg from '../../assets/apply_online/name.png';
import phoneImg from '../../assets/apply_online/phone.png';
import assetImg from '../../assets/apply_online/assets.png';
import emailImg from '../../assets/apply_online/email.png';
import incomeImg from '../../assets/apply_online/Income.png';
import calendarImg from '../../assets/apply_online/d-o-b.png';
import securityImg from '../../assets/apply_online/security.png';
import officerImg from '../../assets/apply_online/loan_officer.png';

const ApplyOnline = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    dobMonth: '',
    dobDay: '',
    dobYear: '',
    socialSecurityNumber: '',
    email: '',
    phone: '',
    address: '',
    unit: '',
    state: '',
    zipCode: '',
    addressDuration: '',
    livingStatus: '',
    loanOfficer: '',
    grossMonthlyIncome: '',
    additionalMonthlyIncome: '',
    additionalIncomeSource: '',
    employmentStatus: '',
    checkingAsset: '',
    savingAsset: '',
    retirementFunds: '',
    otherAsset: '',
    additionalRealEstateOwned: '',
    maritalStatus: '',
    childSupport: '',
    purchaseOrRefinance: '',
    veteranStatus: '',
    firstTimeBuyer: '',
    coBorrower: '',
    coBorrowerFirstName: '',
    coBorrowerMiddleInitial: '',
    coBorrowerLastName: '',
    coBorrowerDobMonth: '',
    coBorrowerDobDay: '',
    coBorrowerDobYear: '',
    coBorrowerSocialSecurityNumber: '',
    coBorrowerEmail: '',
    coBorrowerPhone: '',
    coBorrowerSameAddress: '',
    coBorrowerAddress: '',
    coBorrowerUnit: '',
    coBorrowerState: '',
    coBorrowerZipCode: '',
    coBorrowerAddressDuration: '',
    coBorrowerLivingStatus: '',
  });
  const [showCoBorrowerForm, setShowCoBorrowerForm] = useState(false);
  const [showCoBorrowerAddressForm, setShowCoBorrowerAddressForm] = useState(true);
  const dobMonthOptions = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const livingStatusOptions = [
    'Own',
    'Rent',
    'Living Rent Free'
  ]
  const dobDayOptions = Array.from({ length: 31 }, (_, i) => i + 1);
  const dobYearOptions = Array.from({ length: 93 }, (_, i) => i + 1931);
  const addressDurationOptions = Array.from({ length: 30 }, (_, i) => `${i + 1} Years`);

  const handleInputChange = (event) => {
    const temp = { ...formData };
    temp[event.target.id] = event.target.value;

    if (event.target.id === 'coBorrower') {
      temp[event.target.id] = event.target.checked;

      if (event.target.checked) {
        setShowCoBorrowerForm(true);
      } else {
        setShowCoBorrowerForm(false);
      }
    }

    if (event.target.id === 'coBorrowerSameAddress') {
      temp[event.target.id] = event.target.checked;

      if (event.target.checked) {
        setShowCoBorrowerAddressForm(false);
      } else {
        setShowCoBorrowerAddressForm(true);
      }
    }

    setFormData(temp);
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])


  return (
    <div id='apply-online-container' className='main-content'>
      <div className='apply-online-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <div className='large-text'>Pre-Qualification Form</div>
            <div className='spacer' style={{ width: '100%' }} />
            <div className='paragraph'>Your data is secure and protected by 2048 bit Industry Standard SSL Certificate</div>
          </div>
        </div>
        <div className='section-2-container'>
          <div className='section-2-content mx-auto'>
            <h4>Borrower</h4>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={nameImg} alt="" srcSet="" /></span>
                <input type="text" id='firstName' onChange={handleInputChange} className="form-control" placeholder="First Name..." aria-label="First Name" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <input type="text" id='middleInitial' onChange={handleInputChange} className="form-control" placeholder="Middle Initial..." aria-label="Middle Initial" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={nameImg} alt="" srcSet="" /></span>
                <input type="text" id="lastName" onChange={handleInputChange} className="form-control" placeholder="Last Name..." aria-label="Last Name..." aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={calendarImg} alt="" srcSet="" /></span>
                <select className="form-select" id="dobMonth" onChange={handleInputChange}>
                  <option selected>DOB Month:</option>
                  {
                    dobMonthOptions.map((month, index) => {
                      return (
                        <option key={index}>
                          {month}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="dobDay" onChange={handleInputChange}>
                  <option selected>Day:</option>
                  {
                    dobDayOptions.map((day, index) => {
                      return (
                        <option key={index}>
                          {day}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="dobYear" onChange={handleInputChange}>
                  <option selected>Year:</option>
                  {
                    dobYearOptions.map((year, index) => {
                      return (
                        <option key={index}>
                          {year}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={securityImg} alt="" srcSet="" /></span>
                <input type="text" id='socialSecurityNumber' onChange={handleInputChange} className="form-control" placeholder="Social Security Number (Format: 999-99-9999)" aria-label="Social Security Number" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={emailImg} alt="" srcSet="" /></span>
                <input type="text" id='email' onChange={handleInputChange} className="form-control" placeholder="Email..." aria-label="Email Address" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={phoneImg} alt="" srcSet="" /></span>
                <input type="text" id='phone' onChange={handleInputChange} className="form-control" placeholder="Cell Phone Number..." aria-label="Cell Phone Number" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <input type="text" id='address' onChange={handleInputChange} className="form-control" placeholder="Address..." aria-label="Address" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <input type="text" id='unit' onChange={handleInputChange} className="form-control" placeholder="Unit..." aria-label="Unit" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <input type="text" id='state' onChange={handleInputChange} className="form-control" placeholder="State..." aria-label="State" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <input type="text" id='zipCode' onChange={handleInputChange} className="form-control" placeholder="Zip..." aria-label="Zip Code" aria-describedby="basic-addon1" maxLength={5} style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="addressDuration" onChange={handleInputChange}>
                  <option selected>How Long At Current Address</option>
                  {
                    addressDurationOptions.map((option, index) => {
                      return (
                        <option key={index}>
                          {option}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="livingStatus" onChange={handleInputChange}>
                  <option selected>Living Status At Address</option>
                  {
                    livingStatusOptions.map((option, index) => {
                      return (
                        <option key={index}>
                          {option}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            <h4>Loan Officer</h4>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={officerImg} alt="" srcSet="" /></span>
                <select className="form-select" id="loanOfficer" onChange={handleInputChange}>
                  <option selected>Please Select Your Loan Officer</option>
                  <option>I Do Not Have One Yet</option>
                </select>
              </div>
            </div>
            <h4>Income</h4>
            <p><strong>Notice:</strong> Alimony, Child Support Or Separate Maintenance Income Need Not Be Revealed If The Borrower Or Co-Borrower Does Not Choose To Have It Considered For Repaying This Loan.</p>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={incomeImg} alt="" srcSet="" /></span>
                <input type="text" id='grossMonthlyIncome' onChange={handleInputChange} className="form-control" placeholder="Gross Monthly Income $..." aria-label="Gross Monthly Income" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={incomeImg} alt="" srcSet="" /></span>
                <input type="text" id='additionalMonthlyIncome' onChange={handleInputChange} className="form-control" placeholder="Additional Monthly Income $..." aria-label="Additional Monthly Income" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <input type="text" id='additionalIncomeSource' onChange={handleInputChange} className="form-control" placeholder="Source of Additional Income" aria-label="Source of Additional Income" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <h4>Employment Section</h4>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={officerImg} alt="" srcSet="" /></span>
                <select className="form-select" id="employmentStatus" onChange={handleInputChange}>
                  <option selected>Employment Status</option>
                  <option>Employed</option>
                  <option>Self Employed</option>
                </select>
              </div>
            </div>
            <h4>Assets</h4>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={assetImg} alt="" srcSet="" /></span>
                <input type="text" id='checkingAsset' onChange={handleInputChange} className="form-control" placeholder="Checking $..." aria-label="Checking Asset" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={assetImg} alt="" srcSet="" /></span>
                <input type="text" id='savingAsset' onChange={handleInputChange} className="form-control" placeholder="Saving $..." aria-label="Saving Asset" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={assetImg} alt="" srcSet="" /></span>
                <input type="text" id='retirementFunds' onChange={handleInputChange} className="form-control" placeholder="Retirement Funds $..." aria-label="Retirement Funds" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={assetImg} alt="" srcSet="" /></span>
                <input type="text" id='otherAsset' onChange={handleInputChange} className="form-control" placeholder="Other $..." aria-label="Other Assets" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
              </div>
            </div>
            <h4>Additional Real Estate Owned</h4>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="additionalRealEstateOwned" onChange={handleInputChange}>
                  <option selected>Do You Own Additional Real Estate?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <h4>Additional Details</h4>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="maritalStatus" onChange={handleInputChange}>
                  <option selected>Marital Status</option>
                  <option>Unmarried</option>
                  <option>Married</option>
                  <option>Separated</option>
                </select>
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="childSupport" onChange={handleInputChange}>
                  <option selected>Do You Pay Child Support Or Alimony?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="purchaseOrRefinance" onChange={handleInputChange}>
                  <option selected>Is This A Purchase Or Refinance?</option>
                  <option>Purchase</option>
                  <option>Refinance</option>
                </select>
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="veteranStatus" onChange={handleInputChange}>
                  <option selected>Are You A Veteran?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="firstTimeBuyer" onChange={handleInputChange}>
                  <option selected>First Time Home Buyer?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <h4 className='alt-bg'>Co-Borrower</h4>
            <div className='alt-bg' style={{ width: '100%' }}>
              <input type="checkbox" name="coBorrower" id="coBorrower" onChange={handleInputChange} /><strong>{' '}Click Here If You Have A Co-Borrower</strong>
            </div>
            <div id='alternate-form' style={{ width: '100%', display: showCoBorrowerForm ? 'block' : 'none' }}>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={nameImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerFirstName' onChange={handleInputChange} className="form-control" placeholder="First Name..." aria-label="First Name" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <input type="text" id='coBorrowerMiddleInitial' onChange={handleInputChange} className="form-control" placeholder="Middle Initial..." aria-label="Middle Initial" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={nameImg} alt="" srcSet="" /></span>
                  <input type="text" id="coBorrowerLastName" onChange={handleInputChange} className="form-control" placeholder="Last Name..." aria-label="Last Name..." aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={calendarImg} alt="" srcSet="" /></span>
                  <select className="form-select" id="coBorrowerDobMonth" onChange={handleInputChange}>
                    <option selected>DOB Month:</option>
                    {
                      dobMonthOptions.map((month, index) => {
                        return (
                          <option key={index}>
                            {month}
                          </option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <select className="form-select" id="coBorrowerDobDay" onChange={handleInputChange}>
                    <option selected>Day:</option>
                    {
                      dobDayOptions.map((day, index) => {
                        return (
                          <option key={index}>
                            {day}
                          </option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <select className="form-select" id="coBorrowerDobYear" onChange={handleInputChange}>
                    <option selected>Year:</option>
                    {
                      dobYearOptions.map((year, index) => {
                        return (
                          <option key={index}>
                            {year}
                          </option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={securityImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerSocialSecurityNumber' onChange={handleInputChange} className="form-control" placeholder="Social Security Number (Format: 999-99-9999)" aria-label="Social Security Number" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={emailImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerEmail' onChange={handleInputChange} className="form-control" placeholder="Email..." aria-label="Email Address" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={phoneImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerPhone' onChange={handleInputChange} className="form-control" placeholder="Cell Phone Number..." aria-label="Cell Phone Number" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='alt-bg' style={{ width: '100%' }}>
                <input type="checkbox" name="coBorrowerSameAddress" id="coBorrowerSameAddress" onChange={handleInputChange} /><strong>{' '}Click Here If Address Is Same As Above</strong>
              </div>
              <div id='coBorrower-address-form' style={{ display: showCoBorrowerAddressForm ? 'block' : 'none' }}>
                <div className='row-group alt-bg'>
                  <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                    <input type="text" id='coBorrowerAddress' onChange={handleInputChange} className="form-control" placeholder="Address..." aria-label="Address" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                  </div>
                </div>
                <div className='row-group alt-bg'>
                  <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                    <input type="text" id='coBorrowerUnit' onChange={handleInputChange} className="form-control" placeholder="Unit..." aria-label="Unit" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                  </div>
                </div>
                <div className='row-group alt-bg'>
                  <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                    <input type="text" id='coBorrowerState' onChange={handleInputChange} className="form-control" placeholder="State..." aria-label="State" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                  </div>
                </div>
                <div className='row-group alt-bg'>
                  <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                    <input type="text" id='coBorrowerZipCode' onChange={handleInputChange} className="form-control" placeholder="Zip..." aria-label="Zip Code" aria-describedby="basic-addon1" maxLength={5} style={{ borderRadius: '0' }} />
                  </div>
                </div>
                <div className='row-group alt-bg'>
                  <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                    <select className="form-select" id="coBorrowerAddressDuration" onChange={handleInputChange}>
                      <option selected>How Long At Current Address</option>
                      {
                        addressDurationOptions.map((option, index) => {
                          return (
                            <option key={index}>
                              {option}
                            </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className='row-group alt-bg'>
                  <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                    <select className="form-select" id="coBorrowerLivingStatus" onChange={handleInputChange}>
                      <option selected>Living Status At Address</option>
                      {
                        livingStatusOptions.map((option, index) => {
                          return (
                            <option key={index}>
                              {option}
                            </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyOnline;
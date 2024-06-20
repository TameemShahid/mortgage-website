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
import Footer from '../../components/Footer/Footer.jsx';

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
    coBorrowerGrossMonthlyIncome: '',
    coBorrowerAdditionalMonthlyIncome: '',
    coBorrowerAdditionalIncomeSource: '',
    coBorrowerEmploymentStatus: '',
    coBorrowerCheckingAsset: '',
    coBorrowerSavingAsset: '',
    coBorrowerRetirementFunds: '',
    coBorrowerOtherAsset: '',
    coBorrowerAdditionalRealEstateOwned: '',
    coBorrowerMaritalStatus: '',
    coBorrowerChildSupport: '',
    coBorrowerVeteranStatus: '',
    referral: '',
    borrowerSignatureCheckbox: '',
    digitalSignatureCheckbox: '',
    digitalSignature: '',
    coBorrowerNotPresentCheckbox: '',
    coBorrowerContactEmail: '',
    coBorrowerDigitalSignatureCheckbox: '',
    coBorrowerDigitalSignature: '',
    governmentInfo: {
      hispanicOrLatino: '',
      mexican: '',
      puertoRican: '',
      cuban: '',
      other: '',
      otherDetail: '',
      notHispanicOrLatino: '',
      notWishForEthnicity: '',
      americanIndianOrAlaskanNative: '',
      otherAmericanRaceDetail: '',
      asian: '',
      asianIndian: '',
      chinese: '',
      filipino: '',
      japanese: '',
      korean: '',
      vietnamese: '',
      otherAsian: '',
      otherAsianDetail: '',
      blackOrAfricanAmerican: '',
      nativeHawaiianOrOther: '',
      nativeHawaiian: '',
      guamanianOrChamorro: '',
      samoan: '',
      otherPacificIslander: '',
      otherPacificIslanderDetail: '',
      white: '',
      raceWishNotProvided: '',
      male: '',
      female: '',
      sexWishNotProvided: '',

      coBorrowerHispanicOrLatino: '',
      coBorrowerMexican: '',
      coBorrowerPuertoRican: '',
      coBorrowerCuban: '',
      coBorrowerOther: '',
      coBorrowerOtherDetail: '',
      coBorrowerNotHispanicOrLatino: '',
      coBorrowerNotWishForEthnicity: '',
      coBorrowerAmericanIndianOrAlaskanNative: '',
      coBorrowerOtherAmericanRaceDetail: '',
      coBorrowerAsian: '',
      coBorrowerAsianIndian: '',
      coBorrowerChinese: '',
      coBorrowerFilipino: '',
      coBorrowerJapanese: '',
      coBorrowerKorean: '',
      coBorrowerVietnamese: '',
      coBorrowerOtherAsian: '',
      coBorrowerOtherAsianDetail: '',
      coBorrowerBlackOrAfricanAmerican: '',
      coBorrowerNativeHawaiianOrOther: '',
      coBorrowerNativeHawaiian: '',
      coBorrowerGuamanianOrChamorro: '',
      coBorrowerSamoan: '',
      coBorrowerOtherPacificIslander: '',
      coBorrowerOtherPacificIslanderDetail: '',
      coBorrowerWhite: '',
      coBorrowerRaceWishNotProvided: '',
      coBorrowerMale: '',
      coBorrowerFemale: '',
      coBorrowerSexWishNotProvided: ''
    }
  });
  const [showCoBorrowerForm, setShowCoBorrowerForm] = useState(false);
  const [showCoBorrowerAddressForm, setShowCoBorrowerAddressForm] = useState(true);
  const [showSignatureForm, setShowSignatureForm] = useState(false);
  const [digitalSignatureCheckbox, setDigitalSignatureCheckbox] = useState(false);
  const [coBorrowerContactForm, setCoBorrowerContactForm] = useState(false);

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

    if (event.target.id === 'borrowerSignatureCheckbox') {
      temp[event.target.id] = event.target.checked;

      if (event.target.checked) {
        setShowSignatureForm(true);
      } else {
        setShowSignatureForm(false);
      }
    }

    if (event.target.id === 'digitalSignatureCheckbox') {
      temp[event.target.id] = event.target.checked;

      if (event.target.checked) {
        setDigitalSignatureCheckbox(true);
      } else {
        setDigitalSignatureCheckbox(false);
      }
    }

    if (event.target.id === 'digitalSignature') {
      temp[event.target.id] = event.target.files[0];
    }

    if (event.target.id === 'coBorrowerNotPresentCheckbox') {
      temp[event.target.id] = event.target.checked;

      if (event.target.checked) {
        setCoBorrowerContactForm(true);
      } else {
        setCoBorrowerContactForm(false);
      }
    }

    if (event.target.id === 'coBorrowerDigitalSignatureCheckbox') {
      temp[event.target.id] = event.target.checked;
    }

    if (event.target.id === 'hispanicOrLatino') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'mexican') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'puertoRican') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'cuban') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'other') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'notHispanicOrLatino') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'notWishForEthnicity') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'americanIndianOrAlaskanNative') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'asian') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'asianIndian') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'chinese') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'filipino') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'japanese') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'korean') temp['governmentInfo'][event.target.id] = event.taret.checked;
    if (event.target.id === 'vietnamese') temp['governmentInfo'][event.target.id] = event.taret.checked;
    if (event.target.id === 'otherAsian') temp['governmentInfo'][event.target.id] = event.taret.checked;
    if (event.target.id === 'otherAsianDetail') temp['governmentInfo'][event.target.id] = event.taret.checked;
    if (event.target.id === 'blackOrAfricanAmerican') temp['governmentInfo'][event.target.id] = event.taret.checked;
    if (event.target.id === 'nativeHawaiianOrOther') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'nativeHawaiian') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'guamanianOrChamorro') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'samoan') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'otherPacificIslander') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'white') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'raceWishNotProvided') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'male') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'female') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'sexWishNotProvided') temp['governmentInfo'][event.target.id] = event.target.checked;

    if (event.target.id === 'coBorrowerHispanicOrLatino') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerMexican') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerPuertoRican') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerCuban') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerOther') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerNotHispanicOrLatino') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerNotWishForEthnicity') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerAmericanIndianOrAlaskanNative') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerAsian') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerAsianIndian') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerChinese') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerFilipino') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerJapanese') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerKorean') temp['governmentInfo'][event.target.id] = event.taret.checked;
    if (event.target.id === 'coBorrowerVietnamese') temp['governmentInfo'][event.target.id] = event.taret.checked;
    if (event.target.id === 'coBorrowerOtherAsian') temp['governmentInfo'][event.target.id] = event.taret.checked;
    if (event.target.id === 'coBorrowerOtherAsianDetail') temp['governmentInfo'][event.target.id] = event.taret.checked;
    if (event.target.id === 'coBorrowerBlackOrAfricanAmerican') temp['governmentInfo'][event.target.id] = event.taret.checked;
    if (event.target.id === 'coBorrowerNativeHawaiianOrOther') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerNativeHawaiian') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerGuamanianOrChamorro') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerSamoan') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerOtherPacificIslander') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerWhite') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerRaceWishNotProvided') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerMale') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerFemale') temp['governmentInfo'][event.target.id] = event.target.checked;
    if (event.target.id === 'coBorrowerSexWishNotProvided') temp['governmentInfo'][event.target.id] = event.target.checked;

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
              <h4 className='alt-bg'>Income</h4>
              <p className='alt-bg'><strong>Notice:</strong> Alimony, Child Support Or Separate Maintenance Income Need Not Be Revealed If The Borrower Or Co-Borrower Does Not Choose To Have It Considered For Repaying This Loan.</p>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={incomeImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerGrossMonthlyIncome' onChange={handleInputChange} className="form-control" placeholder="Gross Monthly Income $..." aria-label="Gross Monthly Income" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={incomeImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerAdditionalMonthlyIncome' onChange={handleInputChange} className="form-control" placeholder="Additional Monthly Income $..." aria-label="Additional Monthly Income" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <input type="text" id='coBorrowerAdditionalIncomeSource' onChange={handleInputChange} className="form-control" placeholder="Source of Additional Income" aria-label="Source of Additional Income" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <h4 className='alt-bg'>Employment Section</h4>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={officerImg} alt="" srcSet="" /></span>
                  <select className="form-select" id="coBorrowerEmploymentStatus" onChange={handleInputChange}>
                    <option selected>Employment Status</option>
                    <option>Employed</option>
                    <option>Self Employed</option>
                  </select>
                </div>
              </div>
              <h4 className='alt-bg'>Assets</h4>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={assetImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerCheckingAsset' onChange={handleInputChange} className="form-control" placeholder="Checking $..." aria-label="Checking Asset" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={assetImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerSavingAsset' onChange={handleInputChange} className="form-control" placeholder="Saving $..." aria-label="Saving Asset" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={assetImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerRetirementFunds' onChange={handleInputChange} className="form-control" placeholder="Retirement Funds $..." aria-label="Retirement Funds" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={assetImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerOtherAsset' onChange={handleInputChange} className="form-control" placeholder="Other $..." aria-label="Other Assets" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <h4 className='alt-bg'>Additional Real Estate Owned</h4>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <select className="form-select" id="coBorrowerAdditionalRealEstateOwned" onChange={handleInputChange}>
                    <option selected>Do You Own Additional Real Estate?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <h4 className='alt-bg'>Additional Details</h4>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <select className="form-select" id="coBorrowerMaritalStatus" onChange={handleInputChange}>
                    <option selected>Marital Status</option>
                    <option>Unmarried</option>
                    <option>Married</option>
                    <option>Separated</option>
                  </select>
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <select className="form-select" id="coBorrowerChildSupport" onChange={handleInputChange}>
                    <option selected>Do You Pay Child Support Or Alimony?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className='row-group alt-bg'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <select className="form-select" id="coBorrowerVeteranStatus" onChange={handleInputChange}>
                    <option selected>Are You A Veteran?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
            <h4>How Did You Hear About Us?</h4>
            <div className='row-group'>
              <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                <select className="form-select" id="referral" onChange={handleInputChange}>
                  <option selected>How Did You Hear About Us?</option>
                  <option>Other</option>
                  <option>Internet</option>
                  <option>Friend</option>
                  <option>Realtor</option>
                  <option>Builder</option>
                </select>
              </div>
            </div>
            <h4>Authorization</h4>
            <div style={{ width: '100%', marginBottom: '8px' }}>
              <input type="checkbox" name="borrowerSignatureCheckbox" id="borrowerSignatureCheckbox" onChange={handleInputChange} /><strong style={{ paddingLeft: '5px' }}>{' '}Borrower Signature</strong>
            </div>
            <p style={{ paddingTop: '15px', marginBottom: '8px' }}>I understand that by submitting this online application, I am authorizing a credit check and to make whatever inquiries necessary in connection with this request.</p>
            <div style={{ width: '100%', paddingTop: '15px', marginBottom: '8px', display: showSignatureForm ? 'block' : 'none' }}>
              <input type="checkbox" name="digitalSignatureCheckbox" id="digitalSignatureCheckbox" onChange={handleInputChange} /><strong style={{ paddingLeft: '5px' }}>{' '}Click Here If You Want To Upload Digital Signature</strong>
            </div>
            <div style={{ width: '100%', paddingTop: '15px', marginBottom: '8px', display: digitalSignatureCheckbox ? 'block' : 'none' }}>
              <input type="file" name="digitalSignature" id="digitalSignature" accept='image/png, image/jpeg, image/jpg' onChange={handleInputChange} />
              <p style={{ padding: '7px 16px 0px 0px', fontSize: '11px' }}>Accepted File Types: Jpg, Png, Jpeg. Max File Size: 3MB.</p>
            </div>
            <div style={{ width: '100%', paddingTop: '15px', marginBottom: '8px', display: showSignatureForm ? digitalSignatureCheckbox ? 'none' : 'block' : 'none' }}>
              <div style={{ width: '600px', height: '180px', display: 'flex' }}>
                <div id='digital-signature-icon'></div>
                <canvas id='digital-signature-canvas'></canvas>
              </div>
            </div>
            <strong style={{ paddingTop: '15px', marginBottom: '8px' }}>Co-Borrower Signature Below</strong>
            <div style={{ width: '100%', paddingTop: '15px', marginBottom: '8px' }}>
              <input type="checkbox" name="coBorrowerNotPresentCheckbox" id="coBorrowerNotPresentCheckbox" onChange={handleInputChange} /><strong style={{ paddingLeft: '5px' }}>{' '}Check Here If Co-Borrower Is Not Present To Sign The Digital Signature.</strong>
            </div>
            <div style={{ width: '100%', paddingTop: '15px', marginBottom: '8px', display: coBorrowerContactForm ? 'block' : 'none' }}>
              <div className='row-group'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={emailImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerContactEmail' onChange={handleInputChange} className="form-control" placeholder="Email..." aria-label="Email Address" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
              <div className='row-group'>
                <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                  <span className="input-group-text" id="basic-addon1" style={{ padding: '0', borderRadius: '0' }} ><img src={phoneImg} alt="" srcSet="" /></span>
                  <input type="text" id='coBorrowerContactPhone' onChange={handleInputChange} className="form-control" placeholder="Cell Phone Number..." aria-label="Cell Phone Number" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                </div>
              </div>
            </div>
            <div style={{ width: '100%', display: coBorrowerContactForm ? 'none' : 'block' }}>
              <div style={{ width: '100%', paddingTop: '15px', marginBottom: '8px' }}>
                <input type="checkbox" name="coBorrowerDigitalSignatureCheckbox" id="coBorrowerDigitalSignatureCheckbox" onChange={handleInputChange} /><strong style={{ paddingLeft: '5px' }}>{' '}Click Here If You Want To Upload Digital Signature</strong>
              </div>
              <div style={{ width: '100%', paddingTop: '15px', marginBottom: '8px', display: formData.coBorrowerDigitalSignatureCheckbox ? 'none' : 'block' }}>
                <div style={{ width: '600px', height: '180px', display: 'flex' }}>
                  <div id='digital-signature-icon'></div>
                  <canvas id='digital-signature-canvas'></canvas>
                </div>
              </div>
              <div style={{ width: '100%', paddingTop: '15px', marginBottom: '8px', display: formData.coBorrowerDigitalSignatureCheckbox ? 'block' : 'none' }}>
                <input type="file" name="coBorrowerDigitalSignature" id="coBorrowerDigitalSignature" accept='image/png, image/jpeg, image/jpg' onChange={handleInputChange} />
                <p style={{ padding: '7px 16px 0px 0px', fontSize: '11px' }}>Accepted File Types: Jpg, Png, Jpeg. Max File Size: 3MB.</p>
              </div>
            </div>
            <h4>Info For Government</h4>
            <p style={{ paddingTop: '20px', textAlign: 'center', fontSize: '14px', marginBottom: '15px' }}>The Following Information Is Requested By The Federal Government For Certain Types Of Loans Related To A Dwelling In Order To Monitor The Lender's Compliance With Equal Credit Opportunity, Fair Housing And Home Mortgage Disclosure Laws. You Are Not Required To Furnish This Information, But Are Encouraged To Do So. The Law Provides That A Lender May Not Discriminate Either On The Basis Of This Information, Or On Whether You Choose To Furnish It. If You Furnish The Information, Please Provide Both Ethnicity And Race. For Race, You May Check More Than One Designation. If You Do Not Furnish Ethnicity, Race, Or Sex, Under Federal Regulations, This Lender Is Required To Note The Information On The Basis Of Visual Observation And Surname If You Have Made This Application In Person. If You Do Not Wish To Furnish The Information, Please Check The Box Below.</p>
            <div id='government-form'>
              <div className='column' style={{ borderRight: '1px solid #cecece' }}>
                <h4>Borrower</h4>
                <p><strong>Ethnicity:</strong>{' '} <em>Check One Or More</em></p>
                <div>
                  <input type="checkbox" name="hispanicOrLatino" id="hispanicOrLatino" onChange={handleInputChange} /> Hispanic Or Latino
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <input type="checkbox" name="mexican" id="mexican" onChange={handleInputChange} /> Mexican
                  <input type="checkbox" name="puertoRican" id="puertoRican" onChange={handleInputChange} style={{ marginLeft: '20px' }} /> Puerto Rican
                  <input type="checkbox" name="cuban" id="cuban" onChange={handleInputChange} style={{ marginLeft: '20px' }} /> Cuban
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <input type="checkbox" name="other" id="other" onChange={handleInputChange} /> Other Hispanic Or Latino - <em>Print Origin</em>
                </div>
                <div>
                  <div className='row-group' style={{ paddingLeft: '20px' }}>
                    <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                      <input type="text" id='otherDetail' onChange={handleInputChange} className="form-control" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                      <p><em style={{ color: '#7a7a7a' }}>For Example: Argentinean, Colombian, Dominican, Nicaraguan, Salvadoran, Spaniard, And So On.</em></p>
                    </div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" name="notHispanicOrLatino" id="notHispanicOrLatino" onChange={handleInputChange} /> Not Hispanic Or Latino
                </div>
                <div>
                  <input type="checkbox" name="notWishForEthnicity" id="notWishForEthnicity" onChange={handleInputChange} /> I Do Not Wish To Provide This Information
                </div>
                <div className='separator'></div>
                <p><strong>Race:</strong>{' '} <em>Check One Or More</em></p>
                <div>
                  <input type="checkbox" name="americanIndianOrAlaskanNative" id="americanIndianOrAlaskanNative" onChange={handleInputChange} /> American Indian Or Alaska Native - <em>Print Name Of Enrolled Or Principal Tribe:</em>
                </div>
                <div>
                  <div className='row-group' style={{ paddingLeft: '20px' }}>
                    <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                      <input type="text" id='otherAmericanRaceDetail' onChange={handleInputChange} className="form-control" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                    </div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" name="asian" id="asian" onChange={handleInputChange} /> Asian
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <input type="checkbox" name="asianIndian" id="asianIndian" onChange={handleInputChange} /> Asian Indian <br />
                  <input type="checkbox" name="chinese" id="chinese" onChange={handleInputChange} /> Chinese <br />
                  <input type="checkbox" name="filipino" id="filipino" onChange={handleInputChange} /> Filipino <br />
                  <input type="checkbox" name="japanese" id="japanese" onChange={handleInputChange} /> Japanese <br />
                  <input type="checkbox" name="korean" id="korean" onChange={handleInputChange} /> Korean <br />
                  <input type="checkbox" name="vietnamese" id="viatnamese" onChange={handleInputChange} /> Vietnamese <br />
                  <input type="checkbox" name="otherAsian" id="otherAsian" onChange={handleInputChange} /> Other Asian - <em>Print Race:</em> <br />
                </div>
                <div>
                  <div className='row-group' style={{ paddingLeft: '20px' }}>
                    <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                      <input type="text" id='otherAsianDetail' onChange={handleInputChange} className="form-control" aria-describedby="basic-addon1" style={{ borderRadius: '0', width: '100%' }} />
                      <p><em style={{ color: '#7a7a7a' }}>For Example: Hmong, Laotian, Thai, Pakistani, Cambodian, And So On.</em></p>
                    </div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" name="blackOrAfricanAmerican" id="blackOrAfricanAmerican" onChange={handleInputChange} /> Black Or African American
                </div>
                <div>
                  <input type="checkbox" name="nativeHawaiianOrOther" id="nativeHawaiianOrOther" onChange={handleInputChange} /> Native Hawaiian Or Other Pacific Islander
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <input type="checkbox" name="nativeHawaiian" id="nativeHawaiian" onChange={handleInputChange} /> Native Hawaiian
                  <input type="checkbox" name="guamanianOrChamorro" id="guamanianOrChamorro" onChange={handleInputChange} style={{ marginLeft: '20px' }} /> Guamanian Or Chamorro
                  <input type="checkbox" name="samoan" id="samoan" onChange={handleInputChange} style={{ marginLeft: '20px' }} /> Samoan
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <input type="checkbox" name="otherPacificIslander" id="otherPacificIslander" onChange={handleInputChange} /> Other Pacific Islander - <em>Print Race:</em>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <div className='row-group' style={{ paddingLeft: '20px' }}>
                    <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                      <input type="text" id='otherPacificIslanderDetail' onChange={handleInputChange} className="form-control" aria-describedby="basic-addon1" style={{ borderRadius: '0', width: '100%' }} />
                      <p><em style={{ color: '#7a7a7a' }}>For Example: Fijian Tongan, And So On.</em></p>
                    </div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" name="white" id="white" onChange={handleInputChange} /> White
                </div>
                <div>
                  <input type="checkbox" name="raceWishNotProvided" id="raceWishNotProvided" onChange={handleInputChange} /> I Do Not Wish To Provide This Information
                </div>
                <div className='separator'></div>
                <p><strong>Sex</strong></p>
                <div>
                  <input type="checkbox" name="male" id="male" onChange={handleInputChange} /> Male
                </div>
                <div>
                  <input type="checkbox" name="female" id="female" onChange={handleInputChange} /> Female
                </div>
                <div>
                  <input type="checkbox" name="sexWishNotProvided" id="sexWishNotProvided" onChange={handleInputChange} /> I Do Not Wis To Provide This Information
                </div>
              </div>
              <div className='column' style={{ borderRight: '1px solid #cecece' }}>
                <h4>Co-Borrower</h4>
                <p><strong>Ethnicity:</strong>{' '} <em>Check One Or More</em></p>
                <div>
                  <input type="checkbox" name="coBorrowerHispanicOrLatino" id="coBorrowerHispanicOrLatino" onChange={handleInputChange} /> Hispanic Or Latino
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <input type="checkbox" name="coBorrowerMexican" id="coBorrowerMexican" onChange={handleInputChange} /> Mexican
                  <input type="checkbox" name="coBorrowerPuertoRican" id="coBorrowerPuertoRican" onChange={handleInputChange} style={{ marginLeft: '20px' }} /> Puerto Rican
                  <input type="checkbox" name="coBorrowerCuban" id="coBorrowerCuban" onChange={handleInputChange} style={{ marginLeft: '20px' }} /> Cuban
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <input type="checkbox" name="coBorrowerOther" id="coBorrowerOther" onChange={handleInputChange} /> Other Hispanic Or Latino - <em>Print Origin</em>
                </div>
                <div>
                  <div className='row-group' style={{ paddingLeft: '20px' }}>
                    <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                      <input type="text" id='coBorrowerOtherDetail' onChange={handleInputChange} className="form-control" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                      <p><em style={{ color: '#7a7a7a' }}>For Example: Argentinean, Colombian, Dominican, Nicaraguan, Salvadoran, Spaniard, And So On.</em></p>
                    </div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" name="coBorrowerNotHispanicOrLatino" id="coBorrowerNotHispanicOrLatino" onChange={handleInputChange} /> Not Hispanic Or Latino
                </div>
                <div>
                  <input type="checkbox" name="coBorrowerNotWishForEthnicity" id="coBorrowerNotWishForEthnicity" onChange={handleInputChange} /> I Do Not Wish To Provide This Information
                </div>
                <div className='separator'></div>
                <p><strong>Race:</strong>{' '} <em>Check One Or More</em></p>
                <div>
                  <input type="checkbox" name="coBorrowerAmericanIndianOrAlaskanNative" id="coBorrowerAmericanIndianOrAlaskanNative" onChange={handleInputChange} /> American Indian Or Alaska Native - <em>Print Name Of Enrolled Or Principal Tribe:</em>
                </div>
                <div>
                  <div className='row-group' style={{ paddingLeft: '20px' }}>
                    <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                      <input type="text" id='coBorrowerOtherAmericanRaceDetail' onChange={handleInputChange} className="form-control" aria-describedby="basic-addon1" style={{ borderRadius: '0' }} />
                    </div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" name="coBorrowerAsian" id="coBorrowerAsian" onChange={handleInputChange} /> Asian
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <input type="checkbox" name="coBorrowerAsianIndian" id="coBorrowerAsianIndian" onChange={handleInputChange} /> Asian Indian <br />
                  <input type="checkbox" name="coBorrowerChinese" id="coBorrowerChinese" onChange={handleInputChange} /> Chinese <br />
                  <input type="checkbox" name="coBorrowerFilipino" id="coBorrowerFilipino" onChange={handleInputChange} /> Filipino <br />
                  <input type="checkbox" name="coBorrowerJapanese" id="coBorrowerJapanese" onChange={handleInputChange} /> Japanese <br />
                  <input type="checkbox" name="coBorrowerKorean" id="coBorrowerKorean" onChange={handleInputChange} /> Korean <br />
                  <input type="checkbox" name="coBorrowerVietnamese" id="coBorrowerVietnamese" onChange={handleInputChange} /> Vietnamese <br />
                  <input type="checkbox" name="coBorrowerOtherAsian" id="coBorrowerOtherAsian" onChange={handleInputChange} /> Other Asian - <em>Print Race:</em> <br />
                </div>
                <div>
                  <div className='row-group' style={{ paddingLeft: '20px' }}>
                    <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                      <input type="text" id='coBorrowerOtherAsianDetail' onChange={handleInputChange} className="form-control" aria-describedby="basic-addon1" style={{ borderRadius: '0', width: '100%' }} />
                      <p><em style={{ color: '#7a7a7a' }}>For Example: Hmong, Laotian, Thai, Pakistani, Cambodian, And So On.</em></p>
                    </div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" name="coBorrowerBlackOrAfricanAmerican" id="coBorrowerBlackOrAfricanAmerican" onChange={handleInputChange} /> Black Or African American
                </div>
                <div>
                  <input type="checkbox" name="coBorrowerNativeHawaiianOrOther" id="coBorrowerNativeHawaiianOrOther" onChange={handleInputChange} /> Native Hawaiian Or Other Pacific Islander
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <input type="checkbox" name="coBorrowerNativeHawaiian" id="coBorrowerNativeHawaiian" onChange={handleInputChange} /> Native Hawaiian
                  <input type="checkbox" name="coBorrowerGuamanianOrChamorro" id="coBorrowerGuamanianOrChamorro" onChange={handleInputChange} style={{ marginLeft: '20px' }} /> Guamanian Or Chamorro
                  <input type="checkbox" name="coBorrowerSamoan" id="coBorrowerSamoan" onChange={handleInputChange} style={{ marginLeft: '20px' }} /> Samoan
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <input type="checkbox" name="coBorrowerOtherPacificIslander" id="coBorrowerOtherPacificIslander" onChange={handleInputChange} /> Other Pacific Islander - <em>Print Race:</em>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <div className='row-group' style={{ paddingLeft: '20px' }}>
                    <div className="input-group mb-3" style={{ paddingTop: '15px' }}>
                      <input type="text" id='coBorrowerOtherPacificIslanderDetail' onChange={handleInputChange} className="form-control" aria-describedby="basic-addon1" style={{ borderRadius: '0', width: '100%' }} />
                      <p><em style={{ color: '#7a7a7a' }}>For Example: Fijian Tongan, And So On.</em></p>
                    </div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" name="coBorrowerWhite" id="coBorrowerWhite" onChange={handleInputChange} /> White
                </div>
                <div>
                  <input type="checkbox" name="coBorrowerRaceWishNotProvided" id="coBorrowerRaceWishNotProvided" onChange={handleInputChange} /> I Do Not Wish To Provide This Information
                </div>
                <div className='separator'></div>
                <p><strong>Sex</strong></p>
                <div>
                  <input type="checkbox" name="coBorrowerMale" id="coBorrowerMale" onChange={handleInputChange} /> Male
                </div>
                <div>
                  <input type="checkbox" name="coBorrowerFemale" id="coBorrowerFemale" onChange={handleInputChange} /> Female
                </div>
                <div>
                  <input type="checkbox" name="coBorrowerSexWishNotProvided" id="coBorrowerSexWishNotProvided" onChange={handleInputChange} /> I Do Not Wis To Provide This Information
                </div>
              </div>
            </div>
            <div style={{ margin: '16px 0px 0px', padding: '16px 0px 10px', width: '100%' }}>
              <button style={{ padding: '7.5px 30px', backgroundColor: 'rgb(13, 119, 20)', color: 'white', border: 'none' }}>SUBMIT</button>
            </div>
            <div className='spacer' style={{ width: '100%', height: '40px' }}></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ApplyOnline;
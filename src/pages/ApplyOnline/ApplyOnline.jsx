import './ApplyOnline.css';
import { useEffect, useState } from 'react';
import nameImg from '../../assets/apply_online/name.png';
import phoneImg from '../../assets/apply_online/phone.png';
import emailImg from '../../assets/apply_online/email.png';
import calendarImg from '../../assets/apply_online/d-o-b.png';
import securityImg from '../../assets/apply_online/security.png';

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
    livingStatus: ''
  });
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyOnline;
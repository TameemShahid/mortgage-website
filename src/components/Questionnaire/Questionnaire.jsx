import React, { useEffect, useState } from 'react';
import purchaseLogo from '../../assets/Purchase.png';
import refinanceLogo from '../../assets/Refinance.png';
import './Questionnaire.css';
import { useNavigate } from 'react-router-dom';

const Questionnaire = ({ width }) => {
  const totalQuestions = 17;
  const [answers, setAnswers] = useState(Array(totalQuestions).fill(""));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progressWidth, setProgressWidth] = useState('0%');
  const [sliderValue, setSliderValue] = useState(50);
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  });
  const [secondFormData, setSecondFormData] = useState({
    email: "",
    phone: "",
    marketing: false
  });

  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const addToAnswer = (idx, ans) => {
    setAnswers(answers.map((value, index) => index === idx ? ans : value));
    goToNextQuestion();
  }

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
  };

  const questions = () => {
    switch (currentQuestion) {
      case 0:
        return (
          <>
            <h1>What are your goals? <br />We are committed to helping you reach them.</h1>
            <div style={{ height: '30px' }} />
            <div className='question-1-options d-grid gap-5'>
              <div className='text-center'>
                <span className='question-1-image' style={{ backgroundImage: `url(${purchaseLogo})` }}></span>
                <div style={{ height: '30px' }} />
                <button className='btn btn-info question-1-button' onClick={() => addToAnswer(currentQuestion, 'purchase')}>I want to purchase</button>
              </div>
              <div className='text-center'>
                <span className='question-1-image' style={{ backgroundImage: `url(${refinanceLogo})` }}></span>
                <div style={{ height: '30px' }} />
                <button className='btn btn-info question-1-button' onClick={() => addToAnswer(currentQuestion, 'refinance')}>I want to refinance</button>
              </div>
              <div style={{ minHeight: '32px' }} />
            </div>
          </>
        )

      case 1:
        return (
          <div className='question-2-container'>
            <h2 className='question-2-heading'>Where is the home located?</h2>
            <div className='mt-4' />
            <div className='question-2-input mx-auto'>
              <small>City or Zip Code</small>
              <div className='mt-1' />
              <input type="text" placeholder='City or Zip Code' value={input} onChange={e => setInput(e.target.value)} />
              <div className='spacer my-5' />
            </div>
            <div className='question-2-buttons'>
              <button type="button" className='btn btn-info' onClick={() => addToAnswer(currentQuestion, input)}>Next</button>
              <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className='question-3-container'>
            <h2 className='question-3-heading'>What type of home is it?</h2>
            <div className='mt-4' />
            <div className='question-3-buttons'>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Single Family")}>Single Family</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Townhouse")}>Townhouse</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Condominium")}>Condominium</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Multi-Family")}>Multi-Family</button>
            </div>
            <div className='spacer my-5' />
            <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
          </div>
        )

      case 3:
        return (
          <div className='question-3-container'>
            <h2 className='question-3-heading'>Where are you in the home buying process?</h2>
            <div className='mt-4' />
            <div className='question-3-buttons'>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Signed a purchase contract")}>Signed a purchase contract</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Found a home")}>Found a home</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Looking to buy within one month")}>Looking to buy within one month</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Looking to buy in 1 to 3 months")}>Looking to buy in 1 to 3 months</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Looking to buy in more than 3 months")}>Looking to buy in more than 3 months</button>
            </div>
            <div className='spacer my-5' />
            <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
          </div>
        )

      case 4:
        return (
          <div className='question-3-container'>
            <h2 className='question-3-heading'>How do you plan to use your new home?</h2>
            <div className='mt-4' />
            <div className='question-3-buttons'>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Primary Residence")}>Primary Residence</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Vacation Property")}>Vacation Property</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Investment Property")}>Investment Property</button>
            </div>
            <div className='spacer my-5' />
            <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
          </div>
        )

      case 5:
        return (
          <div className='question-3-container'>
            <h2 style={{ fontWeight: '700' }} className='question-3-heading'>Have you or your spouse served in the US military?</h2>
            <p className='question-4-paragraph'>Veterans and active US military may be eligible for a $0 down VA loan when purchasing a home.</p>
            <div className='mt-4' />
            <div className='question-3-buttons'>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Yes")}>Yes</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "No")}>No</button>
            </div>
            <div className='spacer my-5' />
            <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
          </div>
        )

      case 6:
        if (answers[5].toLowerCase() === 'yes') {
          return (
            <div className='question-3-container'>
              <h2 className='question-3-heading'>What is your (or your spouse's) branch of military service?</h2>
              <div className='mt-4' />
              <div className='question-3-buttons'>
                <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Army")}>Army</button>
                <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Marine Corps")}>Marine Corps</button>
                <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Navy")}>Navy</button>
                <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Air Force")}>Air Force</button>
                <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Coast Guard")}>Coast Guard</button>
                <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "National Guard")}>National Guard</button>
                <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Military Spouse")}>Military Spouse</button>
                <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Other")}>Other VA Eligibility</button>
                <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "No Military Experience")}>No Military Experience</button>
              </div>
              <div className='spacer my-5' />
              <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
            </div>
          )
        } else {
          setCurrentQuestion(current => current + 1);
        }
        break;

      case 7:
        return (
          <div className='question-3-container'>
            <h2 className='question-3-heading'>Are you actively working with a real estate agent?</h2>
            <div className='mt-4' />
            <div className='question-3-buttons'>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Yes")}>Yes</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "No")}>No</button>
            </div>
            <div className='spacer my-5' />
            <div className='btn-back' onClick={() => setCurrentQuestion(current => current - 2)}>Back</div>
          </div>
        )

      case 8:
        return (
          <div className='question-3-container'>
            <h2 className='question-3-heading'>Is this your first time purchasing a home?</h2>
            <div className='mt-4' />
            <div className='question-3-buttons'>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Yes")}>Yes</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "No")}>No</button>
            </div>
            <div className='spacer my-5' />
            <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
          </div>
        )

      case 9:
        return (
          <div className='question-3-container'>
            <h2 style={{ fontWeight: '700' }} className='question-3-heading'>What is the approximate purchase price of the new property?</h2>
            <div className='mt-4' />
            <p className='question-4-paragraph'>(it's OK to estimate)</p>
            <div className='mt-4' />
            <div className='question-3-slider'>
              <input
                type="range"
                className="form-range slider"
                min={50000}
                step={10000}
                max={2000000}
                value={sliderValue}
                onChange={handleSliderChange}
                style={{
                  backgroundSize: `${(sliderValue / 2000000) * 100}% 100%`
                }}
              />
              <p className='slider-text mt-5'>{formatter.format(sliderValue)}</p>
            </div>
            <div className='spacer my-5' />
            <div className='question-2-buttons'>
              <button type="button" className='btn btn-info' onClick={() => addToAnswer(currentQuestion, sliderValue)}>Next</button>
              <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
            </div>
          </div>
        )

      case 10:
        return (
          <div className='question-3-container'>
            <h2 style={{ fontWeight: '700' }} className='question-3-heading'>How much do you have for a down payment?</h2>
            <div className='mt-4' />
            <p className='question-4-paragraph'>(it's OK to estimate)</p>
            <div className='mt-4' />
            <div className='question-3-slider'>
              <input
                type="range"
                className="form-range slider"
                min={0}
                step={10000}
                max={answers[9]}
                value={sliderValue}
                onChange={handleSliderChange}
                style={{
                  backgroundSize: `${(sliderValue / answers[9]) * 100}% 100%`
                }}
              />
              <p className='slider-text mt-5'>{formatter.format(sliderValue)} ({Math.round((sliderValue / answers[9]) * 100)}% Down)</p>
            </div>
            <div className='spacer my-5' />
            <div className='question-2-buttons'>
              <button type="button" className='btn btn-info' onClick={() => addToAnswer(currentQuestion, sliderValue)}>Next</button>
              <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
            </div>
          </div>
        )

      case 11:
        return (
          <div className='question-3-container'>
            <h2 className='question-3-heading'>What is your current employment status?</h2>
            <div className='mt-4' />
            <div className='question-3-buttons'>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Employed")}>Employed</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Self-Employed")}>Self-Employed/1099 Independent Contractor</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Retired")}>Retired</button>
            </div>
            <div className='spacer my-5' />
            <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
          </div>
        )

      case 12:
        return (
          <div className='question-3-container'>
            <h2 className='question-3-heading'>What is your household gross (before taxes) annual income?</h2>
            <div className='mt-4' />
            <div className='question-3-buttons'>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Less than $30,000")}>Less than $30,000</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "$30,000 - $50,000")}>$30,000 - $50,000</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "$50,000 - $75,000")}>$50,000 - $75,000</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "$75,000 - $100,000")}>$75,000 - $100,000</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "$Greater than $100,000")}>Greater than $100,000</button>
            </div>
            <div className='spacer my-5' />
            <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
          </div>
        )

      case 13:
        return (
          <div className='question-3-container'>
            <h2 className='question-3-heading'>What is your credit score?</h2>
            <div className='mt-4' />
            <div className='question-3-buttons'>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Excellent")}>Excellent 740+</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Good")}>700 - 739</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Average")}>660 - 699</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Fair")}>600 - 659</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Poor")}>Poor {'<'} 600</button>
            </div>
            <div className='spacer my-5' />
            <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
          </div>
        )

      case 14:
        return (
          <div className='question-3-container'>
            <h2 className='question-3-heading'>Have you had a bankruptcy or foreclosure in the past 3 years?</h2>
            <div className='mt-4' />
            <div className='question-3-buttons'>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "Yes")}>Yes</button>
              <button type="button" className='btn btn-info mb-3' onClick={() => addToAnswer(currentQuestion, "No")}>No</button>
            </div>
            <div className='spacer my-5' />
            <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
          </div>
        )

      case 15:
        return (
          <div className='question-3-container'>
            <div className='question-16-form'>
              <div style={{ textAlign: 'left' }} className='question-3-heading'>What is your first name? <span style={{ color: '#790000' }}>*</span></div>
              <input type="text" className='mt-3' value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
              <div style={{ textAlign: 'left' }} className='question-3-heading mt-5'>What is your last name? <span style={{ color: '#790000' }}>*</span></div>
              <input type="text" className='mt-3' value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
            </div>
            <div className='spacer my-5' />
            <div className='question-2-buttons'>
              <button type="button" className='btn btn-info' onClick={() => addToAnswer(currentQuestion, formData)}>Next</button>
              <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
            </div>
          </div>
        )

      case 16:
        return (
          <div className='question-3-container'>
            <div className='question-16-form'>
              <div style={{ textAlign: 'left' }} className='question-3-heading'>What is your email address? <span style={{ color: '#790000' }}>*</span></div>
              <input type="text" className='mt-3' value={secondFormData.email} onChange={(e) => setSecondFormData({ ...secondFormData, email: e.target.value })} />
              <div style={{ textAlign: 'left' }} className='question-3-heading mt-5'>What is your phone number? <span style={{ color: '#790000' }}>*</span></div>
              <input type="text" className='mt-3' value={secondFormData.phone} onChange={(e) => setSecondFormData({ ...secondFormData, phone: e.target.value })} />
              <span className='mt-4 d-block text-center'><input type="checkbox" name="marketing" checked={secondFormData.marketing} onChange={(e) => setSecondFormData({ ...secondFormData, marketing: e.target.checked })} style={{ marginRight: '10px' }} />I agree to the Communications Policy. <span style={{ color: '#790000' }}>*</span></span>
              <textarea name="marketing-policy" cols="30" rows="10" style={{ width: '100%' }} className='mt-3' readOnly value={"We may communicate with you in a variety of different ways including by email, voicemail, mail, text and SMS messaging, and in person. Some communications occur through multiple channels. Such communications are confidential and only intended for you or persons authorized to act on your behalf. By using the Service, you acknowledge the following communications-related practices. By submitting your phone number you are agreeing to opt-in to sms messaging. Message and data rates may apply."} />
            </div>
            <div className='spacer my-5' />
            <div className='question-2-buttons'>
              <button type="button" className='btn btn-info' onClick={() => {
                setAnswers(answers.map((value, index) => index === currentQuestion ? secondFormData : value));
                navigate('/thank-you-for-mortgage-quote');
              }}>Submit</button>
              <div className='btn-back' onClick={goToPrevQuestion}>Back</div>
            </div>
          </div>
        )
      default:
        break;
    }
  }

  useEffect(() => {
    // Calculate the width of the progress bar based on the current question
    const updatedWidth = ((currentQuestion + 1) / totalQuestions) * 100 + '%';
    setProgressWidth(updatedWidth);
  }, [currentQuestion, totalQuestions]);

  const goToNextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(current => current + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(current => current - 1);
    }
  };

  return (
    <div className='questionnaire-container'>
      <div className='progressbar-container flex-item justify-self-start'>
        <div style={{ width: progressWidth }} className='progressbar'></div>
      </div>
      <div className='questions-container my-auto'>
        {questions()}
      </div>
    </div>
  )
}

export default Questionnaire;

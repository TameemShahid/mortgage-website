import React, { useEffect, useState } from 'react';
import purchaseLogo from '../../assets/Purchase.png';
import refinanceLogo from '../../assets/Refinance.png';
import './Questionnaire.css';

const Questionnaire = ({ width }) => {
  const totalQuestions = 10;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progressWidth, setProgressWidth] = useState('0%');

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
                <button className='btn btn-info question-1-button'>I want to purchase</button>
              </div>
              <div className='text-center'>
                <span className='question-1-image' style={{ backgroundImage: `url(${refinanceLogo})` }}></span>
                <div style={{ height: '30px' }} />
                <button className='btn btn-info question-1-button'>I want to refinance</button>
              </div>
              <div style={{ minHeight: '32px' }} />
            </div>
          </>
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

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: '100px 0 50px',
        position: 'relative',
        top: '-86px'
      }}
    >
      <div
        style={{
          maxWidth: '840px',
          backgroundColor: 'white',
          borderRadius: '4px',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px 0px',
          display: 'flex',
          flexDirection: 'column', // This will help in aligning the progress bar,
          justifyContent: 'start',
          position: 'relative', // Needed for positioning the progress bar,
          width: '90%',
          alignItems: 'center',
          marginBottom: '60px'
        }}
        className='questionnaire-container'
      >
        <div
          style={{
            position: 'absolute', // Positioning progress bar at the top
            top: '0',
            left: '0',
            width: '100%', // Ensures it spans the full width of the container
            height: '5px', // Fixed height of the progress bar
            borderRadius: '4px',
            backgroundColor: '#e0e0e0' // Grey background for the unfilled part of the progress bar
          }}>
          <div
            style={{
              height: '5px',
              width: progressWidth, // Width updated by state
              backgroundColor: '#2AA6D0' // Color of the filled progress bar
            }}></div>
        </div>
        <div className='mx-auto' style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          padding: '40px 25px',
          maxWidth: '680px',
          flexWrap: 'wrap',
        }}>
          <div style={{ color: 'rgb(42, 166, 208)', fontSize: width < 430 ? '24px' : '32px', fontWeight: '400' }}>What are your goals? <br />
            We are committed to helping you reach them.
          </div>
          <div style={{ flexBasis: '100%' }}></div>
          <div className='mx-auto' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: '20px',
            rowGap: '20px',
            flexWrap: width <= 640 ? 'wrap' : 'nowrap'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <span style={{ width: '240px', height: '200px', backgroundImage: `url(${purchaseLogo})`, backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></span>
              <div style={{ flexBasis: '100%' }}></div>
              <button className='btn btn-info' style={{ width: '100%', backgroundColor: 'rgb(49, 167, 207)', color: 'white', borderRadius: '2px' }}>I want to Purchase</button>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <span style={{ width: '240px', height: '200px', backgroundImage: `url(${refinanceLogo})`, backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></span>
              <div style={{ flexBasis: '100%' }}></div>
              <button className='btn btn-info' style={{ width: '100%', backgroundColor: 'rgb(49, 167, 207)', color: 'white', borderRadius: '2px' }}>I want to refinance</button>
            </div>
          </div>
          <div style={{ height: '16px', flexBasis: '100%', margin: '14px 0', padding: '16px 0' }}></div>
        </div>
        <div style={{ width: '100%', height: '56px', maxWidth: '840px' }}></div>
      </div>
      <div style={{ flexBasis: '100%' }}></div>
      <p className='mx-5' style={{ color: 'rgb(24, 25, 33)', fontWeight: '300', margin: '0' }}>(Get a Personalized Quote and Expert Advice Today.)</p>
    </div>
  );
}

export default Questionnaire;

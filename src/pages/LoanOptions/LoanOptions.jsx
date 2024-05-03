import './LoanOptions.css';
import image1 from '../../assets/loan_options/Down-Payment.jpg';
import Questionnaire from '../../components/Questionnaire/Questionnaire';
import Footer from '../../components/Footer/Footer';

const purchaseData = [
  {
    icon: 'far fa-chart-bar',
    title: "Fixed Rate Mortgage",
    text: 'Interest Rate and payments remain the same for the entire term of the loan.'
  },
  {
    icon: 'fas fa-university',
    title: "FHA Loan",
    text: "An FHA loan provides a government-insured loan with flexible loan options."
  },
  {
    icon: 'fas fa-medal',
    title: "VA Loan",
    text: "VA Loans offer flexible options either fixed-rate or ARM mortgages."
  },
  {
    icon: 'fas fa-tools',
    title: "Rehab Loan",
    text: 'Roll the costs of the renovation into your loan.'
  },
  {
    icon: 'fas fa-tree',
    title: "USDA Loan",
    text: 'Purchase a home with no money down in certain rural and subarban areas.'
  },
  {
    icon: 'fas fa-piggy-bank',
    title: "Jumbo Loan",
    text: 'Jumbo Loans offer maximum flexibility for home financing for larger loans.'
  },
  {
    icon: 'fas fa-home',
    title: "First Time Home Buyer",
    text: 'Popular loan programs for first time home buyers.'
  },
  {
    icon: 'fas fa-dollar-sign',
    title: "Low Down Payment Options",
    text: 'Explore options that may make you a home owner with a low down payment.'
  },
  {
    icon: 'fas fa-tram',
    title: "Mortgage loan programs for vacation and investment properties.",
    text: ''
  },
  {
    icon: 'fas fa-university',
    title: "Bank Statement Program",
    text: 'Leverage your bank statements to secure a favorable home loan.'
  },
  {
    icon: 'fas fa-home',
    title: "Bridge Home Loan",
    text: 'Secure the transition between selling your current home and buying a new one.'
  },
  {
    icon: 'fas fa-hammer',
    title: "Construction Home Loan",
    text: 'Build your dream home from the group up with tailored financing.'
  },
  {
    icon: 'fas fa-home',
    title: "DSCR Home Loan",
    text: 'Focus on the debt-service coverage ratio to get the right home loan.'
  },
  {
    icon: 'fas fa-paint-roller',
    title: "Fix & Flip Home Loan",
    text: 'Get the financial support you need for your home renovation projects.'
  },
  {
    icon: 'fas fa-home',
    title: "HELOC Home Loan",
    text: 'Unlock the value in your home with flexible home equity lines of credit.'
  },
  {
    icon: 'fas fa-undo',
    title: "Reverse Mortgage",
    text: 'Convert a portion of your home equity into cash to secure your retirement.'
  },
  {
    icon: 'fas fa-wallet',
    title: "Seller-Paid Buydown",
    text: 'Reduce your mortgage payments with the assistance of the seller.'
  }
]

const refinanceData = [
  {
    icon: 'fas fa-sync-alt',
    title: "Refinance",
    text: 'Mortgage refinancing may lower your monthly payments.'
  },
  {
    icon: 'fas fa-hand-holding-usd',
    title: "Cash-Out Refinance",
    text: 'Access home equity for various purposes.'
  },
  {
    icon: 'fas fa-medal',
    title: "VA Loan Refinance",
    text: 'There are two main ways to refinance your VA loan.'
  },
]

const LoanOptions = () => {

  const generateCards = () => {
    return purchaseData.map(element => (
      <>
        <div className="card flex-item col-12 col-md-4 p-0">
          <div className="card-body">
            <h5 className="card-title">
              <span className={`fa-1x ${element.icon}`}></span>
            </h5>
            <h2 className="card-subtitle mb-2">{element.title}</h2>
            <p className="card-text">{element.text}</p>
          </div>
        </div>
      </>
    ))
  }

  const generateRefinanceCards = () => {
    return refinanceData.map(element => (
      <>
        <div className="card flex-item col-12 col-md-4 p-0">
          <div className="card-body">
            <h5 className="card-title">
              <span className={`fa-1x ${element.icon}`}></span>
            </h5>
            <h2 className="card-subtitle mb-2">{element.title}</h2>
            <p className="card-text">{element.text}</p>
          </div>
        </div>
      </>
    ))
  }

  return (
    <div id='loan-option-container' className='main-content'>
      <div className='loan-wrapper'>
        <div className='section-1-container'>
          <div className='section-1-content mx-auto'>
            <div className='text-column my-auto'>
              <h1>Loan Options</h1>
              <p>Finding a great home loan involves careful consideration of your needs, finances and history. We are here to guide you.</p>
              <div className='btn-container'>
                <button type="button" className='btn btn-info'>Get Your Quote</button>
                <button type="button" className='btn btn-outline-light btn-alternative'>Learn More</button>
              </div>
            </div>
            <div className='img-container'>
              <img
                className='section-1-img'
                src={image1}
                alt="Couple looking at a laptop"
                loading="lazy"
                decoding="async"
                srcSet={`${image1} 630w, ${image1} 300w, ${image1} 150w`}
                sizes="(max-width: 630px) 100vw, 630px"
                style={{
                  borderRadius: '20px',
                  width: '-webkit-fill-available',
                  maxWidth: '630px',
                  maxHeight: '630px',
                }}
              />
            </div>
          </div>
        </div>
        <div className='section-2-container'>
          <div className='section-2-content'>
            <div className='heading-container'>
              <h1 className='mx-auto'>Purchase</h1>
              <div className='grey-border-bottom' />
            </div>
            <div className='spacer' />
            <div className='cards-container'>
              {generateCards()}
            </div>
            <div className='spacer' />
            <div className='heading-container'>
              <h1 className='mx-auto'>Refinance</h1>
              <div className='grey-border-bottom' />
            </div>
            <div className='spacer' />
            <div className='cards-container'>
              {generateRefinanceCards()}
            </div>
            <div className='spacer' />
          </div>
        </div>
        <div className='section-3-container'>
          <h1>Get started today!</h1>
          <div className='divider mt-3' />
          <p>Fill out the questionnaire on this page to start a discussion about your mortgage needs today!</p>
          <div className='divider mt-4' />
          <Questionnaire />
          <div className='divider mt-5' />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LoanOptions;
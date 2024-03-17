function LandingPage() {
  return (
    <div className="landing">
      <h1>
        <span>Your</span> <span>favourite </span>
        <span>currency</span> <span>converter</span>
      </h1>
      <p className="fade-up">
        Convert currencies effortlessly with our user-friendly platform,
        providing real-time rates for over 150 currencies worldwide.
      </p>
      <button className="btn-checkout fade-up">
        <a href="#container">Convert</a>
        <svg
          className="svg-arrow-rigth"
          fill="#000000"
          height="17px"
          width="17px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 330 330"
        >
          <path
            id="XMLID_27_"
            d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
          />
        </svg>
      </button>
    </div>
  );
}

export default LandingPage;

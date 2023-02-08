const Preloader = () => {
  return (
    <div className="preloader">
      <div className="center">
        <img src={process.env.PUBLIC_URL + '/assests/nvcti_animated-2.gif'} alt="🕗 Loading..." style={{width: '10%', height: '10%'}}   />
      </div>
    </div>
  );
};

export default Preloader;

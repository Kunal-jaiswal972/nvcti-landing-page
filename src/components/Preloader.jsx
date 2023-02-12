const Preloader = () => {
  return (
    <div className="preloader">
      <div className="center">
        <img
          className="loader-img"
          src={process.env.PUBLIC_URL + "/assests/nvcti_animated-2.gif"}
          alt="🕗 Loading..."
        />
      </div>
    </div>
  );
};

export default Preloader;

const Footer = () => {
  return (
    <div>
      <div
        className="w-full mt-5 pt-20 pr-5 pb-0 pl-5 mb-9"
        style={{ backgroundColor: '#00141e' }}
      >
        <div className="flex flex-col flex-wrap items-center justify-center max-w-screen-xl mx-auto text-black font-bold">
          <h4
            className="text-base mb-4 text-center"
            style={{ color: '#2d2d2d' }}
          >
            The Content shared on this website is for information purpose only
            and, thus, should not be considered as financial advice.
            Trading/Investing is risky and you should never invest more than you
            can afford to lose. Cryptocurrencies are risky. Never invest more
            than you can afford to lose. Always seek professional advice before
            making any investment. You alone assume the sole responsibility of
            evaluating the merits and risks associated with the use of any
            information or other Content on the Site before making any decisions
            based on such information or other Content.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;

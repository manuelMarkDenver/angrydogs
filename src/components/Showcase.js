import Background from '../images/wallpaper-3.png';
import Background_2 from '../images/AngryDoge-Tokenomics2-2.png';

const Showcase = () => {
  return (
    <div className="relative">
      <div
        className="w-full flex items-center justify-center py-14 px-5"
        style={{ backgroundImage: `url(${Background})`, height: '807px' }}
      >
        <div className="max-w-screen-lg mx-auto flex w-full h-full">
          <div className="relative w-1/3 py-20 px-10 mx-0 my-5 z-50 bg-black h-full">
            <h4 className="mb-2">ANGRY DOGE WANTS MOON NOW!!</h4>
            <h1 className="font-extrabold mb-5 primary-color text-6xl">
              ANGRY DOGE
            </h1>
            <p className="text-base leading-7 mb-5">
              Angry Doge Token has a vicious 10% transaction burn fee to launch
              us to the moon ASAP! 10% of each tx is locked into liquidity
              forever and is burnt from the supply. Join us now if you are
              willing to take this fierce journey to another DIMENSION!
            </p>
            <div className="bg-primary-color text-black flex mr-5">
              <a href="#" className="font-bold py-4 px-8">
                BUY ON PANCAKESWAP
              </a>
            </div>
          </div>
          <div
            className="w-2/3 px-5 mx-0 z-50 h-full my-5"
            style={{
              backgroundImage: `url(${Background_2})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
      </div>
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{ backgroundColor: '#010101', opacity: '.5' }}
      ></div>
    </div>
  );
};

export default Showcase;

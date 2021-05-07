import dog_1 from '../images/Angry1-4.png';
import dog_2 from '../images/Angry2-4.png';
import dog_3 from '../images/angry3-4.png';
import dog_4 from '../images/Angry4-4.png';

const Dogs = () => {
  return (
    <>
      <div className="bg-primary-color min-h-full" style={{ height: '532px' }}>
        <div className="gap-10 grid grid-cols-4 max-w-screen-lg mx-auto text-black">
          <div>
            <img src={dog_1} alt="" />
            <div className="text-center mt-6">
              <h3 className="text-xl font-bold">ANGRY DOGE</h3>
              <p>FOUNDER</p>
            </div>
          </div>
          <div>
            <img src={dog_2} alt="" />
            <div className="text-center mt-6">
              <h3 className="text-xl font-bold">ANGRY DOGE</h3>
              <p>FOUNDER</p>
            </div>
          </div>
          <div>
            <img src={dog_3} alt="" />
            <div className="text-center mt-6">
              <h3 className="text-xl font-bold">ANGRY DOGE</h3>
              <p>FOUNDER</p>
            </div>
          </div>
          <div>
            <img src={dog_4} alt="" />
            <div className="text-center mt-6">
              <h3 className="text-xl font-bold">ANGRY DOGE</h3>
              <p>FOUNDER</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dogs;

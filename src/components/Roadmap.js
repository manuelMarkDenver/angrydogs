import roadmap from '../images/RoadMap-4-1024x1024.png';

const Roadmap = () => {
  return (
    <div className="w-full pt-16 pr-5 pb-8 pl-5" style={{ color: '#14171c' }}>
      <div className="flex flex-col flex-wrap items-center justify-center pb-10 max-w-screen-xl mx-auto text-black font-bold">
        <span className="text-white">1.1</span>
        <h2 className="primary-color text-8xl mb-20 p-5">ROADMAP</h2>
        <img src={roadmap} alt="" />
      </div>
    </div>
  );
};

export default Roadmap;

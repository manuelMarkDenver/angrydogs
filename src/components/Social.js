const Social = () => {
  return (
    <div>
      <div
        className="w-full pt-16 pr-5 pb-0 pl-5 bg-primary-color"
        style={{ height: '154px' }}
      >
        <div className="flex flex-row flex-wrap items-center justify-center max-w-screen-xl mx-auto">
          <div
            style={{ backgroundColor: '#0f5' }}
            className="mr-10 cursor-pointer p-5 text-black"
          >
            <i className="fas fa-fw fa-chart-line mr-2"></i>
            LIVE CHART
          </div>
          <div
            style={{ backgroundColor: '#010101' }}
            className="mr-10 cursor-pointer p-5"
          >
            <i className="fas fa-fw fa-file-contract mr-2"></i>CONTRACT
          </div>
          <div
            style={{ backgroundColor: '#00bfff' }}
            className="mr-10 cursor-pointer p-5"
          >
            <i className="fab fa-fw fa-twitter mr-2"></i>TWITTER
          </div>
          <div
            style={{ backgroundColor: '#ffffff' }}
            className="text-black mr-10 cursor-pointer p-5"
          >
            <i className="fas fa-fw fa-comment-dots text-black mr-2"></i>
            TELEGRAM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;

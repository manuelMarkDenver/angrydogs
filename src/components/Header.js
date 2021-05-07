import logo from '../images/Logo2-3.png';

const Header = () => {
  return (
    <header>
      <div className="w-full">
        <div className="flex items-center justify-between leading-6 max-w-screen-xl mx-auto my-8">
          <div>
            <a href="/">
              <img
                src={logo}
                className="cursor-pointer"
                alt="logo"
                style={{ maxWidth: '200px' }}
              />
            </a>
          </div>
          <ul className="flex">
            <li className="nav-link mr-5 cursor-pointer">Home</li>
            <li className="nav-link cursor-pointer">Whitepaper</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

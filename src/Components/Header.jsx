import logo from "../assets/images/more/logo1.png";
import background from "../assets/images/more/15.jpg";
import text from "../assets/images/more/Espresso Emporium.png"

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}
      className="w-full h-24 bg-cover bg-center flex gap-4 justify-center items-center">
          <img className="w-16" src={logo} alt="" />
          <img className="w-72" src={text} alt="" />
    </div>
  );
};

export default Header;

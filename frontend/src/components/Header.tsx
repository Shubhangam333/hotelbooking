import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-600 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-light">
          <Link to="/">HotelBooking</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex items-center bg-white rounded-lg px-3 text-red-600 font-bold hover:bg-orange-600 hover:text-white"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;

import { FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaAccusoft } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../hooks/UseCart";


const Dashboard = () => {
    const [cart] = UseCart()
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart />My Cart ({cart.length})</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaAccusoft></FaAccusoft>Add a Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><FaList></FaList>My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/order/salad"><FaSearch></FaSearch>Home</NavLink></li>
                </ul>
            </div>
            {/* navigation */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
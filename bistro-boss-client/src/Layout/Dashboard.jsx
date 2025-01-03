import { Rating } from "@smastrom/react-rating";
import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaAccusoft } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart />My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaAccusoft></FaAccusoft>Add a Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><FaList></FaList>My Bookings</NavLink></li>
                </ul>
            </div>
            {/* navigation */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
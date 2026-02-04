import { useState } from 'react';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLoginMutation } from '../../redux/api/users';
import { logout } from '../../redux/features/auth/authSlice';
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from 'react-icons/ai';

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLoginMutation();

  return (
    <div className='fixed bottom-10 left-120 transform translate-x-1/2 translate-y-1/2 z-50 bg-[#0f0f0f] border w-[30%] px-16 mb-8 rounded-2xl text-white'>
      <section className='flex justify-between items-center'>
        {/* Section 1 */}
        <div className='flex justify-center-items-center mb-4'>
          <Link
            to='/'
            className='flex items-center transition-transform  transform hover:translate-x-2'
          >
            <AiOutlineHome className='mr-2 mt-12' size={26} />
            <span className='hidden nav-item-name mt-12 text-white'>Home</span>
          </Link>

          <Link
            to='/movies'
            className='flex items-center transition-transform hover:translate-x-2 ml-4'
          >
            <MdOutlineLocalMovies className='mr-6 mt-12' size={26} />
            <span className='hidden nav-item-name mt-12 text-white'>SHOP</span>
          </Link>
        </div>

        {/* Section 2 */}

        <div className='relative'>
          <button
            onClick={toggleDropdown}
            className='text-gray-800 focus:outline-none'
          >
            {userInfo ? (
              <span className='text-white'>{userInfo.username}</span>
            ) : (
              <></>
            )}

            {/* {userInfo && (
              <svg 
            ) : ()} */}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navigation;

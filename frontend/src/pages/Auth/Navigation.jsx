import { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLoginMutation } from '../../redux/api/users';
import { logout } from '../../redux/slices/authSlice';

const Navigation = () => {
  return <div>Navigation</div>;
};

export default Navigation;

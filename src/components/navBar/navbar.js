import React from 'react';
import './navbar.css';
import Netflix from '../../assets/netflix_icon.svg';
import { Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const navBar = 'navBar';
	return (
		// <div className="navBar">
		<div className="h-10v absolute justify-between w-full bg-gradient-to-b from-gray-900 ">
			<div
				className={`flex justify-between items-center  bg-gradient-to-b from-bg-black bg-opacity-80 `}
			>
				<div className="flex space-x-3 justify-center">
					<div className="w-20 h-10 ">
						<Link to="/">
							<img src={Netflix} alt="" className="object-contain" />
						</Link>
					</div>
				</div>
				<div className="flex justify-center items-center   ">
					<Link to="/search">
						<IconButton disableFocusRipple disableRipple>
							<SearchIcon style={{ color: '#E50914' }} />
						</IconButton>
					</Link>
					<Link to="/favorites">
						<Button
							disableFocusRipple
							disableRipple
							style={{ color: '#E50914', fontSize: 13 }}
						>
							Faves
						</Button>
					</Link>
				</div>
			</div>
		</div>
		// </div>
	);
};
export default Navbar;

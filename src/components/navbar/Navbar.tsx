import React from 'react';
import './navbar.scss'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import {useDispatch} from "react-redux";
import {logout, showAddPopup} from "../../redux/actions";
import userImg from '../../assets/img/person-circle.svg'
import {useNavigate} from "react-router-dom";

function Navbar() {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(logout())
        navigate('/')
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className="navbar">
            <div onClick={() => {
                return dispatch(showAddPopup());
            }}>
                <div className="navbar__add-group">
                    <div className="navbar__circle">
                        +
                    </div>
                    <span className="navbar__add-text">Новая задача</span>
                </div>
            </div>
            <div className="navbar__user-block">
                <button className="navbar__btn" onClick={handleClick}>
                    <img src={userImg} width="50" height="50" alt="user"/>
                </button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <button className="navbar__logout-btn" onClick={handleLogout}>Выйти</button>
                </Popover>
            </div>
        </div>
    );
}

export default Navbar;

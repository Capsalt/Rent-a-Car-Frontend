import React from 'react'
import { Button, DropdownButton, Dropdown } from 'react-bootstrap'
import {
  FiUser,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { logout } from "../../store/user/userActions";
import * as alertify from "alertifyjs";

const UserMenu = () => {

    const { userState, dispatchUser } = useStore();
    const { user, isUserLogin } = userState;
    const navigate = useNavigate();

    const handleLogout = () => {
        alertify.confirm(
            "Logout",
            "Are you sure you want to logout",
            () => {
                dispatchUser(logout());
                localStorage.removeItem("token");
                navigate("/");
              },
              () => {
                  console.log("canceled");
              }
            
        )
            }

    return (
        <>
             {isUserLogin ? (
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={`${user.firstName} ${user.lastName}`}
                    size="sm"
                    align="end"
                  >
                    <Dropdown.Item as={Link} to="/reservations">Reservations</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    
                  </DropdownButton>
                ) : (
                  <Button as={Link} size="sm" to="/login">
                    <FiUser /> Login
                  </Button>
                )}
        </>
    )
}

export default UserMenu
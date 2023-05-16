import { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const UpdateAccountDropdown = ({ 
    setChangeUsername, 
    setChangePassword, 
    setChangeEmail, 
    setDeleteAccount
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <Dropdown 
            isOpen={dropdownOpen} 
            toggle={() => setDropdownOpen(!dropdownOpen)}
            group
        >   
            <DropdownToggle 
                caret
                color='success' 
                className='rounded-0 btn-sm'
            >
                Actions
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => {
                    setChangeUsername(true);
                    setChangePassword(false);
                    setChangeEmail(false);
                    setDeleteAccount(false);
                }}>
                    Change Username
                </DropdownItem>
                <DropdownItem onClick={() => {
                    setChangeUsername(false);
                    setChangePassword(false);
                    setChangeEmail(true);
                    setDeleteAccount(false);
                }}>
                    Change Email
                </DropdownItem>
                <DropdownItem onClick={() => {
                    setChangeUsername(false);
                    setChangePassword(true);
                    setChangeEmail(false);
                    setDeleteAccount(false);
                }}>
                    Change Password
                </DropdownItem>
                <DropdownItem onClick={() => {
                    setChangeUsername(false);
                    setChangePassword(false);
                    setChangeEmail(false);
                    setDeleteAccount(true);
                }}>
                    Delete Account
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default UpdateAccountDropdown;
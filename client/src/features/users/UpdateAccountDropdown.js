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
            className='mb-3 w-25 mx-auto'
        >   
            <DropdownToggle 
                caret
                color='success' 
                className='rounded-0 btn-sm'
            >
                Actions
            </DropdownToggle>
            <DropdownMenu className='rounded-0 w-100'>
                <DropdownItem className='py-2' onClick={() => {
                    setChangeUsername(true);
                    setChangePassword(false);
                    setChangeEmail(false);
                    setDeleteAccount(false);
                }}>
                    Change Username
                </DropdownItem>
                <DropdownItem className='py-2' onClick={() => {
                    setChangeUsername(false);
                    setChangePassword(false);
                    setChangeEmail(true);
                    setDeleteAccount(false);
                }}>
                    Change Email
                </DropdownItem>
                <DropdownItem className='py-2' onClick={() => {
                    setChangeUsername(false);
                    setChangePassword(true);
                    setChangeEmail(false);
                    setDeleteAccount(false);
                }}>
                    Change Password
                </DropdownItem>
                <DropdownItem className='py-2' onClick={() => {
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
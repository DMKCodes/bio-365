import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../features/users/userSlice';
import { useRefreshMutation } from '../features/users/authApiSlice';
import usePersist from '../hooks/usePersist';
import ToastNotification from '../components/ToastNotification';

const PersistLogin = () => {
    const [persist, ] = usePersist();
    const token = useSelector(selectToken);

    const [isError, setIsError] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    
    const [refresh] = useRefreshMutation();

    const handleCloseToast = () => {
        setIsError(null);
    };

    useEffect(() => {
        if (!token && persist) {
            const verifyRefreshToken = async () => {
                try {
                    await refresh().unwrap();
                } catch (error) {
                    setIsError(true);
                    setErrMsg('Your login could not be retrieved. Please log in again.');
                }
            }

            verifyRefreshToken();
        }
    }, [token, persist, refresh]);

    return isError ? <ToastNotification message={errMsg} isError={isError} onClose={handleCloseToast}  /> : null;
};

export default PersistLogin;
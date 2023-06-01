import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../features/users/userSlice';
import { useRefreshMutation } from '../features/users/authApiSlice';
import usePersist from '../hooks/usePersist';

const PersistLogin = () => {
    const [persist, ] = usePersist();

    const token = useSelector(selectToken);
    
    const [refresh] = useRefreshMutation();

    useEffect(() => {
        if (!token && persist) {
            const verifyRefreshToken = async () => {
                try {
                    await refresh().unwrap();
                } catch (error) {
                    console.log(error);
                }
            }

            verifyRefreshToken();
        }
    }, [token, persist, refresh]);

    return null;
};

export default PersistLogin;
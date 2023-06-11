import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useSelectedClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClasses?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data.data;
        },
    })

    return [selectedClasses, refetch]

}
export default useSelectedClasses;
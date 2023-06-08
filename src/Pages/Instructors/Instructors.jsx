
import usePopularInstructors from '../../hooks/usePopularInstructors';
import { RotatingLines } from 'react-loader-spinner';
const Instructors = () => {

    const [instructors, loading] = usePopularInstructors();
   
    if ( loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
            </div>
        );
    }

    return (
        <div className="overflow-x-auto pb-10">
            <p className="text-center text-2xl pt-5">All Instructors List</p>
            <br />
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {instructors.map((instructor, index) => (
                        <tr key={instructor._id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">{instructor.name}</td>
                            <td className="px-4 py-2">Not Available</td>
                            <td className="px-4 py-2">Not Available</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Instructors;

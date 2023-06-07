import { useQuery } from "@tanstack/react-query";

const usePopularClass = () => {
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            const data = await res.json();

            // Sort classes based on the number of students in descending order
            const sortedClasses = data.sort((a, b) => b.numberOfStudents - a.numberOfStudents);

            // Limit the classes to 6
            const limitedClasses = sortedClasses.slice(0, 6);

            return limitedClasses;
        }
    });

    return [classes, loading, refetch];
}

export default usePopularClass;

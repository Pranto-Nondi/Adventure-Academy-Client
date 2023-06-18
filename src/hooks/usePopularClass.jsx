import { useQuery } from "@tanstack/react-query";

const usePopularClass = () => {
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-phograpy-school-server.vercel.app/classes');
            const data = await res.json();

            // Sort classes based on the number of students in descending order
            // const sortedClasses = data.sort((a, b) => b.numberOfStudents - a.numberOfStudents);
            // console.log(sortedClasses)

            // Limit the classes to 6
            // const limitedClasses = sortedClasses.slice(0, 6);

            return data;
        }
    });

    return [classes, loading, refetch];
}

export default usePopularClass;

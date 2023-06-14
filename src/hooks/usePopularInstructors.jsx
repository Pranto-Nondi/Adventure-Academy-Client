import { useQuery } from "@tanstack/react-query";

const usePopularInstructors = () => {
    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-phograpy-school-server.vercel.app/instructors');
            const data = await res.json();

            // Sort classes based on the number of students in descending order
            // const sortedInstructors = data.sort((a, b) => b.numberOfStudents - a.numberOfStudents);

            // Limit the classes to 6
            // const limitedInstructors = sortedInstructors.slice(0, 6);

            return data;
        }
    });

    return [instructors, loading, refetch];
}

export default usePopularInstructors;

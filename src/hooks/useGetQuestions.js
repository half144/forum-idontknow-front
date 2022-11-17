import { useQuery } from "react-query";
import { api } from "../api/api";

const useGetQuestions = (href) => {
  const fetchAllQuestions = async () => {
    try {
      const { data } = await api.get(`/forum${href}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return useQuery(["questions", href], fetchAllQuestions, {
    keepPreviousData: false,
  });
};

export default useGetQuestions;

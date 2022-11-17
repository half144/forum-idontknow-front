import { api } from "../api/api";
import { useMutation, useQueryClient } from "react-query";

const useSolveQuestion = () => {
  const queryClient = useQueryClient();

  const setSolve = async ({ questionId, awnserId, user }) => {
    try {
      await api.put(`/forum/solve/${questionId}/${awnserId}`, {
        user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return useMutation(setSolve, {
    onSuccess: () => {
      queryClient.invalidateQueries(["questions"]);
    },
  });
};

export default useSolveQuestion;

import { api } from "../api/api";
import { useMutation, useQueryClient } from "react-query";

const useCreateAwnser = (questionId) => {
  const queryClient = useQueryClient();

  const createQuestion = async (data) => {
    try {
      const res = api.post(`/forum/${questionId}`, data);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return useMutation(createQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries(["questions", `/question/${questionId}`]);
    },
  });
};

export default useCreateAwnser;

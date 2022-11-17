import { api } from "../api/api";
import { useMutation, useQueryClient } from "react-query";

const useCreateQuestion = () => {
  const queryClient = useQueryClient();

  const createQuestion = async (data) => {
    try {
      const res = api.post("/forum/create", data);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return useMutation(createQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries(["questions"]);
    },
  });
};

export default useCreateQuestion;

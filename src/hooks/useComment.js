import { api } from "../api/api";
import { useMutation, useQueryClient } from "react-query";

const useComment = (questionId) => {
  const queryClient = useQueryClient();

  const handleComment = async ({
    questionId,
    awnserId,
    comment: awnser,
    user,
  }) => {
    try {
      console.log(awnser);
      await api.post(`/forum/${questionId}/${awnserId}`, {
        user,
        awnser,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return useMutation(handleComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["questions", `/question/${questionId}`]);
    },
  });
};

export default useComment;

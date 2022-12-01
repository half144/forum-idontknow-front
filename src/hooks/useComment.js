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
    onMutate: async newTodo => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey: ["questions", `/question/${questionId}`] })

    // Snapshot the previous value
    const previousTodos = queryClient.getQueryData(["questions", `/question/${questionId}`])

    // Optimistically update to the new value
    queryClient.setQueryData(["questions", `/question/${questionId}`], (old) => [...old, newTodo])

    // Return a context object with the snapshotted value
    return { previousTodos }
  },
   onError: (err, newTodo, context) => {
    queryClient.setQueryData(["questions", `/question/${questionId}`], context.previousTodos)
  },
   onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ["questions", `/question/${questionId}`] })
  },
  });
};

export default useComment;

import useGetQuestions from "../../hooks/useGetQuestions"
import QuestionCard from "../QuestionCard"
import { QuestionsContainer } from "./styles"
import { useHref } from "react-router-dom"


const Questions = () => {
    const href = useHref()
    const { data } = useGetQuestions(href)
    return (
        <QuestionsContainer>
            {data?.map(question => (
                <QuestionCard key={question._id} question={question} />
            ))}
        </QuestionsContainer>
    )
}

export default Questions
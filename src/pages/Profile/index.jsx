import { useAuth } from "../../context/AuthContext"
import useGetQuestions from "../../hooks/useGetQuestions"
import { Container, HeaderProfile, HeaderQuestions, QuestionsContainer } from "./styles"
import { FaWrench } from "react-icons/fa"
import QuestionCard from "../../components/QuestionCard"


const Profile = () => {
    const { user } = useAuth()
    const { data } = useGetQuestions(`/${user._id}`)

    return (
        <Container>
            <HeaderProfile>
                <h3>Olá, {user.username}.</h3>
                <FaWrench />
            </HeaderProfile>
            <QuestionsContainer>
                <HeaderQuestions>
                    <h3>Seus posts</h3>
                </HeaderQuestions>
                {data?.length ? data?.map(question => (
                    <QuestionCard key={question._id} question={question} />
                )) : <p>Você ainda não fez nenhum post</p>}
            </QuestionsContainer>
        </Container>
    )
}

export default Profile
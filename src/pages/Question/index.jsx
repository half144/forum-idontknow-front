import { Awnser, AwnserContent, AwnsersQuestion, CommentsAwnser, Input, OwnerOptions, QuestionContainer, QuestionDesc, QuestionHeader, SendAwnser, SendComment, Title, Username } from "./style"
import { useParams } from "react-router-dom"
import useGetQuestions from "../../hooks/useGetQuestions"
import { useAuth } from "../../context/AuthContext"
import useCreateAwnser from "../../hooks/useCreateAwnser"
import { useMemo, useState } from "react"
import Button from "../../components/Button"
import useSolveQuestion from "../../hooks/useSolveQuestion"
import { BsCheckCircleFill } from "react-icons/bs"
import useComment from "../../hooks/useComment"

const Question = () => {
    const [data, setData] = useState()
    const [awnser, setAwnser] = useState("")
    const { id } = useParams()
    const { authenticated, user } = useAuth()
    const { data: questions } = useGetQuestions(`/question/${id}`)
    const { mutateAsync } = useCreateAwnser(id)
    const { mutateAsync: mutateAsyncSolve } = useSolveQuestion()
    const { mutateAsync: mutateAsyncComment } = useComment(id)

    const isSolved = useMemo(() => {
        if (questions?.solved) {
            const { awnsers } = questions
            const correctAwnser = awnsers.find(awnser => awnser.isCorrectAwnser)
            const awnserFilter = awnsers.filter(awnser => awnser != correctAwnser)
            awnserFilter.unshift(correctAwnser)
            questions.awnsers = awnserFilter
            setData(questions)
        } else {
            setData(questions)
        }
        return questions?.solved === true
    }, [questions])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await mutateAsync({ user: user._id, awnser, question: id }, { onSuccess: setAwnser("") })
    }

    const handleSolve = async (awnserId) => {
        try {
            await mutateAsyncSolve({ questionId: id, awnserId, user: user._id })
        } catch (error) {
            console.log(error)
        }
    }

    const handleComment = async (awnserId, e) => {
        e.preventDefault()
        const comment = e.target[0].value
        try {
            await mutateAsyncComment({ questionId: id, awnserId, comment, user: user._id }, { onSuccess: e.target[0].value = "" })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <QuestionContainer>
            <QuestionHeader>
                <Title>
                    <p>{data?.title}</p>
                    {data?.solved ? <BsCheckCircleFill color="green" /> : null}
                </Title>
                <QuestionDesc>
                    <p>{data?.question}</p>
                </QuestionDesc>
                <Username>
                    {"@" + data?.username}
                </Username>
            </QuestionHeader>
            <AwnsersQuestion>
                {data?.awnsers?.map(awnser => (
                    <>
                        <Awnser key={awnser._id}>
                            <AwnserContent>
                                {awnser?.isCorrectAwnser ? <BsCheckCircleFill color="green" /> : null}
                                <p>{awnser.awnser}</p>
                            </AwnserContent>
                            <Username>
                                {"@" + awnser.username}
                            </Username>
                            {user?._id === data?.user && !isSolved &&
                                (<OwnerOptions>
                                    <Button onClick={() => handleSolve(awnser._id)} risk={false}>
                                        Marcar como resposta
                                    </Button>
                                </OwnerOptions>)}
                        </Awnser>
                        <CommentsAwnser>
                            {awnser.comments?.map(comment => (
                                <Awnser key={comment._id}>
                                    <AwnserContent>
                                        <p>{comment.awnser}</p>
                                    </AwnserContent>
                                    <Username>
                                        {"@" + comment.username}
                                    </Username>
                                </Awnser>
                            ))}
                            {authenticated ?
                                <SendComment onSubmit={(e) => handleComment(awnser._id, e)}>
                                    <Input required placeholder="Responder" />
                                </SendComment> : null}
                        </CommentsAwnser>
                    </>
                ))}
            </AwnsersQuestion>
            {authenticated ?
                <SendAwnser onSubmit={handleSubmit}>
                    <Input placeholder="Responder" required onChange={e => setAwnser(e.target.value)} value={awnser} />
                </SendAwnser> : null}
        </QuestionContainer>
    )
}

export default Question
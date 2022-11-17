import { Description, QuestionArea, Title } from "./styles";
import { BsCheckCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const QuestionCard = ({ question }) => {
    return (
        <QuestionArea>
            <Link to={`/question/${question._id}`}>
                <Title>
                    {question.title}
                    {question.solved ? <BsCheckCircleFill color="green" /> : null}
                </Title>
                <Description>
                    {question.question}
                </Description>
            </Link>
        </QuestionArea>
    );
};

export default QuestionCard;

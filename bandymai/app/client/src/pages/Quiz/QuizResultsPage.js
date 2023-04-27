import { useLoaderData, json } from "react-router-dom";
import { getAuthToken } from "../../util/auth";
import { formatDateTime } from "../../util/quiz";
import QuestionCard from "../../components/Question/QuestionCard";

const QuizResultsPage = () => {
    const details = useLoaderData();
    const formattedDatetime = formatDateTime(details.createdAt);
    const questions = details.details;

    return (
        <div className="max-w-[1200px] mx-auto text-center">
            <p className="font-bold text-2xl">{details.quizSet.title}</p>
            <p className="text-yellow mb-8">
                Attempt made on {formattedDatetime} by{" "}
                <span className="font-bold">{details.user}</span>
            </p>

            <p className="font-semibold text-xl  bg-yellow text-white inline mx-auto p-4 rounded-md">
                Score: {details.score} / {questions.length}
            </p>

            <p className="italic mt-12">
                Any edits made to the questions of this quiz will not affect the
                results of this attempt.
            </p>
            {questions && (
                <ul className="mt-8 space-y-5 md:space-y-8">
                    {questions.map((question, index) => {
                        return (
                            <li key={question._id}>
                                <QuestionCard
                                    key={question._id}
                                    data={question.questionDetails}
                                    name={`question${index}`}
                                    disabled={true}
                                    remark={question.remark}
                                    userAnswer={question.userAnswer}
                                    type="viewing"
                                    index={index}
                                />
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default QuizResultsPage;

export const resultsLoader = async ({ params }) => {
    const attemptId = params.attemptId;
    const token = getAuthToken();

    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_API}get_attempt_details/${attemptId}`,
        {
            method: "GET",
            headers: { Authorization: "Bearer " + token },
        }
    );

    if (response.status === 404 || response.status === 401) {
        throw response;
    }

    if (!response.ok) {
        throw json(
            {
                message:
                    "There has been an internal server error. We'll try to fix it ASAP...",
            },
            { status: 500 }
        );
    }

    const results = await response.json();
    window.scrollTo(0, 0);
    return results.attempt;
};

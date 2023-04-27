import { useState } from "react";
import {
    useLoaderData,
    useRouteLoaderData,
    useParams,
    json,
    useNavigate,
} from "react-router-dom";
import { customToast } from "../../util/customToast";
import QuizDescriptionForm from "./QuizDescriptionForm";
import Modal from "../UI/Modal";

const EditQuizForm = () => {
    const quizData = useLoaderData();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const token = useRouteLoaderData("root");
    const { displayId } = useParams();
    const navigate = useNavigate();

    const deleteModalVisibilityHandler = (visibility) => {
        setShowDeleteModal(visibility);
    };

    const deleteQuizHandler = async () => {
        setShowDeleteModal(false);

        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_API}delete_quiz/${displayId}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );

        if (response.status === 404) {
            throw json(
                { message: "That quiz doesn't exist." },
                { status: 404 }
            );
        }
        if (!response.ok) {
            throw json({ message: "Failed to delete quiz." }, { status: 500 });
        }

        customToast("success", "Quiz successully deleted");
        navigate("/home");
    };

    return (
        <>
            {showDeleteModal && (
                <Modal
                    onAction={deleteQuizHandler}
                    onCancel={deleteModalVisibilityHandler}
                    message="Are you sure you want to delete this quiz?"
                    actionBtn="Yes"
                />
            )}
            <QuizDescriptionForm
                title="Edit quiz set"
                quizData={quizData}
                method="PATCH"
                onDelete={() => {
                    deleteModalVisibilityHandler(true);
                }}
            />
        </>
    );
};

export default EditQuizForm;

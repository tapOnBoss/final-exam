import { useRouteError, Link } from "react-router-dom";
import { getAuthToken } from "../util/auth";
import ParticlesBackground from "../components/UI/ParticlesBackground";
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";

const ErrorPage = ({ noNavBar }) => {
    const error = useRouteError();
    const token = getAuthToken();

    let message = "";
    if (error instanceof TypeError) {
        message =
            "There has been an internal server error. We'll try to fix it ASAP...";
    } else if (error.status === 404) {
        message = "Page not found.";
    }

    if (error.data && error.data.message) {
        message = error.data.message;
    }

    return (
        <>
            <ParticlesBackground>
                {!noNavBar && (
                    <header>
                        <NavBar tokenProp={token} />
                    </header>
                )}

                <main>
                    <div className="text-center my-20 px-4">
                        <p className="text-3xl lg:text-4xl font-bold mb-1">
                            An error occured!
                        </p>
                        <p className="text-base mb-4">{message}</p>
                        <Link className="btn" to="/home">
                            Go Home
                        </Link>
                    </div>
                </main>
                <Footer />
            </ParticlesBackground>
        </>
    );
};

export default ErrorPage;

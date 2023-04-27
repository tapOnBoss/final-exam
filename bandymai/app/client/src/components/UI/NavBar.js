import React, { useState, useEffect } from "react";
import {
    NavLink,
    Link,
    useLocation,
    useRouteLoaderData,
} from "react-router-dom";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { logoutUser } from "../../util/auth";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function NavBar({ tokenProp }) {
    const [openNav, setOpenNav] = useState(false);
    const location = useLocation();
    const [path, setPath] = useState();
    const [btnName, setBtnName] = useState();
    const token = useRouteLoaderData("root");

    useEffect(() => {
        if (location.pathname === "/login") {
            setPath("/signup");
            setBtnName("Sign up");
        } else {
            setPath("/login");
            setBtnName("Sign in");
        }
    }, [location.pathname]);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navbarCollapseHandler = () => {
        if (window.innerWidth < 960) {
            setOpenNav(false);
        }
    };

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-light-brown lg:gap-3">
            <Typography as="li" variant="small" className="p-1 font-normal">
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        isActive ? "active-nav-link" : ""
                    }
                    onClick={navbarCollapseHandler}
                >
                    Home
                </NavLink>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
                <NavLink
                    to="/create_quiz"
                    className={({ isActive }) =>
                        isActive ? "active-nav-link" : ""
                    }
                    onClick={navbarCollapseHandler}
                >
                    Create a new quiz
                </NavLink>
            </Typography>

            <li>
                <Button
                    onClick={logoutUser}
                    variant="filled"
                    size="sm"
                    fullWidth
                    ripple={false}
                    type="submit"
                    className=" btn bg-yellow shadow-none hover:bg-yellow lg:bg-light-brown  text-brown hover:shadow-none mt-1 lg:mt-0"
                >
                    <span>Logout</span>
                </Button>
            </li>
        </ul>
    );

    return (
        <>
            <Navbar
                className="h-max max-w-full p-2 px-5 xl:px-8 lg:py-4 bg-brown-darker mx-auto md:rounded-md md:w-[90%]"
                shadow={false}
                blurred={false}
                fullWidth={true}
            >
                <div className="flex items-center justify-between text-light-brown">
                    <Typography
                        as="a"
                        href="/"
                        className="mr-4 cursor-pointer py-1.5 font-bold"
                    >
                        <h2>brain gain</h2>
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className=" hidden lg:block">
                            {(token || tokenProp) && navList}
                        </div>
                        {!token && !tokenProp && (
                            <Link className="btn btn--link" to={path}>
                                {btnName}
                            </Link>
                        )}
                        {(token || tokenProp) && (
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <XMarkIcon className="h-6 w-6 text-light-brown" />
                                ) : (
                                    <Bars3Icon className="h-6 w-6 text-light-brown" />
                                )}
                            </IconButton>
                        )}
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {(token || tokenProp) && navList}
                </MobileNav>
            </Navbar>
        </>
    );
}

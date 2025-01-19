import { Link } from "react-router-dom";
import { useAuth } from "../../states/AuthProvier";
import { useMutation } from "@apollo/client";
import { UN_AUTHENTICATE_USER } from "../../graphql/mutations/auth";

export const HomeNavbar = () => {
    const { user } = useAuth();

    return (
        <div className="navbar bg-base-200 border border-b-gray-400 shadow">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">TRANSPORT SYSTEM</a>
            </div>
            <div className="flex-none">
                {user ? (
                    <UserMenu />
                ) : (
                    <Link to="/auth/login">
                        <button className="btn btn-outline btn-error">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

function UserMenu() {
    const { user, setUser } = useAuth();
    const [unauthenticateUser, { data, loading }] =
        useMutation(UN_AUTHENTICATE_USER);

    const logout = async () => {
        const response = await unauthenticateUser();
        if (response.data.unauthenticateUser.success) {
            setUser(null);
        }
    };

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-10 rounded-full">
                    <img alt="User" src={user.image.publicUrl} />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                <li>
                    <a className="justify-between">Profile</a>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <li>
                    <a onClick={logout}>
                        {loading ? "Logging out..." : "Logout"}
                    </a>
                </li>
            </ul>
        </div>
    );
}

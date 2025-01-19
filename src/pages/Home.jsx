import { useAuth } from "../states/AuthProvier";

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh]">
            <h1 className="text-4xl font-bold">
                Welcome {user?.name || "Guest"} to transport system
            </h1>
        </div>
    );
};

export default Home;

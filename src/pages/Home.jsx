import { useAuth } from "../states/AuthProvier";

export default function Home() {
    const { user } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh]">
            <h1 className="text-4xl font-bold">
                Welcome dear {user?.role}, {user?.name || "Guest"} to transport
                system
            </h1>
        </div>
    );
}

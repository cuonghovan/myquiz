import { useAuth } from "react-oidc-context";

export const LogoutButton = () => {
    const auth = useAuth();
    const signOutRedirect = () => {
        auth.removeUser();
        const clientId = "5g33ikdqb1r85a5lqt7qen0gll";
        const logoutUri = "http://localhost:5173";
        const cognitoDomain = "https://cuonghv-quiz-app.auth.us-east-1.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    return (
        <button onClick={() => signOutRedirect()}>Sign out</button>
    )
}
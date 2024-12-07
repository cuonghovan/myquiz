import { ReactNode } from "react";
import { LogoutButton } from "../PrivateRoute/LogoutButton";

interface CommonLayoutProps {
    children: ReactNode;
}

export const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => (
    <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <h1 className="text-2xl font-bold text-indigo-600">MyQuiz</h1>
                    <div className="flex items-center">
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </nav>
        <div className="py-10">
            <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4 py-8 sm:px-0">
                        <div className="bg-white shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
)
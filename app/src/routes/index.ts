import { SignInPage } from "../pages/SignInPage/SignInPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { QuizPage } from "../pages/QuizPage/QuizPage";
import { LeaderBoardPage } from "../pages/LeaderBoardPage/LeaderBoardPage";

export const routes = [
    { path: '/signin', component: SignInPage },
    { path: '/', component: HomePage, isPrivate: true },
    { path: '/quiz/:quizId', component: QuizPage, isPrivate: true },
    { path: '/leaderboard/:quizId', component: LeaderBoardPage, isPrivate: true },
];

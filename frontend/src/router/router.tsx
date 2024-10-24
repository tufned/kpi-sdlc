import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../App.tsx";
import {routes} from "../constants/routes.ts";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import OwnerPage from "../pages/OwnerPage/OwnerPage.tsx";
import VetPage from "../pages/VetPage/VetPage.tsx";
import CaretakerPage from "../pages/CaretakerPage/CaretakerPage.tsx";
import MedicalBookPage from "../pages/MedicalBookPage/MedicalBookPage.tsx";
import PetsPage from "../pages/PetsPage/PetsPage.tsx";
import PetsCreatePage from "../pages/PetsCreatePage/PetsCreatePage.tsx";
import RecommendationsPage from "../pages/RecommendationsPage/RecommendationsPage.tsx";
import RecommendationsCreatePage from "../pages/RecommendationsCreatePage/RecommendationsCreatePage.tsx";
import ProceduresPage from "../pages/ProceduresPage/ProceduresPage.tsx";
import ProceduresCreatePage from "../pages/ProceduresCreatePage/ProceduresCreatePage.tsx";


const routerConfig = (
  <Route>
    <Route element={<App/>}>
      <Route path={routes.home.route} element={<HomePage/>}/>
      <Route path={routes.owner.route} element={<OwnerPage/>}/>
      <Route path={routes.vet.route} element={<VetPage/>}/>
      <Route path={routes.caretaker.route} element={<CaretakerPage/>}/>
      <Route path={routes.medicalBook.route} element={<MedicalBookPage/>}/>
      <Route path={routes.pets.route} element={<PetsPage/>}/>
      <Route path={routes.pets.create.route} element={<PetsCreatePage/>}/>
      <Route path={routes.recommendations.route} element={<RecommendationsPage/>}/>
      <Route path={routes.recommendations.create.route} element={<RecommendationsCreatePage/>}/>
      <Route path={routes.procedures.route} element={<ProceduresPage/>}/>
      <Route path={routes.procedures.create.route} element={<ProceduresCreatePage/>}/>
    </Route>

    <Route path={routes.login.route} element={<LoginPage/>}/>
  </Route>
)

export const router = createBrowserRouter(createRoutesFromElements(routerConfig));

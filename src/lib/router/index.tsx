import { Route, Routes } from "react-router-dom";
import { SignInPage } from "../../page/SignInPage";
import * as PAGE from "./constant";
import { PropsWithChildren } from "react";
import { SignUpPage } from "../../page/SignUpPage";
import { MainPage } from "../../page/MainPage";
import { CataloguePage } from "../../page/CataloguePage";
import { CatalogueDetailPage } from "../../page/CatalogueDetailPage";

export function Router(props: PropsWithChildren) {
  return (
    <Routes>
      <Route path={PAGE.MAIN} element={<MainPage />} />
      <Route path={PAGE.SIGN_IN} element={<SignInPage />} />
      <Route path={PAGE.SIGN_UP} element={<SignUpPage />} />
      <Route path={PAGE.CATALOGUE} element={<CataloguePage />} />
      <Route path={PAGE.CATALOGUE_DETAIL} element={<CatalogueDetailPage />} />
      {props.children}
    </Routes>
  );
}

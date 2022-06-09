import React from "react";
import { LoadingState } from "../reducers/loadingGenerator";
import "../App.scss";

type Loading = {
  loading: LoadingState;
  error: string;
};

function WithLoading({
  loading,
  error,
  children,
}: React.PropsWithChildren<Loading>) {
  switch (loading) {
    case LoadingState.LOADING:
      return <div>Cargando...</div>;
    case LoadingState.ERROR:
      return <div className="Error">{error}</div>;
    default:
      return <>{children}</>;
  }
}

export default WithLoading;

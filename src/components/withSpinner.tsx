import React, { FunctionComponent, useEffect } from "react";
import Spinner from "./Spinner";

interface withSpinnerProps {
  isLoading: boolean;
}

const WithSpinner = <P extends object>(
  WrappedComponent: FunctionComponent<P>
) => {
  return ({ isLoading, ...otherProps }: P & withSpinnerProps) => {
    useEffect(() => {
      setTimeout(() => console.log("loagind"), 2000);
    }, []);

    return isLoading ? (
      <Spinner />
    ) : (
      <WrappedComponent {...(otherProps as P)} />
    );
  };
};

export default WithSpinner;

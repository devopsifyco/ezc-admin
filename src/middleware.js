import { useEffect } from "react";
import { useRouter } from "next/router";
import { isLoggedIn } from "pages/api/auth/login";

const middlewareAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn()) {
        router.push('/login');
      }
    }, [router]);

    return isLoggedIn() ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default middlewareAuth;

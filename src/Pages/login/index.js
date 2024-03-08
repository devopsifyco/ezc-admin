import React, {useState} from "react";
import Link from "next/link";
import FullButton from "@aio/components/FullButton";
import Input from "@aio/components/Input";
import Logo from "@aio/components/Logo";
import styles from "./login.module.css";
import { API } from "pages/api";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const {name, value} = e.target;
    if (name == 'email') {
      setEmail(value)
    } else (
      setPassword(value)
    )
  };

  const handleLogin = async() => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
      });

      if (res.ok) {
        const data = await res.json();
        const userToken = data.accessToken;

        //handle storage toke
        localStorage.setItem('userToken', userToken);

        //navigate Home
        router.push('/');
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
      <div className={styles.container}>
        <section className={styles["login-container"]}>
          <div className={styles["brand-container"]}>
            <Logo />
            <div className={styles['logo-explain']}>EZChallenge Dashboard</div>
          </div>

          {/* login form */}
          <div className={styles["form-container"]}>
            <div className="t-center" style={{ margin: "15px 0" }}>
              <div className={styles["sm-brand-container"]}>
                <Logo />
              </div>
              <h1>Login</h1>
              <p>Please enter email and password to login</p>
            </div>
            <div>
              <Input
                inputContainerStyle={{ padding: "15px 30px", }}
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                label={"Email"}
              />
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                label={"Email"}
              />
              <FullButton label={"Login"} onClickHandler={handleLogin} />
              {loading && <p className="tc-grey t-center">Loading...</p>}

              <p className="tc-grey t-center">
                Dont have an account?{" "}
                <Link className="link" href={`/signup`}>Signup for free</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Login;

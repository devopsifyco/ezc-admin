"use client"

import React, {useState} from "react";
import Link from "next/link";
import FullButton from "@EZChallenge/components/FullButton";
import Input from "@EZChallenge/components/Input";
import useLogo from "@EZChallenge/components/Logo";
import styles from "./login.module.css";
import { API } from "pages/api";
import { useRouter } from "next/router";
import { login } from "pages/api/auth/login";
import CircularProgress from '@mui/material/CircularProgress';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const {Logo} = useLogo();
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
      const res = await fetch(`${API}/admin-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
      });

      if (res.ok) {
        const {message, accessToken, refreshToken} = await res.json();

        login({accessToken, refreshToken});
        setMessage(message);

        router.push('/');
      } else {
        const err = await res.json();
        setMessage(err.message);

        if (res.status === 403) {
          setMessage('Unauthorized access to admin page', )
        }
      }

    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
      <div className={styles.container}>
        <section className={styles["login-container"]}>
          <div className={styles["brand-container"]}>
            <Logo />
            <div className={styles['logo-explain']}>Welcome to EZChallenge</div>
          </div>

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
                label={"Password"}
              />
              <FullButton label={"Login"} onClickHandler={handleLogin} />
              {loading ? (
                <div className="tc-grey t-center">
                  <CircularProgress style={{ color: '#216C53'}} />
                </div>
              ) : (
                message && (
                  <div style={{ color: 'red', padding: "15px 30px" }}>{message}</div>
                )
              )}

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

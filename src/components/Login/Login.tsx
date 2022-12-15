import { ChangeEvent, useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="text-4xl">INI BUAT LOGIN</div>
      <div className="flex flex-row gap-4 mt-4">
        <div className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={emailChange}
          />
          <input
            type="password"
            name=""
            id="pass"
            placeholder="password"
            onChange={passwordChange}
          />
        </div>
        <button>Login</button>
      </div>
    </>
  );
}

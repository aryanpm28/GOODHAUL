// GOODHAUL: Login form (UI demo only)

import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useToast } from "../hooks/useToast";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address";
    if (form.password.length < 6) nextErrors.password = "Password must be at least 6 characters";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      showToast("This is a UI-only demo — no account was created.");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink mb-2">Log in</h1>
      <p className="text-ink-soft text-sm mb-8">Welcome back. Enter your details to continue.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="login-note">
        <Input
          id="email"
          type="email"
          label="Email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          error={errors.email}
        />

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            autoComplete="current-password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            error={errors.password}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-4 top-9 text-xs font-mono text-ink-soft hover:text-ink"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Log in
        </Button>

        <p id="login-note" className="text-xs text-ink-faint text-center font-mono">
          This is a frontend-only demo. No real account is created.
        </p>
      </form>

      <p className="text-sm text-ink-soft text-center mt-8">
        New here?{" "}
        <Link to="/register" className="text-plum font-medium hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default Login;

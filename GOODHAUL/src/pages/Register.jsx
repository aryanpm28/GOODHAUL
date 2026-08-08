// GOODHAUL: Register form (UI demo only)

import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useToast } from "../hooks/useToast";

function Register() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useToast();

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address";
    if (form.password.length < 6) nextErrors.password = "Password must be at least 6 characters";
    if (form.confirmPassword !== form.password) nextErrors.confirmPassword = "Passwords don't match";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      showToast("This is a UI-only demo — no account was created.");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink mb-2">Create an account</h1>
      <p className="text-ink-soft text-sm mb-8">Join to save your wishlist and check out faster.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <Input
          id="fullName"
          label="Full name"
          autoComplete="name"
          value={form.fullName}
          onChange={handleChange("fullName")}
          error={errors.fullName}
        />
        <Input
          id="email"
          type="email"
          label="Email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
        />

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange("password")}
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

        <Input
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          label="Confirm password"
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
          error={errors.confirmPassword}
        />

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Create account
        </Button>

        <p className="text-xs text-ink-faint text-center font-mono">
          This is a frontend-only demo. No real account is created.
        </p>
      </form>

      <p className="text-sm text-ink-soft text-center mt-8">
        Already have an account?{" "}
        <Link to="/login" className="text-plum font-medium hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}

export default Register;

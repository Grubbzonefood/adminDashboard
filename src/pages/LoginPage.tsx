import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "@/Config/FirebaseConfig";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(auth, email, password)
  localStorage.setItem("grubbzone_authToken", await user.user.getIdToken());
  navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8">
        {/* Logo */}
        <div className="w-40 h-40 mx-auto">
          <img
            src="/pwa-512x512.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold text-center">
          GRuBBzone Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full mt-4">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

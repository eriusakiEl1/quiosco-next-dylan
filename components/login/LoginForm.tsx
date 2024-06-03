"use client"
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="space-y-2">
                <label className="text-slate-800" htmlFor="email">Correo:</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Escriba su correo electrónico"
                />
            </div>

            <div className="space-y-2">
                <label className="text-slate-800" htmlFor="password">Contraseña:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Escriba su contraseña"
                />
            </div>
        </>
    );
}

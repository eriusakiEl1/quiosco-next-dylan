import { prisma } from "@/src/lib/prisma";
import { User } from "@prisma/client";


export default async function LoginCreateForm() {
    return (
        <>
            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="name"
                >Nombre:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Escriba su nombre"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="email"
                >Email:</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Escriba su Email"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="pass"
                >Contraseña:</label>
                <input
                    id="pass"
                    type="password"
                    name="pass"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Escriba su contraseña"
                />
            </div>
        </>
    )
}
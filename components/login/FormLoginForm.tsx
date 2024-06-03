"use client";

import { LoginSchema } from "@/src/schema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { serchUser } from "@/action/validate-login-action";
import LoginCreateButton from "./LoginCreateButton";

export default function FormLoginForm({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    console.log("Formulario enviado");

    const data = {
      email: formData.get('email'),
      pass: formData.get('password'),
    };

    console.log("Datos del formulario:", data);

    const result = LoginSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message);
      });
      return;
    }

    console.log("Datos validados:", result.data);

    const response = await serchUser(result.data);

    if(response?.errors) {
            response.errors.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }

    console.log("Redirigiendo a /admin/products");
    toast.success('Iniciando Sesión');
    router.push('/admin/products');
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form className="space-y-5" action={handleSubmit}>
        {children}
        <input 
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          value="Iniciar Sesión"
        />
      </form>
      <LoginCreateButton />
    </div>
  );
}

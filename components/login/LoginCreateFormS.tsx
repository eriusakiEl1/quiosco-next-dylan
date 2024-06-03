"use client";
import { UserSchema } from "@/src/schema";
import LoginCreateForm from "@/components/login/LoginCreateForm";
import { toast } from "react-toastify";
import { createUser } from "@/action/create-user-action";
import { useRouter } from "next/navigation";

export default function LoginCreateFormS({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      pass: formData.get("pass"),
    };
    const result = UserSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    const response = await createUser(result.data);

    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    toast.success("Administrador Creado Correctamente");
    router.push("/login");
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form className="space-y-5" action={handleSubmit}>
        {children}
        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
                        uppercase font-bold cursor-pointer"
          value="Crear Usuario"
        />
      </form>
    </div>
  );
}

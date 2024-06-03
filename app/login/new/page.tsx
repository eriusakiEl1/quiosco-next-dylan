import LoginCreateForm from "@/components/login/LoginCreateForm";
import LoginCreateFormS from "@/components/login/LoginCreateFormS";
import Heading from "@/components/ui/Heading";

export default function NewLoginPage(){
    return (
      <>
        <h1 className="text-center mt-20 text-6xl font-black">Nuevo Administrador</h1>
        <LoginCreateFormS>
          <LoginCreateForm />
        </LoginCreateFormS>
      </>
    );
}
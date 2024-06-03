import LoginForm from "@/components/login/LoginForm";
import FormLoginForm from "@/components/login/FormLoginForm";
import NormalUserButton from "@/components/order/NormalUserButton";

export default function LoginPage() {
    return (
        <>
            <nav className="">
                <h1 className="text-center mt-20 text-6xl font-black">Login</h1>
            </nav>
            <FormLoginForm>
                <LoginForm />
            </FormLoginForm>
            <br></br>
            <br></br>
            <NormalUserButton/>
        </>
    );
}

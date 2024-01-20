"use client";
import { CredentialsForm } from "@/component/AuthProvider/forms/credentialsForm";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Login() {
    const session = useSession();
    console.log({ session });
    const { push } = useRouter();


    const handleGoogle = async () => {
        const res = await signIn("google");
        push("/");
        return res;
    };

    // const handleManualLogin = () => {
    //     try {
    //         console.log("coming");
    //         session.status = "authenticated";
    //         session.update({ user: "Paras Kumar", email: "paraskumar1@gmail.com", image: "https://google.com/image/paras_kumar" });

    //     } catch (err: any) {
    //         console.log("message", err.message);
    //     }
    // }


    useEffect(() => {
        if (session.status == "authenticated") {
            push("/");
        }
    }, [session]);


    return <div>
        {
            session.status == "authenticated" ?
                <button onClick={() => { return signOut() }}>{"Log Out"}</button>
                :
                <button onClick={handleGoogle}>{"Login with google"}</button>

        }
        <br />
        <CredentialsForm />
        {/* <button onClick={handleManualLogin}>{"Login Manually"}</button> */}
    </div>
}
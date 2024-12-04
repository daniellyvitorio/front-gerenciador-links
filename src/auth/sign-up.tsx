import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function SignUp() {
    return(
        <div className="p-16">
            <div className="flex flex-col justify-center w-96 gap-42">
                {/* parte 1 - titulo*/}
                <div className="flex flex-col text-center">
                    <h1 className="text-3x1 font-semibold">Cadastrar a sua conta</h1>
                </div>
                {/* parte q - formulario*/}
                <form className="">
                    <div className="">
                        <Label>Digite o seu nome</Label>
                        <Input type="nome"/>
                    </div>
                    <div className="">
                        <Label>Digite o seu email</Label>
                        <Input type="email"/>
                    </div>
                    <div className="">
                        <Label>Digite a sua senha</Label>
                        <Input type="password"/>
                    </div>
                </form>

                <Button className="">Cadastrar</Button>
            </div>
        </div>
    )
}
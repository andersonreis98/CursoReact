import "./MyForm.css"
import { useState } from "react"


const MyForm = ({ user }) => {
    // 6 - Controlled Inputs
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.nome : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.usuario : '');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulario");
        console.log(name, email, bio, role);
        // Limpar Formulario
        setName("");
        setEmail("");
        setBio("");

    }

    // console.log(name);
    // console.log(email);

    return (
        <div>
            {/* 5 - envio de form */}
            {/*1- criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite seu nome:" onChange={handleName} value={name} />
                </div>
                {/*2 - Label envolvendo input */}
                <div>
                    <label>E-mail
                        {/* 5 - simplificação manipulação state */}
                        <input type="email" name="e-mail" placeholder="Digite seu e-mail:" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Bio:</span>
                        <textarea name="bio" placeholder="Descrição do usuario" onChange={(e) => setBio(e.target.value)} value={bio} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Função no sistema:</span>
                        <select name="role" onChange={(e) => setRole(e.target.value)} value={role} >
                            <option value="Admin">ADMINISTRADOR</option>
                            <option value="User">USUARIO</option>
                            <option value="Editor">EDITOR</option>
                        </select>
                    </label>
                </div>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm
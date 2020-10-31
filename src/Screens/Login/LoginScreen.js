import "./LoginScreen.css";

import icon from "../../Assets/busao.png"
import {Button} from '@material-ui/core'


function LoginScreen(){
    return (
        <div>
            <img src={icon} />
            <h1>Busão</h1>
            <h2>Horário na palma da sua mão</h2>
            <Button >Entrar</Button>
        </div>
    )
}

export default LoginScreen
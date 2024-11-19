import { Main, Box, Button,Title,Paragraph  } from "./style"

const Home = () => {

    return(
        <Main>
            <form>
                <Title>Tela de login</Title>
                <Box>
                    <input type="text" placeholder="User" />
                    <img width="20" height="20" src="https://img.icons8.com/material-rounded/20/user.png" alt="user"/>
                </Box>
                <Box>
                    <input type="password" placeholder="Password" />
                    <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/lock--v1.png" alt="lock--v1"/>
                </Box>
                <Button>Entrar</Button>
                <Paragraph >Ainda não cadastro? <a href="#">Cadastre-se</a></Paragraph >
            </form>
        </Main>
    )
}

export default Home
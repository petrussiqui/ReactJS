import { AppBar, Container, Toolbar, Box } from "@mui/material";
import LanguagesMenu from "./languagesmenu";
import Menu from "./menu";
import MobileMenu from "./mobilemenu";

function Header() {
   
    return (
        <AppBar position="sticky" sx={{
            background: 'white',
            boxShadow: '0 3px 5px 2px rgb(58 56 61 / 5%)'
        }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ my: 1 }}>
                    <Box component='a' href="/"
                        sx={{ '& img': { width: { xs: '70px', sm: '100px' } } }}
                    >
                        <img
                            src="/img/logo550tranparent.png"
                            alt="Logo"
                        /></Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        <Menu />
                        <LanguagesMenu/>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <MobileMenu />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header
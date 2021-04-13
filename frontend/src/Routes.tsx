import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cabecalho from "./cabeçalho";
import Cadastrar from "./conteúdo/cadastrar";
import Inicio from "./conteúdo/início";
import RPG from "./conteúdo/rpg";
import Clans from "./conteúdo/clãs";
import Camarilla from "./conteúdo/clãs/camarilla";
import Logar from "./conteúdo/logar";
import Saba from "./conteúdo/clãs/sabá";
import Idependentes from "./conteúdo/clãs/independentes";
import Brujah from "./conteúdo/clãs/camarilla/brujah";
import Ventrue from "./conteúdo/clãs/camarilla/ventrue";
import Toreador from "./conteúdo/clãs/camarilla/toreador";
import Malkavian from "./conteúdo/clãs/camarilla/malkavian";
import Tremere from "./conteúdo/clãs/camarilla/tremere";
import Nosferatu from "./conteúdo/clãs/camarilla/nosferatu";
import Gangrel from "./conteúdo/clãs/camarilla/gangrel";
import Tzimisce from "./conteúdo/clãs/sabá/tzimisce";
import Lasombra from "./conteúdo/clãs/sabá/lasombra";
import Assamitas from "./conteúdo/clãs/independentes/assamitas";
import SeguidoresDeSet from "./conteúdo/clãs/independentes/seguidores de set";
import Ravnos from "./conteúdo/clãs/independentes/ravnos";
import Giovanni from "./conteúdo/clãs/independentes/giovanni";

export default function Routes() {
    return (
        <BrowserRouter>
            <Cabecalho/>
            <Switch>
                <Route path="/rpg">
                    <RPG/>
                </Route>
                <Route path="/clans">
                    <Clans/>
                </Route>
                <Route path="/cadastrar">
                    <Cadastrar/>
                </Route>
                <Route path="/logar">
                    <Logar/>
                </Route>
                <Route path="/camarilla">
                    <Camarilla/>
                </Route> 
                <Route path="/saba">
                    <Saba/>
                </Route> 
                <Route path="/idependentes">
                    <Idependentes/>
                </Route>
                <Route path="/brujah">
                    <Brujah/>
                </Route> 
                <Route path="/ventrue">
                    <Ventrue/>
                </Route> 
                <Route path="/toreador">
                    <Toreador/>
                </Route> 
                <Route path="/malkavian">
                    <Malkavian/>
                </Route> 
                <Route path="/tremere">
                    <Tremere/>
                </Route> 
                <Route path="/gangrel">
                    <Gangrel/>
                </Route> 
                <Route path="/nosferatu">
                    <Nosferatu/>
                </Route>
                <Route path="/tzimisce">
                    <Tzimisce/>
                </Route>
                <Route path="/lasombra">
                    <Lasombra/>
                </Route>
                <Route path="/assamitas">
                    <Assamitas/>
                </Route>
                <Route path="/seguidoresdeset">
                    <SeguidoresDeSet/>
                </Route>
                <Route path="/ravnos">
                    <Ravnos/>
                </Route>
                <Route path="/giovanni">
                    <Giovanni/>
                </Route>
                <Route path="/">
                    <Inicio/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
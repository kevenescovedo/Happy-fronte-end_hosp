import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import OrphanageMaps from "./Pages/OrphanageMaps"
import Landing from "./Pages/Landing"
function Routes() {
return(
    //exact so abre a rota se ela for exatamente igual
    // uma rota por vez
    <BrowserRouter>
    
<Switch>
<Route path="/" exact component={Landing}></Route>
<Route path="/app" component={OrphanageMaps}></Route>
</Switch>
</BrowserRouter>
);
}
export default Routes
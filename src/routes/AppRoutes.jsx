import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

//Obs: Para importar componentes especificos de uma tecnologia, escolha o componente, caso mais de 1
//     utilize a virgula para separa-los

import HomeFuncionario from "../pizzarianapoli/back-end/pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pizzarianapoli/back-end/pages/ListarProduto/ListarProduto"


const AppRoutes = () => {


    return (
                <BrowserRouter>
                        <Routes>
                                <Route
                                    path="/"
                                    element={<HomeFuncionario/>}
                                />

                                <Route
                                    path="/pizzaria/funcionario/home"
                                    element={<HomeFuncionario/>}
                                />

                                 <Route
                                    path="/pizzaria/funcionario/produtos"
                                    element={<ListarProduto/>}
                                />

                        </Routes>
                </BrowserRouter>

                 

    )


}
export default AppRoutes
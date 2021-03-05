import { SceneMap } from "react-native-tab-view";
import NuevosPedidos from "../Screen/NuevosPedidos";
import InicioCocina from "../Screen/InicioCocina";
import PedidosTerminados from "../Screen/PedidosTerminados";

export const tabs = [
    {
        id: "PestanasHome",
        Pestanas: SceneMap({
            tab1: NuevosPedidos,
            tab2: InicioCocina,
            tab3: PedidosTerminados
        })
    }
]
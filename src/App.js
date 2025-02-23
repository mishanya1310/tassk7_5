import './App.css';
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import Sidebar from "./components/Siderbar";
import Route from "./components/Route";
import ButtonPage from "./pages/ButtonPage";
import TablePage from "./pages/TablePage";
import ModalPage from "./pages/ModalPage";

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPage/>
                </Route>
                <Route path="/">
                    <DropDownPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
            </div>
        </div>
    );
}

export default App;

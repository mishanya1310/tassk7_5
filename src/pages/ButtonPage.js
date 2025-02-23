import Button from "../components/Button";
import { FaBitcoin } from "react-icons/fa";

function ButtonPage() {
    return (
        <div>
            <div>
                <Button className="mb-5" success rounded outline><FaBitcoin />Button 1</Button>
            </div>
            <div>
                <Button danger outline><FaBitcoin />Button 2</Button>
            </div>
            <div>
                <Button warning><FaBitcoin />Button 3</Button>
            </div>
            <div>
                <Button secondary outline><FaBitcoin />Button 4</Button>
            </div>
            <div>
                <Button secondary rounded><FaBitcoin />Button 5</Button>
            </div>
            <div>
                <Button primary><FaBitcoin />Button 6</Button>
            </div>
        </div>
    );
}

export default ButtonPage;

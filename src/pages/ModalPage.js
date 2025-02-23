import Modal from "../components/Modal"
import {useState} from 'react';
import Button from "../components/Button";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () =>{
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>Zakryt'</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>26 Lyubopytnyh faktov o chlene

                1. Srednestatisticheskaya dlina polovogo chlena – 15 santimetrov. Odnako mediki schitayut rabotosposobnymi vse chleny bez isklyucheniya – ot polutora do tridcati santimetrov razmerom. No vsyo zhe eto na lyubitelej i lyubitel'nic ekstrima.

                2. V nashi dni samyj gromadnyj chlen v mire – u britanca Iona Fal'kona. Razmer ego fallosa sostavlyaet 34.5 santimetra.

                3. Schitaetsya, chto dlya naslazhdeniya zhenshchiny v posteli hvatit 13 santimetrov napryazhennoj muzhskoj ploti. Pri etom, srednyaya glubina vaginy sostavlyaet 8 do 13 santimetrov.

                4. Polovoj chlen kazhetsya bol'she, esli smotret' na nego ne sverhu, ne snizu, a imenno sboku. Poetomu kazhdomu mal'chiku, pisayushchemu v tualete i podglyadyvayushchemu za drugimi mal'chikami, kazhetsya, chto u ego tovarishcha chlen nepremenno bol'she, chem u nego.

                5. Nekotorye chleny, malen'kie v spokojnom sostoyanii, stanovyatsya v razy bol'she pri vozbuzhdenii.

                6. Kak izmerit' okruzhnost' chlena? Berem beluyu nitku, obmatyvaem eyu chlen vdol' stvola, zatem izmeryaem poluchivshijsya otrezok shkol'noj linejkoj.

                7. Znaya okruzhnost' chlena, legko vychislit' ego radius. Napomnim, chto radius – eto polovina okruzhnosti. Tak, esli okruzhnost' vashego chlena – 0 santimetrov, to radius budet 5.

                8. Zamer dliny chlena shkol'noj linejkoj vedetsya ot lobkovoj kosti do konchika golovki.

                9. Obrezanie nikak ne vliyaet na razmery chlena. V SShA obrezayut bolee poloviny novorozhdennyh. Iudei obrezayut chleny mladencev na vos'moj den' zhizni, a musul'mane – v 13 let.

                10. Posle obrezaniya golovka chlena stanovitsya menee chuvstvitel'noj. Kak sledstvie, obrezannye parni sposobny proderzhat'sya v sekse dol'she, chem ih neobrezannye sobrat'ya.

                11. Bol'shinstvo falloimitatorov vypuskayutsya imenno v obrezannom vide.

                12. Mediki utverzhdayut, chto kurenie vyzyvaet usyhanie klitora ili chlena. Usyhanie chlena nesushchestvennoe – vsego-to na odin santimetr.

                13. Uvelichenie chlena proiskhodit chashche vsego za schyot zhirovyh tkanej klienta, kotorye vvodyatsya v chlen. Ego mozhno uvelichit' na 2-5 santimetrov.
                14. Muzhskoj orgazm v srednem dlitsya okolo 6 sekund. Zhenskij – 23 sekundy.
                15. Lish' 1 unikum iz 400 mozhet otsosat' sebe samostoyatel'no.

                16. Chleny pri vozbuzhdenii delyatsya na dva tipa. Tip pervyj pri vozbuzhdenii sushchestvenno rasshiryaetsya i vyrastaet. Vtoroj tip v spokojnom sostoyanii bol'shoj, i pri vozbuzhdenii stanovitsya ne osobo bol'she.

                17. Esli vzyat' polovoj kontakt odnoj dlitel'nosti, to zhenshchine kazhetsya, chto proshlo bol'she vremeni.
                18. Chlen korolya Tongo, dostavivshij udovol'stvie ogromnomu kolichestvu zhenshchin, lishil devstvennosti 37800 zhenshchin v period s 1770 po 1784 goda – okolo 7 devstvennic v den'.

                19. Zdorovyj vneshnij vid muzhchiny napryamuyu imeet otnoshenie k kachestvu ego spermy. Zhenshchina podsoznatel'no vybiraet naibolee sil'nogo samca dlya zdorovogo potomstva.

                20. Sperma bogata na soderzhanie raznyh veshchestv: zdes' i vitaminy, i limonnaya kislota, i fruktoza, i askorbinka, i holesterol, soli.

                21. Edinstvennoe zhivotnoe, u kotorogo v chlene est' kost' – eto kit.

                22. Bol'shinstvo muzhchin obespokoeny razmerom svoego chlena i hoteli by, chtoby on byl bol'she. Nikakoj drugoj organ ne vyzyvaet u nih stol'ko emocij.

                23. Sushchestvuet zabavnaya patologiya – afaliya, kotoraya zaklyuchaetsya v tom, chto muzhchina rozhdaetsya bez chlena.

                24. Chlen komara v dlinu – chetvert' millimetra.

                25. V obshchem ob"eme muzhskogo semeni soderzhitsya ne bolee 5% golovastikov. A pri muzhskom orgazme ob"em spermy – 1-2 chajnye lozhki.

                26. Samyj bol'shoj chlen v mire sredi zhivotnyh – u golubogo kita – okolo 4-h metrov. T.e. razmerom s dvuhetazhnyj kottedzh. Vpechatlyaet?</p>
        </Modal>
    );

    return(
        <div>
            <Button onClick={handleClick} primary>Otkryt'</Button>{showModal && modal}
        </div>
    );
}

export default ModalPage;

import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'isp-322',
            label: 'Can I use JS?',
            content: 'Псоледний раз спрашиваю будильник кто такой?'
        },
        {
            id: 'misha2006',
            label: 'Can I use ЖабаScript',
            content: 'Псоледний раз спрашиваю будильник кто такой qwerty12345?'
        },
        {
            id: 'milana228ProKillerSniper2049Rus',
            label: 'Can I use yandex/mail',
            content: 'Псоледний раз спрашиваю yandex кто такой qwerty12345?'
        },
    ]

    return (
        <Accordion items={items} />
    );
}

export default AccordionPage;

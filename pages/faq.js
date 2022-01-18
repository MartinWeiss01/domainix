const faqs = [
    {
        question: "Co je cílem této aplikace?",
        answer: "Cílem je primárně zjednodušit porovnání jednotlivých registrátorů na trhu. Do budoucna je pravděpodobná i komplexnější manipulace s doménami, tj. například správa domén napříč registrátory či kontrola dostupnosti.",
    },
    {
        question: "Jak aktuální data jsou?",
        answer: "Data jsou aktuální k dnešnímu datu. Kontrola cen všech registrátorů se provádí každý den.",
    },
    {
        question: "Bude k dispozici více registrátorů?",
        answer: "Ano, postupem času budou další registrátoři přibývat, s velkou pravděpodobností i zahraniční.",
    },
    {
        question: "Bude k dispozici více TLDs?",
        answer: "Seznam TLDs, které se srovnávají a evidují, jsou závislé pouze na registrátorech, kteří jsou v aplikaci k dispozici.",
    },
    {
        question: "Je tato aplikace zdarma?",
        answer: "🙃",
    },
];

const FAQ = () => {
    return (
        <div className="max-w-7xl mx-auto mt-2">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
                    {faqs.map((faq, faqKey) => (
                        <div key={faqKey}>
                            <dt className="text-lg leading-6 font-medium text-gray-900">
                                {faq.question}
                            </dt>
                            <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                        </div>
                    ))}
                </dl>
        </div>
    )
}

export default FAQ;
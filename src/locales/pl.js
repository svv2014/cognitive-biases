export default {
  meta: { code: 'pl', name: 'Polski', dir: 'ltr' },

  ui: {
    title: 'Błędy poznawcze',
    tagline: 'Pięćdziesiąt sposobów, na jakie umysł po cichu wprowadza sam siebie w błąd.',
    counter: 'błędów: {count}',
    counterFiltered: '{count} z {total} błędów',
    search: 'Szukaj błędów…',
    searchLabel: 'Szukaj według nazwy, opisu lub przykładu',
    filterLabel: 'Filtruj według kategorii',
    clear: 'Wyczyść filtry',
    empty: 'Nic nie znaleziono.',
    emptyHint: 'Spróbuj innego słowa lub wyczyść filtry.',
    theme: 'Przełącz tryb ciemny',
    skip: 'Przejdź do listy',
    language: 'Język',
    example: 'Przykład',
    untranslated: 'Brak tłumaczenia — pokazano tekst angielski.',
    credits: 'Na podstawie „50 Cognitive Biases in the Modern World” od Visual Capitalist.',
    contribute: 'Współtwórz na GitHubie',
  },

  categories: {
    memory: 'Pamięć',
    social: 'Społeczeństwo',
    learning: 'Uczenie się',
    belief: 'Przekonania',
    money: 'Pieniądze',
    politics: 'Polityka',
  },

  quiz: {
    cta: 'Sprawdź siebie',
    title: 'Które błędy są twoje?',
    intro: 'Osiem krótkich sytuacji. Wybieraj to, co szczerze bardziej do ciebie pasuje — nie ma dobrych odpowiedzi.',
    disclaimer: 'Dla zabawy i ciekawości — to nie jest test psychologiczny.',
    start: 'Zaczynamy',
    progress: 'Pytanie {n} z {total}',
    close: 'Zamknij',
    resultTitle: 'Twój wynik',
    resultLead: 'Uległeś {count} z {total}.',
    resultNone: 'Ominąłeś wszystkie osiem. Co samo w sobie sugeruje martwy punkt uprzedzeń.',
    resultAll: 'Komplet — co do jednego. Pocieszająco po ludzku.',
    resultHint: 'Oto błędy, na które wskazały twoje odpowiedzi:',
    seeCard: 'Przeczytaj o tym',
    again: 'Jeszcze raz',
    questions: {
      'fundamental-attribution-error': {
        prompt: 'Współpracownik nie dotrzymał terminu. Pierwsza myśl:',
        biased: 'Jest niezorganizowany.',
        fair: 'Pewnie coś mu wypadło.',
      },
      'self-serving-bias': {
        prompt: 'Projekt, który prowadziłeś, wyszedł świetnie. Dlaczego?',
        biased: 'Podjąłeś właściwe decyzje.',
        fair: 'Dobrze zagrały moment i zespół.',
      },
      'in-group-favoritism': {
        prompt: 'Dwoje nieznajomych prosi cię o drobną przysługę. Jedno chodziło do twojej szkoły.',
        biased: 'Temu pomożesz najpierw.',
        fair: 'Dla ciebie to bez różnicy.',
      },
      'bandwagon-effect': {
        prompt: 'Wszyscy twoi znajomi zaczęli korzystać z nowej aplikacji.',
        biased: 'Robi się ciekawie i ją instalujesz.',
        fair: 'Popularność sama w sobie nie jest argumentem.',
      },
      'halo-effect': {
        prompt: 'Ktoś na rozmowie dobrze mówi i jest starannie ubrany.',
        biased: 'Przy okazji uznajesz go za kompetentnego.',
        fair: 'O jego pracy nie dowiedziałeś się jeszcze nic.',
      },
      'curse-of-knowledge': {
        prompt: 'Tłumaczysz swoją pracę komuś spoza twojej branży.',
        biased: 'Dziwi cię, że nie nadąża.',
        fair: 'Z góry zakładasz, że zaczynasz od zupełnych podstaw.',
      },
      'spotlight-effect': {
        prompt: 'Przed spotkaniem wylewasz kawę na koszulę.',
        biased: 'Jesteś pewien, że wszyscy to zauważyli.',
        fair: 'Nikt tak naprawdę nie patrzył.',
      },
      'availability-heuristic': {
        prompt: 'Tydzień przed lotem czytasz o katastrofie lotniczej.',
        biased: 'Latanie wydaje się teraz groźniejsze.',
        fair: 'Prawdopodobieństwo się przez to nie zmieniło.',
      },
      'just-world-hypothesis': {
        prompt: 'Ledwo znajomą osobę spotyka seria nieszczęść.',
        biased: 'Po cichu zastanawiasz się, czym sobie na to zasłużyła.',
        fair: 'Pech spada na ludzi przypadkiem.',
      },
      'dunning-kruger-effect': {
        prompt: 'Czytasz długi artykuł o temacie, który jest dla ciebie nowy.',
        biased: 'Czujesz się gotów mieć na ten temat zdanie.',
        fair: 'Uświadamiasz sobie, jak wiele jeszcze nie wiesz.',
      },
      anchoring: {
        prompt: 'Kurtka przeceniona z 200 na 90.',
        biased: 'Dziewięćdziesiąt brzmi jak dobra cena.',
        fair: 'Pytasz, ile ta kurtka jest naprawdę warta.',
      },
      'google-effect': {
        prompt: 'Ktoś pyta cię o fakt, który sprawdzałeś w zeszłym tygodniu.',
        biased: 'Pamiętasz, że szukałeś, ale nie odpowiedź.',
        fair: 'Przypominasz ją sobie bez pomocy.',
      },
      reactance: {
        prompt: 'Właśnie miałeś zrobić obowiązek i ktoś ci każe go zrobić.',
        biased: 'Nagle chce ci się mniej.',
        fair: 'Nic to nie zmienia — i tak miałeś to zrobić.',
      },
      'confirmation-bias': {
        prompt: 'Doczytujesz o czymś, w co już wierzysz.',
        biased: 'Zostaje w głowie to, co się zgadza.',
        fair: 'Szukasz najmocniejszego kontrargumentu.',
      },
      'sunk-cost-fallacy': {
        prompt: 'Jesteś dwie godziny w filmie, który ci się nie podoba.',
        biased: 'Dooglądasz — tyle już w to włożyłeś.',
        fair: 'Wyłączasz i odzyskujesz wieczór.',
      },
      'gamblers-fallacy': {
        prompt: 'Moneta sześć razy z rzędu spadła orłem.',
        biased: 'Reszka wydaje się już należna.',
        fair: 'Następny rzut to wciąż pół na pół.',
      },
      'status-quo-bias': {
        prompt: 'Twój operator jest przeciętny, a jest lepsza oferta.',
        biased: 'Zostajesz — zmiana to kłopot.',
        fair: 'Przenosisz się.',
      },
      'survivorship-bias': {
        prompt: 'Słyszysz, że kilku znanych założycieli rzuciło studia.',
        biased: 'Wygląda, że rzucenie studiów bywa atutem.',
        fair: 'Zastanawiasz się, o ilu takich nigdy nie usłyszałeś.',
      },
    },
  },

  biases: {
    'fundamental-attribution-error': {
      name: 'Podstawowy błąd atrybucji',
      description: 'Innych oceniamy przez pryzmat ich charakteru, a siebie — przez pryzmat okoliczności.',
      example: 'Sally spóźniła się na zajęcia — jest leniwa. Ty spóźniłeś się na zajęcia — miałeś zły poranek.',
    },
    'self-serving-bias': {
      name: 'Błąd egotyzmu atrybucyjnego',
      description: 'Nasze porażki wynikają z sytuacji, a sukcesy są naszą zasługą.',
      example:
        'Nagrodę zdobyłeś dzięki ciężkiej pracy, a nie pomocy czy szczęściu. A test oblałeś, bo się nie wyspałeś.',
    },
    'in-group-favoritism': {
      name: 'Faworyzowanie własnej grupy',
      description: 'Wolimy ludzi z własnej grupy niż tych spoza niej.',
      example: 'Francis chodzi do twojego kościoła, więc lubisz go bardziej niż Sally.',
    },
    'bandwagon-effect': {
      name: 'Efekt owczego pędu',
      description: 'Idee, mody i przekonania rosną w siłę, w miarę jak przyjmuje je coraz więcej osób.',
      example: 'Sally wierzy, że fidget spinnery pomagają jej dzieciom. Francis też.',
    },
    groupthink: {
      name: 'Myślenie grupowe',
      description:
        'Z powodu dążenia do zgodności i harmonii w grupie podejmujemy nieracjonalne decyzje, często po to, by zminimalizować konflikt.',
      example:
        'Sally chce iść na lody. Francis chce kupić koszulki. Ty proponujesz kupno koszulek z nadrukiem lodów.',
    },
    'halo-effect': {
      name: 'Efekt aureoli',
      description:
        'Jeśli widzimy w kimś jedną pozytywną cechę, to wrażenie przenosi się na pozostałe. (Działa tak samo z cechami negatywnymi.)',
      example: '„Taylor nie mogłaby być złośliwa, jest taka słodka!”',
    },
    'moral-luck': {
      name: 'Szczęście moralne',
      description:
        'Dobry rezultat podnosi moralną ocenę czynu, zły ją obniża — choć sam czyn się nie zmienił.',
      example: '„Tamta kultura wygrała wojnę, bo była moralnie wyższa od przegranych”.',
    },
    'false-consensus': {
      name: 'Efekt fałszywej powszechności',
      description: 'Wydaje nam się, że zgadza się z nami więcej osób, niż jest w rzeczywistości.',
      example: '„Wszyscy tak uważają!”',
    },
    'curse-of-knowledge': {
      name: 'Klątwa wiedzy',
      description: 'Gdy już coś wiemy, zakładamy, że wiedzą to również wszyscy inni.',
      example: 'Alice jest nauczycielką i z trudem rozumie perspektywę swoich nowych uczniów.',
    },
    'spotlight-effect': {
      name: 'Efekt reflektora',
      description: 'Przeceniamy to, jak bardzo inni zwracają uwagę na nasze zachowanie i wygląd.',
      example: 'Sally martwi się, że wszyscy zauważą, jak żenująca jest jej koszulka z lodami.',
    },
    'availability-heuristic': {
      name: 'Heurystyka dostępności',
      description: 'Wydając sądy, opieramy się na przykładach, które najszybciej przychodzą nam do głowy.',
      example: 'Wybierając sklep, idziesz do tego, którego reklamę widziałeś ostatnio.',
    },
    'defensive-attribution': {
      name: 'Atrybucja obronna',
      description:
        'Jako świadkowie, którzy skrycie boją się, że sami mogliby paść ofiarą nieszczęścia, tym mniej obwiniamy ofiarę, a tym bardziej sprawcę, im bardziej się z ofiarą utożsamiamy.',
      example:
        'Sally za długo stała na zielonym świetle, bo bawiła się telefonem, i ktoś wjechał w nią od tyłu. Greg, który sam notorycznie pisze SMS-y za kierownicą, wysiadł i nakrzyczał na sprawcę.',
    },
    'just-world-hypothesis': {
      name: 'Hipoteza sprawiedliwego świata',
      description:
        'Skłonni jesteśmy wierzyć, że świat jest sprawiedliwy, więc zakładamy, że niesprawiedliwość jest zasłużona.',
      example: '„Sally ukradziono torebkę, bo była niemiła dla Francisa w sprawie koszulki — taka karma”.',
    },
    'naive-realism': {
      name: 'Naiwny realizm',
      description:
        'Wierzymy, że widzimy obiektywną rzeczywistość, a inni są nieracjonalni, niedoinformowani lub stronniczy.',
      example: '„Widzę świat takim, jaki jest — to inni są głupi”.',
    },
    'naive-cynicism': {
      name: 'Naiwny cynizm',
      description:
        'Wierzymy, że widzimy obiektywną rzeczywistość, i przypisujemy innym więcej egocentrycznych motywów, niż faktycznie mają.',
      example: '„Ta osoba jest miła tylko dlatego, że czegoś ode mnie chce”.',
    },
    'forer-effect': {
      name: 'Efekt Forera (efekt Barnuma)',
      description:
        'Z łatwością przypisujemy sobie ogólnikowe opisy, nawet jeśli pasują do bardzo wielu osób.',
      example: '„Ten horoskop jest niesamowicie trafny!”',
    },
    'dunning-kruger-effect': {
      name: 'Efekt Dunninga-Krugera',
      description: 'Im mniej wiesz, tym jesteś pewniejszy siebie. Im więcej wiesz, tym mniej jesteś pewny.',
      example:
        'Francis z przekonaniem zapewnia wszystkich, że w lodach nie ma wodorostów. Nigdy nie pracował w mleczarstwie.',
    },
    anchoring: {
      name: 'Efekt zakotwiczenia',
      description: 'Podejmując decyzje, zbyt mocno opieramy się na pierwszej otrzymanej informacji.',
      example: '„50% taniej? To musi być świetna okazja”.',
    },
    'automation-bias': {
      name: 'Błąd automatyzacji',
      description:
        'Polegamy na systemach automatycznych, czasem ufając im tak bardzo, że pozwalamy im „poprawiać” decyzje, które były prawidłowe.',
      example: 'Telefon poprawił dobre słowo na inne, więc zakładasz, że tak jest właściwie.',
    },
    'google-effect': {
      name: 'Efekt Google (amnezja cyfrowa)',
      description: 'Łatwo zapominamy informacje, które w każdej chwili można wyszukać w internecie.',
      example: '„Jak nazywał się ten aktor z tego śmiesznego filmu? Sprawdzałem to już ze osiem razy…”',
    },
    reactance: {
      name: 'Reaktancja',
      description: 'Robimy na przekór, zwłaszcza gdy czujemy zagrożenie dla osobistej wolności.',
      example: 'Uczeń Alice odmawia odrabiania lekcji, choć proszą go o to i ona, i rodzice.',
    },
    'confirmation-bias': {
      name: 'Efekt potwierdzenia',
      description: 'Znajdujemy i zapamiętujemy przede wszystkim to, co potwierdza nasze przekonania.',
      example:
        'Teorię spiskową można „potwierdzić” na podstawie znikomych dowodów, ignorując wszystko, co jej przeczy.',
    },
    'backfire-effect': {
      name: 'Efekt odwrotnego skutku',
      description: 'Dowody obalające nasze przekonania czasem tylko je umacniają.',
      example: 'Dowody obalające twoją teorię spiskową zostały pewnie sfabrykowane przez rząd.',
    },
    'third-person-effect': {
      name: 'Efekt trzeciej osoby',
      description: 'Wierzymy, że media wpływają na innych bardziej niż na nas samych.',
      example: '„Media wyraźnie zrobiły ci pranie mózgu!”',
    },
    'belief-bias': {
      name: 'Błąd przekonań',
      description:
        'Siłę argumentu oceniamy nie po tym, jak mocno wspiera wniosek, lecz po tym, jak wiarygodny wydaje nam się sam wniosek.',
      example:
        'Sally wspomina o teorii wspierającej twoją teorię spiskową, a ty przyjmujesz ją bezkrytycznie, mimo że ma na nią bardzo mało dowodów.',
    },
    'availability-cascade': {
      name: 'Kaskada dostępności',
      description:
        'Ze względu na potrzebę społecznej akceptacji zbiorowe przekonania zyskują na wiarygodności wraz z publicznym powtarzaniem.',
      example:
        'Historia o żyletkach w cukierkach sprawiła, że wielu Amerykanów przestało częstować dzieci domowymi łakociami na Halloween.',
    },
    declinism: {
      name: 'Deklinizm',
      description:
        'Skłonni jesteśmy romantyzować przeszłość i patrzeć w przyszłość pesymistycznie, wierząc, że społeczeństwa i instytucje ogólnie podupadają.',
      example: '„Za moich czasów muzyka była prawdziwa. Dziś nie ma już czego słuchać”.',
    },
    'status-quo-bias': {
      name: 'Efekt status quo',
      description:
        'Wolimy, żeby wszystko zostało po staremu; każde odejście od punktu wyjścia odbieramy jako stratę.',
      example:
        'Choć regulamin aplikacji narusza prywatność Sally, wolałaby ona nie przechodzić na inną aplikację.',
    },
    'sunk-cost-fallacy': {
      name: 'Efekt utopionych kosztów (eskalacja zaangażowania)',
      description:
        'Inwestujemy jeszcze więcej w to, co już nas kosztowało, zamiast zmienić decyzję — nawet gdy skutki są wyraźnie złe.',
      example: '„Skoro już zacząłem, muszę dokończyć!”',
    },
    'gamblers-fallacy': {
      name: 'Złudzenie gracza',
      description: 'Sądzimy, że przeszłe zdarzenia wpływają na prawdopodobieństwo przyszłych.',
      example: 'Alice przegrała dziewięć rzutów monetą z rzędu, więc następny na pewno wygra!',
    },
    'zero-risk-bias': {
      name: 'Efekt zerowego ryzyka',
      description:
        'Wolimy zredukować małe ryzyko do zera, nawet jeśli inna opcja obniżyłaby ryzyko całkowite bardziej.',
      example: '„Chyba warto dokupić gwarancję”.',
    },
    'framing-effect': {
      name: 'Efekt ramowania',
      description: 'Z tej samej informacji wyciągamy różne wnioski w zależności od tego, jak została przedstawiona.',
      example:
        'Alice słyszy, że jej kandydat „miażdży rywali” z poparciem 45%. Sally słyszy, że ten sam kandydat „zawiódł kraj” z wynikiem 45%. Jedna liczba, skrajnie różne wnioski.',
    },
    stereotyping: {
      name: 'Stereotypizacja',
      description:
        'Przypisujemy członkom grupy określone cechy, nie wiedząc nic o konkretnej osobie.',
      example: '„Ten facet z podkręconym wąsem to hipster. Pewnie zbiera winyle”.',
    },
    'outgroup-homogeneity-bias': {
      name: 'Efekt jednorodności obcej grupy',
      description: 'Obce grupy wydają nam się jednolite, a własna — zróżnicowana.',
      example: 'Alice nie gra w gry, ale jest przekonana, że „wszyscy gracze są tacy sami”.',
    },
    'authority-bias': {
      name: 'Błąd autorytetu',
      description: 'Ufamy opiniom autorytetów i częściej ulegamy ich wpływowi.',
      example: '„Nauczyciel powiedział mi, że tak można”.',
    },
    'placebo-effect': {
      name: 'Efekt placebo',
      description: 'Jeśli wierzymy, że leczenie zadziała, często wywołuje ono niewielki efekt fizjologiczny.',
      example: 'Alice dostała placebo na ból i ból się zmniejszył.',
    },
    'survivorship-bias': {
      name: 'Efekt przetrwania',
      description: 'Skupiamy się na tym, co przetrwało selekcję, i pomijamy to, co jej nie przeszło.',
      example:
        'Greg zapewnia Alice, że jej biznes z torebkami odniesie sukces, bo pewien znany dom mody miał tę samą strategię. (Ale miało ją też dziesięć firm, które upadły.)',
    },
    tachypsychia: {
      name: 'Tachypsychia',
      description: 'Postrzeganie czasu zmienia się pod wpływem urazu, substancji i wysiłku fizycznego.',
      example: '„Gdy samochód mnie prawie potrącił, czas jakby zwolnił…”',
    },
    'law-of-triviality': {
      name: 'Prawo trywialności (efekt wiaty rowerowej)',
      description:
        'Nieproporcjonalnie dużo uwagi poświęcamy drobiazgom, często unikając spraw naprawdę złożonych.',
      example:
        'Zamiast zająć się pomocą bezdomnym, władze miasta godzinami dyskutują o ścieżce rowerowej i wiacie na rowery.',
    },
    'zeigarnik-effect': {
      name: 'Efekt Zeigarnik',
      description: 'Zadania niedokończone pamiętamy lepiej niż ukończone.',
      example:
        'Greg czuje się winny, że nic nie kończy — dopóki nie spojrzy na listę i nie zobaczy, ile już odhaczył.',
    },
    'ikea-effect': {
      name: 'Efekt IKEA',
      description: 'Wyżej cenimy rzeczy, które częściowo stworzyliśmy sami.',
      example: '„Prawda, że ta doniczka jest śliczna? Kosztowała 20 dolarów, a pomalowałam ją sama!”',
    },
    'ben-franklin-effect': {
      name: 'Efekt Benjamina Franklina',
      description:
        'Lubimy wyświadczać przysługi: chętniej pomożemy komuś, komu już pomogliśmy, niż komuś, kto pomógł nam.',
      example: 'Greg pożyczył Francisowi długopis. Gdy Francis poprosił o 5 dolarów, Greg dał bez wahania.',
    },
    'bystander-effect': {
      name: 'Efekt widza',
      description: 'Im więcej osób dookoła, tym mniejsza szansa, że pomożemy ofierze.',
      example: 'W tłumie studentów nikt nie wezwał pomocy, gdy ktoś ucierpiał w bójce.',
    },
    suggestibility: {
      name: 'Sugestywność',
      description:
        'Bywa, że — szczególnie dzieci — bierzemy myśli podsunięte przez pytającego za własne wspomnienia.',
      example: '„To spadłeś z kanapy przed tym, jak mama cię uderzyła, czy po?”',
    },
    'false-memory': {
      name: 'Fałszywa pamięć',
      description: 'Bierzemy wyobrażenia za prawdziwe wspomnienia.',
      example:
        'Greg jest pewien, że Sally opowiedziała świetny dowcip o ananasach — a tak naprawdę pochodził on z serialu.',
    },
    cryptomnesia: {
      name: 'Kryptomnezja',
      description: 'Bierzemy prawdziwe wspomnienia za wyobrażenia.',
      example: 'Gregowi się wydaje, że cmentarz mu się przyśnił — a naprawdę tam był.',
    },
    'clustering-illusion': {
      name: 'Złudzenie skupisk',
      description: 'Dostrzegamy wzory i „skupiska” w danych losowych.',
      example: '„Alice, patrz, ta chmura wygląda jak twój kot!”',
    },
    'pessimism-bias': {
      name: 'Błąd pesymizmu',
      description: 'Czasem przeceniamy prawdopodobieństwo złych rezultatów.',
      example: '„Już nigdy nie będzie lepiej”.',
    },
    'optimism-bias': {
      name: 'Błąd optymizmu',
      description: 'Czasem jesteśmy nadmiernie optymistyczni co do dobrych rezultatów.',
      example: '„Na pewno wszystko się uda!”',
    },
    'blind-spot-bias': {
      name: 'Martwy punkt uprzedzeń',
      description: 'Nie uważamy się za stronniczych i dostrzegamy stronniczość u innych częściej niż u siebie.',
      example: '„Ja nie mam żadnych uprzedzeń!”',
    },
  },
};

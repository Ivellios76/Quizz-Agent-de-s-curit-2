console.log("quiz.js chargé");
const questions = [
        {
        question: "Les 3 éléments constitutifs d'une infraction sont :",
        options: {
            a: "Légitime - moral - matériel",
            b: "moral-légal-matériel",
            c: "Légal - matériel - immoral",
            d: "Illégal - matériel - moral"
        },
        correct: "b"
    },
    {
        question: "Conformément à l'article 122-5 alinéa 2 du code pénal, est-il possible de commettre un homicide volontaire pour la défense des biens :",
        options: {
            a: "Oui dans tous les cas",
            b: "Non en aucun cas",
            c: "Pour interrompre l'éxécution d'un crime ou un délit contre un bien",
            d: "Pour interrompre l'éxécution d'un crime ou un délit contre autrui"
        },
        correct: "b"
    },
    {
        question: "Un agent de sécurité privée prend connaissance qu'un vol à main armée va se commettre, Que doit-il faire ?",
        options: {
            a: "Il peut appréhender la personne",
            b: "Il doit porter assistance aux personnes en danger",
            c: "Il doit rendre compte à son supérieur hiérarchique",
            d: "Il doit prévenir les forces de l'ordre"
        },
        correct: "d"
    },
    {
        question: "En l'absence d'arrêté instutuant un périmètre de protection, quelle autorité peut agréer à la palpation de sécurité ?",
        options: {
            a: "Le chef de poste de sécurité",
            b: "Le préfet du département",
            c: "Le C.N.A.P.S",
            d: "Les forces de l'ordre"
        },
        correct: "b"
    },
    {
        question: "En vertu de l'article 613-1 du code de la sécurité intérieure, la tenue des agents de sécurité privée doit :",
        options: {
            a: "Comporter au minimum 1 insigne placé de telle sorte qu'il reste apparent et lisible en toute circontances",
            b: "Comporter au minimum 3 insignes placés de telle sorte qu'ils reste apparent et lisible en toute circonstances",
            c: "Comporter au minimum 4 insignes placés de telle sorte qu'ils reste apparent et lisible en toute circonstances",
            d: "Comporter au minimum 2 insignes placés de telle sorte qu'ils reste apparent et lisible en toute circonstances"
        },
        correct: "a"
    },
    {
        question: "En vertu de l'article 132-75 du code pénal, qu'elle est la définition de la notion d'arme ?",
        options: {
            a: "Une arme obligatoirement référencée dans les 4 catégories (A-B-C-D)",
            b: "Est une arme tout objet conçu pour tuer ou blesser",
            c: "Est une arme tout objet conçu pour tuer",
            d: "Est uniquement une arme de catégorie B"
        },
        correct: "b"
    },
    {
        question: "Le renouvellement de la carte professionnelle par l'agent de sécurité privée, doit faire l'objet :",
        options: {
            a: "Au préalable d'une demande auprés du Préfet du département",
            b: "D'un suivi d'une formation de maintien et d'actualisation des compétences dispensé par un organisme de formation agrée",
            c: "D'une demande auprès de la C.N.I.L",
            d: "D'une demande auprès de l'employeur trois mois avant la fin de la date d'expiration de la carte professionnel"
        },
        correct: "b"
    },
    {
        question: "Quel tribunal juge en première instance une infraction qualifiée délit ?",
        options: {
            a: "Le tribunal correctionnel",
            b: "Le tribunal de police",
            c: "Le tribunal de commerce",
            d: "La cour d'assises"
        },
        correct: "a"
    },
    {
        question: "Qu'est-ce que la tentative de crime ?",
        options: {
            a: "Le fait d'avoir la pensée de commettre un crime",
            b: "Le fait de manifestée par un commencement d'éxécution",
            c: "Etre complice de l'infraction",
            d: "Le fait d'avoir commencé les actes préparatoires d'un crime et s'être rétracter"
        },
        correct: "b"
    },
    {
        question: "Quelles activités sont mentionnées dans le livre VI-titre 1er du code de la sécurité intérieure ?",
        options: {
            a: "Les activités privées de surveillance et de gardiennage, de transport de fonds, de protection physique des personnes et de protection des navires",
            b: "Les activités privées de transport de fonds, de protection physique des personnes, de surveillance et de gardiennage et de protection des navires",
            c: "Les activités privées de surveillance et de gardiennage, de protection des navires, de transport de fonds et de protection physique des personnes",
            d: "Les activités privées de protection physique des personnes, de transport de fonds, de protection des navires et de surveillance et de gardiennage"
        },
        correct: "a"
    },
    {
        question: "A quels risques s'expose une société de sécurité privée qui recourt à une prestation d'un agent de sécurité privée non titulaire de la carte professionnelle",
        options: {
            a: "Deux ans d'emprisonnement et de 30 000 euros d'amende",
            b: "Une amende prévue pour les contraventions de 4ème classe",
            c: "Une peine d'emprisonnement de 1 mois avec sursis",
            d: "Une fermeture administrative de la société de sécurité privée"
        },
        correct: "a"
    },
    {
        question: "Quelle mission n'est pas intégrée dans le périmètre de compétences de la Délégation aux coopération de sécurité ?",
        options: {
            a: "La proposition d'une stratégie des achats de sécurité",
            b: "Coordonner et animer les partenariats avec les acteurs (professionnels de la sécurité privée, collectivités locales, industriels)",
            c: "L'instruction de dossiers relatifs à la vidéoprotection de voie publique",
            d: "Le dialogue avec les polices municipales"
        },
        correct: "c"
    },
    {
        question: "Quels types d'armes, de catégorie D, peuvent être achetées et détenues librement ?",
        options: {
            a: "Un pistolet taser",
            b: "Un révolver",
            c: "Un générateur d'aérosollacrymogène ou incapacitant d'une capacité de moins de 100 ml",
            d: "Une carabine à air comprimé de plus de 20 joules"
        },
        correct: "c"
    },
    {
        question: "Selon l'article 410-1 du code pénal (livre IV, titre I), les intérêts fondamentaux de la nation concernent :",
        options: {
            a: "La souveraineté européenne",
            b: "Le code de déontologie",
            c: "Ses normes nationales",
            d: "Sa politique environnementale"
        },
        correct: "d"
    },
    {
        question: "Qu'appelle-t-on la responsabilité pénale ?",
        options: {
            a: "La réparation d'un dommage que l'on a causé à la personne morale",
            b: "La réponse à ses actes lors de la commission d'une infraction",
            c: "La responsabilité civile de l'administration",
            d: "Aucune des réponses"
        },
        correct: "b"
    },
    {
        question: "Quelle doit être la première action d'un agent de sécurité privée face à une atteinte injustifiée à l'intégrité physique d'une personne",
        options: {
            a: "Il appréhende la personne",
            b: "Il demande du renfort",
            c: "Il fuit",
            d: "Il appelle les forces de l'ordre"
        },
        correct: "a"
    },
    {
        question: "Article 132-75 du Code Pénal",
        options: {
            a: "La notion d'arme",
            b: "La légitime défense",
            c: "L'état de nécessité",
            d: "Le droit d'appréhension"
        },
        correct: "a"
    },
    {
        question: "Les consignes affichées sur le plan d'évacuation dans des circulations sont :",
        options: {
            a: "Des consignes ponctuelles",
            b: "Des consignes permanentes",
            c: "Des consignes particulières",
            d: "Des consignes restreintes"
        },
        correct: "b"
    },
    {
        question: "Quels sont les effets du stress dépassé ?",
        options: {
            a: "Nervosité - panique - sidération",
            b: "Sidération - agitation - fuite",
            c: "Réflexion - panique - fuite",
            d: "Angoisse - agitation - panique"
        },
        correct: "b"
    },
    {
        question: "En cas d'attaque terroriste extérieure à un site, que doit préciser la consigne de sécurité ?",
        options: {
            a: "Fermer les espaces et de confiner les personnels et le public",
            b: "Appeler les forces de l'ordre",
            c: "L'évacuation du site et l'intervention pour confiner les lieux",
            d: "La sécurisation de la zone d'attaque"
        },
        correct: "a"
    },
    {
        question: "Qui peut transmettre une consigne orale ?",
        options: {
            a: "Une personne qualifiée",
            b: "Une personne désignée",
            c: "Une personne Assermenté",
            d: "Aucune des réponses"
        },
        correct: "a"
    },
    {
        question: "Quel peut être l'objectif d'une ronde de surveillance intérieure ?",
        options: {
            a: "Prévenir - dissuader - intervenir",
            b: "De connaître son site",
            c: "De s'orienté avec un plan",
            d: "Identifier l'origine d'un accident et les circonstances dans lesquelles il s'est dérouler"
        },
        correct: "a"
    },
    {
        question: "Quel type de stress est associé à la phase d'épuisement ?",
        options: {
            a: "Le stress différé",
            b: "Le stress aigu",
            c: "Le stress dépassé",
            d: "Le burn-out"
        },
        correct: "d"
    },
    {
        question: "Quelles sont les qualités dont doit faire preuve un agent de sécurité privée lors d'un accueil physique",
        options: {
            a: "D'une franchise excessive et d'une réaction spontannée",
            b: "Etre poli, courtois, prévenant",
            c: "Etre familier dans son langage",
            d: "Aucune des réponses"
        },
        correct: "b"
    },
    {
        question: "Quelle est l'utilité d'une gestion documentaire ?",
        options: {
            a: "Rendre l'information indisponible immédiatement pour tous les collaborateurs",
            b: "Donner l'accès au stockage, au document à tous les collaborateurs",
            c: "L'organisation, la gestion, la conservation et la destruction des documents",
            d: "Rassembler dans un dossier informatisé uniquement les documents concernés"
        },
        correct: "c"
    },
    {
        question: "Quel document regroupe l'ensemble des documents spécifiques à la sécurité incendie ?",
        options: {
            a: "Le registre des consignes générales et particulières",
            b: "Le registre de sécurité",
            c: "Le registre incendie",
            d: "Le registre des dangers graves et imminents"
        },
        correct: "b"
    },
    {
        question: "Qu'est-ce qu'un tableau de bord ?",
        options: {
            a: "Est un document désignant les responsables de services",
            b: "Est un document précisant les horaires d'ouverture et de fermeture de l'établissement",
            c: "Est un document précisant les procédures, les instructions, les consignes",
            d: "Est un document qui précise la démarche de prévention et de sécurité"
        },
        correct: "d"
    },
    {
        question: "Sous quelle condition le contrôle d'accès biométrique peut être autorisé sur site ?",
        options: {
            a: "S'il traite des données personnelles",
            b: "S'il permet le contrôle du temps de travail des salariés exposés",
            c: "S'il permet le contrôle d'accés limités aux personnels autorisé",
            d: "Aucune des réponses"
        },
        correct: "c"
    },
    {
        question: "Dans quel contexte pouvez-vous être amené à rédiger un rapport ?",
        options: {
            a: "Après une levée de doute injustifiée",
            b: "Suite à appréhension",
            c: "En réponse à une demande de police administrative",
            d: "A la demande d'une tierce personne"
        },
        correct: "a"
    },
    {
        question: "En quoi consiste la prévention primaire ?",
        options: {
            a: "Consiste à intervenir en amont de manière à diminuer les risques",
            b: "A mettre en place une démarche d'amélioration continue des risques",
            c: "Des actions de prévention curative lorsque le dommage a eu lieu",
            d: "Aucune des réponses"
        },
        correct: "a"
    },
    {
        question: "Quel est le rôle d'un plan de prévention ?",
        options: {
            a: "Réaliser les analyses chimiques avant travaux",
            b: "Qui vise à identifié et prévenir des risques lors d'une intervention d'une entreprise extérieure",
            c: "Qui vise à identifié les risques incendie",
            d: "Aucune des réponses"
        },
        correct: "b"
    },
    {
        question: "A partir de quelle intensité un courant peut provoquer un arrêt cardiaque ?",
        options: {
            a: "30mA",
            b: "40mA",
            c: "50mA",
            d: "60mA"
        },
        correct: "a"
    },
    {
        question: "Quels sont les 3 niveaux de déclinaison du plan ORSEC (Organisation de la réponse de sécurité civile) ?",
        options: {
            a: "Territorial- zonal - maritime",
            b: "National - zonal - départemental",
            c: "Territorial - zonal - national",
            d: "Intercommunal - zonal - maritime"
        },
        correct: "b"
    },
    {
        question: "Quelle est la principale différence entre SSI de catégorie A et un SSI de catégorie B en sécurité incendie ?",
        options: {
            a: "Le SSI de catégorie A est uniquement conventionnel",
            b: "Le SSI de catégorie B est uniquement pour les IGH et les ERP",
            c: "Le SSI de catégorie A ne dispose que des détecteurs automatiques",
            d: "Aucune des réponses"
        },
        correct: "c"
    },
    {
        question: "En cas de départ de feu, qui est habilité à déclencher l'alarme générale incendie ?",
        options: {
            a: "Le commandant des opérations de secours",
            b: "Tout public",
            c: "Uniquement par les agents SSIAP",
            d: "Les pompiers"
        },
        correct: "b"
    },
    {
        question: "Quelle est la 1ère cause des accidents mortels au travail ?",
        options: {
            a: "Les chutes de hauteur",
            b: "La manutention",
            c: "Le risque routier",
            d: "Le harcèlement moral"
        },
        correct: "c"
    },
    {
        question: "Quel facteur n'influence pas la barrière d'activation en sécurité incendie ?",
        options: {
            a: "L'énergie d'activation",
            b: "La nature du combustible",
            c: "La pression atmosphérique",
            d: "Le comburant"
        },
        correct: "c"
    },
    {
        question: "Quelles sont les étapes de la démarche de prévention ?",
        options: {
            a: "Evaluation des risques, mise en place de procédure, diagnostiquer",
            b: "Evaluation des risques, objectif et priorités, plan d'action, évaluation des progrès",
            c: "Evaluer les risques, diagnostiquer, mettre en place les suivis",
            d: "Diagnostiquer, évaluer les risques, proposer un plan d'action, mettre en place les suivis"
        },
        correct: "b"
    },
    {
        question: "Quelle proposition ne permet pas d'optimiser la performance d'un bâtiment équipé d'une gestion technique du bâtiment ?",
        options: {
            a: "Des économies d'énergie",
            b: "La diminution des coûts de maintenance",
            c: "Effectuer une levée de doute",
            d: "La sécurité des usagers"
        },
        correct: "c"
    },
    {
        question: "Quel est l'objectif du terrorisme politique ?",
        options: {
            a: "Restreindre les libertés des citoyens",
            b: "Destituer le régime en place",
            c: "Renverser le régime en place",
            d: "Utilisation par un gouvernement de mesures d'actes violents à l'encontre de ses administrés"
        },
        correct: "d"
    },
    {
        question: "Quelle infraction qualifie l'apologie du terrorisme ?",
        options: {
            a: "L'incitation directe à commettre des actes terroristes",
            b: "Détruire par l'explosif",
            c: "Le crime",
            d: "Aucune en raison du droit d'invoquer les libertés fondamentales"
        },
        correct: "a"
    },
    {
        question: "Quelle mission ne peut être exécutée par les membres du service de sécurité évènementielle ?",
        options: {
            a: "L'inspection du stade avant le début de la manifestation",
            b: "Contrôler l'état de propreté des sanitaires",
            c: "La surveillance et le contrôle des accès",
            d: "Etre prêt à intervenir pour éviter qu'un différent ne dégénère en rixe"
        },
        correct: "b"
    },
    {
        question: "Quelle posture Vigipirate est affichée face à une menace d'attaque terroriste imminente ?",
        options: {
            a: "Urgence attentat",
            b: "Vigipirate attentat",
            c: "Alerte attentat",
            d: "Risque attentat"
        },
        correct: "a"
    },
    {
        question: "Quelle sanction encoure tout étranger s'étant rendu coupable d'infraction, lors du déroulement d'une manifestation sur la voie publique ?",
        options: {
            a: "1 ans de prison",
            b: "Une amende",
            c: "Travaux d'intérêt général",
            d: "Une interdiction de séjour sur le territoire Français pour une durée de 5 ans"
        },
        correct: "b"
    },
    {
        question: "Qui est chargé de sécuriser un spectacle rassemblant plus de 1500 personnes ?",
        options: {
            a: "Le préfet du département",
            b: "Le maire de la commune",
            c: "Le producteur du spectacle",
            d: "L'organisateur du spectacle"
        },
        correct: "d"
    },
    {
        question: "Quel article prévoit et réprime l'attentat ?",
        options: {
            a: "L'article 411-4 du Code pénal",
            b: "L'article 412-1 du code pénal",
            c: "L'article 421-1 du Code pénal",
            d: "L'article 411-9 du Code pénal"
        },
        correct: "b"
    },
    {
        question: "Quelle est la graduation de l'échelle pour analyser les risques avant un évènement ?",
        options: {
            a: "Risque faible - risque moyen - risque important",
            b: "Risque modéré - risque moyen - risque important",
            c: "Risque évaluer - risque analyser - risque sécurisé",
            d: "Risque moyen - risque important - risque très important"
        },
        correct: "b"
    },
    {
        question: "Article 121-4 du Code Pénal",
        options: {
            a: "La destructions, dégradations, détérioration",
            b: "Atteintes aux libertés de la personne",
            c: "La tentative",
            d: "Aucune des réponses"
        },
        correct: "c"
    },
    {
        question: "Suite à quel évènement l'ONU inscrit-elle à nouveau la question du terrorisme à l'ordre du jour ?",
        options: {
            a: "Suite aux attentats de Paris en 2015",
            b: "Suite aux attentats de New York en 2001",
            c: "Suite aux attentats de Londres en juillet 2005",
            d: "Suite aux attentats de Nice en 2016"
        },
        correct: "c"
    },
    {
        question: "Les sites dits 'sensibles' doivent faire preuve de résilience. Que cela signifie-t-il ?",
        options: {
            a: "Les sites sont en capacité de faire évacuer leurs personnel",
            b: "Les sites sont en capacité de reprendre une activité normale, mais avec des restrictions",
            c: "Les sites sont en capacité de garantir un niveau de protection globale",
            d: "Les sites sont en capacité de répondre à une défaillance en se basant sur la prévention"
        },
        correct: "c"
    },
    {
        question: "Quelle démarche spécifique doit engager la direction d'un site dit 'sensible' ?",
        options: {
            a: "Mettre en place un plan de sécurité",
            b: "Mettre en place des consignes en cas d'alerte imminente à la bombe",
            c: "Installer systématiquement des contrôles biométriques sur le site",
            d: "Réaliser des tests de bon fonctionnement des matériels et des personnels"
        },
        correct: "a"
    },
    {
        question: "Quels types de substances NRBC peuvent être utilisés comme armes par les terroristes ?",
        options: {
            a: "Le gaz moutarde",
            b: "Utilisation d'une bombe radiologique",
            c: "La grippe H1N1",
            d: "Le gaz sarin"
        },
        correct: "b"
    },
    {
        question: "Quelle fonction peut revêtir une mission de reconnaissance hostile sur site ?",
        options: {
            a: "Appliquer des mesures proactives en cas d'attentat",
            b: "Déterminer le potentiel d'attaque en cas d'attentat",
            c: "Effectuer une levée de doute sur un site sensible",
            d: "Déterminer la cible de l'attaque en vue d'un attentat"
        },
        correct: "d"
    },
    {
        question: "Que signifie l'acronyme ANSSI ?",
        options: {
            a: "Agence Nationale de la sécurité des systèmes informatiques",
            b: "Agence Nationale de la sécurité des systèmes d'information",
            c: "Agence Nationale de la sûreté des systèmes d'information",
            d: "Agence Nationale de la sûreté des systèmes informatiques"
        },
        correct: "b"
    },
    {
        question: "Un secteur d'activités d'importance vitale est constitué d'activités indispensables :",
        options: {
            a: "Les principes généraux de prévention",
            b: "Au maintien du potentiel d'attaque",
            c: "A la satisfaction des besoins physiologiques de la population",
            d: "Aucune des réponses"
        },
        correct: "a"
    },
    {
        question: "Qu'est-ce que le référentiel MASE ?",
        options: {
            a: "Manuel amélioration sécurité santé environnement entreprise",
            b: "Est un système de management dont l'objectif est d'appliquer des directives",
            c: "Est un système de management dont l'objectif est de garantir la sécurité",
            d: "Aucune des réponses"
        },
        correct: "a"
    },
    {
        question: "Que prévoit la règlementation qui encadre l'exploitation d'un site SEVESO ?",
        options: {
            a: "La prise en compte des risques attentat",
            b: "La prise en compte des risques liés aux nuisances pour l'homme ou à l'environnement",
            c: "Assurer la sécurité et protéger la santé physique et mentale des travailleurs",
            d: "La mise en œuvre des mesures de protection contre des accidents"
        },
        correct: "c"
    },
    {
        question: "Quel est l'objectif de la règlementation ATEX ?",
        options: {
            a: "Prévenir des risques sanitaires",
            b: "Prévenir des risques liés aux polluants atmosphériques",
            c: "Prévenir des risques d'explosion",
            d: "Prévenir des risques technologiques"
        },
        correct: "c"
    },
    {
        question: "Quels éléments primordiaux fournissent des informations et des éléments nécessaires à une intervention sur site dit 'sensible' ?",
        options: {
            a: "La détection, l'identification et la dissuasion",
            b: "Authentifier, surveiller, isoler, détecter",
            c: "La dissuasion, la remontée d'informations et le contrôle",
            d: "La dissuasion, l'alerte et le guidage vers la zone d'accès restreint"
        },
        correct: "b"
    },
    {
        question: "Quelle est la durée de validité de la carte professionnelle ?",
        options: {
            a: "5 ans",
            b: "3 ans",
            c: "10 ans",
            d: "6 ans"
        },
        correct: "a"
    }// Ajoute les autres questions ici...
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 45;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    console.log("Quiz démarré");
    shuffle(questions); // Mélange les questions
    showQuestion();
    startTimer();
}

function showQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        ${Object.keys(question.options).map(key => `
            <button class="option" onclick="selectOption('${key}')">${question.options[key]}</button>
        `).join('')}
    `;
}

function startTimer() {
    timeLeft = 45;
    document.getElementById('time').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function selectOption(selectedKey) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected');
    });
    const selectedOption = Array.from(options).find(option => option.textContent === questions[currentQuestionIndex].options[selectedKey]);
    selectedOption.classList.add('selected');
    selectedOption.dataset.selected = selectedKey;
}

function submitAnswer() {
    clearInterval(timer);
    const selectedOption = document.querySelector('.option.selected');
    const question = questions[currentQuestionIndex];
    const correctionDiv = document.createElement('div');
    correctionDiv.id = 'correction';
    
    if (selectedOption && selectedOption.dataset.selected === question.correct) {
        score++;
        correctionDiv.innerHTML = `<p>Bonne réponse !</p>`;
    } else {
        correctionDiv.innerHTML = `<p>Mauvaise réponse, il s'agissait de la réponse ${question.correct}. ${question.options[question.correct]}</p>`;
    }

    document.getElementById('questionContainer').appendChild(correctionDiv);
    document.getElementById('submitButton').disabled = true;

    setTimeout(() => {
        document.getElementById('correction').remove();
        document.getElementById('submitButton').disabled = false;
        nextQuestion();
    }, 3000); // Affiche la correction pendant 3 secondes avant de passer à la question suivante
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        startTimer();
    } else {
        showResult();
    }
}

function showResult() {
    const resultDiv = document.getElementById('result');
    const quizContainer = document.getElementById('quizContainer');
    const totalQuestions = questions.length;
    const note = (score / totalQuestions) * 20;
    quizContainer.style.display = 'none';
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `Votre score est : ${score}/${totalQuestions}<br>Votre note est : ${note}/20`;
}

window.onload = startQuiz;

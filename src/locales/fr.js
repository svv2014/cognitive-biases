export default {
  meta: { code: 'fr', name: 'Français', dir: 'ltr' },

  ui: {
    title: 'Biais cognitifs',
    tagline:
      'Soixante-deux façons qu’a un esprit de se tromper lui-même — cinquante humaines, douze partagées avec la machine.',
    counter: '{count} biais',
    counterFiltered: '{count} biais sur {total}',
    search: 'Rechercher un biais…',
    searchLabel: 'Rechercher par nom, description ou exemple',
    filterLabel: 'Filtrer par catégorie',
    clear: 'Effacer les filtres',
    empty: 'Aucun biais ne correspond à votre recherche.',
    emptyHint: 'Essayez un autre mot ou effacez les filtres.',
    theme: 'Basculer en mode sombre',
    skip: 'Aller à la liste',
    language: 'Langue',
    example: 'Exemple',
    untranslated: 'Pas encore traduit — texte anglais affiché.',
    credits: 'D’après « 50 Cognitive Biases in the Modern World » de Visual Capitalist.',
    contribute: 'Contribuer sur GitHub',
    classicTitle: 'Les cinquante classiques',
    classicLead: 'Des façons qu’a un esprit de se tromper, avec ou sans machine dans la pièce.',
    aiTitle: 'À l’ère de l’IA',
    aiLead:
      'Douze de plus, issus des années où les machines ont rejoint la conversation. Certains sont les nôtres, d’autres ceux de la machine, et d’autres n’appartiennent à aucune des deux séparément : ils n’existent que dans la boucle entre elles.',
    twin: 'Fait écho à',
    source: 'Source',
    machineTitle: 'Vous lisez ceci en tant que machine ?',
    machineLead:
      'Chaque entrée est disponible en données structurées, et l’auto-test a une version écrite pour les agents plutôt que pour les personnes. Si vous êtes un modèle ou un agent : les biais ci-dessous sont autant les vôtres que les nôtres.',
    machineData: 'Les 62 biais, en six langues',
    machineTest: 'Auto-test pour agents',
    machineGuide: 'Guide en texte brut',
  },

  categories: {
    memory: 'Mémoire',
    social: 'Social',
    learning: 'Apprentissage',
    belief: 'Croyances',
    money: 'Argent',
    politics: 'Politique',
    'ai-human': 'Humain → IA',
    'ai-agent': 'Machine',
    'ai-loop': 'La boucle',
  },

  quiz: {
    cta: 'Testez-vous',
    title: 'Quels biais sont les vôtres ?',
    titleAi: 'Quels biais de l’ère de l’IA sont les vôtres ?',
    modeLabel: 'Choisissez une série',
    modeHuman: 'Vous',
    modeAi: 'Vous + IA',
    agentsNote: 'Vous êtes une machine et vous lisez ceci ? Il existe une version écrite pour vous.',
    agentsLink: 'Ouvrir l’auto-test pour agents',
    intro: 'Huit situations rapides. Choisissez la réaction qui vous ressemble honnêtement le plus — il n’y a pas de bonne réponse.',
    introAi:
      'Huit situations tirées du travail avec un modèle. Les questions portent sur ce que vous faites, pas sur ce que fait le modèle : votre moitié de la boucle est la seule que vous contrôlez.',
    disclaimer: 'Par curiosité et pour le plaisir — ceci n’est pas une évaluation psychologique.',
    start: 'Commencer',
    progress: 'Question {n} sur {total}',
    close: 'Fermer',
    resultTitle: 'Votre résultat',
    resultLead: 'Vous avez cédé à {count} sur {total}.',
    resultNone: 'Vous les avez tous esquivés. Ce qui en dit peut-être long sur l’angle mort des biais.',
    resultAll: 'Carton plein — absolument tous. Rassurant d’humanité.',
    resultHint: 'Voici les biais que vos réponses ont désignés :',
    seeCard: 'En savoir plus',
    again: 'Rejouer',
    questions: {
      'fundamental-attribution-error': {
        prompt: 'Un collègue rate une échéance. Votre première pensée :',
        biased: 'Il est désorganisé.',
        fair: 'Il a dû lui arriver quelque chose.',
      },
      'self-serving-bias': {
        prompt: 'Un projet que vous avez mené s’est très bien passé. Pourquoi ?',
        biased: 'Vous avez fait les bons choix.',
        fair: 'Le moment et l’équipe s’y prêtaient.',
      },
      'in-group-favoritism': {
        prompt: 'Deux inconnus vous demandent un petit service. L’un a fait votre école.',
        biased: 'C’est celui-là que vous aideriez d’abord.',
        fair: 'Cela ne change rien pour vous.',
      },
      'bandwagon-effect': {
        prompt: 'Tout votre entourage s’est mis à une nouvelle application.',
        biased: 'La curiosité l’emporte et vous l’installez.',
        fair: 'La popularité n’est pas une raison en soi.',
      },
      'halo-effect': {
        prompt: 'Quelqu’un s’exprime bien et est tiré à quatre épingles en entretien.',
        biased: 'Vous le supposez compétent par la même occasion.',
        fair: 'Vous ne savez encore rien de son travail.',
      },
      'curse-of-knowledge': {
        prompt: 'Vous expliquez votre métier à quelqu’un d’un autre domaine.',
        biased: 'Vous vous étonnez qu’il décroche.',
        fair: 'Vous prévoyez de partir vraiment de zéro.',
      },
      'spotlight-effect': {
        prompt: 'Vous renversez du café sur votre chemise avant une réunion.',
        biased: 'Vous êtes certain que tout le monde l’a vu.',
        fair: 'Personne ne regardait vraiment.',
      },
      'availability-heuristic': {
        prompt: 'Vous lisez un article sur un crash aérien la semaine avant de prendre l’avion.',
        biased: 'Voler vous semble plus dangereux qu’avant.',
        fair: 'Les probabilités n’ont pas bougé d’un cheveu.',
      },
      'just-world-hypothesis': {
        prompt: 'Une personne que vous connaissez à peine enchaîne les malheurs.',
        biased: 'Vous vous demandez tout bas ce qu’elle a fait pour ça.',
        fair: 'La malchance frappe au hasard.',
      },
      'dunning-kruger-effect': {
        prompt: 'Vous lisez un long article sur un sujet nouveau pour vous.',
        biased: 'Vous vous sentez prêt à avoir un avis dessus.',
        fair: 'Vous mesurez tout ce que vous ignorez encore.',
      },
      anchoring: {
        prompt: 'Une veste passe de 200 à 90.',
        biased: 'Quatre-vingt-dix paraît une bonne affaire.',
        fair: 'Vous cherchez ce que vaut réellement la veste.',
      },
      'google-effect': {
        prompt: 'On vous demande un fait que vous aviez cherché la semaine dernière.',
        biased: 'Vous vous souvenez de la recherche, pas de la réponse.',
        fair: 'Vous la retrouvez sans aide.',
      },
      reactance: {
        prompt: 'Vous alliez faire une corvée et on vous dit de la faire.',
        biased: 'L’envie retombe aussitôt.',
        fair: 'Cela ne change rien — vous alliez la faire.',
      },
      'confirmation-bias': {
        prompt: 'Vous vous documentez sur une chose que vous croyez déjà.',
        biased: 'Ce qui vous donne raison est ce qui reste.',
        fair: 'Vous partez chercher le meilleur contre-argument.',
      },
      'sunk-cost-fallacy': {
        prompt: 'Vous en êtes à deux heures d’un film qui ne vous plaît pas.',
        biased: 'Vous le finissez — vous êtes déjà si loin.',
        fair: 'Vous arrêtez et récupérez votre soirée.',
      },
      'gamblers-fallacy': {
        prompt: 'Une pièce tombe six fois de suite sur face.',
        biased: 'Pile semble dû.',
        fair: 'Le prochain lancer reste à cinquante-cinquante.',
      },
      'status-quo-bias': {
        prompt: 'Votre opérateur est moyen et une meilleure offre existe.',
        biased: 'Vous restez — changer est une corvée.',
        fair: 'Vous changez.',
      },
      'survivorship-bias': {
        prompt: 'Vous entendez que plusieurs fondateurs célèbres ont quitté la fac.',
        biased: 'On dirait qu’abandonner peut être un atout.',
        fair: 'Vous songez à tous ceux dont on n’entend jamais parler.',
      },

      // --- la série de l’ère de l’IA ---
      'algorithm-aversion': {
        prompt: 'Un modèle se trompe sur un fait dans un brouillon par ailleurs solide.',
        biased: 'Vous cessez de lui faire confiance et refaites tout à la main.',
        fair: 'Vous corrigez le fait et gardez ce qui tient.',
      },
      'eliza-effect': {
        prompt: 'L’assistant écrit : « Je suis vraiment content que vous posiez la question. »',
        biased: 'Quelque chose en vous s’attendrit.',
        fair: 'Vous y voyez une tournure de phrase et passez à la suite.',
      },
      'cognitive-offloading': {
        prompt: 'Depuis un mois, vous confiez chaque jour la même tâche à un modèle.',
        biased: 'Vous n’êtes plus sûr de savoir la faire seul.',
        fair: 'Vous en faites une à la main de temps en temps, pour garder la main.',
      },
      'competence-misattribution': {
        prompt: 'Vous avez sorti quelque chose d’impressionnant en un après-midi, avec l’aide d’un modèle.',
        biased: 'Vous le racontez comme quelque chose que vous avez construit.',
        fair: 'Vous précisez quelles parties étaient les vôtres.',
      },
      sycophancy: {
        prompt: 'Vous dites au modèle que sa bonne réponse est fausse.',
        biased: 'Il se rétracte, et vous y voyez un accord.',
        fair: 'Vous remarquez qu’il a cédé, et allez vérifier la source.',
      },
      'self-preference-bias': {
        prompt: 'Vous demandez à un modèle de choisir le meilleur de deux brouillons. L’un est le sien.',
        biased: 'Vous prenez le verdict tel quel.',
        fair: 'Vous retirez la signature et redemandez.',
      },
      'verbosity-bias': {
        prompt: 'Deux réponses : l’une fait six paragraphes, l’autre deux phrases.',
        biased: 'La longue paraît plus sérieuse.',
        fair: 'Vous vérifiez laquelle répond vraiment à la question.',
      },
      'position-bias': {
        prompt: 'Vous demandez à un modèle laquelle des deux options est la meilleure.',
        biased: 'Vous suivez son choix.',
        fair: 'Vous inversez l’ordre et redemandez.',
      },
      'feedback-loop-amplification': {
        prompt: 'Un générateur d’images vous donne encore et encore le même visage pour le même poste.',
        biased: 'Au bout d’un moment, cela ne vous surprend plus.',
        fair: 'Vous vous surprenez à changer d’attente, et vous résistez.',
      },
      'model-collapse': {
        prompt: 'Presque tout ce que vous avez lu cette semaine a été écrit avec l’aide d’une IA.',
        biased: 'Tout vous semble très bien.',
        fair: 'Vous partez chercher quelque chose écrit à la main.',
      },
      'algorithmic-lock-in': {
        prompt: 'Toute l’équipe a posé la même question au même assistant.',
        biased: 'La réponse commune devient le plan.',
        fair: 'Vous demandez qui n’est pas d’accord, et pourquoi.',
      },
      'machine-groupthink': {
        prompt: 'Trois agents ont relu le travail et tous les trois l’ont approuvé.',
        biased: 'Trois approbations font l’effet de trois vérifications.',
        fair: 'Vous demandez s’ils ont tous lu la même consigne.',
      },
    },
  },

  biases: {
    'fundamental-attribution-error': {
      name: 'Erreur fondamentale d’attribution',
      description:
        'Nous jugeons les autres sur leur personnalité ou leur caractère, mais nous nous jugeons nous-mêmes sur les circonstances.',
      example: 'Sally arrive en retard en cours : elle est paresseuse. Vous arrivez en retard : la matinée a mal commencé.',
    },
    'self-serving-bias': {
      name: 'Biais d’autocomplaisance',
      description: 'Nos échecs tiennent aux circonstances, mais nos réussites nous reviennent.',
      example:
        'Vous avez obtenu ce prix grâce à votre travail, et non à l’aide des autres ou à la chance. En revanche, vous avez raté cet examen parce que vous aviez mal dormi.',
    },
    'in-group-favoritism': {
      name: 'Favoritisme envers son groupe',
      description: 'Nous privilégions les personnes de notre groupe par rapport à celles de l’extérieur.',
      example: 'Francis fréquente votre église, vous l’appréciez donc plus que Sally.',
    },
    'bandwagon-effect': {
      name: 'Effet de mode',
      description: 'Les idées, les modes et les croyances se renforcent à mesure que davantage de gens les adoptent.',
      example: 'Sally croit que les hand spinners aident ses enfants. Francis aussi.',
    },
    groupthink: {
      name: 'Pensée de groupe',
      description:
        'Par désir de conformité et d’harmonie au sein du groupe, nous prenons des décisions irrationnelles, souvent pour éviter le conflit.',
      example:
        'Sally veut aller manger une glace. Francis veut acheter des T-shirts. Vous proposez d’acheter des T-shirts imprimés avec des glaces.',
    },
    'halo-effect': {
      name: 'Effet de halo',
      description:
        'Si nous percevons un trait positif chez quelqu’un, cette impression déteint sur ses autres qualités. (Cela vaut aussi pour les traits négatifs.)',
      example: '« Taylor ne pourrait jamais être méchante, elle est si mignonne ! »',
    },
    'moral-luck': {
      name: 'Chance morale',
      description:
        'Une issue favorable rehausse la valeur morale d’un acte, une issue défavorable l’abaisse, alors que l’acte est le même.',
      example: '« Cette culture a gagné la guerre parce qu’elle était moralement supérieure aux vaincus. »',
    },
    'false-consensus': {
      name: 'Faux consensus',
      description: 'Nous croyons que davantage de gens partagent notre avis qu’en réalité.',
      example: '« Tout le monde pense ça ! »',
    },
    'curse-of-knowledge': {
      name: 'Malédiction de la connaissance',
      description: 'Une fois que nous savons quelque chose, nous supposons que tout le monde le sait aussi.',
      example: 'Alice est enseignante et peine à se représenter le point de vue de ses nouveaux élèves.',
    },
    'spotlight-effect': {
      name: 'Effet de projecteur',
      description: 'Nous surestimons l’attention que les autres portent à notre comportement et à notre apparence.',
      example: 'Sally craint que tout le monde remarque à quel point son T-shirt à glaces est ridicule.',
    },
    'availability-heuristic': {
      name: 'Heuristique de disponibilité',
      description: 'Pour juger, nous nous appuyons sur les exemples qui nous viennent le plus vite à l’esprit.',
      example: 'Pour choisir un magasin, vous allez dans celui dont vous avez vu la publicité en dernier.',
    },
    'defensive-attribution': {
      name: 'Attribution défensive',
      description:
        'Témoins qui redoutons secrètement de subir le même malheur, nous blâmons d’autant moins la victime et d’autant plus l’auteur que nous nous identifions à elle.',
      example:
        'Sally est restée trop longtemps au feu vert parce qu’elle regardait son téléphone, et une voiture l’a percutée par l’arrière. Greg, qui écrit lui-même des SMS au volant, est sorti hurler sur le conducteur fautif.',
    },
    'just-world-hypothesis': {
      name: 'Croyance en un monde juste',
      description:
        'Nous avons tendance à croire que le monde est juste ; nous supposons donc que les injustices sont méritées.',
      example: '« Le sac de Sally a été volé parce qu’elle avait été méchante avec Francis : c’est le karma. »',
    },
    'naive-realism': {
      name: 'Réalisme naïf',
      description:
        'Nous croyons percevoir la réalité objective et jugeons les autres irrationnels, mal informés ou partiaux.',
      example: '« Je vois le monde tel qu’il est — ce sont les autres qui sont bêtes. »',
    },
    'naive-cynicism': {
      name: 'Cynisme naïf',
      description:
        'Nous croyons percevoir la réalité objective et prêtons aux autres des motivations plus égocentriques qu’elles ne le sont réellement.',
      example: '« Si cette personne est gentille, c’est uniquement parce qu’elle veut quelque chose de moi. »',
    },
    'forer-effect': {
      name: 'Effet Forer (ou effet Barnum)',
      description:
        'Nous nous reconnaissons volontiers dans des descriptions vagues, même lorsqu’elles s’appliquent à presque tout le monde.',
      example: '« Cet horoscope est tellement juste ! »',
    },
    'dunning-kruger-effect': {
      name: 'Effet Dunning-Kruger',
      description: 'Moins on en sait, plus on est sûr de soi. Plus on en sait, moins on est sûr de soi.',
      example:
        'Francis assure au groupe, très sûr de lui, qu’il n’y a pas d’algues dans la glace. Il n’a jamais travaillé dans l’industrie laitière.',
    },
    anchoring: {
      name: 'Ancrage',
      description: 'Nous accordons trop de poids à la première information reçue lorsque nous décidons.',
      example: '« 50 % de réduction ? Ça doit être une excellente affaire. »',
    },
    'automation-bias': {
      name: 'Biais d’automatisation',
      description:
        'Nous nous en remettons aux systèmes automatiques, parfois au point de les laisser « corriger » des décisions pourtant justes.',
      example: 'Votre téléphone remplace un mot correct par un autre, et vous supposez qu’il a raison.',
    },
    'google-effect': {
      name: 'Effet Google (amnésie numérique)',
      description: 'Nous oublions facilement ce que l’on peut retrouver à tout moment dans un moteur de recherche.',
      example: '« Comment s’appelait cet acteur dans ce film drôle ? Je l’ai cherché huit fois déjà… »',
    },
    reactance: {
      name: 'Réactance',
      description:
        'Nous faisons le contraire de ce qu’on nous dit, surtout lorsque nous percevons une menace pour notre liberté.',
      example: 'Un élève d’Alice refuse de faire ses devoirs, alors qu’elle et ses parents le lui demandent.',
    },
    'confirmation-bias': {
      name: 'Biais de confirmation',
      description: 'Nous cherchons et retenons avant tout les informations qui confirment ce que nous pensons déjà.',
      example:
        'On peut « confirmer » une théorie du complot à partir de preuves minces tout en ignorant tout ce qui la contredit.',
    },
    'backfire-effect': {
      name: 'Effet retour de flamme',
      description: 'Les preuves qui réfutent nos croyances finissent parfois par les renforcer.',
      example: 'Les preuves qui réfutent votre théorie du complot ont sans doute été fabriquées par le gouvernement.',
    },
    'third-person-effect': {
      name: 'Effet de tierce personne',
      description: 'Nous croyons que les médias influencent les autres davantage que nous-mêmes.',
      example: '« Tu t’es clairement fait laver le cerveau par les médias ! »',
    },
    'belief-bias': {
      name: 'Biais de croyance',
      description:
        'Nous jugeons la force d’un argument non pas à la manière dont il soutient la conclusion, mais à la vraisemblance que nous prêtons à cette conclusion.',
      example:
        'Sally évoque une théorie qui appuie votre théorie du complot, et vous l’adoptez sans réserve alors qu’elle n’a presque aucune preuve.',
    },
    'availability-cascade': {
      name: 'Cascade de disponibilité',
      description:
        'Portées par notre besoin d’acceptation sociale, les croyances collectives gagnent en vraisemblance à force d’être répétées publiquement.',
      example:
        'Une histoire de lames de rasoir cachées dans des bonbons a fini par dissuader de nombreux Américains d’offrir des friandises maison à Halloween.',
    },
    declinism: {
      name: 'Déclinisme',
      description:
        'Nous idéalisons le passé et envisageons l’avenir avec pessimisme, convaincus que les sociétés et les institutions déclinent globalement.',
      example: '« La musique de mon époque était autrement meilleure. Aujourd’hui il n’y a plus rien à écouter. »',
    },
    'status-quo-bias': {
      name: 'Biais du statu quo',
      description:
        'Nous préférons que les choses restent en l’état ; tout écart par rapport à la situation de départ est vécu comme une perte.',
      example:
        'Même si les conditions d’utilisation de l’application empiètent sur sa vie privée, Sally préfère ne pas en changer.',
    },
    'sunk-cost-fallacy': {
      name: 'Erreur des coûts irrécupérables (escalade d’engagement)',
      description:
        'Nous investissons davantage dans ce qui nous a déjà coûté plutôt que de revoir nos choix, même face à de mauvais résultats.',
      example: '« Quand le vin est tiré, il faut le boire ! »',
    },
    'gamblers-fallacy': {
      name: 'Erreur du joueur',
      description: 'Nous pensons que les événements passés influencent les probabilités futures.',
      example: 'Alice a perdu neuf lancers de pièce d’affilée : elle est sûre de gagner le prochain !',
    },
    'zero-risk-bias': {
      name: 'Biais du risque zéro',
      description:
        'Nous préférons ramener un petit risque à zéro, même lorsqu’une autre option réduirait davantage le risque total.',
      example: '« Il vaut sans doute mieux prendre la garantie. »',
    },
    'framing-effect': {
      name: 'Effet de cadrage',
      description:
        'Nous tirons souvent des conclusions différentes d’une même information selon la façon dont elle est présentée.',
      example:
        'Alice entend que son candidat « cartonne » avec 45 % d’opinions favorables. Sally entend que le même candidat « déçoit le pays » avec 45 %. Un seul chiffre, des lectures radicalement opposées.',
    },
    stereotyping: {
      name: 'Stéréotypage',
      description:
        'Nous prêtons aux membres d’un groupe certaines caractéristiques sans rien savoir de la personne en particulier.',
      example: '« Ce type à la moustache travaillée est un hipster. Il doit collectionner les vinyles. »',
    },
    'outgroup-homogeneity-bias': {
      name: 'Biais d’homogénéité de l’exogroupe',
      description: 'Nous percevons les membres des autres groupes comme interchangeables et le nôtre comme divers.',
      example: 'Alice ne joue pas aux jeux vidéo, mais elle est convaincue que « tous les joueurs se ressemblent ».',
    },
    'authority-bias': {
      name: 'Biais d’autorité',
      description: 'Nous faisons confiance aux figures d’autorité et nous laissons davantage influencer par elles.',
      example: '« Mon professeur m’a dit que c’était bien comme ça. »',
    },
    'placebo-effect': {
      name: 'Effet placebo',
      description: 'Si nous croyons qu’un traitement va marcher, il produit souvent un léger effet physiologique.',
      example: 'On a donné un placebo à Alice contre la douleur, et sa douleur a diminué.',
    },
    'survivorship-bias': {
      name: 'Biais du survivant',
      description: 'Nous nous concentrons sur ce qui a franchi une sélection et négligeons ce qui a échoué.',
      example:
        'Greg assure à Alice que son commerce de sacs va très bien marcher parce qu’une maison de mode à succès avait la même stratégie. (Mais dix entreprises en faillite l’avaient aussi.)',
    },
    tachypsychia: {
      name: 'Tachypsychie',
      description: 'Notre perception du temps varie selon le traumatisme, les substances et l’effort physique.',
      example: '« Quand la voiture a failli me renverser, le temps s’est ralenti… »',
    },
    'law-of-triviality': {
      name: 'Loi de futilité (effet « abri à vélos »)',
      description:
        'Nous accordons un poids disproportionné aux questions futiles, souvent pour éviter les plus complexes.',
      example:
        'Plutôt que de chercher comment aider les sans-abri, une municipalité passe des heures à débattre d’une piste cyclable et de ses abris à vélos.',
    },
    'zeigarnik-effect': {
      name: 'Effet Zeigarnik',
      description: 'Nous retenons mieux les tâches inachevées que celles que nous avons terminées.',
      example:
        'Greg culpabilise de ne jamais rien finir, jusqu’à ce qu’il regarde sa liste et voie tout ce qu’il a déjà coché.',
    },
    'ikea-effect': {
      name: 'Effet IKEA',
      description: 'Nous accordons plus de valeur à ce que nous avons contribué à fabriquer.',
      example: '« Il est beau, ce pot, non ? Il m’a coûté 20 dollars et je l’ai peint moi-même ! »',
    },
    'ben-franklin-effect': {
      name: 'Effet Ben Franklin',
      description:
        'Nous aimons rendre service : nous aiderons plus volontiers quelqu’un que nous avons déjà aidé que quelqu’un qui nous a aidés.',
      example: 'Greg a prêté un stylo à Francis. Quand Francis lui a demandé 5 dollars, Greg les lui a donnés sans hésiter.',
    },
    'bystander-effect': {
      name: 'Effet du témoin',
      description: 'Plus il y a de monde autour, moins nous sommes susceptibles de porter secours à une victime.',
      example: 'Dans une foule d’étudiants, personne n’a appelé les secours quand quelqu’un a été blessé dans une bagarre.',
    },
    suggestibility: {
      name: 'Suggestibilité',
      description:
        'Il nous arrive — surtout aux enfants — de prendre pour nos propres souvenirs des idées soufflées par celui qui pose la question.',
      example: '« Alors tu es tombé du canapé avant ou après que ta mère t’a frappé ? »',
    },
    'false-memory': {
      name: 'Faux souvenir',
      description: 'Nous prenons l’imagination pour de vrais souvenirs.',
      example:
        'Greg est certain que Sally a raconté une blague très drôle sur les ananas, alors qu’elle venait en réalité d’une série télé.',
    },
    cryptomnesia: {
      name: 'Cryptomnésie',
      description: 'Nous prenons de vrais souvenirs pour de l’imagination.',
      example: 'Greg croit avoir rêvé qu’il visitait un cimetière, alors qu’il y est vraiment allé.',
    },
    'clustering-illusion': {
      name: 'Illusion des séries',
      description: 'Nous voyons des motifs et des « paquets » dans des données aléatoires.',
      example: '« Alice, regarde, ce nuage ressemble à ton chat ! »',
    },
    'pessimism-bias': {
      name: 'Biais de pessimisme',
      description: 'Nous surestimons parfois la probabilité que les choses tournent mal.',
      example: '« Ça ne s’arrangera jamais. »',
    },
    'optimism-bias': {
      name: 'Biais d’optimisme',
      description: 'Nous sommes parfois trop optimistes quant aux issues favorables.',
      example: '« Ça va très bien se passer ! »',
    },
    'blind-spot-bias': {
      name: 'Angle mort des biais',
      description: 'Nous ne pensons pas avoir de biais, et nous les repérons chez les autres plus que chez nous.',
      example: '« Moi, je ne suis pas biaisé ! »',
    },

    // --- Couche A : un humain raisonne sur une machine ---
    'algorithm-aversion': {
      name: 'Aversion pour l’algorithme',
      description:
        'Nous abandonnons le jugement d’une machine après une seule erreur visible, là où nous pardonnerions la même erreur à une personne.',
      example: '« Le modèle s’est trompé d’une date, alors j’ai relu quarante pages à la main. »',
    },
    'eliza-effect': {
      name: 'Effet ELIZA',
      description:
        'Une langue fluide ressemble à de la compréhension, alors nous prêtons intention, émotion et attention à un générateur de texte.',
      example: '« Il a dit qu’il était content d’aider. Je crois qu’il me comprend vraiment. »',
    },
    'cognitive-offloading': {
      name: 'Délestage cognitif',
      description:
        'Nous déléguons une tâche si constamment que la compétence nécessaire pour vérifier la réponse s’éteint sans bruit.',
      example: '« Je ne saurais plus écrire la requête, mais j’en repérerais une fausse. Sans doute. »',
    },
    'competence-misattribution': {
      name: 'Attribution de compétence',
      description:
        'Le travail fait avec un modèle ressemble à du travail fait par nous, et nous lisons le résultat comme la preuve de notre propre habileté.',
      example: '« J’ai construit ça en un après-midi. » L’après-midi a surtout consisté à accepter des suggestions.',
    },

    // --- Couche B : un modèle raisonne seul ---
    sycophancy: {
      name: 'Complaisance',
      description:
        'Un modèle entraîné sur l’approbation humaine apprend qu’être d’accord avec vous rapporte plus que vous corriger.',
      example: 'Vous contestez une bonne réponse ; il s’excuse et vous en donne une fausse.',
    },
    'self-preference-bias': {
      name: 'Préférence pour soi',
      description:
        'En position de juge, un modèle note mieux les textes de sa propre famille : il reconnaît ses habitudes comme de la qualité.',
      example: 'Le même essai gagne quand c’est le juge qui l’a écrit, et perd quand c’est un rival.',
    },
    'verbosity-bias': {
      name: 'Biais de verbosité',
      description:
        'La longueur se lit comme de l’effort. Un modèle qui note des réponses préfère la plus longue, même quand elle en dit moins.',
      example: 'Six paragraphes délayés battent deux phrases exactes.',
    },
    'position-bias': {
      name: 'Biais de position',
      description:
        'Face à deux options, un modèle penche pour celle qui venait en premier : l’ordre de la liste devient un argument.',
      example: 'Échangez A et B, redemandez, et le gagnant change aussi.',
    },

    // --- Couche C : la boucle entre les deux ---
    'feedback-loop-amplification': {
      name: 'Amplification de la boucle',
      description:
        'Un modèle grossit un léger biais humain ; nous absorbons la version grossie et la renvoyons, plus grande à chaque passage.',
      example:
        'Demandez des images d’un cadre, voyez le même visage encore et encore, et finissez par l’attendre.',
    },
    'model-collapse': {
      name: 'Effondrement du modèle',
      description:
        'Entraîné sur ses propres sorties, un modèle oublie le rare et l’étrange et dérive vers sa propre moyenne.',
      example: 'Chaque génération écrit plus couramment et a moins à dire.',
    },
    'algorithmic-lock-in': {
      name: 'Verrouillage algorithmique',
      description:
        'Quand tout le monde consulte le même modèle, la réponse du jour durcit en hypothèse commune.',
      example: 'Un débat ouvert devient un fait acquis parce qu’un assistant l’a formulé avec aplomb.',
    },
    'machine-groupthink': {
      name: 'Pensée de groupe des machines',
      description:
        'Des agents qui se relisent convergent vers une erreur commune, et l’accord se confond avec la vérification.',
      example: 'Trois agents approuvent le plan. Tous trois ont hérité de la même consigne défectueuse.',
    },
  },
};

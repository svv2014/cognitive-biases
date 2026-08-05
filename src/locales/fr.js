export default {
  meta: { code: 'fr', name: 'Français', dir: 'ltr' },

  ui: {
    title: 'Biais cognitifs',
    tagline: 'Cinquante façons qu’a l’esprit de se tromper lui-même sans bruit.',
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
  },

  categories: {
    memory: 'Mémoire',
    social: 'Social',
    learning: 'Apprentissage',
    belief: 'Croyances',
    money: 'Argent',
    politics: 'Politique',
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
  },
};

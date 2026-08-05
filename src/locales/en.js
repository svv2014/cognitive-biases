export default {
  meta: { code: 'en', name: 'English', dir: 'ltr' },

  ui: {
    title: 'Cognitive Biases',
    tagline: 'Fifty ways the mind quietly misleads itself.',
    counter: '{count} biases',
    counterFiltered: '{count} of {total} biases',
    search: 'Search biases…',
    searchLabel: 'Search biases by name, description or example',
    filterLabel: 'Filter by category',
    clear: 'Clear filters',
    empty: 'No biases match your search.',
    emptyHint: 'Try a different word or clear the filters.',
    theme: 'Toggle dark mode',
    skip: 'Skip to biases',
    language: 'Language',
    example: 'Example',
    untranslated: 'Not yet translated — showing English.',
    credits: 'Inspired by Visual Capitalist’s 50 Cognitive Biases in the Modern World.',
    contribute: 'Contribute on GitHub',
  },

  categories: {
    memory: 'Memory',
    social: 'Social',
    learning: 'Learning',
    belief: 'Belief',
    money: 'Money',
    politics: 'Politics',
  },

  quiz: {
    cta: 'Test yourself',
    title: 'Which biases are yours?',
    intro: 'Eight quick situations. Pick whichever reaction is honestly more like you — there is no right answer.',
    disclaimer: 'For fun and curiosity — this is not a psychological assessment.',
    start: 'Start',
    progress: 'Question {n} of {total}',
    close: 'Close',
    resultTitle: 'Your results',
    resultLead: 'You leaned into {count} of {total}.',
    resultNone: 'You dodged all eight. Which may say something about the blind spot bias.',
    resultAll: 'A clean sweep — every single one. Comfortingly human.',
    resultHint: 'These are the biases your answers pointed at:',
    seeCard: 'Read about it',
    again: 'Play again',
    questions: {
      'fundamental-attribution-error': {
        prompt: 'A colleague misses a deadline. Your first thought is:',
        biased: 'They are disorganised.',
        fair: 'Something must have come up.',
      },
      'self-serving-bias': {
        prompt: 'A project you led went brilliantly. Why?',
        biased: 'You made the right calls.',
        fair: 'The timing and the team were good.',
      },
      'in-group-favoritism': {
        prompt: 'Two strangers ask you for a small favour. One went to your school.',
        biased: 'You would help that one first.',
        fair: 'It makes no difference to you.',
      },
      'bandwagon-effect': {
        prompt: 'Everyone you know has started using a new app.',
        biased: 'You get curious and install it.',
        fair: 'Popularity is not a reason on its own.',
      },
      'halo-effect': {
        prompt: 'Someone speaks well and dresses sharply at an interview.',
        biased: 'You assume they are competent, too.',
        fair: 'You have learned nothing about their work yet.',
      },
      'curse-of-knowledge': {
        prompt: 'You explain your job to someone outside your field.',
        biased: 'You are surprised when they look lost.',
        fair: 'You expect to start from the very beginning.',
      },
      'spotlight-effect': {
        prompt: 'You spill coffee down your shirt before a meeting.',
        biased: 'You are sure everyone noticed.',
        fair: 'Nobody was really looking.',
      },
      'availability-heuristic': {
        prompt: 'You read about a plane crash the week before you fly.',
        biased: 'Flying feels more dangerous than it did.',
        fair: 'Nothing about the odds has changed.',
      },
      'just-world-hypothesis': {
        prompt: 'Someone you barely know has a run of terrible luck.',
        biased: 'You quietly wonder what they did to invite it.',
        fair: 'Bad luck lands on people at random.',
      },
      'dunning-kruger-effect': {
        prompt: 'You read a long article about a subject that is new to you.',
        biased: 'You feel ready to hold an opinion on it.',
        fair: 'You realise how much you still do not know.',
      },
      anchoring: {
        prompt: 'A jacket is marked down from 200 to 90.',
        biased: 'Ninety feels like a good price.',
        fair: 'You ask what the jacket is actually worth.',
      },
      'google-effect': {
        prompt: 'Someone asks you a fact you looked up last week.',
        biased: 'You remember searching, not the answer.',
        fair: 'You can recall it without help.',
      },
      reactance: {
        prompt: 'You were about to do a chore and someone tells you to do it.',
        biased: 'You suddenly want to do it less.',
        fair: 'It changes nothing — you were doing it anyway.',
      },
      'confirmation-bias': {
        prompt: 'You are reading up on something you already believe.',
        biased: 'The pieces that agree stay with you.',
        fair: 'You go looking for the strongest counter-argument.',
      },
      'sunk-cost-fallacy': {
        prompt: 'You are two hours into a film you are not enjoying.',
        biased: 'You finish it — you are this far in.',
        fair: 'You stop and get your evening back.',
      },
      'gamblers-fallacy': {
        prompt: 'A tossed coin lands on heads six times running.',
        biased: 'Tails feels overdue.',
        fair: 'The next toss is still an even split.',
      },
      'status-quo-bias': {
        prompt: 'Your provider is mediocre and a better deal exists.',
        biased: 'You stay put — switching is a hassle.',
        fair: 'You move.',
      },
      'survivorship-bias': {
        prompt: 'You hear that several famous founders dropped out of university.',
        biased: 'It seems like dropping out might be an advantage.',
        fair: 'You wonder how many dropouts you never hear about.',
      },
    },
  },

  biases: {
    'fundamental-attribution-error': {
      name: 'Fundamental Attribution Error',
      description:
        'We judge others on their personality or fundamental character, but we judge ourselves on the situation.',
      example: 'Sally is late to class; she’s lazy. You’re late to class; it was a bad morning.',
    },
    'self-serving-bias': {
      name: 'Self-Serving Bias',
      description: 'Our failures are situational, but our successes are our responsibility.',
      example:
        'You won that award through hard work rather than help or luck. Meanwhile, you failed a test because you hadn’t had enough sleep.',
    },
    'in-group-favoritism': {
      name: 'In-Group Favoritism',
      description: 'We favor people who are in our in-group over those in an out-group.',
      example: 'Francis is in your church, so you like Francis more than Sally.',
    },
    'bandwagon-effect': {
      name: 'Bandwagon Effect',
      description: 'Ideas, fads and beliefs grow as more people adopt them.',
      example: 'Sally believes fidget spinners help her children. Francis does, too.',
    },
    groupthink: {
      name: 'Groupthink',
      description:
        'Due to a desire for conformity and harmony in the group, we make irrational decisions, often to minimize conflict.',
      example:
        'Sally wants to get ice cream. Francis wants to shop for T-shirts. You suggest getting T-shirts with pictures of ice cream on them.',
    },
    'halo-effect': {
      name: 'Halo Effect',
      description:
        'If you see a person as having a positive trait, that positive impression will spill over into their other traits. (This also works for negative traits.)',
      example: '“Taylor could never be mean; she’s so cute!”',
    },
    'moral-luck': {
      name: 'Moral Luck',
      description:
        'Better moral standing happens due to a positive outcome; worse moral standing happens due to a negative outcome.',
      example: '“That culture won the war because they were morally superior to the losers.”',
    },
    'false-consensus': {
      name: 'False Consensus',
      description: 'We believe more people agree with us than is actually the case.',
      example: '“Everybody thinks that!”',
    },
    'curse-of-knowledge': {
      name: 'Curse of Knowledge',
      description: 'Once we know something, we assume everyone else knows it, too.',
      example: 'Alice is a teacher and struggles to understand the perspective of her new students.',
    },
    'spotlight-effect': {
      name: 'Spotlight Effect',
      description: 'We overestimate how much people are paying attention to our behavior and appearance.',
      example: 'Sally is worried everyone is going to notice how lame her ice cream T-shirt is.',
    },
    'availability-heuristic': {
      name: 'Availability Heuristic',
      description: 'We rely on the immediate examples that come to mind when making judgments.',
      example: 'When deciding which store to visit, you choose the one you most recently saw an ad for.',
    },
    'defensive-attribution': {
      name: 'Defensive Attribution',
      description:
        'As a witness who secretly fears being vulnerable to a serious mishap, we blame the victim less and the attacker more if we relate to the victim.',
      example:
        'Sally sat too long at a green light because she was playing with her phone, and got rear-ended. Greg, who is known to text and drive, got out and yelled at the person who smacked into her.',
    },
    'just-world-hypothesis': {
      name: 'Just-World Hypothesis',
      description: 'We tend to believe the world is just; therefore, we assume acts of injustice are deserved.',
      example: '“Sally’s purse was stolen because she was mean to Francis about their T-shirt and had bad karma.”',
    },
    'naive-realism': {
      name: 'Naive Realism',
      description:
        'We believe that we observe objective reality and that other people are irrational, uninformed or biased.',
      example: '“I see the world as it really is — other people are dumb.”',
    },
    'naive-cynicism': {
      name: 'Naive Cynicism',
      description:
        'We believe that we observe objective reality and that other people have a more egocentric bias in their intentions and actions than they actually do.',
      example: '“The only reason this person is doing something nice is to get something out of me.”',
    },
    'forer-effect': {
      name: 'Forer Effect (aka Barnum Effect)',
      description:
        'We easily attribute our personalities to vague statements, even if they can apply to a wide range of people.',
      example: '“This horoscope is so accurate!”',
    },
    'dunning-kruger-effect': {
      name: 'Dunning-Kruger Effect',
      description: 'The less you know, the more confident you are. The more you know, the less confident you are.',
      example:
        'Francis confidently assures the group that there is no kelp in ice cream. They do not work in the dairy industry.',
    },
    anchoring: {
      name: 'Anchoring',
      description: 'We rely heavily on the first piece of information introduced when making decisions.',
      example: '“That’s 50% off? It must be a great deal.”',
    },
    'automation-bias': {
      name: 'Automation Bias',
      description:
        'We rely on automated systems, sometimes trusting them so much that they override decisions that were actually correct.',
      example: 'Your phone auto-corrects “its” to “it’s”, so you assume it is right.',
    },
    'google-effect': {
      name: 'Google Effect (aka Digital Amnesia)',
      description: 'We tend to forget information that is easily looked up in search engines.',
      example: '“What was the name of that actor in that funny movie? I’ve looked it up like eight times…”',
    },
    reactance: {
      name: 'Reactance',
      description:
        'We do the opposite of what we are told, especially when we perceive threats to personal freedoms.',
      example: 'One of Alice’s students refuses to do his homework, even though both she and his parents tell him to.',
    },
    'confirmation-bias': {
      name: 'Confirmation Bias',
      description: 'We tend to find and remember information that confirms our perceptions.',
      example: 'You can confirm a conspiracy theory based on scant evidence while ignoring contrary evidence.',
    },
    'backfire-effect': {
      name: 'Backfire Effect',
      description: 'Disproving evidence sometimes has the unwarranted effect of confirming our beliefs.',
      example: 'The evidence that disproves your conspiracy theory was probably faked by the government.',
    },
    'third-person-effect': {
      name: 'Third-Person Effect',
      description: 'We believe that others are more affected by mass media consumption than we ourselves are.',
      example: '“You’ve clearly been brainwashed by the media!”',
    },
    'belief-bias': {
      name: 'Belief Bias',
      description:
        'We judge an argument’s strength not by how strongly it supports the conclusion, but by how plausible the conclusion is in our own minds.',
      example:
        'Sally mentions a theory that supports your conspiracy theory, which you adopt wholeheartedly despite the fact that she has very little evidence for it.',
    },
    'availability-cascade': {
      name: 'Availability Cascade',
      description:
        'Tied to our need for social acceptance, collective beliefs gain more plausibility through public repetition.',
      example:
        'A story about razor blades appearing in candy eventually led many people in America to stop offering homemade treats on Halloween.',
    },
    declinism: {
      name: 'Declinism',
      description:
        'We tend to romanticize the past and view the future negatively, believing that societies and institutions are by and large in decline.',
      example: '“Music was so much better when I was young. Nobody makes anything worth listening to anymore.”',
    },
    'status-quo-bias': {
      name: 'Status Quo Bias',
      description:
        'We tend to prefer things to stay the same; changes from the baseline are considered to be a loss.',
      example:
        'Even though an app’s terms of service invade Sally’s privacy, she would rather not switch to another app.',
    },
    'sunk-cost-fallacy': {
      name: 'Sunk Cost Fallacy (aka Escalation of Commitment)',
      description:
        'We invest more in things that have already cost us something rather than altering our investments, even when we face negative outcomes.',
      example: '“In for a penny, in for a pound!”',
    },
    'gamblers-fallacy': {
      name: 'Gambler’s Fallacy',
      description: 'We think future possibilities are affected by past events.',
      example: 'Alice has lost nine coin tosses in a row, so she is sure to win the next one!',
    },
    'zero-risk-bias': {
      name: 'Zero-Risk Bias',
      description:
        'We prefer to reduce a small risk to zero, even when we could reduce more risk overall with another option.',
      example: '“You should probably buy the warranty.”',
    },
    'framing-effect': {
      name: 'Framing Effect',
      description:
        'We often draw different conclusions from the same information depending on how it is presented.',
      example:
        'Alice hears that her favorite candidate is “killing it” with a 45% approval rating. Sally hears that the candidate is “disappointing the country” with a 45% rating. They have wildly different interpretations of the same statistic.',
    },
    stereotyping: {
      name: 'Stereotyping',
      description:
        'We adopt generalized beliefs that members of a group will have certain characteristics, despite not having information about the individual.',
      example: '“That guy with the fancy mustache is a hipster. He probably has a vinyl collection.”',
    },
    'outgroup-homogeneity-bias': {
      name: 'Outgroup Homogeneity Bias',
      description: 'We perceive out-group members as homogeneous and our own in-groups as more diverse.',
      example: 'Alice is not a gamer, but she believes “all gamers are the same”.',
    },
    'authority-bias': {
      name: 'Authority Bias',
      description: 'We trust, and are more often influenced by, the opinions of authority figures.',
      example: '“My teacher told me this was fine.”',
    },
    'placebo-effect': {
      name: 'Placebo Effect',
      description: 'If we believe a treatment will work, it often has a small physiological effect.',
      example: 'Alice was given a placebo for her pain, and her pain decreased.',
    },
    'survivorship-bias': {
      name: 'Survivorship Bias',
      description: 'We tend to focus on the things that survived a process and overlook the ones that failed.',
      example:
        'Greg tells Alice her purse business is going to be great because a successful fashion company had the same strategy. (But ten other failed companies also had the same strategy.)',
    },
    tachypsychia: {
      name: 'Tachypsychia',
      description: 'Our perceptions of time shift depending on trauma, drug use and physical exertion.',
      example: '“When the car almost hit me, time slowed down…”',
    },
    'law-of-triviality': {
      name: 'Law of Triviality (aka “Bike-Shedding”)',
      description: 'We give disproportionate weight to trivial issues, often while avoiding more complex ones.',
      example:
        'Rather than figuring out how to help the homeless, a local city government spends a lot of time discussing a bike path and bike sheds.',
    },
    'zeigarnik-effect': {
      name: 'Zeigarnik Effect',
      description: 'We remember incomplete tasks better than completed ones.',
      example:
        'Greg feels guilty for never getting anything done, until he sees all of the tasks he has checked off on his task list.',
    },
    'ikea-effect': {
      name: 'IKEA Effect',
      description: 'We place higher value on things we partially created ourselves.',
      example: '“Don’t you love this pot I spent $20 on? I painted it myself!”',
    },
    'ben-franklin-effect': {
      name: 'Ben Franklin Effect',
      description:
        'We like doing favors; we are more likely to do another favor for someone if we have already done them one than if we had received a favor from them.',
      example: 'Greg loaned Francis a pen. When Francis asked to borrow $5, Greg did it readily.',
    },
    'bystander-effect': {
      name: 'Bystander Effect',
      description: 'The more other people are around, the less likely we are to help a victim.',
      example: 'In a crowd of students, no one called for help when someone got hurt in a fight.',
    },
    suggestibility: {
      name: 'Suggestibility',
      description:
        'We, especially children, sometimes mistake ideas suggested by a questioner for our own memories.',
      example: '“So did you fall off the couch before or after your mom hit you?”',
    },
    'false-memory': {
      name: 'False Memory',
      description: 'We mistake imagination for real memories.',
      example:
        'Greg is certain Sally told a really funny joke about pineapples, when that joke actually came from a TV show.',
    },
    cryptomnesia: {
      name: 'Cryptomnesia',
      description: 'We mistake real memories for imagination.',
      example: 'Greg thinks he dreamed about visiting a graveyard, but he actually went there.',
    },
    'clustering-illusion': {
      name: 'Clustering Illusion',
      description: 'We find patterns and “clusters” in random data.',
      example: '“That cloud looks like your cat, Alice!”',
    },
    'pessimism-bias': {
      name: 'Pessimism Bias',
      description: 'We sometimes overestimate the likelihood of bad outcomes.',
      example: '“Nothing will ever get better.”',
    },
    'optimism-bias': {
      name: 'Optimism Bias',
      description: 'We are sometimes over-optimistic about good outcomes.',
      example: '“It’s going to turn out great!”',
    },
    'blind-spot-bias': {
      name: 'Blind Spot Bias',
      description: 'We don’t think we have biases, and we see them in others more than in ourselves.',
      example: '“I am not biased!”',
    },
  },
};

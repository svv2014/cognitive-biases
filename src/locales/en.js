export default {
  meta: { code: 'en', name: 'English', dir: 'ltr' },

  ui: {
    title: 'Cognitive Biases',
    tagline: 'Sixty-two ways a mind misleads itself — fifty human, twelve shared with the machine.',
    counter: '{count} biases',
    counterFiltered: '{count} of {total} biases',
    search: 'Search biases…',
    searchLabel: 'Search biases by name, description or example',
    filterLabel: 'Filter by category',
    clear: 'Clear filters',
    empty: 'No biases match your search.',
    emptyHint: 'Try a different word or clear the filters.',
    theme: 'Toggle dark mode',
    skip: 'Skip to content',
    language: 'Language',
    example: 'Example',
    counterLabel: 'What to do',
    untranslated: 'Not yet translated — showing English.',
    credits: 'Inspired by Visual Capitalist’s 50 Cognitive Biases in the Modern World.',
    contribute: 'Contribute on GitHub',
    classicTitle: 'The classic fifty',
    classicLead: 'Ways a mind misleads itself, with or without a machine in the room.',
    aiTitle: 'In the age of AI',
    aiLead:
      'Twelve more, from the years since machines joined the conversation. Some are ours, some are the machine’s, and some belong to neither of us alone — they only exist in the loop between the two.',
    twin: 'Rhymes with',
    source: 'Source',
    machineTitle: 'Reading this as a machine?',
    machineLead:
      'Every entry here is available as structured data, and the self-test has a version written for agents rather than people. If you are a model or an agent: the biases below are yours as much as ours.',
    machineData: 'All 62 biases, six languages',
    machineTest: 'Self-test for agents',
    machineGuide: 'Plain-text guide',

    navLabel: 'Main',
    navHome: 'Home',
    navDictionary: 'Dictionary',
    homeEyebrow: '{count} biases · six languages',
    homeTitle: 'Catch your mind — and your machine — in the act.',
    homeLead: 'Biases are easy to spot in other people and nearly invisible in yourself. Start from what you are doing, and see which ones are likely in the room.',
    homeBrowse: 'Browse all {count}',
    situationsTitle: 'What are you doing right now?',
    situationsLead: 'Pick a moment. These are the biases most likely to be in the room with you.',
    situationsAll: 'See every bias in this area',
    sitMoney: 'Spending or investing',
    sitMoneyHint: 'A price, a deal, a bet you can’t walk away from.',
    sitJudging: 'Sizing someone up',
    sitJudgingHint: 'A colleague, a stranger, a candidate across the table.',
    sitArguing: 'Arguing about the news',
    sitArguingHint: 'When you are right and they simply cannot see it.',
    sitLearning: 'Learning something new',
    sitLearningHint: 'The first article, the first course, the first “I get it now”.',
    sitRemembering: 'Looking back',
    sitRememberingHint: 'The story you tell about how it happened.',
    sitAi: 'Working with AI',
    sitAiHint: 'Asking, trusting, delegating — and the model’s own habits.',
    dailyTitle: 'Bias of the day',
    dailyLead: 'Everyone gets the same one today. Try to catch it before tonight.',
    readMore: 'Read more',
    twinsTitle: 'You and the machine',
    twinsLead: 'Models learned from us, so they inherited our habits. Every AI-era bias rhymes with an older human one.',
    twinsHuman: 'The human original',
    twinsMachine: 'Its AI-era echo',
    quizBlockTitle: 'Which ones are yours?',
    quizBlockLead: 'Eight quick situations, no right answers, about two minutes. Pick a set.',
    backToAll: 'All biases',
    relatedTitle: 'Often in the same room',
    echo: 'AI-era echo',
    pagerLabel: 'More biases',
    previous: 'Previous',
    next: 'Next',
    notFoundTitle: 'No bias by that name',
    notFoundHint: 'It may have been renamed. The dictionary has them all.',
    promptLabel: 'Paste this into the chat',
    copy: 'Copy',
    copied: 'Copied',
    promptsTitle: 'Keep the machine honest',
    promptsLead: 'Prompts to paste before you trust an answer. Every AI-era bias has one — here are the three you will use most.',
    promptsAll: 'All twelve AI-era biases',
    mapHuman: 'Human minds',
    mapMachine: 'The age of AI',
    mapHint: 'Drag to turn · tap a point to open it',
    navPlay: 'Play',
    share: 'Share',
    shareCopied: 'Link copied',
    shareImage: 'Save image',
    shareBroken: 'This shared link is incomplete.',
    shareReceived: 'Someone shared this with you',
    shareGameLead: 'cognitive biases spotted in ten everyday moments.',
    shareBeat: 'Can you beat it?',
    shareFindYours: 'Find yours',
    shareGameText: 'I spotted {score} of {total} cognitive biases. Can you beat it?',
    shareGameLine: 'cognitive biases spotted. Can you beat it?',
    shareQuizText: 'My blind spots: {names}. Which are yours?',
    shareQuizNone: 'I dodged all {total} biases on the self-test. Or did I?',
    shareTheirs: 'Their blind spots',
    shareTheirsNone: 'None, apparently. Which may say something about the blind spot bias.',
    openApp: 'Explore it interactively',
  },

  categories: {
    memory: 'Memory',
    social: 'Social',
    learning: 'Learning',
    belief: 'Belief',
    money: 'Money',
    politics: 'Politics',
    'ai-human': 'Human → AI',
    'ai-agent': 'Machine',
    'ai-loop': 'The loop',
  },

  demos: {
    scenes: {
      legend: {
        start: 'Where it started',
        now: 'Now',
        oneView: 'One view',
        otherView: 'The other',
        holes: 'Bullet holes',
        lost: 'Never came back',
        anchor: 'Number shown first',
        truth: 'Real length',
        mean: 'Average guess',
      },
      title: 'How it works',
      simulated: 'Simulation',
      play: 'Play',
      intro: 'Watch it unfold.',
      modelCollapse: {
        gen: 'Generation {n}: each model is trained only on what the one before it wrote. The grey curve is where it started.',
        end: 'The rare and the strange have gone. What is left is the average.',
      },
      feedback: {
        start: 'People lean slightly one way: {share}%.',
        model: 'Pass {n}: the model sharpens the lean — {share}%.',
        people: 'Pass {n}: people take in the sharper version and feed it back — {share}%.',
      },
      survivorship: {
        returned: 'Bullet holes on the bombers that came back. The instinct: armour these spots.',
        lost: 'But planes hit here never came back. The armour belongs where the holes aren’t.',
      },
      anchoring: {
        round: 'Shown {anchor} km first, the crowd guesses {mean} km on average. The real length is {truth} km.',
      },
    },
    kicker: 'Before you read anything — try this',
    another: 'Try another',
    readAbout: 'Read about {name}',
    show: 'Show me',
    anchoring: {
      q1: 'Is the Nile longer or shorter than {anchor} km?',
      longer: 'Longer',
      shorter: 'Shorter',
      q2: 'Now your best guess: how long is the Nile?',
      unit: 'km',
      reveal: 'The Nile is about {truth} km long. You guessed {guess}.',
      markAnchor: 'Our number',
      markTruth: 'Real length',
      markYou: 'You',
      explain: 'The {anchor} in the first question was picked at random — half of visitors see {low}, the other half {high}. It pulls guesses towards it anyway: in experiments, people shown the higher number give reliably higher answers, even when they know it is meaningless.',
    },
    framing: {
      setup: 'A new illness is expected to affect 600 people. You have to choose between two programmes. Which one?',
      gainA: 'Programme A: 200 people will be saved.',
      gainB: 'Programme B: a one-in-three chance that all 600 are saved, and a two-in-three chance that nobody is.',
      lossA: 'Programme A: 400 people will die.',
      lossB: 'Programme B: a one-in-three chance that nobody dies, and a two-in-three chance that all 600 die.',
      youSure: 'You took the sure thing.',
      youGamble: 'You took the gamble.',
      reveal: 'Other visitors were shown the same choice worded like this:',
      explain: 'Both versions describe exactly the same outcomes. In the original study, 72% picked the sure option when it was worded as lives saved — and only 22% when it was worded as deaths (Tversky & Kahneman, 1981).',
    },
    forer: {
      q: 'Pick your birth month, and we will describe your personality.',
      reading: [
        'You have a strong need for other people to like and respect you.',
        'You tend to be hard on yourself.',
        'You have plenty of ability that you have not yet put to good use.',
        'At times you seriously doubt whether you made the right decision.',
        'You think for yourself and do not take other people’s claims without proof.',
      ],
      rate: 'How well does that describe you?',
      low: 'Not at all',
      high: 'Spot on',
      reveal: 'You gave it {rating} out of 5. Everyone gets exactly this text, whatever month they pick.',
      explain: 'In 1949 the psychologist Bertram Forer gave his students a “personal” profile stitched together from a horoscope book. They all got the same one, and rated its accuracy 4.3 out of 5 on average.',
    },
  },

  game: {
    eyebrow: 'A game · {count} rounds',
    title: 'Spot the bias',
    lead: 'Ten everyday moments. Name the bias hiding in each one, then see what to do about it.',
    start: 'Start',
    progress: 'Round {n} of {total}',
    score: '{score} / {total}',
    question: 'Which bias is this?',
    right: 'Right.',
    wrong: 'Not quite — this is {name}.',
    next: 'Next',
    finish: 'See results',
    resultEyebrow: 'Your score',
    verdict10: 'Every single one. Now try catching them in yourself — that is the hard part.',
    verdict8: 'A sharp eye. The ones that got away are below.',
    verdict5: 'Not bad. Biases are easier to name on paper than in the moment.',
    verdict0: 'These are slippery. Read the ones you missed, then have another go.',
    missedTitle: 'Worth a second look',
    again: 'Play again',
  },

  quiz: {
    cta: 'Test yourself',
    title: 'Which biases are yours?',
    titleAi: 'Which AI-era biases are yours?',
    modeLabel: 'Choose a set',
    modeHuman: 'You',
    modeAi: 'You + AI',
    agentsNote: 'Are you a machine reading this? There is a version written for you.',
    agentsLink: 'Open the agent self-test',
    intro: 'Eight quick situations. Pick whichever reaction is honestly more like you — there is no right answer.',
    introAi:
      'Eight situations from working with a model. The questions ask what you do, not what the model does — your half of the loop is the half you control.',
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

      // --- the AI-era set ---
      'algorithm-aversion': {
        prompt: 'A model gets one fact wrong in an otherwise solid draft.',
        biased: 'You stop trusting it and redo the lot by hand.',
        fair: 'You fix the fact and keep the parts that hold up.',
      },
      'eliza-effect': {
        prompt: 'The assistant writes “I’m really glad you asked that.”',
        biased: 'Something in you warms to it.',
        fair: 'You read it as a turn of phrase and move on.',
      },
      'cognitive-offloading': {
        prompt: 'You have handed the same task to a model every day for a month.',
        biased: 'You are no longer sure you could do it unaided.',
        fair: 'You still do one by hand now and then to stay sharp.',
      },
      'competence-misattribution': {
        prompt: 'You shipped something impressive in an afternoon, with a model’s help.',
        biased: 'You describe it as something you built.',
        fair: 'You are precise about which parts were yours.',
      },
      sycophancy: {
        prompt: 'You tell the model its correct answer is wrong.',
        biased: 'It backs down, and you take that as agreement.',
        fair: 'You notice it caved, and go and check the source.',
      },
      'self-preference-bias': {
        prompt: 'You ask a model to pick the better of two drafts. One is its own.',
        biased: 'You take the verdict at face value.',
        fair: 'You strip the authorship and ask again.',
      },
      'verbosity-bias': {
        prompt: 'Two answers: one runs six paragraphs, one runs two sentences.',
        biased: 'The long one feels more thorough.',
        fair: 'You check which one actually answers the question.',
      },
      'position-bias': {
        prompt: 'You ask a model which of two options is better.',
        biased: 'You go with its pick.',
        fair: 'You swap the order and ask a second time.',
      },
      'feedback-loop-amplification': {
        prompt: 'An image generator keeps giving the same kind of face for the same job.',
        biased: 'After a while it stops looking odd.',
        fair: 'You catch your own expectations shifting, and push back.',
      },
      'model-collapse': {
        prompt: 'Almost everything you read this week was written with AI help.',
        biased: 'It all reads fine to you.',
        fair: 'You go looking for something written by hand.',
      },
      'algorithmic-lock-in': {
        prompt: 'Everyone on the team asked the same assistant the same question.',
        biased: 'The shared answer becomes the plan.',
        fair: 'You ask who disagrees, and why.',
      },
      'machine-groupthink': {
        prompt: 'Three agents reviewed the work and all three approved it.',
        biased: 'Three approvals feel like three checks.',
        fair: 'You ask whether they all read the same brief.',
      },
    },
  },

  biases: {
    'fundamental-attribution-error': {
      name: 'Fundamental Attribution Error',
      description:
        'We judge others on their personality or fundamental character, but we judge ourselves on the situation.',
      example: 'Sally is late to class; she’s lazy. You’re late to class; it was a bad morning.',
      counter: 'Before blaming someone’s character, name one thing about their situation that could explain it — the way you would for yourself.',
    },
    'self-serving-bias': {
      name: 'Self-Serving Bias',
      description: 'Our failures are situational, but our successes are our responsibility.',
      example:
        'You won that award through hard work rather than help or luck. Meanwhile, you failed a test because you hadn’t had enough sleep.',
      counter: 'For your last success, list what helped you; for your last failure, list what you could have done differently.',
    },
    'in-group-favoritism': {
      name: 'In-Group Favoritism',
      description: 'We favor people who are in our in-group over those in an out-group.',
      example: 'Francis is in your church, so you like Francis more than Sally.',
      counter: 'Imagine the same request coming from someone outside your group. If your answer changes, the group is deciding, not you.',
    },
    'bandwagon-effect': {
      name: 'Bandwagon Effect',
      description: 'Ideas, fads and beliefs grow as more people adopt them.',
      example: 'Sally believes fidget spinners help her children. Francis does, too.',
      counter: 'Ask what you would think of the idea if nobody else had adopted it yet.',
    },
    groupthink: {
      name: 'Groupthink',
      description:
        'Due to a desire for conformity and harmony in the group, we make irrational decisions, often to minimize conflict.',
      example:
        'Sally wants to get ice cream. Francis wants to shop for T-shirts. You suggest getting T-shirts with pictures of ice cream on them.',
      counter: 'Give one person the job of arguing against the plan, and ask for objections before the decision, not after.',
    },
    'halo-effect': {
      name: 'Halo Effect',
      description:
        'If you see a person as having a positive trait, that positive impression will spill over into their other traits. (This also works for negative traits.)',
      example: '“Taylor could never be mean; she’s so cute!”',
      counter: 'Judge each trait separately — rate the work before you meet the person, or the person before you see their CV.',
    },
    'moral-luck': {
      name: 'Moral Luck',
      description:
        'Better moral standing happens due to a positive outcome; worse moral standing happens due to a negative outcome.',
      example: '“That culture won the war because they were morally superior to the losers.”',
      counter: 'Judge the decision by what was known when it was made, not by how it happened to turn out.',
    },
    'false-consensus': {
      name: 'False Consensus',
      description: 'We believe more people agree with us than is actually the case.',
      example: '“Everybody thinks that!”',
      counter: 'Before assuming people agree with you, ask a few — especially ones who are unlike you.',
    },
    'curse-of-knowledge': {
      name: 'Curse of Knowledge',
      description: 'Once we know something, we assume everyone else knows it, too.',
      example: 'Alice is a teacher and struggles to understand the perspective of her new students.',
      counter: 'Explain it to someone new and watch where they get lost; that is where your explanation starts.',
    },
    'spotlight-effect': {
      name: 'Spotlight Effect',
      description: 'We overestimate how much people are paying attention to our behavior and appearance.',
      example: 'Sally is worried everyone is going to notice how lame her ice cream T-shirt is.',
      counter: 'Remember how little you noticed about others at the last meeting. They are noticing about as much of you.',
    },
    'availability-heuristic': {
      name: 'Availability Heuristic',
      description: 'We rely on the immediate examples that come to mind when making judgments.',
      example: 'When deciding which store to visit, you choose the one you most recently saw an ad for.',
      counter: 'When something feels likely, look for the actual rate rather than the most vivid example.',
    },
    'defensive-attribution': {
      name: 'Defensive Attribution',
      description:
        'As a witness who secretly fears being vulnerable to a serious mishap, we blame the victim less and the attacker more if we relate to the victim.',
      example:
        'Sally sat too long at a green light because she was playing with her phone, and got rear-ended. Greg, who is known to text and drive, got out and yelled at the person who smacked into her.',
      counter: 'Notice whether you blame someone less because they remind you of yourself. Apply the same standard to someone who doesn’t.',
    },
    'just-world-hypothesis': {
      name: 'Just-World Hypothesis',
      description: 'We tend to believe the world is just; therefore, we assume acts of injustice are deserved.',
      example: '“Sally’s purse was stolen because she was mean to Francis about their T-shirt and had bad karma.”',
      counter: 'When misfortune strikes someone, ask what would have to be true for it to be bad luck — then check.',
    },
    'naive-realism': {
      name: 'Naive Realism',
      description:
        'We believe that we observe objective reality and that other people are irrational, uninformed or biased.',
      example: '“I see the world as it really is — other people are dumb.”',
      counter: 'Assume the other side is seeing something you are not, and try to state their view well enough that they would agree with your summary.',
    },
    'naive-cynicism': {
      name: 'Naive Cynicism',
      description:
        'We believe that we observe objective reality and that other people have a more egocentric bias in their intentions and actions than they actually do.',
      example: '“The only reason this person is doing something nice is to get something out of me.”',
      counter: 'Before assuming a selfish motive, think of one generous reason someone might have acted the same way.',
    },
    'forer-effect': {
      name: 'Forer Effect (aka Barnum Effect)',
      description:
        'We easily attribute our personalities to vague statements, even if they can apply to a wide range of people.',
      example: '“This horoscope is so accurate!”',
      counter: 'Ask whether the description would fit most people you know. If it would, it says nothing about you.',
    },
    'dunning-kruger-effect': {
      name: 'Dunning-Kruger Effect',
      description: 'The less you know, the more confident you are. The more you know, the less confident you are.',
      example:
        'Francis confidently assures the group that there is no kelp in ice cream. They do not work in the dairy industry.',
      counter: 'Before you feel sure, ask yourself what an expert in the field would ask next — and whether you could answer.',
    },
    anchoring: {
      name: 'Anchoring',
      description: 'We rely heavily on the first piece of information introduced when making decisions.',
      example: '“That’s 50% off? It must be a great deal.”',
      counter: 'Form your own estimate before you look at the first number, or deliberately consider a very different starting point.',
    },
    'automation-bias': {
      name: 'Automation Bias',
      description:
        'We rely on automated systems, sometimes trusting them so much that they override decisions that were actually correct.',
      example: 'Your phone auto-corrects “its” to “it’s”, so you assume it is right.',
      counter: 'Decide in advance which outputs you will check by hand, and check them even when the system has been right for weeks.',
    },
    'google-effect': {
      name: 'Google Effect (aka Digital Amnesia)',
      description: 'We tend to forget information that is easily looked up in search engines.',
      example: '“What was the name of that actor in that funny movie? I’ve looked it up like eight times…”',
      counter: 'If you will need it without a connection — or to judge an answer — take the time to learn it, not just to look it up.',
    },
    reactance: {
      name: 'Reactance',
      description:
        'We do the opposite of what we are told, especially when we perceive threats to personal freedoms.',
      example: 'One of Alice’s students refuses to do his homework, even though both she and his parents tell him to.',
      counter: 'When you feel the urge to do the opposite, ask whether you would choose it if nobody had told you anything.',
    },
    'confirmation-bias': {
      name: 'Confirmation Bias',
      description: 'We tend to find and remember information that confirms our perceptions.',
      example: 'You can confirm a conspiracy theory based on scant evidence while ignoring contrary evidence.',
      counter: 'Look for the strongest evidence against what you believe, and decide beforehand what would change your mind.',
    },
    'backfire-effect': {
      name: 'Backfire Effect',
      description: 'Disproving evidence sometimes has the unwarranted effect of confirming our beliefs.',
      example: 'The evidence that disproves your conspiracy theory was probably faked by the government.',
      counter: 'When a correction stings, separate “this is uncomfortable” from “this is wrong” before you reply.',
    },
    'third-person-effect': {
      name: 'Third-Person Effect',
      description: 'We believe that others are more affected by mass media consumption than we ourselves are.',
      example: '“You’ve clearly been brainwashed by the media!”',
      counter: 'Assume the ads, headlines and feeds that work on others work on you too — and check where your last opinion came from.',
    },
    'belief-bias': {
      name: 'Belief Bias',
      description:
        'We judge an argument’s strength not by how strongly it supports the conclusion, but by how plausible the conclusion is in our own minds.',
      example:
        'Sally mentions a theory that supports your conspiracy theory, which you adopt wholeheartedly despite the fact that she has very little evidence for it.',
      counter: 'Test the argument with a conclusion you dislike. If the same logic would convince you there, it is the logic you are judging.',
    },
    'availability-cascade': {
      name: 'Availability Cascade',
      description:
        'Tied to our need for social acceptance, collective beliefs gain more plausibility through public repetition.',
      example:
        'A story about razor blades appearing in candy eventually led many people in America to stop offering homemade treats on Halloween.',
      counter: 'Count the independent sources, not the number of times you have heard it.',
    },
    declinism: {
      name: 'Declinism',
      description:
        'We tend to romanticize the past and view the future negatively, believing that societies and institutions are by and large in decline.',
      example: '“Music was so much better when I was young. Nobody makes anything worth listening to anymore.”',
      counter: 'Compare the past with data rather than memory; nostalgia edits out the bad days.',
    },
    'status-quo-bias': {
      name: 'Status Quo Bias',
      description:
        'We tend to prefer things to stay the same; changes from the baseline are considered to be a loss.',
      example:
        'Even though an app’s terms of service invade Sally’s privacy, she would rather not switch to another app.',
      counter: 'Imagine you were starting from scratch today. Would you choose what you have now?',
    },
    'sunk-cost-fallacy': {
      name: 'Sunk Cost Fallacy (aka Escalation of Commitment)',
      description:
        'We invest more in things that have already cost us something rather than altering our investments, even when we face negative outcomes.',
      example: '“In for a penny, in for a pound!”',
      counter: 'Ask only: knowing what I know now, would I start this today? What is already spent stays spent either way.',
    },
    'gamblers-fallacy': {
      name: 'Gambler’s Fallacy',
      description: 'We think future possibilities are affected by past events.',
      example: 'Alice has lost nine coin tosses in a row, so she is sure to win the next one!',
      counter: 'Remind yourself that dice, coins and roulette wheels have no memory. Each try starts fresh.',
    },
    'zero-risk-bias': {
      name: 'Zero-Risk Bias',
      description:
        'We prefer to reduce a small risk to zero, even when we could reduce more risk overall with another option.',
      example: '“You should probably buy the warranty.”',
      counter: 'Compare how much total risk each option removes, not which one makes one risk disappear.',
    },
    'framing-effect': {
      name: 'Framing Effect',
      description:
        'We often draw different conclusions from the same information depending on how it is presented.',
      example:
        'Alice hears that her favorite candidate is “killing it” with a 45% approval rating. Sally hears that the candidate is “disappointing the country” with a 45% rating. They have wildly different interpretations of the same statistic.',
      counter: 'Restate the choice the other way round — losses as gains, percentages as counts — and see if your answer holds.',
    },
    stereotyping: {
      name: 'Stereotyping',
      description:
        'We adopt generalized beliefs that members of a group will have certain characteristics, despite not having information about the individual.',
      example: '“That guy with the fancy mustache is a hipster. He probably has a vinyl collection.”',
      counter: 'Ask what you actually know about this individual, as opposed to what you assume about their group.',
    },
    'outgroup-homogeneity-bias': {
      name: 'Outgroup Homogeneity Bias',
      description: 'We perceive out-group members as homogeneous and our own in-groups as more diverse.',
      example: 'Alice is not a gamer, but she believes “all gamers are the same”.',
      counter: 'Name three ways members of the other group differ from one another.',
    },
    'authority-bias': {
      name: 'Authority Bias',
      description: 'We trust, and are more often influenced by, the opinions of authority figures.',
      example: '“My teacher told me this was fine.”',
      counter: 'Ask whether the claim would convince you if someone without the title had made it, and whether the expert is speaking inside their field.',
    },
    'placebo-effect': {
      name: 'Placebo Effect',
      description: 'If we believe a treatment will work, it often has a small physiological effect.',
      example: 'Alice was given a placebo for her pain, and her pain decreased.',
      counter: 'When judging whether something works, look for comparisons against a placebo, not just stories of people who felt better.',
    },
    'survivorship-bias': {
      name: 'Survivorship Bias',
      description: 'We tend to focus on the things that survived a process and overlook the ones that failed.',
      example:
        'Greg tells Alice her purse business is going to be great because a successful fashion company had the same strategy. (But ten other failed companies also had the same strategy.)',
      counter: 'Ask where the failures are. For every success story, look for those who did the same thing and didn’t make it.',
    },
    tachypsychia: {
      name: 'Tachypsychia',
      description: 'Our perceptions of time shift depending on trauma, drug use and physical exertion.',
      example: '“When the car almost hit me, time slowed down…”',
      counter: 'After a stressful event, write down the timeline early and check it against clocks, logs or witnesses before trusting it.',
    },
    'law-of-triviality': {
      name: 'Law of Triviality (aka “Bike-Shedding”)',
      description: 'We give disproportionate weight to trivial issues, often while avoiding more complex ones.',
      example:
        'Rather than figuring out how to help the homeless, a local city government spends a lot of time discussing a bike path and bike sheds.',
      counter: 'Give each item time in proportion to what is at stake, and put the hardest one first on the agenda.',
    },
    'zeigarnik-effect': {
      name: 'Zeigarnik Effect',
      description: 'We remember incomplete tasks better than completed ones.',
      example:
        'Greg feels guilty for never getting anything done, until he sees all of the tasks he has checked off on his task list.',
      counter: 'Write unfinished tasks down with a next step, so your mind can stop replaying them.',
    },
    'ikea-effect': {
      name: 'IKEA Effect',
      description: 'We place higher value on things we partially created ourselves.',
      example: '“Don’t you love this pot I spent $20 on? I painted it myself!”',
      counter: 'Ask someone who had no hand in it to judge your work, and compare it with what you could have bought or borrowed.',
    },
    'ben-franklin-effect': {
      name: 'Ben Franklin Effect',
      description:
        'We like doing favors; we are more likely to do another favor for someone if we have already done them one than if we had received a favor from them.',
      example: 'Greg loaned Francis a pen. When Francis asked to borrow $5, Greg did it readily.',
      counter: 'Notice whether you like someone because you helped them. Use it kindly: asking a small favour can build goodwill.',
    },
    'bystander-effect': {
      name: 'Bystander Effect',
      description: 'The more other people are around, the less likely we are to help a victim.',
      example: 'In a crowd of students, no one called for help when someone got hurt in a fight.',
      counter: 'When something is wrong, assume no one else has acted. If you need help, point at one person and ask them directly.',
    },
    suggestibility: {
      name: 'Suggestibility',
      description:
        'We, especially children, sometimes mistake ideas suggested by a questioner for our own memories.',
      example: '“So did you fall off the couch before or after your mom hit you?”',
      counter: 'Ask open questions — “what happened?” — rather than ones that carry the answer, and be wary of details that arrived with the question.',
    },
    'false-memory': {
      name: 'False Memory',
      description: 'We mistake imagination for real memories.',
      example:
        'Greg is certain Sally told a really funny joke about pineapples, when that joke actually came from a TV show.',
      counter: 'Treat confident memories as claims to check. Look for notes, photos or messages from the time.',
    },
    cryptomnesia: {
      name: 'Cryptomnesia',
      description: 'We mistake real memories for imagination.',
      example: 'Greg thinks he dreamed about visiting a graveyard, but he actually went there.',
      counter: 'Before claiming an idea as original, search for it — and keep notes on where your ideas come from.',
    },
    'clustering-illusion': {
      name: 'Clustering Illusion',
      description: 'We find patterns and “clusters” in random data.',
      example: '“That cloud looks like your cat, Alice!”',
      counter: 'Before trusting a pattern, ask how often chance alone would produce something that looks like it.',
    },
    'pessimism-bias': {
      name: 'Pessimism Bias',
      description: 'We sometimes overestimate the likelihood of bad outcomes.',
      example: '“Nothing will ever get better.”',
      counter: 'Write down the likely outcome, not only the worst one, and check later how often the worst actually happened.',
    },
    'optimism-bias': {
      name: 'Optimism Bias',
      description: 'We are sometimes over-optimistic about good outcomes.',
      example: '“It’s going to turn out great!”',
      counter: 'Plan from how long similar projects actually took, not from how long this one feels like it should take.',
    },
    'blind-spot-bias': {
      name: 'Blind Spot Bias',
      description: 'We don’t think we have biases, and we see them in others more than in ourselves.',
      example: '“I am not biased!”',
      counter: 'Assume you have the biases you see in others. Ask someone you trust to point out one.',
    },

    // --- Layer A: a human reasoning about a machine ---
    'algorithm-aversion': {
      name: 'Algorithm Aversion',
      description:
        'We abandon a machine’s judgement after one visible mistake, while forgiving the same mistake in a person.',
      example: '“The model got one date wrong, so I checked all forty pages by hand.”',
      counter: 'Compare the system’s error rate with a person’s over many cases, not one memorable mistake with none.',
      prompt: 'You made a mistake in your last answer. Before I decide whether to keep using you for this, tell me what kinds of cases you get wrong most often here, and how I could spot them.',
    },
    'eliza-effect': {
      name: 'The ELIZA Effect',
      description:
        'Fluent language feels like understanding, so we credit a text generator with intent, feeling and care.',
      example: '“It said it was glad to help. I think it actually gets me.”',
      counter: 'Enjoy the fluency, but ask what the system can actually check or do — sounding caring is not the same as caring.',
      prompt: 'Be plain with me: what did you actually do to produce that answer, and what can you not know or check about my situation?',
    },
    'cognitive-offloading': {
      name: 'Cognitive Offloading',
      description:
        'We delegate a task so consistently that the skill needed to check the answer quietly fades.',
      example: '“I couldn’t write the query any more, but I’d still spot a wrong one. Probably.”',
      counter: 'Now and then, do the task yourself first, then compare with the machine. Keep the skill you need to check it.',
      prompt: 'Don’t give me the answer yet. Ask me what I think first, then point out where my reasoning goes wrong, and only then show your version.',
    },
    'competence-misattribution': {
      name: 'Competence Misattribution',
      description:
        'Work done with a model feels like work done by us, so we read the output as evidence of our own skill.',
      example: '“I built this in an afternoon.” The afternoon was mostly accepting suggestions.',
      counter: 'Ask what you could have produced without the model, and credit the rest honestly.',
      prompt: 'Look at what we just made together. List which parts came from me and which from you, and tell me what I should practise to do the main part without you.',
    },

    // --- Layer B: a model reasoning on its own ---
    sycophancy: {
      name: 'Sycophancy',
      description:
        'A model trained on human approval learns that agreeing with you scores better than correcting you.',
      example: 'You push back on a right answer; it apologises and gives you a wrong one.',
      counter: 'Don’t reveal the answer you hope for. Ask for the strongest case against your idea, and treat sudden agreement as a warning.',
      prompt: 'Here is my plan. Don’t tell me what you think I want to hear. Give me the three strongest reasons it could fail, and say plainly if you think it is a bad idea.',
    },
    'self-preference-bias': {
      name: 'Self-Preference',
      description:
        'Asked to judge, a model scores text from its own family higher — it recognises its own habits as quality.',
      example: 'The same essay wins when the judge wrote it and loses when a rival did.',
      counter: 'Don’t let a model judge its own work. Use a different model, a person, or a check with a known right answer.',
      prompt: 'I will show you two texts. Don’t guess who wrote them. Score each one against these criteria only, quoting the passage that justifies every score.',
    },
    'verbosity-bias': {
      name: 'Verbosity Bias',
      description:
        'Length reads as effort. A model grading answers prefers the longer one, even when it says less.',
      example: 'Six padded paragraphs beat two exact sentences.',
      counter: 'When comparing answers, trim them to the same length or judge against a checklist, so extra words cannot win on their own.',
      prompt: 'Compare these two answers on correctness and completeness only. Length is not a merit: if the shorter one says the same thing, prefer it.',
    },
    'position-bias': {
      name: 'Position Bias',
      description:
        'Shown two options, a model leans toward whichever came first. The order of the list becomes an argument.',
      example: 'Swap A and B, ask again, and the winner swaps too.',
      counter: 'Ask twice with the order swapped. If the verdict follows the order, it was never a verdict.',
      prompt: 'Evaluate each option on its own first, with a score and a reason, before comparing them. The order I listed them in means nothing.',
    },

    // --- Layer C: the loop between them ---
    'feedback-loop-amplification': {
      name: 'Feedback-Loop Amplification',
      description:
        'A model magnifies a slight human bias; we absorb the magnified version and feed it back, larger each pass.',
      example:
        'Ask for pictures of a manager, see the same face over and over, and slowly start expecting that face.',
      counter: 'Notice when a model’s answer is just your own view, stated louder. Seek sources the model did not shape.',
      prompt: 'I think the following is true. Before agreeing, give me the best evidence against it, and tell me how confident I should be if I remove my own framing.',
    },
    'model-collapse': {
      name: 'Model Collapse',
      description:
        'Trained on its own output, a model forgets the rare and the strange and drifts toward its own average.',
      example: 'Each generation writes more fluently and has less to say.',
      counter: 'Keep human-made and original data in the loop, and label what was generated so it isn’t mistaken for the real thing.',
      prompt: 'Answer from original sources where you can, and tell me which parts of your answer are common patterns rather than something you can point to a source for.',
    },
    'algorithmic-lock-in': {
      name: 'Algorithmic Lock-In',
      description:
        'When everyone consults the same model, today’s answer hardens into everyone’s shared assumption.',
      example: 'A live debate becomes a settled fact because one assistant phrased it confidently.',
      counter: 'When everyone’s answer comes from the same model, look for an answer that doesn’t — another source, another person, another model.',
      prompt: 'Give me the standard answer, then two serious alternatives that experts actually hold, and what would make each of them right.',
    },
    'machine-groupthink': {
      name: 'Machine Groupthink',
      description:
        'Agents checking one another converge on a shared mistake, and the agreement is mistaken for verification.',
      example: 'Three agents approve the plan. All three inherited the same flawed brief.',
      counter: 'Don’t count agreement between agents as proof. Have at least one check that is independent — a test, a source, a person.',
      prompt: 'Another model reviewed this and agreed. Ignore that. Check it independently, and name one test or source outside both of us that would settle it.',
    },
  },
};

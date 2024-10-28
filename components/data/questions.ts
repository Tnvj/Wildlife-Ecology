import { Question } from "@/types/Question";

export const questionsByWeek: { [week: string]: Question[] } = {
	week1: [
		{
			question: "Which of these is not a step in natural selection?",
			options: [
				"variation",
				"underpopulation",
				"struggle for existence",
				"survival of the fittest",
			],
			answer: "underpopulation",
		},
		{
			question: "Which of these is not a characteristic of fitness?",
			options: [
				"Fitness is environment-specific.",
				"Fitness is species-specific.",
				"Higher reproductive rate means higher fitness.",
				"Fitness should be measured across several generations.",
			],
			answer: "Higher reproductive rate means higher fitness.",
		},
		{
			question:
				"Ecology is the scientific study of ___ that determine the distribution and abundance of organisms. (Fill in the blanks)",
			options: [
				"statics",
				"interactions",
				"dynamics",
				"habitat",
			],
			answer: "interactions",
		},
		{
			question: "Which of these is not a characteristic of fitness?",
			options: [
				"Fitness is environment-specific.",
				"Fitness is species-specific.",
				"Fitness works on traits such as size and speed.",
				"Fitness should be measured across several generations.",
			],
			answer: "Fitness works on traits such as size and speed.",
		},
		{
			question: "In the Greek word root of Ecology, Oikos refers to",
			options: [
				"household",
				"preservation",
				"environment",
				"study",
			],
			answer: "household",
		},
		{
			question: '"Enquiry into plants" is a book written by',
			options: [
				"Theophrastus",
				"Linnaeus",
				"Malthus",
				"Humboldt",
			],
			answer: "Theophrastus",
		},
		{
			question: "In the Greek word root of Ecology, logos refers to",
			options: [
				"household",
				"preservation",
				"environment",
				"study",
			],
			answer: "study",
		},
		{
			question: "Which of these is not a kind of selection?",
			options: [
				"directional",
				"stochastic",
				"disruptive",
				"stabilising",
			],
			answer: "stochastic",
		},
		{
			question: "Who amongst these is considered the father of Biogeography?",
			options: [
				"Theophrastus",
				"Linnaeus",
				"Malthus",
				"Humboldt",
			],
			answer: "Humboldt",
		},
		{
			question: "Ecology is the scientific study of interactions among organisms and their ___. (Fill in the blanks)",
			options: [
				"habitat",
				"niche",
				"environment",
				"population",
			],
			answer: "environment",
		},
	],
	week2: [
		{
			question: "Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are ___ (Fill in the blank)",
			options: [
				"perfect",
				"imperfect",
				"stable",
				"unstable",
			],
			answer: "stable",
		},
		{
			question: "The mitochondrion is a / an",
			options: [
				"Sub-cellular organelle",
				"Cell",
				"Tissue",
				"Organ",
			],
			answer: "Sub-cellular organelle",
		},
		{
			question: "The hierarchical system was given by",
			options: [
				"Simon",
				"Watson",
				"Hutchinson",
				"Humboldt",
			],
			answer: "Simon",
		},
		{
			question: "There is more biodiversity in areas with",
			options: [
				"less competition, less predation",
				"less competition, more predation",
				"more competition, more predation",
				"more competition, less predation",
			],
			answer: "more competition, more predation",
		},
		{
			question: '"groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups" is a definition of',
			options: [
				"cells",
				"species",
				"ecosystems",
				"biomes",
			],
			answer: "species",
		},
		{
			question: '"the diversity that exists within an ecosystem" is',
			options: [
				"alpha (α) biodiversity",
				"beta (β) biodiversity",
				"gamma (γ) biodiversity",
				"delta (δ) biodiversity",
			],
			answer: "alpha (α) biodiversity",
		},
		{
			question: '"the diversity that exists among different geographies" is',
			options: [
				"alpha (α) biodiversity",
				"beta (β) biodiversity",
				"gamma (γ) biodiversity",
				"delta (δ) biodiversity",
			],
			answer: "gamma (γ) biodiversity",
		},
		{
			question: "The emergent principle can be stated as",
			options: [
				"Whole = sum of parts",
				"Whole < sum of parts",
				"Whole > sum of parts",
				"None of these",
			],
			answer: "Whole > sum of parts",
		},
		{
			question: "The laboratory approach to Ecology uses",
			options: [
				"equations",
				"models",
				"observations",
				"experiments",
			],
			answer: "experiments",
		},
		{
			question: "For more biodiversity, the level of disturbance should be",
			options: [
				"less",
				"intermediate",
				"more",
				"none of these",
			],
			answer: "intermediate",
		},
	],
week3: [
		{
			question: "Egrets with buffaloes are an example of",
			options: [
				"colony",
				"commensalism",
				"protocooperation",
				"allelopathy",
			],
			answer: "commensalism",
		},
		{
			question: "I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called",
			options: [
				"tick hunting",
				"auto grooming",
				"allo grooming",
				"foraging",
			],
			answer: "allo grooming",
		},
		{
			question: "Birds on giraffe are an example of",
			options: [
				"colony",
				"commensalism",
				"protocooperation",
				"allelopathy",
			],
			answer: "protocooperation",
		},
		{
			question: "Harmonious interactions occur where",
			options: [
				"at least one participant is benefited",
				"at least one participant is unharmed",
				"both participants are benefitted",
				"both participants are unharmed",
			],
			answer: "both participants are unharmed",
		},
		{
			question: "I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called",
			options: [
				"tick hunting",
				"auto grooming",
				"allo grooming",
				"foraging",
			],
			answer: "allo grooming",
		},
		{
			question: "The interaction between exotic shrubs and trees through the action of seed predators is an example of",
			options: [
				"infraspecific competition",
				"apparent competition",
				"disguised competition",
				"harmonious competition",
			],
			answer: "apparent competition",
		},
		{
			question: "Trampling of grass due to the movement of animals is an example of",
			options: [
				"mutualism",
				"amensalism",
				"commensalism",
				"protocooperation",
			],
			answer: "amensalism",
		},
		{
			question: "The scientific study of animal behaviour is called",
			options: [
				"behaviourism",
				"ecology",
				"ethology",
				"prey-predator dynamics",
			],
			answer: "ethology",
		},
		{
			question: "An inventory of behaviours exhibited by an animal during a behaviour exercise is called",
			options: [
				"ecogram",
				"ethogram",
				"behaviourogram",
				"animalogram",
			],
			answer: "ethogram",
		},
		{
			question: "Hamilton's rule can be stated as",
			options: [
				"rB < C",
				"rB > C",
				"rB = C",
				"rB + C = 0",
			],
			answer: "rB > C",
		},
	],
week4: [
		{
			question: "If we all became vegetarians, we'll be able to support our large populations. This can be explained through",
			options: [
				"10% rule",
				"1% rule",
				"trophic cascade",
				"biodiversity",
			],
			answer: "10% rule",
		},
		{
			question: "Trees → Birds → Parasites → Hyperparasites represents",
			options: [
				"upright pyramid of numbers",
				"inverted pyramid of numbers",
				"spindle pyramid of numbers",
				"dumb-bell pyramid of numbers",
			],
			answer: "inverted pyramid of numbers",
		},
		{
			question: "Net primary productivity is given by",
			options: [
				"APAR × LUE",
				"APAR + LUE",
				"APAR - LUE",
				"APAR / LUE",
			],
			answer: "APAR × LUE",
		},
		{
			question: "At the compensation point,",
			options: [
				"photosynthesis = respiration",
				"photosynthesis < respiration",
				"photosynthesis > respiration",
				"photosynthesis = 0",
			],
			answer: "photosynthesis = respiration",
		},
		{
			question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. As we move up the food chain,",
			options: [
				"available energy decreases",
				"available energy increases",
				"available energy remains same",
				"available energy is zero everywhere",
			],
			answer: "available energy decreases",
		},
		{
			question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
			options: [
				"more number of hawks than grasshoppers can be supported",
				"more number of grasshoppers than hawks can be supported",
				"equal number of hawks and grasshoppers can be supported",
				"none of these",
			],
			answer: "more number of grasshoppers than hawks can be supported",
		},
		{
			question: "Tree → Frugivorous birds → Hawk represents",
			options: [
				"upright pyramid of numbers",
				"inverted pyramid of numbers",
				"spindle pyramid of numbers",
				"dumb-bell pyramid of numbers",
			],
			answer: "spindle pyramid of numbers",
		},
		{
			question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
			options: [
				"hawk is producer",
				"hawk is consumer and carnivore",
				"hawk is consumer and herbivore",
				"hawk is decomposer",
			],
			answer: "hawk is consumer and carnivore",
		},
		{
			question: "Glacial lakes are typical examples of",
			options: [
				"eutrophic lakes",
				"hypereutrophic lakes",
				"oligotrophic lakes",
				"mesotrophic lakes",
			],
			answer: "oligotrophic lakes",
		},
		{
			question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
			options: [
				"frog is producer",
				"frog is consumer and carnivore",
				"frog is consumer and herbivore",
				"frog is decomposer",
			],
			answer: "frog is consumer and carnivore",
		},
	],
	week5: [
		{
			question: "The juvenile mortality rate is the annual number of deaths of juveniles per",
			options: [
				"100 births",
				"1000 births",
				"100 live births",
				"1000 live births",
			],
			answer: "1000 live births",
		},
		{
			question: "Pan traps are used for sampling",
			options: [
				"bees",
				"butterflies",
				"non-pollinator insects",
				"pollinator insects",
			],
			answer: "pollinator insects",
		},
		{
			question: "___ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start.",
			options: [
				"Simple random sampling",
				"Systematic sampling",
				"Stratified sampling",
				"Multistage sampling",
			],
			answer: "Systematic sampling",
		},
		{
			question: "Which of these is not a measure of absolute population density?",
			options: [
				"total count",
				"pelt count",
				"capture-recapture method",
				"removal method",
			],
			answer: "pelt count",
		},
		{
			question: "The logistic growth equation, when plotted, appears",
			options: [
				"I shaped",
				"J shaped",
				"S shaped",
				"O shaped",
			],
			answer: "S shaped",
		},
		{
			question: "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
			options: [
				"Simple random sampling",
				"Systematic sampling",
				"Stratified sampling",
				"Multistage sampling",
			],
			answer: "Simple random sampling",
		},
		{
			question: "The minimum replacement level fertility for a population to grow should be greater than",
			options: [
				"1",
				"2",
				"3",
				"4",
			],
			answer: "2",
		},
		{
			question: "Cover board surveys are typically used for sampling",
			options: [
				"herpetofauna",
				"fishes",
				"large mammals",
				"carnivores",
			],
			answer: "herpetofauna",
		},
		{
			question: "Which of these is true?",
			options: [
				"Physiological longevity > Ecological longevity",
				"Physiological longevity = Ecological longevity",
				"Physiological longevity < Ecological longevity",
				"a or b",
			],
			answer: "Physiological longevity > Ecological longevity",
		},
		{
			question: "___ is how close the measured values are to the correct value.",
			options: [
				"Accuracy",
				"Precision",
				"Bias",
				"Variance",
			],
			answer: "Accuracy",
		},
	],
	week6: [
		{
			question: "Importance value can be written as",
			options: [
				"Relative density + Relative frequency X Relative dominance",
				"Relative density X Relative frequency + Relative dominance",
				"Relative density + Relative frequency + Relative dominance",
				"Relative density X Relative frequency X Relative dominance",
			],
			answer: "Relative density + Relative frequency + Relative dominance",
		},
		{
			question: "A species found most frequently in a particular community, but also present occasionally in others is called",
			options: [
				"accidental species",
				"indifferent species",
				"selective species",
				"exclusive species",
			],
			answer: "indifferent species",
		},
		{
			question: "When compared to generalist species, specialist species have",
			options: [
				"narrower niches",
				"broader niches",
				"same-size niches",
				"none of these",
			],
			answer: "narrower niches",
		},
		{
			question: "A climax caused by wildfires is an example of",
			options: [
				"climatic climax",
				"edaphic climax",
				"disclimax",
				"catastrophic climax",
			],
			answer: "catastrophic climax",
		},
		{
			question: "Lithosere is an example of",
			options: [
				"hydrosere",
				"xerosere",
				"psammosere",
				"halosere",
			],
			answer: "xerosere",
		},
		{
			question: "Which of these is correct?",
			options: [
				"Fundamental niche > Realised niche",
				"Fundamental niche = Realised niche",
				"Fundamental niche < Realised niche",
				"a or b",
			],
			answer: "Fundamental niche > Realised niche",
		},
		{
			question: "Importance value varies from",
			options: [
				"0 to 10",
				"0 to 50",
				"0 to 100",
				"0 to 300",
			],
			answer: "0 to 100",
		},
		{
			question: "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
			options: [
				"climatic climax",
				"edaphic climax",
				"disclimax",
				"catastrophic climax",
			],
			answer: "disclimax",
		},
		{
			question: "Which of these is not a characteristic of pioneer species?",
			options: [
				"ability to grow on bare rocks",
				"ability to tolerate extreme temperatures",
				"large size",
				"short life span",
			],
			answer: "large size",
		},
		{
			question: "Which of these depicts correctly the lithosere primary succession?",
			options: [
				"Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
				"Rock → Foliose lichen → Crustose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
				"Moss → Crustose lichen → Foliose lichen → Rock → Herbaceous stage → Shrub → Woodland → Climax",
				"Rock → Crustose lichen → Foliose lichen → Shrub → Herbaceous stage → Moss → Woodland → Climax",
			],
			answer: "Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
		},
	],
	week7: [
		{
			question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
			options: [
				"Liebig’s law of the minimum",
				"Liebig’s law of the maximum",
				"Shelford’s law of tolerance",
				"Shelford’s law of intolerance",
			],
			answer: "Shelford’s law of tolerance",
		},
		{
			question: "Transplantation experiments are used to find",
			options: [
				"potential range",
				"effective range",
				"actual range",
				"economic range",
			],
			answer: "potential range",
		},
		{
			question: "Good climate is a",
			options: [
				"chemical factor",
				"demographic factor",
				"push factor",
				"pull factor",
			],
			answer: "pull factor",
		},
		{
			question: "\"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.\" This is the statement for",
			options: [
				"Liebig’s law of the minimum",
				"Liebig’s law of the maximum",
				"Shelford’s law of tolerance",
				"Shelford’s law of intolerance",
			],
			answer: "Liebig’s law of the minimum",
		},
		{
			question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
			options: [
				"autophagy",
				"allelophagy",
				"autopathy",
				"allelopathy",
			],
			answer: "allelopathy",
		},
		{
			question: "\"Quick movement over large distances, often across unsuitable terrain\" is a description of",
			options: [
				"diffusion",
				"secular dispersal",
				"jump dispersal",
				"drifting",
			],
			answer: "jump dispersal",
		},
		{
			question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
			options: [
				"translocation",
				"migration",
				"dispersal",
				"drifting",
			],
			answer: "dispersal",
		},
		{
			question: "The movement of lions across the Gir landscape is an example of",
			options: [
				"diffusion",
				"secular dispersal",
				"jump dispersal",
				"drifting",
			],
			answer: "diffusion",
		},
		{
			question: "Which of these is not a physical factor of habitat?",
			options: [
				"soil",
				"moisture",
				"predators",
				"temperature",
			],
			answer: "predators",
		},
		{
			question: "Scarcity of food is a",
			options: [
				"chemical factor",
				"demographic factor",
				"push factor",
				"pull factor",
			],
			answer: "push factor",
		},
	],
	week8:[
		{
			question: "The “subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce” is the definition of",
			options: [
				"habitat",
				"ecosystem",
				"biome",
				"biosphere",
			],
			answer: "habitat",
		},
		{
			question: "According to Leopold, which of these is not a tool of habitat management?",
			options: [
				"fire",
				"gun",
				"cattle",
				"sickle",
			],
			answer: "sickle",
		},
		{
			question: "Zoo is an example of",
			options: [
				"in-situ conservation",
				"ex-situ conservation",
				"in-situ preservation",
				"ex-situ preservation",
			],
			answer: "ex-situ conservation",
		},
		{
			question: "The acronym HIPPO does not include",
			options: [
				"habitat loss",
				"invasive species",
				"pollination",
				"pollution",
			],
			answer: "pollination",
		},
		{
			question: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
			options: [
				"very high",
				"medium",
				"very low",
				"non-existent",
			],
			answer: "very high",
		},
		{
			question: "Which of these is a deterministic factor?",
			options: [
				"environmental variation",
				"forest fire",
				"death rate",
				"diseases",
			],
			answer: "forest fire",
		},
		{
			question: "Captive breeding is an example of",
			options: [
				"in-situ conservation",
				"ex-situ conservation",
				"in-situ preservation",
				"ex-situ preservation",
			],
			answer: "ex-situ conservation",
		},
		{
			question: "Which of these is a stochastic factor?",
			options: [
				"birth rate",
				"death rate",
				"population structure",
				"environmental fluctuation",
		],
		answer: "",
	},
],		
week9: [
    {
        question: "According to Malthusian model,",
        options: [
            "Population grows in geometric progression, food supply increases in arithmetic progression",
            "Population grows in geometric progression, food supply increases in geometric progression",
            "Population grows in arithmetic progression, food supply increases in arithmetic progression",
            "Population grows in arithmetic progression, food supply increases in geometric progression",
        ],
        answer: "Population grows in geometric progression, food supply increases in arithmetic progression",
    },
    {
        question: "Which of these is not a pillar of sustainability?",
        options: [
            "environmental sustainability",
            "economic sustainability",
            "trans-boundary sustainability",
            "social sustainability",
        ],
        answer: "trans-boundary sustainability",
    },
    {
        question: "The quantum of human impacts is given by",
        options: [
            "I=P×A×T",
            "I=P+A+T",
            "I=P+A-T",
            "I=P-(A+T)",
        ],
        answer: "I=P×A×T",
    },
    {
        question: "Which of these is a positive check according to Malthus?",
        options: [
            "late marriage",
            "war",
            "celibacy",
            "moral restraint",
        ],
        answer: "war",
    },
    {
        question: "Which of these is a pillar of sustainability",
        options: [
            "social sustainability",
            "industrial sustainability",
            "agricultural sustainability",
            "trans-boundary sustainability",
        ],
        answer: "social sustainability",
    },
    {
        question: "___ is used to identify which potential impacts are relevant to assess. (Fill in the blank)",
        options: [
            "screening",
            "scoping",
            "reporting",
            "review",
        ],
        answer: "scoping",
    },
    {
        question: "___ determines which projects or developments require a full or partial impact assessment study. (Fill in the blank)",
        options: [
            "screening",
            "scoping",
            "reporting",
            "review",
        ],
        answer: "screening",
    },
    {
        question: "The demographic transition sees a society move from",
        options: [
            "high birth rate, low death rate to low birth rate, low death rate",
            "low birth rate, high death rate to low birth rate, low death rate",
            "high birth rate, high death rate to low birth rate, low death rate",
            "high birth rate, high death rate to low birth rate, high death rate",
        ],
        answer: "high birth rate, low death rate to low birth rate, low death rate",
    },
    {
        question: "\"An Essay on the Principle of Population\" was written by",
        options: [
            "Darwin",
            "Malthus",
            "Spencer",
            "Owens",
        ],
        answer: "Malthus",
    },
    {
        question: "Which of these is a preventive check according to Malthus?",
        options: [
            "foresight",
            "vice",
            "misery",
            "flood",
        ],
        answer: "foresight",
    },
],
week10: [
    {
        question: "\"Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead\" is a definition for",
        options: [
            "adaptation",
            "mitigation",
            "maladaptation",
            "malmitigation",
        ],
        answer: "maladaptation",
    },
    {
        question: "Macrodebris in the context of plastic debris has fragments of size",
        options: [
            "> 20 mm",
            "5 - 20 mm",
            "< 5 mm",
            "< 1 mm",
        ],
        answer: "> 20 mm",
    },
    {
        question: "Which of these is not a climatic forcing for Earth?",
        options: [
            "changes in plate tectonics",
            "changes in Earth's orbit",
            "changes in Sun's orbit",
            "changes in Sun's strength",
        ],
        answer: "changes in Sun's orbit",
    },
    {
        question: "\"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences\" is a definition for",
        options: [
            "adaptive response",
            "adaptive capacity",
            "mitigative response",
            "mitigative capacity",
        ],
        answer: "adaptive capacity",
    },
    {
        question: "Which of these is not a climatic forcing for Earth?",
        options: [
            "changes in plate tectonics",
            "changes in Earth's orbit",
            "changes in Moon's orbit",
            "changes in Sun's strength",
        ],
        answer: "changes in Moon's orbit",
    },
    {
        question: "Which of these is not a principle of ecological restoration?",
        options: [
            "ecological integrity",
            "long-term sustainability",
            "benefits and engages scientists",
            "informed by past and future",
        ],
        answer: "benefits and engages scientists",
    },
    {
        question: "Mesodebris in the context of plastic debris has fragments of size",
        options: [
            "> 20 mm",
            "5 - 20 mm",
            "< 5 mm",
            "< 1 mm",
        ],
        answer: "5 - 20 mm",
    },
    {
        question: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called",
        options: [
            "adaptation",
            "mitigation",
            "deceleration",
            "maladaptation",
        ],
        answer: "mitigation",
    },
    {
        question: "Which of these is not a principle of ecological restoration?",
        options: [
            "ecological integrity",
            "short-term sustainability",
            "benefits and engages society",
            "informed by past and future",
        ],
        answer: "short-term sustainability",
    },
    {
        question: "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
        options: [
            "adaptation",
            "mitigation",
            "deceleration",
            "maladaptation",
        ],
        answer: "adaptation",
    },
],
week11: [
    {
        question: "Ludwig's ratchet predicts",
        options: [
            "decreasing harvesting rate",
            "constant harvesting rate",
            "increasing harvesting rate",
            "fluctuating harvesting rate",
        ],
        answer: "increasing harvesting rate",
    },
    {
        question: "Which of these is correct?",
        options: [
            "R+G=M+F",
            "R+M=G+F",
            "R+F=M+G",
            "R+G+M+F=0",
        ],
        answer: "R+G=M+F",
    },
    {
        question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
        options: [
            "recovery",
            "restoration",
            "enhancement",
            "replacement",
        ],
        answer: "restoration",
    },
    {
        question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
        options: [
            "recovery",
            "restoration",
            "enhancement",
            "replacement",
        ],
        answer: "replacement",
    },
    {
        question: "A root zone treatment plant is an example of",
        options: [
            "phytoremediation",
            "biological control",
            "biomagnification",
            "bioaccumulation",
        ],
        answer: "phytoremediation",
    },
    {
        question: "A pest population is called controlled when",
        options: [
            "it is not increasing",
            "it is decreasing",
            "it is not causing any economic damage",
            "it is not causing excessive economic damage",
        ],
        answer: "it is not causing excessive economic damage",
    },
    {
        question: "Which of these is not an impact of toxic chemicals?",
        options: [
            "lethal effects",
            "sub-lethal effects",
            "reduction of existing stressors",
            "reduced fecundity",
        ],
        answer: "reduction of existing stressors",
    },
    {
        question: "Which of these is correct?",
        options: [
            "The maximum sustainable yield is near the beginning of the sigmoidal curve.",
            "The maximum sustainable yield is near the mid-point of the sigmoidal curve.",
            "The maximum sustainable yield is near the end of the sigmoidal curve.",
            "None of these.",
        ],
        answer: "The maximum sustainable yield is near the mid-point of the sigmoidal curve.",
    },
    {
        question: "Which of these concepts emphasizes an important relationship between two species?",
        options: [
            "match-mismatch hypothesis",
            "predation hypothesis",
            "symbiotic hypothesis",
            "interference hypothesis",
        ],
        answer: "match-mismatch hypothesis",
    },
    {
        question: "Which of these is correct?",
        options: [
            "Pests are defined as organisms that can cause economic damage.",
            "Pests are defined as organisms that can cause excessive economic damage.",
            "Pests are defined as organisms that can cause only economic damage.",
            "Pests are defined as organisms that are defined as consumers.",
        ],
        answer: "Pests are defined as organisms that can cause excessive economic damage.",
    },
],
week12: [
    {
        question: "Photosynthesis and respiration are in balance when",
        options: [
            "photosynthesis = respiration",
            "photosynthesis > respiration",
            "photosynthesis < respiration",
            "photosynthesis > 2 × respiration",
        ],
        answer: "photosynthesis = respiration",
    },
    {
        question: "Which of these is an example of symbiosis?",
        options: [
            "parasitism",
            "mutualism",
            "commensalism",
            "All of these",
        ],
        answer: "All of these",
    },
    {
        question: "Which of these is defined as the process through which organisms cope with environmental stress?",
        options: [
            "selection",
            "adaptation",
            "niche",
            "distribution",
        ],
        answer: "adaptation",
    },
    {
        question: "Which of these is a result of resource competition?",
        options: [
            "interference competition",
            "exploitative competition",
            "All of these",
            "none of these",
        ],
        answer: "All of these",
    },
    {
        question: "A sub-cellular organelle responsible for energy production in cells is",
        options: [
            "chloroplast",
            "ribosome",
            "mitochondria",
            "lysosome",
        ],
        answer: "mitochondria",
    },
    {
        question: "Which of these is correct?",
        options: [
            "Fundamental niche > Realised niche",
            "Fundamental niche < Realised niche",
            "Fundamental niche = Realised niche",
            "none of these",
        ],
        answer: "Fundamental niche > Realised niche",
    },
    {
        question: "Which of these is defined as the spread of a species to new areas?",
        options: [
            "expansion",
            "dispersal",
            "migration",
            "translocation",
        ],
        answer: "dispersal",
    },
    {
        question: "Which of these is a concept proposed by Malthus?",
        options: [
            "carrying capacity",
            "population cycles",
            "overpopulation",
            "underpopulation",
        ],
        answer: "Malthus",
    },
    {
        question: "Underpopulation is defined as",
        options: [
            "population density below ecological capacity",
            "population density above ecological capacity",
            "population density equal to ecological capacity",
            "none of these",
        ],
        answer: "population density below ecological capacity",
    },
    {
        question: "The S-shaped growth curve refers to",
        options: [
            "logistic growth",
            "exponential growth",
            "linear growth",
            "oscillating growth",
        ],
        answer: "S-shaped growth curve refers to logistic growth.",
    },
]


};

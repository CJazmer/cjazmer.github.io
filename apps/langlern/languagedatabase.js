// Leave blank "" lesson will be incomplete
// Put "..." word does not exist
// Put ||
// Universal app Functions
function randomnum(minn, maxx){
  return Math.floor(Math.random() * (maxx - minn + 1)) + minn
}


const Spanishlessonobjs = [
{name: "Spanish 1",
lesson: [
    {english: `quiero means I want`, otherlang: `chico corazon`, hint: ``},
    {english: `say: I want noun`, otherlang: `quiero noun`, hint: ``},
    {english: `'ahora' means 'now'`, otherlang: ``, hint: ``},
    {english: `say: now I want noun`, otherlang: `ahora quiero noun`, hint: ``},
    {english: `y means and`, otherlang: ``, hint: ``},
    {english: `say: I want noun and noun`, otherlang: `quiero noun y noun`, hint: `'y' means 'and'`},
    {english: `Whats the word for 'now'`, otherlang: `ahora`, hint: ``},
    {english: `say: I want noun now`, otherlang: `quiero noun ahora`, hint: ``},
    {english: `say: I don't want noun`, otherlang: `No quiero noun`, hint: `put 'no' at start to negate sentences'`},
    {english: `say: because I don't want noun`, otherlang: `porque no quiero noun`, hint: ``},
    {english: `say: because I don't want noun now`, otherlang: `porque no quiero noun ahora`, hint: ``},
]}];
const Germanlessonobjs = [
{name: `German 1`, 
lesson: [
    {english: `The table is good`, otherlang: `der Tisch ist gut`, hint: ``},
    {english: `the dogs are good`, otherlang: `die Hunde sind gut`, hint: ``},
    {english: `you are good`, otherlang: `du bist gut`, hint: ``},
    {english: `we are good and you are bad`, otherlang: `wir sind gut und du bist schlecht`, hint: ``},
    {english: `das means this / that`, otherlang: ``, hint: ``},
    {english: `this is good and that is bad`, otherlang: `das ist gut und das ist schlecht`, hint: ``},
    {english: `You are that`, otherlang: `du bist das`, hint: ``},
    {english: `That is bad`, otherlang: `das ist schlecht`, hint: ``},
    {english: `Is that bad?`, otherlang: `ist das schlecht?`, hint: `flip like english`},
    {english: `questions also flip verbs`, otherlang: ``, hint: ``},
    {english: `you have a car`, otherlang: `du hast ein Auto`, hint: ``},
    {english: `do you have a car?`, otherlang: `hast du ein Auto?`, hint: `flip it`},
    {english: `because (weil), but (aber)`, otherlang: ``, hint: ``},
    {english: `but, you have a car?`, otherlang: `aber, hast du ein Auto?`, hint: ``},
    {english: `because I have a car`, otherlang: `weil ich ein auto habe?`, hint: ``},
    {english: `I have food and water`, otherlang: `Ich habe Essen und Wasser`, hint: ``},
    {english: `here (hier), there (da)`, otherlang: ``, hint: ``},

    {english: `I can speak German`, otherlang: `ich kann sprechen Deutsch`, hint: ``},
    {english: `you can speak German`, otherlang: `du kannst sprechen Deutsch`, hint: ``},
    {english: `because you can speak German`, otherlang: `weil du kannst sprechen Deutsch`, hint: ``},
    {english: `can you speak German?`, otherlang: `kannst du sprechen Deutsch?`, hint: ``},


    {english: `I was here, you were there`, otherlang: `ich war hier, du warst da`, hint: ``},


    // Possessives 
    {english: `my house is here`, otherlang: `Mein Haus ist hier`, hint: ``},
    {english: `your house is here`, otherlang: `dein Haus ist hier`, hint: ``},
    {english: `his big house and my house`, otherlang: `sein großes Haus und mein Haus`, hint: ``},
    {english: `is your house here?`, otherlang: `Ist dein Haus hier?`, hint: `flip it because its a qestion`},
    {english: `is your house here?`, otherlang: `Ist dein Haus hier?`, hint: ``},
]},
{name: `Noun Gender`, 
lesson: [
    {english: `German has 3 Genders, Male, Female, Neuter`, otherlang: ``, hint: ``},
    {english: `Female words end in 'e', otherwise its male or neuter`, otherlang: ``, hint: ``},
    {english: `word for the is der`, otherlang: ``, hint: ``},
    {english: `the table, the house`, otherlang: `der tisch, der Stuhl`, hint: ``},
    {english: `use die when word is female`, otherlang: ``, hint: ``},
    {english: `the table, the cat`, otherlang: `der tisch, die katze`, hint: `katze is female`},
]},
{name: "Conujation", 
lesson: [
    // {english: `Pronouns: I/Ich | you/du | he/er she/sie it/es | we/wir | they/sie`, otherlang: ``, hint: ``},
    {english: `All verbs end in 'en'. replace en with ending`, otherlang: ``, hint: ``},
    {english: `learnen means learn, `, otherlang: ``, hint: ``},

    {english: `I learn and you learn`, otherlang: `Ich lerne und du lernst`, hint: ``},
    {english: `he learns and we learn`, otherlang: `er lernt und wir lernen`, hint: ``},
    {english: `I learn and they learn`, otherlang: `Ich lerne und sie lernen`, hint: ``},
    {english: `they learn and we learn`, otherlang: `sie lernen und wir lernen`, hint: `we/they have same ending`},

]},
{name: `Person to Person`, 
lesson: [
    {english: `I(ich, me), you(du, dich) he(er, ihn) we(wir, uns) they(sie) `, otherlang: ``, hint: ``},
    {english: `er sagt es mir`, otherlang: `he tells me (he tell it me)`, hint: ``},
    {english: ``, otherlang: ``, hint: ``},
    {english: ``, otherlang: ``, hint: ``},
    {english: ``, otherlang: ``, hint: ``},
]},
{name: `Negation`, 
lesson: [
    {english: `add 'nicht' after verb to negate`, otherlang: ``, hint: ``},
    {english: `I eat. I dont eat`, otherlang: `Ich esse. Ich esse nicht`, hint: ``},
    {english: `replace artical with Keinen, if theres an artical`, otherlang: ``, hint: ``},
    {english: `I don't have a dog`, otherlang: `Ich habe keinen Hund`, hint: ``},
    {english: `Use Keine if feminine`, otherlang: ``, hint: ``},
    {english: `I don't have a cat`, otherlang: `Ich habe keine Katze`, hint: ``},
]},
];
const Russianlessonobjs = [
{name: `Russian 1`,
lesson: [
    {english: `это means this/that is`, otherlang: ``, hint: ``},
    {english: `That is a house`, otherlang: `это дом`, hint: ``},
    {english: `This is a house, that is water`, otherlang: `это дом, это вода`, hint: ``},
    {english: `I want to eat`, otherlang: `хочу есть`, hint: ``},
    ]
},
{name: `Conjugation`,
lesson: [
    {english: `All Verbs end with 'ть' | 'ать' and 'ить' are most common`, otherlang: ``, hint: ``},
    {english: `ать Endings: I(-ю) You(-ешь) he/she(-ет) we(-ем) they(-ют) yall(-ете)`, otherlang: ``, hint: ``},
    {english: `'ать' verbs replace ть`, otherlang: ``, hint: ``},

    {english: `знать: To Know, I know, you know`, otherlang: `знать, я знаю, ты знаешь`, hint: `ать verb, just replace ть`},
    {english: `знать: To Know, he knows, we know, they know`, otherlang: `знать, он знает, мы знаем, они знают`, hint: `ать verb, just replace ть`},

    // ить Endings Practice
    {english: `'ить' verbs replace ить`, otherlang: ``, hint: ``},
    {english: `ить Endings: I(-ю) You(-ишь) he/she(-ит) we(-им) they(-ят) yall(-ите)`, otherlang: ``, hint: ``},
    {english: `ать and ить verb endings are simular, just different vowels`, otherlang: ``, hint: ``},
    {english: `говорить: To Know, I know, you know`, otherlang: `знать, я говорю, ты говоришь`, hint: `ить verb, replace ить`},
    {english: `говорить: To Know, he knows, we know, they know`, otherlang: `знать, он говорит, мы говорим, они говорят`, hint: `ить verb, replace ить`},
    
    // Past Tense
    {english: `'-ил' for Past Tense ить verbs`, otherlang: ``, hint: ``},
    {english: `говорить: I spoke, he spoke`, otherlang: `Я говорил, он говорил`, hint: `*Same ending for all pronouns`},
    {english: `пить: I drink, he drinks`, otherlang: `я пил, он пил`, hint: ``},
    {english: `'-ал' for Past Tense ать verbs`, otherlang: ``, hint: ``},
    {english: ``, otherlang: ``, hint: ``},
    {english: ``, otherlang: ``, hint: ``},
    {english: `Male(л) Female(ла) Neuter(ло) Plural(ли)`, otherlang: ``, hint: ``},
    {english: `she spoke`, otherlang: `она говорила`, hint: `female add 'a' to end`},
    {english: `it spoke`, otherlang: `оно говорило`, hint: `neuter/objects add 'o' to end`},
    {english: `we spoke, they spoke`, otherlang: `мы говорили, они говорили`, hint: `plural add 'и' just like plural nouns`},

    // Irregular consonant changes
    {english: `3 Mutations з/х:ш | г:ж | к:ч`, otherlang: ``, hint: ``},
    {english: `резать: to cut, i cut, you cut`, otherlang: `резать, Я режу, ты режешь`, hint: `з -> ш`},
    {english: `бежать: to run, i cut, you cut`, otherlang: `бежать, я бегу, ты бежишь`, hint: `г:ж`},


    ]
},
{name: "Cases", 
lesson: [
    {english: `Locative 'in/on/at' | в ...-е/ах *singular/plural*`, otherlang: ``, hint: ``},
    {english: `in the city 'город'`, otherlang: `в городе`, hint: ``},
    {english: `in the country 'страна'`, otherlang: `в стране`, hint: ``},
    {english: `I'm in the school 'школа'`, otherlang: `я в школе`, hint: ``},
    {english: `he's in the schools 'школа'`, otherlang: `он в школах`, hint: `use -ах because schools is plural`},

    {english: `Instrumental 'using/with' | -ом/ой/ами *male/female/plural`, otherlang: ``, hint: ``},
    {english: `he cut bread with the knife 'нож'`, otherlang: `он резал хлеб ножом`, hint: ``},
    {english: `I eat with a spoon 'ложка'`, otherlang: `я ем ложкой `, hint: `replace a with ой because A/Female ending`},
    {english: `I write with pens 'ручка'`, otherlang: `я пишу ручками`, hint: `use -ами because pens is plural`},

    {english: `Genitive 'of/from' | -а/ы/и *male/female/plural`, otherlang: ``, hint: ``},
    {english: `mom's car`, otherlang: `машина мамы`, hint: `use -ами because pens is plural`},

    {english: `Dative 'to/taker' | -у/е *male/female`, otherlang: ``, hint: ``},
    {english: `A 'to/taker' | -y *AnimateFemale`, otherlang: ``, hint: ``},

]},
{name: `Russian 2`,
lesson: [
    {english: `что can mean 'that' as a connecting word`, otherlang: ``, hint: ``},
    {english: `you know that I know`, otherlang: `ты знаешь что я знаю`, hint: ``},

    ]
},
{name: `Sentence Examples`,
lesson: [
    {english: `You know that I know`, otherlang: `ты знаешь что я знаю`, hint: ``},
    {english: `I want to learn more Russian`, otherlang: `я хочу выучить больше русского`, hint: ``},

    ]
},
];
const Polishlessonobjs = [
{name: `Polish 1`,
lesson: [
    {english: `to means (this/that is)`, otherlang: ``, hint: ``},
    {english: `that is a house`, otherlang: `to jest dom`, hint: ``},
    {english: `this is a house, that is water`, otherlang: `to jest dom, to jest woda`, hint: ``},
    ]
}
];
const Arabiclessonobjs = [
  {name: `Conjugation`,
  lesson: [
      {english: `Default Conj. I(ا) | you(تـ) | he/it(يـ) | she/it(تـ) | we(نـ) | they(يـ … ون)`, otherlang: ``, hint: ``},
      {english: `I hear`, otherlang: `أسْمَع`, hint: `سمع`},
      {english: `you hear, we hear`, otherlang: `تَسْمَع, نَسْمَع`, hint: `سمع`},
      {english: `she hears, they hear`, otherlang: `تَسْمَع, يَسْمَعون`, hint: `سمع`},
      {english: `I sleep, they sleep`, otherlang: `أنام, نائمون`, hint: `نام`},
      {english: `I speak, you speak`, otherlang: `أتكلم, تتكلم`, hint: `تكلم`},
      {english: `she swims, you swim`, otherlang: `تَسْبَح, تَسْبَح`, hint: `سبح`},
      
      {english: `Default Past. I(ُـت) | you(ـتَ) | he… | she(ـَتْ) | we(ـنا)`, otherlang: ``, hint: ``},
      {english: `I heard`, otherlang: `سمعت`, hint: `سمع`},
      {english: `I heard, you heard`, otherlang: `سمعت, سمعت`, hint: `سمع`},
      {english: `we heard, they heard`, otherlang: `سمعت, سمعوا`, hint: `سمع`},
      {english: `he heard, she heard`, otherlang: `سمع, سمعت`, hint: `سمع`},

      {english: `Egypt Conj. I(بـ) | you(بتـ) | he/it(بيـ) | she/it(بتـ) | we(بنـ) | they(بيـ … و)`, otherlang: ``, hint: ``},
      {english: `Egypt Future. Replace b(بـ) with h(هـ)`, otherlang: ``, hint: ``},

      ]
  },
  {name: `Less Fusa | More Dialect!`,
  lesson: [
      ]
  }
  ];
const Chineselessonobjs = [
{name: `Chinese 1`,
lesson: [
  {english: `Wǒ (我) means I`, otherlang: ``, hint: ``},
  {english: `shuō (我) means Speak`, otherlang: ``, hint: ``},
  {english: `I speak`, otherlang: `Wǒ shuō`, hint: ``},
  {english: `Me and you eat`, otherlang: `Wǒ hé nǐ chī`, hint: ``},
]},
{name: `Chinese 2`,
lesson: [
  {english: `add 吗 ma to end to make questions`, otherlang: ``, hint: ``},
]},
];

const Oneidalessonobjs = [
  {name: `Greetings and Name`,
  lesson: [
    {english: `nahteˀ means 'what'`, otherlang: ``, hint: ``},
    {english: ` is verb "to call"`, otherlang: ``, hint: ``},
    {english: `náhteˀ yesa•yáts`, otherlang: `whats your name? 'what you called?'`, hint: ``},
    {english: `my name is Bob`, otherlang: `Bob niyukyats`, hint: ``},
    {english: `his name is Bob (Male)`, otherlang: `Bob luwa•yáts`, hint: ``},
    {english: `her name is Emily (Female)`, otherlang: `Emily yutátyats`, hint: ``},
    {english: ``, otherlang: `Emily yutátyats`, hint: ``},

  ]},
  {name: `Possessive, my, your, his...`,
  lesson: [
    {english: `ak- my | sa- your | lo- his | ako- her`, otherlang: ``, hint: ``},
    {english: `Mom: nulhá | my mom, your mom, his mom, her mom`, otherlang: `aknulhá, sanulhá, lonulhá, akonulhá`, hint: ``},
  ]},
  ];

  const Hawaiianlessonobjs = [
    {name: `Basic1`,
    lesson: [
      {english: `I(au) you('oe) he/she('o ia) we(kākou) they(lākou)`, otherlang: ``, hint: ``},
      {english: `pronoun is after verb "work I"`, otherlang: ``, hint: ``},
      {english: `say I work`, otherlang: `hana au`, hint: `work: hana`},
      {english: `say you work and she works`, otherlang: `hana 'oe a hana 'o ia`, hint: `and: a`},
      
      {english: `past tense: put 'ua' in front`, otherlang: ``, hint: ``},
      {english: `say I worked`, otherlang: `ua hana au`, hint: `work: hana`},
      
      {english: `because(no ka mea)`, otherlang: ``, hint: ``},
      {english: `say I worked because I need food`, otherlang: `ua hana au no ka mea pono au (i ka) mea'ai`, hint: `need: pono`},

    ]},
  ];

 // SENTENCE EXAMPLES ===========================================
 const oneidaExamples = [
  {english: `I dont love you`, lang: `(no)te(I to You)ku(love)noluhkwa`, info: ``},
  {english: `good car`, lang: `(noun)ká·(car)sleht(good)i·yó`, info: ``},
  {english: `I have corn`, lang: `(I to it)wak(corn)nʌst(connector)a(have)yʌ`, info: ``},
  {english: `Does he know? I dont have any money`, lang: `(he)lo(know)núhte (yes no question)kʌ, (no)te'(I)wak(money)hwíst(connector)a(have)yʌ`, info: ``},
  {english: `Oneida, TapeRecorder`, lang: `(noun)o(stone)nʌy(upright)ote'(people)a·ká·, (noun marker)ka(word)wʌn(connector)a(catch)ye·ná(?)s`, info: ``},
  {english: `Tree`, lang: `(noun)ka(log)lu·t(upright)óte`, info: ``},
  {english: `He plays music for us`, lang: `(he to us)shukwa(play music, a- removed)tlʌnot(?)ha'se·níhe'`, info: ``},
  {english: `When he got hungry, he ate`, lang: `onʌ (past)wa(?)hatuhkályake' onʌ (past)wa(?)hatekhu·ní·`, info: ``},
];
const spanishExamples = [
  {english: `did you eat already?`, lang: `(already)ya (eat)com(you, past)iste`, info: `ya means already/yet, put at start of sentence`},
  {english: `the volcano remains active`, lang: `(the)el (volcano)volcán (it continues | seguir)sigue (active)activo`, info: ``},
  {english: `I don't know what it is`, lang: `(no)no (i know | saber)sé (what)que (is)es`, info: ``},
  {english: `what do birds eat?`, lang: `(what)qué (they eat | comer)comen (the | male plural)los (birds)pajaros?`, info: ``},
  {english: `everything turned out good`, lang: `(everything)todo (it turned out | salir)salío (good)bien `, info: `Salir 'to follow' can be used as 'turn out' outcome`},
  {english: `theres people behind us that we just met`, lang: `(there is)hay (people)personas (behind)atrás (that)que (we just | acabar)acabamos (...)de (meet)conocer`, info: ``},
  {english: `cover your mouth when you sneeze or cough`, lang: `(cover! | cubrir)cubre(you)te (the)la (mouth)boca (...)al (sneeze)estornudar (or)o (cough)toser `, info: `a + el = al 'to the'`},
  {english: `we will have embarrassing moments`, lang: `(we go | ir)vamos (to)a (have)tener (moments)momentos (of)de (embarrassment)vergüenza `, info: ``},
  {english: `where is he getting these words from?`, lang: `(from)de (where)dónde (he is)está (taking out | sacar)sacando (the)las (words)palabras?`, info: ``},
  {english: `theres no signs, we need to use our instincts to arrive safety`, lang: `(no)no (there is)hay (signs)letreros, (we need | necesitar)necesitamos (to use)utilizar (our)nuestros (instincts)instintos (in order to)para (arrive)llegar (safe)seguro`, info: `para 'for' is also used 'in order to'`},
  {english: `we try to wright our names on the wall`, lang: `(we try)tratamos de (to write)escribir (our)nuestros (names)nombres (on)en (the)la (wall)pared`, info: ``},
  {english: `we make a mix, leaf combination`, lang: `(we make | hacer)hacemos (a)una (mix)mezcla, (combination)combinacion (of)de (the)las (leaves)hojas`, info: ``},
  {english: `i will put it inside the backpack`, lang: `(it)lo (I go)voy (to)a (put)poner (inside)dentro (of)de (the)la (backpack)mochila`, info: ``},
  {english: `I'm going to help him fill the glasses`, lang: `(him/it)lo (I go)voy (to)a (help)ayudar (to)a (fill)llenar (the)los (glasses)vasos`, info: ``},
  {english: `i don't want them to find out`, lang: `(no)no (i want | querer)quiero (that)que (reflexive)se (they findout | enterar, subjunctive)enteren`, info: ``},
  {english: `Its what I do most when I have free time`, lang: `(it is)es (it)lo (what)que (most)más (I do)hago (when)cuando (I have)tengo (time)tiempo (free)libre`, info: ``},
  {english: ``, lang: ``, info: ``},
  {english: ``, lang: ``, info: ``},
  {english: ``, lang: ``, info: ``},
  {english: ``, lang: ``, info: ``},
];
const GermanExamples = [
  {english: `i'm here, where are you?`, lang: `(I)ich (am)bin (here)hier. (where)Wo (are)bist (you)du`, info: ``},
  {english: `what are you doing? `, lang: `was machst du`, info: ``},
  {english: `why do you have that? `, lang: `(why)warum (have)hast (you)du (that)das?`, info: ``},
  {english: `when are you comming? `, lang: `wann kommst du?`, info: ``},
  {english: `i don't know, what is it`, lang: `(I)Ich (know)weiß (not)nicht, (what)was (is)es (it)ist`, info: ``},
  {english: `i dance, do you dance?`, lang: `(I)ich (dance)tanze, (dance)tanzst (you)du?`, info: `pronoun after verb because its a question`},
  {english: `i don't dance, i cant dance`, lang: `Ich tanze nicht, Ich kann nicht tanzen`, info: `Negate: put 'nicht' after verb`},
  {english: `i have a cat and you dont have a cat`, lang: `Ich habe eine Katze und du hast keine Katze`, info: `Negate2: replace artical with 'keine'`},
  {english: `my car can drive`, lang: `mein Auto kann fahren`, info: ``},
  {english: `did you eat yet?`, lang: `Hast du schon gegessen,`, info: `schon means yet/already`},
  {english: `i will sing if you will sing`, lang: `Ich werde singen, wenn du singst`, info: `wenn = if, 'werden' is verb 'to will'`},
  {english: `were talking about cats`, lang: `sprachen über Katzen`, info: `über can mean about`},
  {english: `we should eat`, lang: `wir sollten Essen`, info: `sollen (sollt) to should`},
  {english: `I should practice guitar`, lang: `Ich sollte Gitarre üben`, info: `verbs goes at end of sentence`},
  {english: `can you sing and do you sing?`, lang: `Kannst du singen und singst du?`, info: ``},
  {english: `i like to learn languages. you like to learn languages`, otherlang: `Ich lerne gerne Sprachen. Du lernst gerne Sprachen`, info: `gerne = like (put after verb, not conjugated)`},
  {english: `trees are big but this tree is small`, lang: `Bäume sind groß, aber dieser Baum ist klein`, info: ``},
];
const arabicExamples = [
  {english: ``, lang: `(a)قَلَمـ()ـك() و()قلمـ()ـي و()قلمـ()ـنا`, info: ``},
  {english: `I listen to you`, lang: ``, info: ``},
  {english: ``, lang: ``, info: ``},
  {english: ``, lang: ``, info: ``},
  {english: ``, lang: ``, info: ``},
];
const hawaiianExamples = [
  {english: `Im going to the church`, lang: `(go)hele (I)au (to)i (the)ka (house)hale(pray)pule`, info: ``},
  {english: `I went to the school`, lang: `(past)ua (go)hele (I)au (to)i (the)ke (school)kula`, info: ``},
  {english: `the bird eats the fish`, lang: `(eat)ʻai (the)ka (fish)manu (direct object)i (the)ka (fish)iʻa`, info: ``},
  {english: `the house, the school, the schools`, lang: `(the)ka (house)hale, (the)ke (school)kula, (the plural)na (school)kula`, info: `asdf`},
  {english: `I eat fish and I drink water`, lang: `(eat)'ai (I)au (direct object)i (the)ka (fish)i'a (and)a (drink)inu (I)au (direct object)i (the)ka (water)wai`, info: ``},
  {english: `I went shopping with my friends on sunday`, lang: `(past)ua (go)ele (I)au (infinitive)e (shop)kū'ai (with)me (my)ko'u (plural)mau (friend)hoaaloha (on)ma (the)ka (sunday)lāpula`, info: ``},
];
const finnishExamples = [
  {english: `the dogs were in the room`, lang: `(dog)koira(plural)t (they were)olivat (room)huone(in)essa`, info: ``},
];
const swahiliExamples = [
  {english: `I ate fish`, lang: `(I)ni(past)li(eat)kula (fish)samaki`, info: ``},
];
const haitianExamples = [
  {english: `I'm Bob, I'm called Bobby`, lang: `(I)m'(be)se (bob)Bob, (I)mwen (call)rele (Bobby)Bobby`, info: ``},
  {english: `how are you, whats up, I'm good`, lang: `(how)koman (you)ou (question)ye? (yes no question)èske (you)ou (go)ale? (whats up)sak pase, (I)m'(good)byen`, info: ``},
];
// Hindi, Japanese, Korean???
// قَلَمـ(pen)ـك(your) و(and)قلمـ(pen)ـي(my) و(and)قلمـ(pen)ـنا(our)
// قَلَمـ(pen)ـك(your) و(and)قلمـ(pen)ـي(my) و(and)قلمـ(pen)ـنا(our)
// قَلَمـ(pen)ـك(your) و(and)قلمـ(pen)ـي(my) و(and)قلمـ(pen)ـنا(our)
// ()قَلَمـ()ـك() و()قلمـ()ـي و()قلمـ()ـنا


const clrsarr = [
    ["darkorange", "orange"], // Romance 0
    ["gold", "yellow"], // Germanic 1
    ["green", "lime"], // Celtic 2
    ["rgb(60, 135, 215)", "rgb(100, 175, 255)"], // Slavic 3
    ["rgb(60, 135, 215)", "rgb(100, 175, 255)"], // Uralic 4
    ["rgb(255, 180, 70)", "rgb(255, 210, 100)"], // Semetic 5
    ["rgb(255, 180, 70)", "rgb(255, 210, 100)"], // Berber Amazigh 6
    ["mediumpurple", "plum"], // African Language 7
    ["red", "pink"], // Turkic 8
    ["red", "pink"], // Sino-Tibetian 9
    ["hotpink", "lightpink"], // Austronesian 10
    ["mediumpurple", "plum"], // Native American 11
]
const languagedatabase = [
    {name: `spanish`, langfam: `Romance`, colors:clrsarr[0], lessonsobjs: Spanishlessonobjs, examples: spanishExamples, audioindex: 8},
    {name: `french`, langfam: `Romance`, colors:clrsarr[0], lessonsobjs: null, examples: null, audioindex: 8},
    {name: `german`, langfam: `Germanic (west)`, colors:clrsarr[1], lessonsobjs: Germanlessonobjs, examples: GermanExamples, audioindex: 3},
    {name: `swedish`, langfam: `Germanic (north)`, colors:clrsarr[1], lessonsobjs: null, examples: null, audioindex: 3},
    {name: `finish`, langfam: `Uralic`, colors:clrsarr[4], lessonsobjs: null, examples: finnishExamples, audioindex: 0},
    {name: `polish`, langfam: `Slavic (west)`, colors:clrsarr[3], lessonsobjs: Polishlessonobjs, examples: null, audioindex: 16},
    {name: `russian`, langfam: `Slavic (east)`, colors:clrsarr[3], lessonsobjs: Russianlessonobjs, examples: null, audioindex: 18},
    {name: `chinese`, langfam: `Sino-Tibetan`, colors:clrsarr[9], lessonsobjs: Chineselessonobjs, examples: null, audioindex: 19},
    {name: `swahili`, langfam: `Bantu`, colors:clrsarr[11], lessonsobjs: null, examples: swahiliExamples, audioindex: 0},
    {name: `hawaiian`, langfam: `Polynesian`, colors:clrsarr[10], lessonsobjs: Hawaiianlessonobjs, examples: hawaiianExamples, audioindex: 0},
    {name: `arabic`, langfam: `Semetic`, colors:clrsarr[5], lessonsobjs: Arabiclessonobjs, examples: arabicExamples, audioindex: 0},
    {name: `haitian`, langfam: `Romance / Bantu`, colors:clrsarr[5], lessonsobjs: null, examples: haitianExamples, audioindex: 0},
    {name: `turkish`, langfam: `Turkic`, colors:clrsarr[8], lessonsobjs: null, examples: null, audioindex: 0},
    {name: `oneida`, langfam: `Native (Iroquoian)`, colors:clrsarr[11], lessonsobjs: Oneidalessonobjs, examples: oneidaExamples, audioindex: 0},
];




// Vocab Database --------------------------------
const vColors = [
    {english: "red", spanish: "rojo", german: `rot`, swedish: "röd", russian: `кра́сный`, arabic: "أَحْمَرْ", hawaiian: "'ula'ula", questionextra: "<div style='background-color:red; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "orange", spanish: "naranja", german: `orange`, swedish: "orange", russian: `ора́нжевый`, arabic: "بُرْتُقَانِي", hawaiian: "'alani", questionextra: "<div style='background-color:orange; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "yellow", spanish: "amarillo", german: `gelb`, swedish: "gul", russian: `жёлтый`, arabic: "أَصْفَرْ", questionextra: "<div style='background-color:yellow; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "green", spanish: "verde", german: `grün`, swedish: "grön", russian: `зелёный`, arabic: "أَخْضَرْ", questionextra: "<div style='background-color:green; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "cyan", spanish: "...", german: `hellblau`, swedish: "...", russian: `голубо́й`, arabic: "...", questionextra: "<div style='background-color:cyan; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "blue", spanish: "azul", german: `blau`, swedish: "blå", russian: `си́ний`, arabic: "أَزْرَقْ", questionextra: "<div style='background-color:blue; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "purple", spanish: "morado", german: `lila`, swedish: "lila", russian: `фиоле́товый`, arabic: "مُوفْ", questionextra: "<div style='background-color:purple; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "black", spanish: "negro", german: `schwarz`, swedish: "svart", russian: `чёрный`, arabic: "إِسْوِدْ", hawaiian: "'ele'ele", questionextra: "<div style='background-color:black; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "white", spanish: "blanco", german: `weiß`, swedish: "vit", russian: `бе́лый`, arabic: "أَبْيَضْ", questionextra: "<div style='background-color:white; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "gray", spanish: "gris", german: ``, swedish: "", russian: `серый`, arabic: "", questionextra: "<div style='background-color:grey; width:1em; height:1em; border-radius:100%'></div>"},
]
const vNumbers = [
  {english: "number", spanish: "el número", portuguese: "o número", russian: "номер", polish: "numer",       german: "der Buchstabe", swedish: "ett nummer", swahili: "nambari", lakota: "...", chinese: "...", french: "nombre", haitian: ""},
  {english: "letter 'ABC'", spanish: "la letra", portuguese: "a letra", russian: "буква", polish: "litera",       german: "die Nummer", swedish: "en bokstav", swahili: "barua", lakota: "...", chinese: "...", french: "lettre", haitian: ""},
  {english: "0", spanish: "cero", portuguese: "zero", russian: "нуль", polish: "zero",       german: "null", swedish: "noll", swahili: "sifuri", lakota: "...", chinese: "〇 líng", french: "zéro", haitian: "zewo"},
  {english: "1", spanish: "uno", portuguese: "um", russian: "один", polish: "jeden",         german: "eins", swedish: "en", swahili: "moja", lakota: "waŋží", chinese: "一 yī", french: "un", oneida: "úskah", haitian: "en"},
  {english: "2", spanish: "dos", portuguese: "dois", russian: "два", polish: "dwa",          german: "zwei", swedish: "två", swahili: "mbili", lakota: "núŋpa", chinese: "二 èr", french: "deux", oneida: "téken", haitian: "de"},
  {english: "3", spanish: "tres", portuguese: "tres", russian: "три", polish: "trzy",        german: "drei", swedish: "tre", swahili: "tatu", lakota: "yámni", chinese: "三 sān", french: "trois", oneida: "áhsʌ", haitian: "twa"},
  {english: "4", spanish: "cuatro", portuguese: "quatro", russian: "четыре", polish: "cztery",german: "vier", swedish: "fyra", swahili: "nne", lakota: "tópa", chinese: "四 sì", french: "quatre", oneida: "kayé", haitian: "kat"},
  {english: "5", spanish: "cinco", portuguese: "cinco", russian: "пять", polish: "piec",     german: "fünf", swedish: "fem", swahili: "tano", lakota: "záptaŋ", chinese: "五 wǔ", french: "cinq", oneida: "wísk", haitian: "senk"},
  {english: "6", spanish: "seis", portuguese: "seis", russian: "шесть", polish: "szesc",     german: "sechs", swedish: "sex", swahili: "sita", lakota: "šákpe", chinese: "六 liù", french: "six", oneida: "yá•yahk", haitian: "sis"},
  {english: "7", spanish: "siete", portuguese: "sete", russian: "Семь", polish: "siedem",    german: "sieben", swedish: "sju", swahili: "saba", lakota: "šakówiŋ", chinese: "七 tsī", french: "sept", oneida: "tsya•ták", haitian: "sèt"},
  {english: "8", spanish: "ocho", portuguese: "oito", russian: "вóсемь", polish: "osiem",    german: "acht", swedish: "åtta", swahili: "nane", lakota: "šaglógaŋ", chinese: "八 bā", french: "huit", oneida: "téklu", haitian: "uit"},
  {english: "9", spanish: "nueve", portuguese: "nove", russian: "девять", polish: "dziewiec",german: "neun", swedish: "nio", swahili: "tisa", lakota: "napčíyuŋka", chinese: "九 tsiǔ", french: "neuf", oneida: "wátlu", haitian: "nèf"},
  {english: "10", spanish: "dies", portuguese: "dez", russian: "десять", polish: "dziesiec", german: "zehn", swedish: "tio", swahili: "kumi", lakota: "wikčémna", chinese: "十 shí", french: "dix", oneida: "oye•lí", haitian: "dis"},
  {english: "100", spanish: "cien", portuguese: "", russian: "", polish: "", german: "", swedish: "", swahili: "", lakota: "", chinese: "百 bǎi", french: ""},
  {english: "1000", spanish: "mil", portuguese: "", russian: "", polish: "", german: "", swedish: "", swahili: "", lakota: "", chinese: "千 qiān", french: ""},
]
const vAnimals = [
    {english: "pen/feather", spanish: "la pluma", german: "...", russian: "...",     arabic: "...", finish: "...",  hawaiian: "...", oneida: "..."},
    {english: "dog", spanish: "el perro", german: "der Hund", russian: "собака",     arabic: "كَلْب", finish: "koira",  hawaiian: "ʻīlio", oneida: "é·lhal", lakota: "šúŋka"},
    {english: "cat", spanish: "el gato", german: "die Katze", russian: "кошка",        arabic: "قِط", finish: "kissa", hawaiian: "pōpoki", oneida: "takó·s", lakota: "igmú",},
    {english: "bird", spanish: "el pajaro", german: "der Vogel", russian: "птица",   arabic: "طائر", finish: "lintu", hawaiian: "manu", oneida: "otsiˀtʌ́haˀ", lakota: "ziŋtkála",},
    {english: "fish", spanish: "el pez", german: "der Fisch", russian: "рыба",       arabic: "سَمَك", finish: "kala", hawaiian: "i'a", oneida: "kʌ́tsi", lakota: "hoǧáŋ"},
    {english: "chicken", spanish: "el pollo", german: "das Huhn", russian: "курица", arabic: "دَجاج", finish: "kana", hawaiian: "moa", oneida: "kitkit", lakota: "?"},
    {english: "cow", spanish: "la vaca", german: "die Kuh", russian: "корова",       arabic: "بقرة", finish: "lehmä", hawaiian: "?", oneida: "?", lakota: "?"},
    {english: "pig", spanish: "el cerdo", german: "das Schwein", russian: "свинья",  arabic: "خنزير", finish: "sika", hawaiian: "?", oneida: "?", lakota: "?"},
    {english: "spider", spanish: "la araña", german: "die Spinne", russian: "паук"},
    {english: "horse", spanish: "el caballo", german: "das Pferd", russian: "конь", arabic: "حُصان"},
    {english: "bear", spanish: "el oso", german: "der Bär", russian: "медведь", arabic: "دُب"},

    // Intermediate / Extra
    {english: "ant", spanish: "la hormiga", german: "die Ameise", russian: "муравей", tags: "extra"},
    {english: "shark", spanish: "el tiburón", german: "der Hai", russian: "акула", tags: "extra"},
    {english: "frog", spanish: "la rana", german: "der Frosch", russian: "лягушка", tags: "extra"},
    {english: "deer", spanish: "el ciervo", german: "das Reh", russian: "олень", tags: "extra"},
    {english: "fly", spanish: "la mosca", german: "die Fliege", russian: "муха", tags: "extra"},
    {english: "rabbit", spanish: "el conejo", german: "Das Kaninchen", russian: "кролик", tags: "extra"},
    {english: "turtle", spanish: "la tortuga", german: "die Schildkröte", russian: "черепаха", tags: "extra"},
    {english: "lion", spanish: "el león", german: "der Löwe", russian: "лев", tags: "extra"},
  ]
  const vFruit = [
    {english: "fruit", spanish: "la fruta", portugese: "a fruta", polish: "owoc", russian: "фрукт", hawaiian: "hua", german: "das Obst", swedish: "en frukt", arabic: "فاكهة"},
    {english: "apple", spanish: "la manzana", portugese: "", polish: "jabłko", russian: "яблоко", hawaiian: "", german: "der Apfel", swedish: "ett äpple", arabic: "تُفّاح"},
    {english: "banana", spanish: "banana", portugese: "", polish: "banan", russian: "банан", hawaiian: "", german: "die Banane", swedish: "en banan", arabic: "مَوز"},
    {english: "cherry", spanish: "cereza", portugese: "", polish: "wiśnia", russian: "вишня", hawaiian: "", german: "die Kirsche", swedish: "ett körsbär", arabic: "كَرَز"},
    {english: "orange", spanish: "naranja", portugese: "", polish: "Pomarańczowy", russian: "апельсин", hawaiian: "", german: "die Orange", swedish: "en apelsin", arabic: "بُرْتُقال"},
    {english: "strawberry", spanish: "fresa", portugese: "", polish: "truskawka", russian: "клубника", hawaiian: "", german: "die Erdbeere", swedish: "en jordgubbe", arabic: "فَراولة"},
    {english: "watermelon", spanish: "sandía", portugese: "melancia", polish: "arbuz", russian: "арбуз", hawaiian: "", german: "die Wassermelone", swedish: "en vattenmelon", arabic: "بَطّيخ"},    
  ]
  const vFood = [
    {english: "food", spanish: "la comida", german: "das Essen", swedish: "en mat", russian: "еда", hawaiian: "mea"},
    {english: "water", spanish: "el agua", german: "das Wasser", swedish: "ett vatten", russian: "вода", arabic: "ماء", hawaiian: "wai"},
    {english: "bottle", spanish: "la botella", german: "die Flasche", swedish: "en flaska", russian: "бутылка"},
    {english: "milk", spanish: "la leche", german: "die Milch", swedish: "en mjölk", russian: "молоко", arabic: "حَليب"},
    {english: "drink", spanish: "la bebida", german: "das Getränk", swedish: "en drink", russian: "напиток"},
    {english: "beer", spanish: "la cerveza", german: "das Bier", swedish: "en öl", russian: "пиво"},
    {english: "wine", spanish: "el vino", german: "der Wein", swedish: "ett vin", russian: "вино", arabic: "نَبيذ"},
    {english: "ice", spanish: "el hielo", german: "das Eis", swedish: "en is", russian: "лед", arabic: "جَلِيد", hawaiian: "hau"},
    {english: "bread", spanish: "el pan", german: "das Brot", swedish: "en bröd", russian: "хлеб", arabic: "خُبْز", tags: "slavic, "},
    {english: "rice", spanish: "el arroz", german: "der Reis", swedish: "ett ris", russian: "рис", arabic: "أُرْز"},
    {english: "egg", spanish: "el huevo", german: "das Ei", swedish: "ett ägg", russian: "яйцо", arabic: "بَيْضة"},
    {english: "meat", spanish: "la carne", german: "das Fleisch", swedish: "ett kött", russian: "мясо", arabic: "لَحْم"},
    {english: "onion", spanish: "cebolla", german: "die Zwiebel", swedish: "en lök", russian: "лук", arabic: "بَصَل"},
    {english: "cheese", spanish: "queso", german: "der Käse", swedish: "en ost", russian: "сыр", arabic: "جُبْن", tags: "slavic, "},
    {english: "oil", spanish: "el aceite", german: "das Öl", swedish: "en olja", russian: "масло"},
    {english: "fork", spanish: "el tenedor", german: "die Gabel", swedish: "en gaffel", russian: "вилка"},
    {english: "knife", spanish: "el cuchillo", german: "das Messer", swedish: "en kniv", russian: "нож", arabic: "سِكّين"},
    {english: "spoon", spanish: "la cuchara", german: "der Löffel", swedish: "en sked", russian: "ложка"},
    {english: "napkin", spanish: "la servilleta", german: "die Serviette", swedish: "en servett", russian: "салфетка"},
    {english: "plate", spanish: "el plato", german: "der Teller", swedish: "en tallrik", russian: "тарелка"},
    {english: "corn", spanish: "el maiz", german: "Der Mais", swedish: "en majs", russian: "кукуруза", arabic: "ذُرة"},
    {english: "carrot", spanish: "la zanahoria", german: "die Karotte", swedish: "en morot", russian: "морковь", arabic: "جَزَر"},
    {english: "sandwich", spanish: "sandwich", german: "das Sandwich", swedish: "en smörgås", russian: "..."},
    {english: "salt", spanish: "sal", german: "das Salz", swedish: "ett salt", russian: "соль", arabic: "مَلْح"},
    {english: "sugar", spanish: "el azúcar", german: "der Zucker", swedish: "ett socker", russian: "сахар", arabic: "سُكَّر"},
    {english: "peppers", spanish: "pimientos", german: "der Pfeffer", swedish: "peppar", russian: "перец", arabic: "فِلْفِل"},

    //Extra
    {english: "honey", spanish: "la miel", german: "der Honig", swedish: "en honung", russian: "мед", arabic: "عَسَل", tags: "extra"},
  ];
  const vLandscape = [
    {english: "plant", spanish: "la planta", german: "die Pflanze", russian: "растение", hawaiian: "", lakota: "", oneida: "", arabic: ""},
    {english: "fire", spanish: "el fuego", german: "das Feuer", russian: "огонь", hawaiian: "ahi", lakota: "pȟéta", oneida: "o·tsísteˀ", arabic: "نار", chinese: "火 huǒ"},
    {english: "air", spanish: "el aire", german: "die Luft", russian: "воздух", arabic: "هَواء", hawaiian: "ea"},
    {english: "sun", spanish: "el sol", german: "die Sonne", russian: "солнце", arabic: "شَّمس", hawaiian: "lā", lakota: "wí", oneida: ""},
    {english: "moon", spanish: "la luna", german: "der Mond", russian: "луна", arabic: "قَمَر", hawaiian: "mahina", lakota: "haŋwí", oneida: "wehní·taleˀ"},
    {english: "star", spanish: "la estrella", german: "der Stern", russian: "звезда", arabic: "نَجْم", hawaiian: "hoku", lakota: "wičháȟpi", oneida: ""},
    {english: "mountain", spanish: "la montaña", german: "der Berg", russian: "гора", arabic: "جَبَل"},
    {english: "tree", spanish: "el árbol", german: "der Baum", russian: "...", arabic: "شَجَرة"},
    {english: "tree/wood", spanish: "...", german: "...", russian: "дерево"},
    {english: "leaf", spanish: "la hoja", german: "das Blatt", russian: "лист"},
    {english: "flower", spanish: "la flor", german: "die Blume", russian: "цветок", hawaiian: "", lakota: "", oneida: "", arabic: ""},
    {english: "forest", spanish: "el bosque", german: "der Wald", russian: "лес", arabic: "غابة"},
    {english: "grass", spanish: "el césped", german: "das Gras", russian: "трава"},
    {english: "sea", spanish: "el mar", german: "das Meer", russian: "море", arabic: "بَحْر", hawaiian: "kai"},
    {english: "river", spanish: "el río", german: "der Fluss", russian: "река", arabic: "نَهْر", hawaiian: "muliwai"},
    {english: "desert", spanish: "el desierto", german: "die Wüste", russian: "пустыня", arabic: "صَحْراء"},

    // Extra
    {english: "berry", spanish: "la baya", german: "die Beere", russian: "ягода", hawaiian: "", lakota: "", oneida: "", arabic: "", tags: "extra"},
  ]
  const vWeather = [
    {english: "sky", spanish: "el cielo", german: "der Himmel", russian: "небо",  arabic: "سَماء", hawaiian: "lani", lakota: "maȟpíya", oneida: "romance, slavic, semitic, germanic"},
    {english: "cloud", spanish: "la nube", german: "die Wolke", russian: "облако", hawaiian: "ʻōpua"},
    {english: "storm", spanish: "la tormenta", german: "der Sturm", russian: "буря"},
    {english: "rain", spanish: "la lluvia", german: "der Regen", russian: "дождь", arabic: "مطر", hawaiian: "ua"},
    {english: "snow", spanish: "la nieve", german: "der Schnee", russian: "снег", arabic: "ثَلْج", hawaiian: "hau"},
  ];
  const vWorld = [
    {english: "world", spanish: "el mundo", german: "die Welt", swedish: "en värld", russian: "мир", chinese: "世界 shìjiè", haitian: "mond", tags: "semitic, "},
    {english: "people", spanish: "la gente", german: "die Leute", swedish: "ett folk", russian: "люди", haitian: "moun"},
    {english: "country", spanish: "el país", german: "das Land", swedish: "ett land", russian: "страна", haitian: "peyi"},
    {english: "flag", spanish: "la bandera", german: "die Flagge", swedish: "en flagga", russian: "флаг"},
    {english: "city", spanish: "la ciudad", german: "die Stadt", swedish: "en stad", russian: "город", arabic: "مَدينة", chinese: "城市 chéngshì", haitian: "vil"},
    {english: "building", spanish: "el edificio", german: "das Gebäude", swedish: "en byggnad", russian: "здание"},
    {english: "neighborhood", spanish: "el barrio", german: "die Nachbarschaft", swedish: "ett grannskap", russian: "район", arabic: "حَيّ"},
    {english: "street", spanish: "la calle", german: "die Straße", swedish: "en gata", russian: "дорога"},
    {english: "car", spanish: "el carro", german: "das Auto", swedish: "en bil", russian: "машина", chinese: "车 chē"},
    {english: "boat", spanish: "el bote", german: "das Boot", swedish: "en båt", russian: "лодка"},
    {english: "plane", spanish: "el avión", german: "das Flugzeug", swedish: "ett flygplan", russian: "самолёт"},
    {english: "sidewalk", spanish: "la banqueta", german: "der Gehweg", swedish: "en trottoar", russian: "тротуар"},
    {english: "yard", spanish: "el patio", german: "das Yard", swedish: "...", russian: "двор"},
  ];
  const vBody = [
    {english: "body", spanish: "el cuerpo", german: "der Körper", swedish: "en kropp", russian: "тело", chinese: "身体 shēntǐ", hawaiian: "kino"},
    {english: "head", spanish: "la cabeza", german: "der Kopf", swedish: "ett huvud", russian: "голова", arabic: "رَأس", chinese: "头 tóu", tags: "semitic, "},
    {english: "face", spanish: "la cara", german: "das Gesicht", swedish: "ett ansikte", russian: "лицо", arabic: "وَجْه"},
    {english: "eye", spanish: "el ojo", german: "das Auge", swedish: "ett öga", russian: "Глаз", arabic: "عَيْن"},
    {english: "mouth", spanish: "la boca", german: "der Mund", swedish: "en mun", russian: "рот", arabic: "فَم"},
    {english: "nose", spanish: "la naris", german: "die Nase", swedish: "en näsa", russian: "нос", arabic: "أنْف"},
    {english: "ear", spanish: "la oreja", german: "das Ohr", swedish: "ett öra", russian: "ухо", arabic: "أُذُن"},
    {english: "back", spanish: "la espalda", german: "der Rücken", swedish: "en rygg", russian: "спина", arabic: "ظَّهْر"},
    {english: "beard", spanish: "la barba", german: "der Bart", swedish: "en skägg", russian: "борода", arabic: "لِحْية"},
    {english: "hair", spanish: "el pelo", german: "die Haare", swedish: "ett hår", russian: "волосы"},
    {english: "arm", spanish: "el brazo", german: "der Arm", swedish: "en arm", russian: "..."},
    {english: "hand", spanish: "la mano", german: "die Hand", swedish: "en hand", russian: "...", arabic: "يَدّ"},
    {english: "hand/arm", spanish: "...", german: "...", swedish: "...", russian: "рука", hawaiian: "lima"},
    {english: "leg", spanish: "la pierna", german: "das Bein", swedish: "ett ben", russian: "нога", arabic: "رِجْل"},
    {english: "foot", spanish: "el pie", german: "der Fuß", swedish: "en fot", russian: "ступня", arabic: "قَدَم"},
    {english: "skin", spanish: "la piel", german: "die Haut", swedish: "ett skinn", russian: "кожа", arabic: "جِلْد"},
    {english: "heart", spanish: "el corazón", german: "das Herz", swedish: "ett hjärta", russian: "сердце", hawaiian: "puʻuwai"},
    {english: "teeth", spanish: "dientes", german: "die Zähne", swedish: "en tänder", russian: "зубы"},
    {english: "lips", spanish: "los labios", german: "die Lippe", russian: "губа"},

    //Extra
    {english: "eyebrow", spanish: "la ceja", german: "die Augenbraue", swedish: "ett ögonbryn", russian: "бровь", tags: "extra"},
    {english: "knee", spanish: "la rodilla", german: "das Knie", swedish: "ett knä", russian: "колено", tags: "extra"},
  ]
  const vClothes = [
    {english: "clothes", spanish: "la ropa", portugese: "roupa", german: "die Kleidung", swedish: "en kläder", russian: "одежда", chinese: "衣服 yīfú"},
    {english: "cap", spanish: "la gorra", portugese: "o boné", german: "die Kappe", swedish: "en hatt", russian: "шапка", arabic: "قُبَّعة"},
    {english: "glasses", spanish: "gafas/lentes", portugese: "os óculos", german: "die Brille", swedish: "glasögon", russian: "очки"},
    {english: "shirt", spanish: "la camiseta", portugese: "camisa", german: "das Hemd", arabic: "قَميص", swedish: "en skjorta", russian: "рубашка"},
    {english: "pants", spanish: "pantalones", portugese: "calça", german: "die Hose", swedish: "en byxa", russian: "штаны", arabic: "بِنْطال"},
    {english: "socks", spanish: "los calcetines", portugese: "as meias", german: "die Socken", swedish: "strumpor", russian: "носки"},
    {english: "shoe", spanish: "el zapato", portugese: "sapato", german: "der Schuh", swedish: "en sko", russian: "обувь"},
    {english: "necklace", spanish: "el collar", portugese: "o colar", german: "die Halskette", swedish: "ett halsband", russian: "..."},
  ];
  const vTime = [
    {english: "today", spanish: "hoy", german: "heute", swedish: "idag", russian: "сегодня", arabic: "اليوم"},
    {english: "tomorrow", spanish: "mañana", german: "morgen", swedish: "imorgon", russian: "завтра"},
    {english: "yesterday", spanish: "ayer", german: "gestern", swedish: "igår", russian: "вчера"},
    {english: "now", spanish: "ahora", german: "jetzt", swedish: "nu", russian: "сейчас"},
    {english: "later", spanish: "más tarde", german: "später", swedish: "senare", russian: "позже"},
    {english: "again", spanish: "otra vez", german: "wieder", swedish: "igen", russian: "снова"},
    {english: "time/turn", spanish: "vez", german: "", swedish: "", russian: "", haitian: "fwa"},

    {english: "second", spanish: "el segundo", german: "der Zweite", swedish: "en sekund", russian: "второй"},
    {english: "minute", spanish: "el minuto", german: "die Minute", swedish: "en minut", russian: "минута"},
    {english: "hour", spanish: "la hora", german: "die Stunde", swedish: "en timme", russian: "час"},
    {english: "day", spanish: "el día", german: "der Tag", swedish: "en dag", russian: "день"},
    {english: "night", spanish: "la noche", german: "die Nacht", swedish: "en natt", russian: "ночь"},
    {english: "week", spanish: "la semana", german: "die Woche", swedish: "en vecka", russian: "неделя"},
    {english: "month", spanish: "el mes", german: "der Monat", swedish: "en månad", russian: "месяц"},
    {english: "year", spanish: "el año", german: "das Jahr", swedish: "ett år", russian: "год"},

    {english: "spring", spanish: "la primavera", german: "der Frühling", swedish: "en vår", russian: "весна"},
    {english: "summer", spanish: "el verano", german: "der Sommer", swedish: "en sommar", russian: "лето"},
    {english: "fall", spanish: "el otoño", german: "der Herbst", swedish: "en höst", russian: "осень"},
    {english: "winter", spanish: "el invierno", german: "der Winter", swedish: "en vinter", russian: "зима", arabic: "شِتاء"},

    {english: "monday", spanish: "lunes", german: "der Montag", swedish: "måndag", russian: "понедельник"},
    {english: "tuesday", spanish: "martes", german: "der Dienstag", swedish: "tisdag", russian: "вторник"},
    {english: "wednesday", spanish: "miércoles", german: "der Mittwoch", swedish: "onsdag", russian: "среда"},
    {english: "thursday", spanish: "jueves", german: "der Donnerstag", swedish: "torsdag", russian: "четверг"},
    {english: "friday", spanish: "viernes", german: "der Freitag", swedish: "fredag", russian: "пятница"},
    {english: "saturday", spanish: "sábado", german: "der Samstag", swedish: "lördag", russian: "суббота"},
    {english: "sunday", spanish: "domingo", german: "der Sonntag", swedish: "söndag", russian: "воскресенье"},
  ];

  const vRoom = [
    {english: "room", spanish: "el cuarto", german: "das Zimmer", russian: "комната"},
    {english: "table", spanish: "la mesa", german: "der Tisch", russian: "стол", arabic: "طاوِلة"},
    {english: "chair", spanish: "la silla", german: "der Stuhl", russian: "стул", arabic: "كُرسي"},
    {english: "seat", spanish: "el asiento", german: "der Sitz", russian: "место"},
    {english: "book", spanish: "el libro", german: "das Buch", russian: "книга", arabic: "كِتاب", hawaiian: "puke", haitian: "liv"},
    {english: "paper", spanish: "el papel", german: "das Papier", russian: "бумага", arabic: "وَرَق"},
    {english: "door", spanish: "la puerta", german: "die Tür", russian: "дверь", arabic: "باب", haitian: "pòt"},
    {english: "key", spanish: "la llave", german: "der Schlüssel", russian: "ключ", arabic: "مِفْتاح"},
    {english: "bed", spanish: "la cama", german: "das Bett", russian: "кровать", arabic: "سَرِير", haitian: "kabann"},
    {english: "floor", spanish: "el piso", german: "der Boden", russian: "пол", haitian: "etaj"},
    {english: "roof", spanish: "el techo", german: "das Dach", russian: "крыша"},
    {english: "wall", spanish: "el pared", german: "die Wand", russian: "стена", arabic: "حائِط"},
    {english: "window", spanish: "la ventana", german: "das Fenster", russian: "окно"},
    {english: "stairs", spanish: "las escaleras", german: "die Treppe", russian: "лестница", arabic: "دُرَج"},
    {english: "clock/watch", spanish: "el reloj", german: "die Uhr", russian: "часы", arabic: "ساعة"},
    {english: "kitchen", spanish: "la cocina", german: "die Küche", swedish: "ett kök", russian: "кухня", arabic: "مَطْبَخ", haitian: "kwizin", tags: ""},

    // Extra Room Words
    {english: "exit", spanish: "la salida", german: "der Ausgang", russian: "выход", tags: "extra"},
    {english: "mirror", spanish: "el espejo", german: "der Spiegel", russian: "зеркало", arabic: "مرآة", tags: "extra"},
    {english: "soap", spanish: "el jabon", german: "die Seife", russian: "мыло", tags: "extra"},
    {english: "towel", spanish: "la toalla", german: "das Handtuch", russian: "полотенце", tags: "extra"},
    {english: "blanket", spanish: "...", german: "die Decke", swedish: "En filt", russian: "одеяло", tags: "extra"},
    {english: "pillow", spanish: "la almohada", german: "das Kissen", swedish: "en kudde", russian: "подушка", tags: "extra"},
    {english: "carpet", spanish: "la carpeta", german: "der Teppich", swedish: "en matta", russian: "ковер", tags: "extra"},
    {english: "fan", spanish: "el abanico", german: "der Ventilator", swedish: "en fläkt", russian: "вентилятор", tags: "extra"},
  ];
  const vLanguage = [
    {english: "language", spanish: "el idioma", german: "die Sprache", swedish: "ett språk", russian: "язык", haitian: "language"},
    {english: "word", spanish: "la palabra", german: "das Wort", swedish: "ett ord", russian: "слово", haitian: "mo"},
    {english: "sentence", spanish: "la frase", german: "der Satz", swedish: "en mening", russian: "предложение"},
    {english: "spanish", spanish: "español", german: "Spanisch", swedish: "spanska", russian: "испанский", haitian: "panyòl"},
    {english: "english", spanish: "inglés", german: "Englisch", swedish: "engelsk", russian: "английский", haitian: "angle"},
    {english: "russian", spanish: "ruso", german: "Russisch", swedish: "ryska", russian: "русский"},
    {english: "german", spanish: "alemán", german: "Deutsch", swedish: "tyska", russian: "Немецкий"},
    {english: "arabic", spanish: "árabe", german: "Arabisch", swedish: "arabiska", russian: "арабский"},
  ];
  const vFamily = [
    {english: "family", spanish: "la familia", german: "die Familie", swedish: "", russian: "", haitian: "fanmi"},
    {english: "dad", spanish: "el padre", german: "der Papa", swedish: "en pappa", russian: "па́па"},
    {english: "mom", spanish: "madre", german: "die Mama", swedish: "en mamma", russian: "ма́ма"},
    {english: "brother", spanish: "el hermano", german: "der Bruder", swedish: "en bror", russian: "брат", haitian: "frè"},
    {english: "sister", spanish: "la hermana", german: "die Schwester", swedish: "en syster", russian: "сестра́"},
    {english: "grandpa", spanish: "el abuelo", german: "der Opa", swedish: "en farfar", russian: "дедушка"},
    {english: "grandma", spanish: "la abuela", german: "die Oma", swedish: "en mormor", russian: "бабушка"},
    {english: "man", spanish: "el hombre", german: "der Mann", swedish: "en man", russian: "мужчина", arabic: "رَجُل"},
    {english: "woman", spanish: "la mujer", german: "die Frau", swedish: "en kvinna", russian: "женщина", arabic: "اِمْرأة"},
    {english: "kid", spanish: "el niño", german: "das Kind", swedish: "ett barn", russian: "ребёнок"},
    {english: "neighbor", spanish: "el vecino", german: "der Nachbar", swedish: "en granne", russian: "сосед"},
    {english: "boy/girlfriend", spanish: "novio/novia", german: "...", swedish: "...", russian: "..."},
    {english: "uncle/aunt", spanish: "tío/tía", german: "...", swedish: "...", russian: "..."},

    {english: "ghost/spirit", spanish: "el fantasma", german: "", swedish: "", russian: "призрак", tags: "extra, "},
  ];
  const vMain = [
    {english: "there is/are", spanish: "hay", german: "...", swedish: "...", russian: "есть", haitian: "gen"},
    {english: "this/that is", spanish: "...", german: "das", swedish: "...", russian: "это", haitian: "sa se"},
    {english: "hi", spanish: "hola", german: "hallo", swedish: "hej", russian: "привет"},
    {english: "bye", spanish: "adiós", german: "Tschüss", swedish: "hejdå", russian: "пока"},
    {english: "thanks", spanish: "gracias", german: "danke", swedish: "tack", russian: "спасибо", arabic: "شكرًا"},
    {english: "youre welcome", spanish: "de nada", german: "Bitte", swedish: "...", russian: "..."},
    {english: "sorry", spanish: "lo siento", german: "...", swedish: "förlåt", russian: "извини"},
    {english: "please", spanish: "por favor", german: "bitte", swedish: "snälla", russian: "пожалуйста", haitian: "tanpri"},
    {english: "yes", spanish: "sí", german: "ja", swedish: "ja", russian: "да", arabic: "نَعَم", haitian: "wi"},
    {english: "no", spanish: "no", german: "nein", swedish: "nej", russian: "нет", arabic: "لا", haitian: "non"},
    {english: "and", spanish: "y", german: "und", swedish: "och", russian: "и", arabic: "و", hawaiian: "a", haitian: "ak/epi"},
    {english: "because", spanish: "porque", german: "weil", swedish: "för", russian: "потому что", haitian: "paske"},
    {english: "but", spanish: "pero", german: "aber", swedish: "", russian: "но", haitian: "men"},
    {english: "very", spanish: "muy", german: "sehr", swedish: "väldigt", russian: "очень", hawaiian: "loa"},
    {english: "all, everyone/thing", spanish: "todo", german: "alle", swedish: "alla", russian: "все"},
    {english: "thing", spanish: "la cosa", german: "das Ding", swedish: "sak", russian: "штука", haitian: "bagay"},
    {english: "here", spanish: "aquí", german: "hier", swedish: "här", russian: "здесь"},
    {english: "there", spanish: "alla", german: "dort", swedish: "där", russian: "там"},
    {english: "here/there", haitian: "la"},

    {english: "to", spanish: "a", german: "", swedish: "", russian: "", haitian: "nan"},
    {english: "of/from", spanish: "de", german: "", swedish: "", russian: "", haitian: ""},
    {english: "before", spanish: "antes", german: "", swedish: "", russian: "", haitian: ""},
    {english: "after", spanish: "después", german: "", swedish: "", russian: "", haitian: ""},
    {english: "in/on", spanish: "en", german: "", swedish: "", russian: "", haitian: ""},
    {english: "", spanish: "", german: "", swedish: "", russian: "", haitian: ""},
    {english: "if", spanish: "si", german: "", swedish: "", russian: "", haitian: "si"},

    {english: "what", spanish: "qué", german: "was", swedish: "vad", russian: "что", arabic: "ما", haitian: "kisa"},
    {english: "where", spanish: "dónde", german: "wo", swedish: "var", russian: "где", arabic: "أين", haitian: "kote"},
    {english: "why", spanish: "por qué", german: "warum", swedish: "varför", russian: "почему", arabic: "لماذا", haitian: "poukisa"},
    {english: "who", spanish: "quién", german: "wer", swedish: "vem", russian: "кто", arabic: "مِن", haitian: "kiyès"},
    {english: "when", spanish: "cuando", german: "wenn", swedish: "när", russian: "когда", arabic: "مَتـى", haitian: "kilè"},
    {english: "how", spanish: "cómo", german: "wie", swedish: "hur", russian: "как", arabic: "كَيف", haitian: "koman"},
    {english: "how much", spanish: "cuánto", german: "", swedish: "", russian: "сколько", arabic: "", haitian: "konbyen"},

    {english: "more", spanish: "más", german: "mehr", swedish: "mer", russian: "больше", haitian: "plis"},
    {english: "less", spanish: "menos", german: "weniger", swedish: "mindre", russian: "меньше", haitian: "mwens"},
    {english: "a lot", spanish: "mucho", german: "viele", swedish: "många", russian: "много"},
    {english: "aswell also", spanish: "también", german: "auch", swedish: "också", russian: "тоже"},
    
    {english: "with", spanish: "con", german: "mit", swedish: "med", russian: "с"},
    {english: "without", spanish: "sin", german: "ohne", swedish: "utan", russian: "без"},
    {english: "in/on", spanish: "en", german: "...", swedish: "i", russian: "в"},
    {english: "at", spanish: "...", german: "...", swedish: "...", russian: "на"},
  ];
  const vMain2 = [
    {english: "food", spanish: "la comida", german: "das Essen", swedish: "en mat", russian: "еда"},
    {english: "water", spanish: "el agua", german: "das Wasser", swedish: "ett vatten", russian: "вода", chinese: "水 shuǐ", tags: "romance, "},
    {english: "money", spanish: "el dinero", german: "das Geld", swedish: "en pengar", russian: "деньги", haitian: "lajan"},
    {english: "house", spanish: "la casa", german: "das Haus", swedish: "ett hus", russian: "дом", arabic: "بَيْت", hawaiian: "hale", tags: "romance, semitic"},
    {english: "bathroom", spanish: "el baño", german: "das Bad", swedish: "ett badrum", russian: "ванная"},
    {english: "phone", spanish: "el celular", german: "das Telefon", swedish: "en telefon", russian: "телефон", arabic: "هاتِف"},
    {english: "job", spanish: "el trabajo", german: "die Arbeit", swedish: "ett jobb", russian: "работа"},
    {english: "shop/store", spanish: "la tienda", german: "das Geschäft", russian: "...", haitian: "magazen"},
    {english: "store/market", spanish: "...", german: "...", russian: "магазин"},
    {english: "light", spanish: "la luz", german: "das Licht", swedish: "ett ljus", russian: "свет", arabic: "ضوء", haitian: "limyè", tags: "romance, "},
    {english: "life", spanish: "la vida", german: "das Leben", swedish: "ett liv", russian: "жизнь", arabic: "حَياة", hawaiian: "ola"},
    {english: "garbage", spanish: "la basura", german: "der Müll", swedish: "ett skräp", russian: "мусор", arabic: "قُمامة"},
    {english: "place", spanish: "el lugar", german: "", swedish: "", russian: "", haitian: "kote"},

    {english: "bag", spanish: "la bolsa", german: "die Tasche", swedish: "en väska", russian: "мешок"},
    {english: "box", spanish: "la caja", german: "die Kiste", swedish: "en låda", russian: "коробка"},
    {english: "friend", spanish: "el amigo", german: "der Freund", swedish: "en vän", russian: "друг", arabic: "صَديق"},
    {english: "god", spanish: "dios", german: "der Gott", swedish: "en gud", russian: "Бог", arabic: "الله", hawaiian: "akua", haitian: "bondye"},
    {english: "team", spanish: "el equipo", german: "ein Team", swedish: "ett lag", russian: "команда"},
    {english: "music", spanish: "la musica", german: "die Musik", swedish: "en musik", russian: "музыка", hawaiian: "mele"},
    {english: "music/song", hawaiian: "mele"},
    {english: "movie", spanish: "la película", german: "der Film", swedish: "en film", russian: "фильм"},
    {english: "game", spanish: "el juego", german: "das Spiel", swedish: "ett spel", russian: "игра"},
    {english: "ball", spanish: "la pelota", german: "ein Ball", swedish: "en boll", russian: "мяч"},
    {english: "church", spanish: "la iglesia", german: "die Kirche", swedish: "kyrka", russian: "церковь", hawaiian: "halepule", haitian: "legliz"},
  ];
  const vPronouns = [
    {english: "I", spanish: "yo", german: "ich", swedish: "jag", russian: "Я", haitian: "mwen"},
    {english: "you", spanish: "tú", german: "du", swedish: "du", russian: "ты", haitian: "ou"},
    {english: "you formal", spanish: "usted", german: "sie", swedish: "...", russian: "вы"},
    {english: "he", spanish: "él", german: "er", swedish: "han", russian: "он"},
    {english: "she", spanish: "ella", german: "sie", swedish: "hon", russian: "она"},
    {english: "it", spanish: "lo/la", german: "es", swedish: "det", russian: "оно"},
    {english: "s/he/it", haitian: "li"},
    {english: "we", spanish: "nosotros", german: "wir", swedish: "ci", russian: "мы", haitian: "nou"},
    {english: "yall", spanish: "...", german: "ihr", swedish: "...", russian: "вы"},
    {english: "they", spanish: "ellos", german: "sie", swedish: "de", russian: "они", haitian: "yo"},

    {english: "obj: me", spanish: "me", german: "...", swedish: "mig", russian: "меня"},
    {english: "obj: you", spanish: "te", german: "...", swedish: "dig", russian: "тебя"},
    {english: "obj: him", spanish: "lo", german: "...", swedish: "hans", russian: "eго"},
    {english: "obj: her", spanish: "la", german: "...", swedish: "hennes", russian: "eё"},
    {english: "obj: it", spanish: "lo", german: "...", swedish: "den/det", russian: "eго"},
    {english: "obj: us", spanish: "nos", german: "...", swedish: "oss", russian: "нас"},
    {english: "obj: yall", spanish: "...", german: "...", swedish: "er", russian: "вас"},
    {english: "obj: them", spanish: "les", german: "...", swedish: "dem", russian: "их"},

    {english: "my", spanish: "mi", german: "mein", swedish: "min/mitt", russian: "мой", hawaiian: "ko'u"},
    {english: "your", spanish: "tu", german: "dein", swedish: "din/ditt", russian: "твой", hawaiian: "kou"},
    {english: "his", spanish: "...", german: "sein", swedish: "hans", russian: "..."},
    {english: "her", spanish: "...", german: "ihr", swedish: "hennes", russian: "..."},
    {english: "its", spanish: "...", german: "sein", swedish: "dess", russian: "..."},
    {english: "his/her/it", spanish: "su", german: "...", swedish: "...", russian: "его", hawaiian: "kana"},
    {english: "our", spanish: "nuestro", german: "unser", swedish: "vår/vårt", russian: "наш"},
    {english: "yall's", spanish: "...", german: "euer", swedish: "...", russian: "ваш"},
    {english: "their", spanish: "su", german: "ihr", swedish: "deras", russian: "их"},
  ];
  const veeee = [
    {english: "thats why", spanish: "por eso", german: ""},
    {english: "once you", spanish: "una vez que", german: ""},
    {english: "", spanish: "", german: ""},
    {english: "", spanish: "", german: ""},
    {english: "", spanish: "", german: ""},
  ];
  const vEntertainment = [
    {english: "tv", spanish: "la tele", german: "das Fern"},
    {english: "sport", spanish: "deporte", german: "der Sport"},
    {english: "team", spanish: "equipo", german: "das Team"},
    {english: "music", spanish: "música", german: "die Musik"},
    {english: "song", spanish: "canción", german: "das Lied"},
    {english: "movie", spanish: "película", german: "der Film"},
    {english: "photo", spanish: "la foto", german: "das Foto"},
    {english: "message", spanish: "mensaje", german: "die Nachricht"},
  ];
  // language-irr-amount(1: irr, 2: just 1)
  const vVerbs1 = [
    {english: "to be", spanish: "ser/estar", haitian: "se"},
    {english: "to want", spanish: "querer (quier)", german: "wollen (will)", swedish: "vilija (vill)", russian: "хотеть", arabic: "ريد", hawaiian: "makemake", haitian: "vle"},
    {english: "to need", spanish: "necesitar", german: "müssen", swedish: "måste", russian: "", hawaiian: "pono", haitian: "bezwen"},
    {english: "to eat", spanish: "comer", german: "essen", swedish: "äta", russian: "есть", arabic: "أَكَلَ", haitian: "manje"},
    {english: "to drink", spanish: "tomar |take|", german: "trinken", swedish: "dricka (dricker)", russian: "пить", arabic: "شرب", hawaiian: "inu", haitian: "bwe"},
    {english: "to know fact", spanish: "saber", german: "wissen (weiß)", swedish: "veta (vet)", russian: "знать", haitian: "konnen", tags: "spanishirr2"},
    {english: "to know about", spanish: "conocer", german: "", swedish: "", russian: ""},
    {english: "to think", spanish: "pensar (piens)", german: "denken", swedish: "tänka (tänker)", russian: "", haitian: "panse"},
    {english: "to have", spanish: "tener (tien)", german: "haben", swedish: "ha (har)", russian: "", haitian: "gen"},
    {english: "to remember", spanish: "recordar (recuer)", german: "denken", swedish: "minna (minns)", russian: "", haitian: "sonje"},
    {english: "to change", spanish: "cambiar", german: "ändern", arabic: "", haitian: "chanje"},
    {english: "to do, make", spanish: "hacer", german: "machen", swedish: "göra (gör)", russian: "", haitian: "fè"},
    {english: "to give", spanish: "dar", german: "geben", swedish: "ge (ger)", russian: "", haitian: "ba"},
    {english: "to take", spanish: "...", german: "nehmen", swedish: "ta (tar)", russian: "", arabic: "أَخَذَ", haitian: "pran"},
    {english: "to live", spanish: "vivir", german: "leben", swedish: "leva (lever)", russian: ""},
    {english: "to live (reside)", spanish: "vivir", german: "leben", swedish: "bo (bor)", russian: "жить", arabic: "عاشَ"},
    {english: "to say/tell", spanish: "decir", german: "sagen", swedish: "säga (säger)", russian: "", haitian: "di"},
    {english: "to speak", spanish: "hablar", german: "sprechen", swedish: "tala (talar)", russian: "говори́ть", arabic: "تكلم", haitian: "pale"},
    {english: "to use", spanish: "usar", german: "benutzen", swedish: "använda (använder)", russian: ""},
    {english: "to learn", spanish: "aprender", german: "lernen", swedish: "lära (lär sig)", russian: "", arabic: "تعلم", haitian: "aprann"},
    {english: "to understand", spanish: "entender", german: "verstehen", swedish: "", russian: "", arabic: "فهم", haitian: "konprann"},
    {english: "to practice", spanish: "praticar", german: "üben", swedish: "träna (tränar)", russian: "", haitian: "pratike"},
    {english: "to work", spanish: "trabajar", german: "arbeiten", swedish: "jobbar", russian: "рабо́тать", arabic: "عمل", hawaiian: "hana", haitian: "travay"},
    {english: "to go", spanish: "ir", german: "gehen", swedish: "", russian: "", arabic: "", hawaiian: "hele", haitian: "ale"},
    {english: "to help", spanish: "ayudar", german: "helfen", swedish: "hjälpa (hjälper)", russian: "помогать", arabic: "ساعد", haitian: "ede"},
    {english: "to try/attempt", spanish: "intentar", german: "versuchen", swedish: "", russian: "", arabic: "", haitian: "eseye"},
    {english: "to like", spanish: "gustar", german: "mögen", swedish: "gilla (gillar)", russian: "", haitian: "renmen"},
    {english: "to hear", spanish: "escuchar", german: "hören", swedish: "höra (hör)", russian: "", arabic: "سمع", haitian: "tande"},
    {english: "to able to", spanish: "poder (pon)", german: "können", swedish: "kan", russian: ""},
    {english: "to look", spanish: "mirar", german: "...", swedish: "titta", russian: "смотреть", arabic: "نظر", haitian: "gade"},
    {english: "to see", spanish: "ver", german: "sehen", swedish: "ser", russian: "ви́деть", arabic: "رَأى"},
    {english: "to buy", spanish: "comprar", german: "kaufen", swedish: "köpa (köper)", russian: "", arabic: "شتري", haitian: "achte"},
    {english: "to sell", spanish: "vender", german: "verkaufen", swedish: "sälja (säljer)", russian: "продавать (прода)", arabic: "بيع"},
    {english: "to love", spanish: "amar", german: "lieben", swedish: "", russian: "", arabic: "", haitian: "renmen"},
  ];
  const vVerbs2 = [
    {english: "to sleep", spanish: "dormir (duer)", german: "schlafen", russian: "спать", arabic: "نام", haitian: "dòmi"},
    {english: "to drive", spanish: "manejar", german: "fahren", russian: "водить", arabic: "قود", haitian: "kondui"},
    {english: "to walk", spanish: "caminar", german: "", russian: "", arabic: "مَشي"},
    {english: "to clean", spanish: "limpiar", german: "sauber", russian: "чистить", arabic: "نظف", hawaiian: "clean"},
    {english: "to turn off", spanish: "apagar", german: "machen an"},
    {english: "to turn on", spanish: "prender", german: "machen aus"},
    {english: "to play", spanish: "jugar (jueg)", german: "spielen"},
    {english: "to play (instrument)", spanish: "tocar |touch|", german: "..."},
    {english: "to read", spanish: "leer", german: "lesen", arabic: "قرأ", hawaiian: "heluhelu"},
    {english: "to write", spanish: "escribir", german: "schreiben", arabic: "كتب"},
    {english: "to write/paint", spanish: "...", german: "...", russian: "писа́ть"},
    {english: "to call", spanish: "llamar", german: "rufen", haitian: "rele"},
    {english: "to draw", spanish: "dibujar", german: "zeichnen"},
    {english: "to play", spanish: "jugar", german: "spielen"},
    {english: "to play instrument", spanish: "tocar", german: "..."},
    {english: "to wait", spanish: "esperar", german: "warten", russian: "ждать"},
    {english: "to dance", spanish: "bailar", german: "tanzen", russian: "танцевать(танцу)", arabic: "رقص"},
    {english: "to cook", spanish: "cocinar", german: "kochen", russian: "готовить", oneida: "-khuni-", hawaiian: "kuke", arabic: "طَبَخَ"},
    {english: "to swim", spanish: "nadar", german: "schwimmen", russian: "плавать"},
    {english: "to fly", spanish: "volar", german: "fliegen", russian: "летать", arabic: "طير"},
    {english: "to fly/jump", hawaiian: "lele"},
    {english: "to search/lookfor", spanish: "buscar", german: "suchen", swedish: "sök (söker)", russian: "...", haitian: "chache"}, // Find & Search are the same????
    {english: "to find", spanish: "encontrar", german: "finden", swedish: "hitta", russian: "...", arabic: "جد", haitian: "jwenn"},
    {english: "open", spanish: "abrir", german: "öffnen", arabic: "فتح"},
    {english: "close", spanish: "cerrar", german: "schließen"},
    {english: "to die", spanish: "morir", german: "sterben", russian: "", arabic: "ماتَ"},
    {english: "to attack", spanish: "atacar", german: "angreifen", russian: "напасть", arabic: ""},


    /*
    {english: "push", spanish: "empujar", german: "drücken"},
    {english: "pull", spanish: "jalar", german: "ziehen"},
    */
  ];
  const vVerbs3 = [ // modify somthing
    {english: "to cut", spanish: "cortar", german: "schneiden", haitian: "koupe"},
    {english: "to break", spanish: "romper", german: "brechen"},
    {english: "to fix", spanish: "arreglar", german: "reparieren"},
    {english: "to burn", spanish: "quemar", german: "brennen"},
    {english: "to fill", spanish: "llenar", german: "füllen"},
    {english: "to take off/out", spanish: "sacar", german: "entfernen"},
    {english: "to cover", spanish: "cubrir", german: "decken"},
    {english: "to crack, rip, tear", spanish: "rayar", tags: ""},
    {english: "to win", spanish: "ganar", german: "gewinnen", tags: ""},
    {english: "to lose", spanish: "pedir", german: "verlieren", tags: ""},
    {english: "to bend/fold/turn", spanish: "doblar", tags: ""},

    // Extra
    {english: "to jump", spanish: "saltar/brincar", info: "extra"},
    {english: "to escape/runaway", spanish: "fugarse", tags: "extra"},
    {english: "to empty/hollow", spanish: "vaciar", tags: "extra"},
    {english: "to emerge/arise", spanish: "surgir", tags: "extra"},
    {english: "to throw/emit", spanish: "echar", tags: "extra"},
    {english: "to achieve", spanish: "lograr", tags: "extra"},
    {english: "to beat/whisk", spanish: "batir", tags: "extra"},
    {english: "to hunt/trap/catch", spanish: "cazar", tags: "extra"},
    {english: "to find", spanish: "encontrar", tags: "extra"},
    {english: "to hide", spanish: "esconder", tags: "extra"},
    {english: "to strain/filter", spanish: "colar", tags: "extra"},
    {english: "to discover", spanish: "descubrir/hallar", tags: "extra"},
    {english: "to turnin/submit", spanish: "descubrir/hallar", tags: "extra"},
    {english: "to reach", spanish: "alcanzar", tags: "extra"},
    {english: "to save/store", spanish: "guardar/almancenar", tags: "extra"},
    {english: "to be made of", spanish: "componer de", tags: "extra"},
    {english: "to take advantage of", spanish: "aprovechar de", tags: "extra"},
    {english: "to exhause/runout", spanish: "agostar", tags: "extra"},
    {english: "to findout", spanish: "averiguar", tags: "extra"},
    {english: "to splash", spanish: "saplicar", tags: "extra"},
    {english: "to blow", spanish: "soplar", tags: "extra"},
    {english: "to appear, showup", spanish: "aparecer", tags: "extra"},
    {english: "to avoid", spanish: "evitar", tags: "extra"},
    {english: "to develop", spanish: "desarrollar", tags: "extra"},
    {english: "to trade/swap", spanish: "cambiar", tags: "extra"},
    {english: "to cast/smelt", spanish: "", tags: "extra"},
    {english: "to splash/splatter", spanish: "saplicar", tags: "extra"},
    {english: "to crack", spanish: "rajar", tags: "extra"},
    {english: "to appear/showup", spanish: "aparecer", tags: "extra"},
    {english: "to avoid", spanish: "evitar", tags: "extra"},
    {english: "to support/back", spanish: "apoyar", tags: "extra"},
    {english: "to encourage/cheer on", spanish: "animar", tags: "extra"},
    {english: "to develop", spanish: "desarrollar", tags: "extra"},
    {english: "to hit/glue/paste", spanish: "pegar", tags: "extra"},
    {english: "to scare", spanish: "asustar", tags: "extra"},
    {english: "to get angry", spanish: "enfadar", tags: "extra"},
    {english: "to focus", spanish: "enfocar", tags: "extra"},
    {english: "to wine/moan/wimper", spanish: "gemir", tags: "extra"},
    {english: "to get stuck/tangled", spanish: "trabarse", tags: "extra"},
    {english: "to swell/thicken", spanish: "engrosar", tags: "extra"},
    {english: "to manage/oversee/conduct", spanish: "dirigir", tags: "extra"},
    {english: "to crash", spanish: "chocar", tags: "extra"},
    {english: "to chain/linkup", spanish: "encadenar", tags: "extra"},
    {english: "to check/prove", spanish: "conprobar", tags: "extra"},
  // la etapa, presa, estrecho, reto, 
  ];
  const vAdjectives1 = [ 
    {english: "big", spanish: "grande", german: "groß", russian: "большой"},
    {english: "small", spanish: "pequeño", german: "klein", russian: "маленький"},
    {english: "easy", spanish: "fácil", german: "einfach", russian: "..."},
    {english: "easy/light/gentle", spanish: "...", german: "...", russian: "легкий"},
    {english: "hard/heavy/solid", spanish: "...", german: "", russian: "тяжелый"},

    {english: "difficult", spanish: "difícil", german: "schwierig", russian: "трудный"},
    {english: "inside", spanish: "dentro", german: "", russian: "внутри"},
    {english: "outside", spanish: "afuera", german: "außen", russian: "..."},
    {english: "beautiful", spanish: "bonito/lindo", german: "schön", russian: "красивый"},
    {english: "ugly", spanish: "feo", german: "hässlich", russian: "уродливый"},
    {english: "new", spanish: "nuevo", german: "neu", russian: "новый"},
    {english: "old", spanish: "viejo", german: "alt", russian: "старый"},
    {english: "best", spanish: "mejor", german: "beste", russian: "лучший"},
    {english: "worst", spanish: "peor", german: "schlimmste", russian: "худший"},
    {english: "important", spanish: "importante", german: "wichtig", russian: "важный"},
    {english: "spicy", spanish: "picante/pico", german: "scharf", russian: "острый"},
    {english: "sweet", spanish: "dulce", german: "süß", swedish: "söt", russian: "сладкий"},
    {english: "hot", spanish: "caliente", german: "heiß", russian: "горячий"},
    {english: "cold", spanish: "frío", german: "kalt", russian: "холод"},
    {english: "fast", spanish: "rápido", german: "schnell", russian: "быстрый"},
    {english: "slow", spanish: "lento", german: "langsam", russian: "медленный"},
    {english: "expensive", spanish: "caro", german: "teuer", russian: "дорогой"},
    {english: "cheap", spanish: "barato", german: "billig", russian: "дешевый"},
  ];
  const vAdjectives2 = [ 
    {english: "close", spanish: "cerca", german: "nah", russian: "близко"},
    {english: "far", spanish: "lejos", german: "weit", russian: "далеко"},
    {english: "hard/solid", spanish: "duro", german: "", russian: "..."},
    {english: "heavy", spanish: "pesado", german: "schwer", russian: "..."},
    {english: "soft", spanish: "suave", german: "weich", russian: "мягкий"},
    {english: "lightweight", spanish: "", german: "", russian: ""},
    {english: "wet", spanish: "mojado", german: "nass", russian: ""},

    {english: "high", spanish: "alto", german: "", russian: "высокий"},
    {english: "low", spanish: "bajo", german: "", russian: "низкий"},

    {english: "happy", spanish: "feliz", german: "glücklich", russian: "счастлив"},
    {english: "sad", spanish: "triste", german: "traurig", russian: "Грустно"},
    {english: "mad", spanish: "enojado", german: "verägert", russian: "Злюсь"},
    {english: "busy", spanish: "ocupado", german: "beschäftigt", russian: "занят"},
    {english: "excited", spanish: "emocionado", german: "...", russian: "..."},

    {english: "poisonous", spanish: "venenoso", german: "giftig", russian: "ядовитый", tags: "extra"},
    {english: "sharp", spanish: "filoso", tags: "extra"},

    // {english: "afraid", spanish: "", german: "", russian: ""},
    // {english: "relaxed", spanish: "relajado", german: "", russian: ""},
  ];

  const vOther = [
    {english: "school", spanish: "la escuela", german: "die Schule", russian: "школа", arabic: "مَدْرَسة"},
    {english: "smoke", spanish: "el humo", german: "der Rauch", russian: "дым"},
    {english: "powder/dust", spanish: "el polvo", german: "...", russian: "пыль"},
    {english: "hole", spanish: "el agujero", german: "", russian: ""},
    {english: "war", spanish: "la guerra", german: "der Krieg", russian: "война"},
    {english: "prison/jail", spanish: "el carcel", german: "das Gefängnis", russian: "тюрьма"},
    {english: "computer", spanish: "la computadora", german: "der Computer", swedish: "en dator", russian: "компьютер", arabic: "حاسوب"},
    {english: "screen", spanish: "la pantalla", german: "der Bildschirm", swedish: "en skärm", russian: "экран"},
    {english: "message", spanish: "el mensaje", german: "die Nachricht", swedish: "ett meddelande", russian: "сообщение"},
    {english: "wire/cord", spanish: "la cuerda", german: "das Seil", swedish: "en sladd", russian: "шнур"},
    {english: "speaker", spanish: "la bocina", german: "der Lautsprecher", swedish: "högtalare", russian: "спикер"},
    {english: "drumset", spanish: "la batería", german: "ein Schlagzeug", swedish: "en trumma", russian: "барабан"},
    {english: "backpack", spanish: "la mochila", german: "der Rucksack", swedish: "en ryggsäck", russian: "рюкзак"},
    {english: "ray, stripe, line", spanish: "la raya", german: "", swedish: "", russian: ""},
    {english: "gut, insides, intestine", spanish: "la tripa", german: "", swedish: "", russian: ""},

    // Extra
    {english: "helmet", spanish: "el casco", german: "der Helm", swedish: "en hjälm", russian: "шлем", tags: "extra"},
    {english: "tool", spanish: "la herramienta", german: "das Werkzeug", swedish: "ett verktyg", russian: "инструмент", tags: "extra"},
    {english: "hammer", spanish: "el martillo", german: "der Hammer", swedish: "en hammare", russian: "молот", tags: "extra"},
    {english: "pencil/pen", spanish: "...", german: "...", swedish: "en penna", russian: "...", tags: "extra"},
    {english: "pencil", spanish: "el lápiz", german: "der Bleistift", swedish: "...", russian: "карандаш", tags: "extra"},
    {english: "pen", spanish: "...", german: "der Stift", swedish: "...", russian: "ручка", tags: "extra", arabic: "قَلَم"},

  ];
  const vMaterials= [
    {english: "wood", spanish: "la madera", german: "Holz", russian: "..."},
    {english: "metal", spanish: "el metal", german: "Metall", russian: "металл"},
    {english: "plastic", spanish: "el plástico", german: "Plastik", russian: "пластик"},
    {english: "rubber", spanish: "la goma", german: "Gummi", russian: "резина"},
    {english: "stone/brick", spanish: "...", german: "Stein", russian: "..."},

    // Extra
    {english: "brick", spanish: "el ladrillo", german: "...", russian: "кирпич", tags: "extra"},
  ];


const VocabDatabase = [
{name: "Main", 
    arr: [
        {name: "Main1", arr: vMain, type: "other"},
        {name: "Main2", arr: vMain2, type: "noun"},
        {name: "Pronouns", arr: vPronouns, type: "other"},
        {name: "Numbers", arr: vNumbers, type: "other"},
        {name: "Colors",  arr: vColors, type: "adjective"},
        {name: "Fruit",  arr: vFruit, type: "noun"},
        {name: "Time",  arr: vTime, type: "noun"},
        {name: "Room",  arr: vRoom, type: "noun"},
        {name: "Food",  arr: vFood, type: "noun"},
        {name: "Other",  arr: vOther, type: "noun"},
        {name: "Materials",  arr: vMaterials, type: "noun"},
    ]
},
{name: "People", 
    arr: [
        {name: "Family",  arr: vFamily, type: "noun"},
        {name: "Body",  arr: vBody, type: "noun"},
        {name: "Clothes",  arr: vClothes, type: "noun"},
        {name: "World",  arr: vWorld, type: "noun"},
        {name: "Language",  arr: vLanguage, type: "noun"},
    ]
},
{name: "Nature", 
    arr: [
        {name: "Animals",  arr: vAnimals, type: "noun"},
        {name: "Landscape",  arr: vLandscape, type: "noun"},
        {name: "Weather",  arr: vWeather, type: "noun"},
    ]
},
{name: "Verbs", 
    arr: [
        {name: "Verbs1",  arr: vVerbs1, type: "verb"},
        {name: "Verbs2",  arr: vVerbs2, type: "verb"},
        {name: "Verbs3",  arr: vVerbs3, type: "verb"},
        {name: "Adjectives1",  arr: vAdjectives1, desc: `All the words...`, type: "adjective"},
        {name: "Adjectives2",  arr: vAdjectives2, desc: ``, type: "adjective"},
    ]
},
];
// german: in, auf, an, mit, von, zu, aus...


// Global Variables (Null/Empty checking) ---------------------
if(!localStorage.getItem("llshowextra")){ localStorage.setItem("llshowextra", "false")}
if(!localStorage.getItem("currentlang")){ localStorage.setItem("currentlang", "spanish")}
if(!localStorage.getItem("currentvocablesson")){ localStorage.setItem("currentvocablesson", "All Words")}
console.log(localStorage);


// Functions ---------------------
let currentlang = getcurrentlangobj().name;
let showextrawords = false;
if(localStorage.getItem("llshowextra") == "true"){
    showextrawords = true;
}

// all/null(includes nouns), verb, 
function getAllWords(par){
  let temp = [];
  VocabDatabase.forEach(section => {
    section.arr.forEach(lesn => {
        lesn.arr.forEach(wrd => {

          // if word exists / not null
          if(wrd[currentlang] && wrd[currentlang] != "..."){
            if(!par){ temp.push(wrd); } // include everything if null/not specified
            // if want verb or is null
            else if(par.includes("verb") && lesn.type.includes("verb")){ temp.push(wrd); }
            // if wants adjective
            else if(par.includes("adjective") && lesn.type.includes("adjective")){ temp.push(wrd); }
            // if wants noun
            else if(par.includes("noun") && lesn.type.includes("noun")){ temp.push(wrd); }
          }
          
          // filter out intermediate words if option turned off
          if(localStorage.getItem('llshowextra') != "true"){
            temp = temp.filter(function (t) { 
              return t.tags == undefined || !t.tags.includes("extra"); 
            });
          }
          
        })
    })
  });
  return temp; //returns all word objs in all lessons
}

function getAllWordsLesson(){
  let aw = {name: "All Words", arr: getAllWords()};
  return aw;
}




function getcurrentlangobj(){
    let aaaaaa = languagedatabase[0];
    // find lesson
    languagedatabase.forEach(lll => {
        if(lll.name.toLowerCase() == localStorage.getItem('currentlang').toLowerCase()){aaaaaa = lll}
    });
    return aaaaaa;
}

// Get VOCAB Lesson {name: Food, arr: [{english: food, spanish: "comida"...}]}
function getcurrentvocablesson(){
    let bbbbb = getAllWordsLesson();
    // Find lesson by name
    VocabDatabase.forEach(cat => {
        cat.arr.forEach(les => {
        if(les.name.toLowerCase() == localStorage.getItem('currentvocablesson').toLowerCase()){bbbbb = les};
    });
    })

    let newarr = [];

    // Filter Empty/Null/"..." words
      bbbbb.arr.forEach(bb => {
        if(bb[currentlang] && bb[currentlang] != "..."){
          newarr.push(bb);
        }
      })
    
    // Filter out Extra/Intermediate words if turned off
    if(localStorage.getItem('llshowextra') != "true"){
      let newarr2 = [];
      newarr.forEach(bb => {
        if(!bb.tags || !bb.tags.includes("extra")){
          newarr2.push(bb);
        }
      });
      newarr = newarr2;
    }
    let newbbbbb = {name: bbbbb.name, arr: newarr};
    return newbbbbb;
}

// Need to have <script src="https://code.responsivevoice.org/responsivevoice.js?key=j1WhBeQz"></script>
function getapivoice(){
    let currentlang = getcurrentlangobj().name;
    if(currentlang == "german"){currentlang = "deutsch"};
    if(currentlang == "hawaiian"){currentlang = "indonesian"};
let r = "";


responsiveVoice.getVoices().forEach(i => {
    if(i.name.toLowerCase().includes(currentlang)){r = i.name;}
})
return r;
}

function getcurrentlessonarr(){
let clssn = localStorage.getItem("currentgrammarlesson");
let r = getcurrentlangobj().lessonsobjs[0];

getcurrentlangobj().lessonsobjs.forEach(les => {
    if(les.name == clssn) {r = les.lesson}
})

console.log(`returned ${r}`);
return r;
}
// console.log(responsiveVoice.getVoices())
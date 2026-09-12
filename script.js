/* ARASH ENGLISH — content + interactions */
const grammarLessons = [
  {level:"A1",title:"To be: am / is / are",summary:"Use be to talk about identity, age, jobs, feelings and states.",rule:"I am • you/we/they are • he/she/it is",examples:[["I am an engineer.","من مهندس هستم."],["She is tired today.","او امروز خسته است."],["Are they at home?","آیا آنها در خانه هستند؟"]],note:"Negative: am not / isn't / aren't. Question: move am/is/are before the subject."},
  {level:"A1",title:"Subject pronouns & possessives",summary:"Choose the correct subject, object and possessive form.",rule:"I / me / my • he / him / his • she / her / her • they / them / their",examples:[["This is my book. Give it to me.","این کتاب من است. آن را به من بده."],["Their car is new.","ماشین آنها جدید است."]],note:"A possessive adjective comes before a noun: my phone, her job, their house."},
  {level:"A1",title:"Present Simple",summary:"Talk about routines, facts, habits and repeated actions.",rule:"I/you/we/they work • he/she/it works",examples:[["I usually drink coffee in the morning.","من معمولاً صبح قهوه می‌نوشم."],["He works in a hospital.","او در یک بیمارستان کار می‌کند."],["Do you study English every day?","آیا هر روز انگلیسی می‌خوانی؟"]],note:"Use does/doesn't with he, she and it. The main verb returns to its base form after does."},
  {level:"A1",title:"Present Continuous",summary:"Describe actions happening now or around the present time.",rule:"am/is/are + verb-ing",examples:[["I am studying English now.","من الان در حال مطالعه انگلیسی هستم."],["They are waiting for the bus.","آنها منتظر اتوبوس هستند."]],note:"Common time words: now, right now, at the moment, today."},
  {level:"A1",title:"There is / There are",summary:"Say that something exists or is located somewhere.",rule:"There is + singular • There are + plural",examples:[["There is a book on the desk.","یک کتاب روی میز است."],["There are two windows in my room.","دو پنجره در اتاق من وجود دارد."]],note:"Question: Is there...? / Are there...? Negative: There isn't / There aren't."},
  {level:"A1",title:"Have / Has",summary:"Talk about possession, relationships and characteristics.",rule:"I/you/we/they have • he/she/it has",examples:[["I have two brothers.","من دو برادر دارم."],["She has a new laptop.","او یک لپ‌تاپ جدید دارد."]],note:"For questions in simple present, use do/does: Does she have a car?" },
  {level:"A1",title:"Past Simple: be",summary:"Talk about states and situations in the past.",rule:"I/he/she/it was • you/we/they were",examples:[["I was busy yesterday.","من دیروز مشغول بودم."],["We were at home last night.","ما دیشب در خانه بودیم."],["Were you tired?","آیا خسته بودی؟"]],note:"Negative: wasn't / weren't. Question: Was/Were + subject?" },
  {level:"A1",title:"Past Simple: regular verbs",summary:"Describe completed actions in the past.",rule:"verb + -ed (regular verbs)",examples:[["I watched a movie last night.","من دیشب یک فیلم تماشا کردم."],["She visited her friend.","او به دیدن دوستش رفت."],["Did you call him?","آیا به او زنگ زدی؟"]],note:"After did/didn't, use the base verb: Did you go? NOT Did you went?" },
  {level:"A1",title:"Past Simple: irregular verbs",summary:"Learn common past forms such as went, saw, bought and made.",rule:"go → went • see → saw • buy → bought • make → made",examples:[["I went to the gym yesterday.","من دیروز به باشگاه رفتم."],["He bought a new phone.","او یک تلفن جدید خرید."]],note:"Irregular verbs must be learned individually. Use did for questions and negatives."},
  {level:"A1",title:"Future with be going to",summary:"Talk about plans and intentions.",rule:"am/is/are + going to + base verb",examples:[["I am going to study tonight.","من امشب قصد دارم درس بخوانم."],["They are going to travel next week.","آنها هفته آینده قصد دارند سفر کنند."]],note:"Use going to when you already have a plan or intention."},
  {level:"A1",title:"Can / Can't",summary:"Talk about ability, permission and possibility.",rule:"can + base verb • can't + base verb",examples:[["I can speak English.","من می‌توانم انگلیسی صحبت کنم."],["Can I open the window?","می‌توانم پنجره را باز کنم؟"]],note:"Never add -s or to after can: She can swim. NOT She can swims / can to swim."},
  {level:"A1",title:"Countable & uncountable nouns",summary:"Choose a/an, some, any, much, many and common quantity words.",rule:"many + countable • much + uncountable • some/any + both",examples:[["I have many books.","من کتاب‌های زیادی دارم."],["We don't have much time.","ما زمان زیادی نداریم."],["Would you like some water?","کمی آب می‌خواهی؟"]],note:"Information, advice, money and furniture are normally uncountable."},
  {level:"A1",title:"Comparatives & superlatives",summary:"Compare two or more people or things.",rule:"small → smaller → the smallest • interesting → more interesting",examples:[["This book is cheaper than that one.","این کتاب از آن یکی ارزان‌تر است."],["This is the most interesting lesson.","این جالب‌ترین درس است."]],note:"Use than after a comparative when naming the second item."},
  {level:"A2",title:"Present Perfect",summary:"Connect a past action or experience with the present.",rule:"have/has + past participle",examples:[["I have finished my work.","من کارم را تمام کرده‌ام."],["She has visited Turkey twice.","او دو بار از ترکیه دیدن کرده است."],["Have you ever tried sushi?","آیا تا به حال سوشی امتحان کرده‌ای؟"]],note:"Common words: ever, never, already, just, yet, recently, since, for."},
  {level:"A2",title:"Present Perfect vs Past Simple",summary:"Know when a finished past time needs the past simple.",rule:"Present perfect = unfinished/unspecified time • past simple = finished time",examples:[["I have seen that film.","من آن فیلم را دیده‌ام."],["I saw it last Friday.","من جمعه گذشته آن را دیدم."]],note:"Do not use present perfect with finished time expressions such as yesterday, last year or in 2020."},
  {level:"A2",title:"Past Continuous",summary:"Describe an action in progress at a particular past moment.",rule:"was/were + verb-ing",examples:[["I was driving when you called.","وقتی زنگ زدی، داشتم رانندگی می‌کردم."],["They were sleeping at midnight.","آنها نیمه‌شب خواب بودند."]],note:"Often used with when/while to give background to another past action."},
  {level:"A2",title:"Will vs going to",summary:"Distinguish spontaneous decisions, predictions and plans.",rule:"will + base verb • be going to + base verb",examples:[["I'll help you with that.","در آن مورد کمکت می‌کنم."],["Look at those clouds. It's going to rain.","به آن ابرها نگاه کن. قرار است باران ببارد."]],note:"Will is common for decisions made at the moment of speaking; going to is common for prior plans and evidence-based predictions."},
  {level:"A2",title:"First Conditional",summary:"Talk about a real or likely future condition and result.",rule:"If + present simple, will + base verb",examples:[["If it rains, we'll stay home.","اگر باران ببارد، خانه می‌مانیم."],["If you study regularly, you will improve.","اگر مرتب درس بخوانی، پیشرفت خواهی کرد."]],note:"Do not normally use will directly after if in the first conditional."},
  {level:"A2",title:"Modal verbs: should / must / have to",summary:"Give advice, express obligation and explain rules.",rule:"should = advice • must = strong obligation • have to = external necessity",examples:[["You should practice every day.","باید هر روز تمرین کنی."],["You must wear a seat belt.","باید کمربند ایمنی ببندی."],["I have to leave early tomorrow.","من باید فردا زود بروم."]],note:"Should is softer than must. Have to often describes a rule or situation that requires something."},
  {level:"A2",title:"Adverbs of frequency & word order",summary:"Place always, usually, often, sometimes and never correctly.",rule:"before main verb • after be",examples:[["I usually study at night.","من معمولاً شب‌ها مطالعه می‌کنم."],["She is always polite.","او همیشه مؤدب است."]],note:"Sometimes can move: Sometimes I walk to work. / I sometimes walk to work."},
  {level:"A2",title:"Gerunds & infinitives",summary:"Use -ing or to + verb after common verbs and expressions.",rule:"enjoy + -ing • want + to + verb • need + to + verb",examples:[["I enjoy learning languages.","من از یادگیری زبان‌ها لذت می‌برم."],["I want to improve my speaking.","می‌خواهم مهارت صحبت کردنم را بهتر کنم."]],note:"Learn the pattern with the verb: enjoy doing, decide to do, want to do."},
  {level:"A2",title:"Relative clauses: who / which / that",summary:"Add information about people and things.",rule:"who = people • which = things • that = people/things in defining clauses",examples:[["The man who lives next door is a doctor.","مردی که همسایه ماست پزشک است."],["This is the book that I told you about.","این همان کتابی است که درباره‌اش به تو گفتم."]],note:"These clauses help you combine two simple ideas into one clearer sentence."},
  {level:"A2",title:"Too / enough",summary:"Express more or less than is necessary.",rule:"too + adjective • adjective + enough • enough + noun",examples:[["This bag is too heavy.","این کیف بیش از حد سنگین است."],["The room is big enough.","اتاق به اندازه کافی بزرگ است."],["We have enough time.","ما زمان کافی داریم."]],note:"Too usually suggests a problem; enough means the required amount or degree has been reached."},
  {level:"A2",title:"Question forms & indirect questions",summary:"Build accurate questions and polite indirect questions.",rule:"Where does he live? • Could you tell me where he lives?",examples:[["What time does the train leave?","قطار چه ساعتی حرکت می‌کند؟"],["Could you tell me where the station is?","می‌شود به من بگویید ایستگاه کجاست؟"]],note:"In indirect questions, use statement word order: where the station is, NOT where is the station."}
];

const vocabulary = [
["achieve","verb","دست یافتن، به دست آوردن","She worked hard to achieve her goal.","او سخت تلاش کرد تا به هدفش برسد.","Goals"],
["advice","noun","توصیه، نصیحت","Can you give me some advice?","می‌توانی کمی به من توصیه کنی؟","Communication"],
["afford","verb","از عهده هزینه برآمدن","I can't afford a new laptop right now.","الان توان خرید یک لپ‌تاپ جدید را ندارم.","Money"],
["although","conjunction","اگرچه","Although it was late, we continued working.","اگرچه دیر شده بود، به کار ادامه دادیم.","Communication"],
["appointment","noun","قرار ملاقات","I have a doctor's appointment tomorrow.","فردا وقت دکتر دارم.","Daily life"],
["avoid","verb","اجتناب کردن","Try to avoid unnecessary stress.","سعی کن از استرس غیرضروری دوری کنی.","Health"],
["behavior","noun","رفتار","His behavior was polite and professional.","رفتار او مؤدبانه و حرفه‌ای بود.","People"],
["benefit","noun","مزیت، فایده","Regular exercise has many benefits.","ورزش منظم فواید زیادی دارد.","Health"],
["career","noun","مسیر شغلی","She wants to build a successful career.","او می‌خواهد یک مسیر شغلی موفق بسازد.","Work"],
["choice","noun","انتخاب","You have a difficult choice to make.","انتخاب سختی برای انجام دادن داری.","Daily life"],
["communicate","verb","ارتباط برقرار کردن","English helps people communicate internationally.","انگلیسی به مردم کمک می‌کند در سطح بین‌المللی ارتباط برقرار کنند.","Communication"],
["compare","verb","مقایسه کردن","Don't compare yourself with other people.","خودت را با دیگران مقایسه نکن.","People"],
["confident","adjective","بااعتمادبه‌نفس","She feels more confident when she speaks English.","وقتی انگلیسی صحبت می‌کند، اعتمادبه‌نفس بیشتری دارد.","People"],
["consider","verb","در نظر گرفتن","Please consider all the options.","لطفاً همه گزینه‌ها را در نظر بگیر.","Communication"],
["convenient","adjective","مناسب، راحت","Online lessons are convenient for busy people.","درس‌های آنلاین برای افراد پرمشغله مناسب هستند.","Daily life"],
["decision","noun","تصمیم","It was a difficult decision.","تصمیم سختی بود.","Work"],
["develop","verb","توسعه دادن، رشد دادن","I want to develop my speaking skills.","می‌خواهم مهارت صحبت کردنم را توسعه دهم.","Learning"],
["environment","noun","محیط","We should protect the environment.","باید از محیط زیست محافظت کنیم.","World"],
["experience","noun","تجربه","It was a valuable experience.","تجربه ارزشمندی بود.","Work"],
["improve","verb","بهبود دادن","Practice can improve your pronunciation.","تمرین می‌تواند تلفظت را بهتر کند.","Learning"],
["increase","verb","افزایش دادن/یافتن","The price may increase next month.","ممکن است قیمت ماه آینده افزایش یابد.","Money"],
["independent","adjective","مستقل","Living alone made him more independent.","تنهایی زندگی کردن او را مستقل‌تر کرد.","People"],
["instead","adverb","در عوض","We stayed home instead of going out.","به جای بیرون رفتن، در خانه ماندیم.","Communication"],
["knowledge","noun","دانش","Reading gives you useful knowledge.","مطالعه به تو دانش مفیدی می‌دهد.","Learning"],
["manage","verb","موفق شدن از عهده چیزی برآمدن","I managed to finish the project on time.","موفق شدم پروژه را به‌موقع تمام کنم.","Work"],
["necessary","adjective","ضروری","A passport is necessary for international travel.","گذرنامه برای سفر بین‌المللی ضروری است.","Travel"],
["opportunity","noun","فرصت","This job is a great opportunity.","این شغل فرصت بزرگی است.","Work"],
["patient","adjective","صبور","You need to be patient when learning a language.","هنگام یادگیری زبان باید صبور باشی.","People"],
["prefer","verb","ترجیح دادن","I prefer tea to coffee.","من چای را به قهوه ترجیح می‌دهم.","Daily life"],
["prepare","verb","آماده کردن","I'm preparing for my English exam.","دارم برای امتحان انگلیسی‌ام آماده می‌شوم.","Learning"],
["probably","adverb","احتمالاً","She will probably arrive soon.","او احتمالاً به‌زودی می‌رسد.","Communication"],
["purpose","noun","هدف، منظور","What is the purpose of this meeting?","هدف این جلسه چیست؟","Work"],
["realize","verb","متوجه شدن","I suddenly realized my mistake.","ناگهان متوجه اشتباهم شدم.","Communication"],
["receive","verb","دریافت کردن","Did you receive my email?","ایمیل من را دریافت کردی؟","Communication"],
["reduce","verb","کاهش دادن","Walking can reduce stress.","پیاده‌روی می‌تواند استرس را کاهش دهد.","Health"],
["relationship","noun","رابطه","Good communication is important in a relationship.","ارتباط خوب در یک رابطه مهم است.","People"],
["require","verb","نیاز داشتن، مستلزم بودن","This job requires good communication skills.","این شغل به مهارت‌های ارتباطی خوب نیاز دارد.","Work"],
["responsible","adjective","مسئول","You are responsible for your own progress.","تو مسئول پیشرفت خودت هستی.","People"],
["result","noun","نتیجه","Hard work usually brings good results.","سخت‌کوشی معمولاً نتایج خوبی به همراه دارد.","Learning"],
["schedule","noun","برنامه زمانی","My schedule is busy this week.","برنامه زمانی من این هفته شلوغ است.","Daily life"],
["solution","noun","راه‌حل","We need to find a solution to the problem.","باید برای مشکل یک راه‌حل پیدا کنیم.","Work"],
["suggest","verb","پیشنهاد دادن","I suggest taking a short break.","پیشنهاد می‌کنم یک استراحت کوتاه داشته باشیم.","Communication"],
["support","verb","حمایت کردن","My friends support me when I need help.","دوستانم وقتی به کمک نیاز دارم از من حمایت می‌کنند.","People"],
["typical","adjective","معمول، رایج","This is a typical breakfast in the region.","این یک صبحانه معمول در این منطقه است.","Daily life"],
["valuable","adjective","ارزشمند","Your time is valuable.","زمان تو ارزشمند است.","People"],
["variety","noun","تنوع","The course offers a variety of activities.","این دوره تنوعی از فعالیت‌ها ارائه می‌دهد.","Learning"],
["weather","noun","آب‌وهوا","The weather is getting colder.","هوا دارد سردتر می‌شود.","World"],
["wonder","verb","تعجب کردن، با خود فکر کردن","I wonder why he is late.","با خودم فکر می‌کنم چرا او دیر کرده است.","Communication"],
["accurate","adjective","دقیق","Try to give an accurate answer.","سعی کن پاسخ دقیقی بدهی.","Learning"],
["common","adjective","رایج، متداول","This is a common mistake.","این یک اشتباه رایج است.","Learning"],
["especially","adverb","به‌خصوص","I like English, especially speaking.","من انگلیسی را دوست دارم، به‌خصوص صحبت کردن را.","Learning"],
["finally","adverb","سرانجام، بالاخره","We finally arrived at the hotel.","بالاخره به هتل رسیدیم.","Travel"],
["likely","adjective","محتمل","It is likely to rain tonight.","احتمال دارد امشب باران ببارد.","World"],
["local","adjective","محلی","We visited a local market.","از یک بازار محلی دیدن کردیم.","Travel"],
["modern","adjective","مدرن","They live in a modern apartment.","آنها در یک آپارتمان مدرن زندگی می‌کنند.","Daily life"],
["ordinary","adjective","معمولی","It looked like an ordinary day.","به نظر می‌رسید یک روز معمولی باشد.","Daily life"],
["recently","adverb","اخیراً","I have recently started learning Spanish.","اخیراً یادگیری اسپانیایی را شروع کرده‌ام.","Learning"],
["serious","adjective","جدی","This is a serious problem.","این یک مشکل جدی است.","Work"],
["successful","adjective","موفق","She is successful because she works consistently.","او موفق است چون به طور مداوم تلاش می‌کند.","Work"],
["traffic","noun","ترافیک","There was heavy traffic this morning.","امروز صبح ترافیک سنگینی بود.","Travel"],
["trip","noun","سفر","We are planning a short trip.","داریم برای یک سفر کوتاه برنامه‌ریزی می‌کنیم.","Travel"],
["usual","adjective","معمول","I had my usual breakfast.","صبحانه معمولم را خوردم.","Daily life"],
["waste","verb","هدر دادن","Don't waste your time.","وقتت را هدر نده.","Learning"],
["comfortable","adjective","راحت","These shoes are comfortable.","این کفش‌ها راحت هستند.","Daily life"],
["crowded","adjective","شلوغ","The bus was very crowded.","اتوبوس خیلی شلوغ بود.","Travel"],
["delicious","adjective","خوشمزه","The food was delicious.","غذا خوشمزه بود.","Daily life"],
["expensive","adjective","گران","That restaurant is too expensive for me.","آن رستوران برای من بیش از حد گران است.","Money"],
["healthy","adjective","سالم","A balanced diet is healthy.","یک رژیم غذایی متعادل سالم است.","Health"],
["journey","noun","سفر، مسیر","The journey took three hours.","سفر سه ساعت طول کشید.","Travel"],
["luggage","noun","چمدان، بار سفر","Where can I leave my luggage?","کجا می‌توانم چمدانم را بگذارم؟","Travel"],
["meeting","noun","جلسه","I have an important meeting at ten.","ساعت ده یک جلسه مهم دارم.","Work"],
["project","noun","پروژه","We finished the project yesterday.","دیروز پروژه را تمام کردیم.","Work"],
["research","noun","تحقیق، پژوهش","He is doing research on language learning.","او درباره یادگیری زبان تحقیق می‌کند.","Learning"],
["skill","noun","مهارت","Listening is an important skill.","گوش دادن یک مهارت مهم است.","Learning"],
["strength","noun","نقطه قوت، قدرت","Patience is one of her strengths.","صبوری یکی از نقاط قوت اوست.","People"],
["weakness","noun","نقطه ضعف","Vocabulary used to be my weakness.","واژگان قبلاً نقطه ضعف من بود.","Learning"],
["adventure","noun","ماجراجویی","Travel can be a great adventure.","سفر می‌تواند یک ماجراجویی عالی باشد.","Travel"],
["challenge","noun","چالش","Learning a language is a challenge, but it is rewarding.","یادگیری زبان یک چالش است، اما ارزشمند است.","Learning"],
["choice","noun","انتخاب","Making the right choice takes time.","انتخاب درست زمان می‌برد.","Daily life"],
["effort","noun","تلاش","Your effort will make a difference.","تلاش تو تفاوت ایجاد خواهد کرد.","Learning"],
["focus","verb","تمرکز کردن","Try to focus on the main idea.","سعی کن روی ایده اصلی تمرکز کنی.","Learning"],
["goal","noun","هدف","My goal is to speak English naturally.","هدف من این است که طبیعی انگلیسی صحبت کنم.","Learning"],
["habit","noun","عادت","Reading every day is a good habit.","هر روز مطالعه کردن عادت خوبی است.","Learning"],
["mistake","noun","اشتباه","Making mistakes is part of learning.","اشتباه کردن بخشی از یادگیری است.","Learning"],
["progress","noun","پیشرفت","I can see real progress in my English.","می‌توانم پیشرفت واقعی در انگلیسی‌ام ببینم.","Learning"],
["practice","noun","تمرین","Regular practice is more important than speed.","تمرین منظم از سرعت مهم‌تر است.","Learning"],
["pronunciation","noun","تلفظ","Clear pronunciation makes communication easier.","تلفظ واضح ارتباط را آسان‌تر می‌کند.","Learning"],
["review","verb","مرور کردن","Review the new words before sleeping.","کلمات جدید را قبل از خواب مرور کن.","Learning"],
["sentence","noun","جمله","Write one sentence with each new word.","با هر کلمه جدید یک جمله بنویس.","Learning"],
["topic","noun","موضوع","Today's topic is travel.","موضوع امروز سفر است.","Learning"],
["understand","verb","متوجه شدن","I understand the rule now.","حالا قانون را متوجه می‌شوم.","Learning"],
["useful","adjective","مفید","This website has useful lessons.","این وب‌سایت درس‌های مفیدی دارد.","Learning"],
["actually","adverb","در واقع","I actually enjoy grammar.","در واقع من از گرامر لذت می‌برم.","Communication"],
["probably","adverb","احتمالاً","I'll probably study after dinner.","احتمالاً بعد از شام مطالعه می‌کنم.","Daily life"],
["quiet","adjective","ساکت","I need a quiet place to study.","برای مطالعه به یک جای ساکت نیاز دارم.","Daily life"],
["available","adjective","در دسترس، موجود","Is this room available?","آیا این اتاق در دسترس است؟","Daily life"],
["necessary","adjective","ضروری","Is it necessary to bring a passport?","آیا آوردن گذرنامه ضروری است؟","Travel"]
];

const questions = [
 {q:"She usually _____ to work by bus, but today she _____ from home.",o:["goes / is working","is going / works","go / works","goes / works"],a:0,e:"Usually signals the present simple; today describes a temporary situation, so use present continuous."},
 {q:"I _____ this book last week, but I _____ it yet.",o:["bought / haven't finished","have bought / didn't finish","bought / didn't finish","have bought / haven't finished"],a:0,e:"Last week is a finished time → past simple. Yet with an unfinished present result → present perfect."},
 {q:"If you _____ regularly, your English _____ improve.",o:["practice / will","will practice / will","practice / would","practiced / will"],a:0,e:"First conditional: if + present simple, will + base verb."},
 {q:"Could you tell me where _____?",o:["is the station","the station is","does the station be","the station"],a:1,e:"Indirect questions use statement word order: where the station is."},
 {q:"We don't have _____ time, but we have _____ useful ideas.",o:["many / much","much / some","some / many","a few / much"],a:1,e:"Time is uncountable → much. Ideas are countable plural → some is natural here."},
 {q:"He _____ in London since 2022.",o:["lives","lived","has lived","is living"],a:2,e:"Since + a starting point continuing to now normally takes the present perfect."},
 {q:"When I called her, she _____ dinner.",o:["cooked","was cooking","has cooked","is cooking"],a:1,e:"An action in progress at a specific past moment → past continuous."},
 {q:"You _____ wear a helmet here. It's the law.",o:["should","might","must","would"],a:2,e:"A legal rule is a strong obligation → must."},
 {q:"This is the restaurant _____ we had dinner last year.",o:["who","where","which who","what"],a:1,e:"Where is used for places: the restaurant where we had dinner."},
 {q:"I can't afford _____ a new car this year.",o:["buy","buying","to buy","bought"],a:2,e:"Afford is followed by to + verb: afford to buy."},
 {q:"This bag is _____ heavy for me to carry.",o:["enough","too","very enough","so enough"],a:1,e:"Too + adjective expresses more than is manageable or necessary."},
 {q:"Have you _____ visited a country where English is the main language?",o:["ever","last year","yesterday","ago"],a:0,e:"Ever is common in present perfect questions about life experience."},
 {q:"There _____ two mistakes in your answer, but there _____ a good idea too.",o:["is / are","are / is","were / are","are / are"],a:1,e:"Two mistakes is plural → there are. A good idea is singular → there is."},
 {q:"I enjoy _____ new words, but I don't always remember _____ them.",o:["to learn / using","learning / to use","learn / use","learning / use"],a:1,e:"Enjoy takes -ing; remember + to use means remember an intended action."},
 {q:"She is _____ person in our team.",o:["the more organized","most organized","the most organized","more organized"],a:2,e:"For a superlative with a long adjective: the most + adjective."},
 {q:"We _____ go out tonight. We have already made a plan.",o:["are going to","will to","going to","are go"],a:0,e:"A prior plan → be going to + base verb."},
 {q:"He doesn't _____ coffee after 6 p.m.",o:["drinks","drinking","drink","to drink"],a:2,e:"After does/doesn't, the main verb is in the base form."},
 {q:"The woman _____ helped me was very kind.",o:["which","who","where","what"],a:1,e:"Who refers to people in a relative clause."},
 {q:"I was tired, _____ I finished the report before leaving.",o:["because","but","although of","so that"],a:1,e:"But contrasts two ideas: tired, but finished the report."},
 {q:"We have _____ information to make a decision.",o:["enough","enough of","many","a few"],a:0,e:"Enough can come before an uncountable noun: enough information."},
 {q:"I _____ him yesterday, so I know he is fine.",o:["have called","called","have been calling","call"],a:1,e:"Yesterday is a finished past time → past simple."},
 {q:"She _____ never _____ sushi before.",o:["has / tried","did / try","is / trying","was / tried"],a:0,e:"Present perfect: has + past participle, with never."},
 {q:"You look tired. You _____ take a short break.",o:["mustn't","should","don't have","would"],a:1,e:"Should is used for advice."},
 {q:"They _____ for the bus for twenty minutes.",o:["wait","waited","have been waiting","are wait"],a:2,e:"An action that started in the past and continues now can use present perfect continuous; at A2, recognize have been + -ing."},
 {q:"I _____ my keys. Have you seen them?",o:["lose","lost","have lost","was losing"],a:2,e:"The present result matters now (the keys are still missing) → present perfect."},
 {q:"Although the test was difficult, I _____ it.",o:["passed","have pass","passing","was pass"],a:0,e:"A completed event in a finished situation → past simple."},
 {q:"How _____ people are coming to the meeting?",o:["much","many","any","a little"],a:1,e:"People are countable plural → many."},
 {q:"I'd rather stay home _____ go out tonight.",o:["than","to","instead","from"],a:0,e:"The fixed pattern is would rather + base verb + than + base verb."},
 {q:"My brother is good _____ fixing computers.",o:["to","at","in","for"],a:1,e:"The fixed expression is good at + noun or -ing."},
 {q:"I haven't finished the exercise _____.",o:["already","yet","ever","last"],a:1,e:"Yet is common at the end of present perfect negative sentences and questions."},
 {q:"The project _____ by Friday if we work efficiently.",o:["will finish","will be finished","finished","is finishing"],a:1,e:"The project receives the action, so the future passive is will be finished."}
];

function header(){
  const el=document.getElementById("site-header"); if(!el)return;
  const page=location.pathname.split("/").pop()||"index.html";
  el.innerHTML=`<header class="site-header"><div class="container nav">
    <a class="logo" href="index.html"><span class="logo-mark">A</span><span>Arash English</span></a>
    <button class="menu-btn" aria-label="Open menu" id="menuBtn">☰</button>
    <nav class="nav-links" id="navLinks">
      <a href="index.html" class="${page==="index.html"?"active":""}">Home</a>
      <a href="grammar.html" class="${page==="grammar.html"?"active":""}">Grammar</a>
      <a href="vocabulary.html" class="${page==="vocabulary.html"?"active":""}">Vocabulary</a>
      <a href="exercises.html" class="${page==="exercises.html"?"active":""}">Exercises</a>
      <a href="about.html" class="${page==="about.html"?"active":""}">About Arash</a>
    </nav>
  </div></header>`;
  document.getElementById("menuBtn")?.addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
}
function footer(){
 const el=document.getElementById("site-footer"); if(!el)return;
 el.innerHTML=`<footer class="site-footer"><div class="container footer-grid"><div><b>Arash English</b><p>Learn clearly. Practice seriously. Keep improving.</p></div><div class="footer-links"><a href="grammar.html">Grammar</a><a href="vocabulary.html">Vocabulary</a><a href="exercises.html">Exercises</a><a href="about.html">About</a></div></div></footer>`;
}
function renderGrammar(level="all",term=""){
 const wrap=document.getElementById("grammarList"); if(!wrap)return;
 const t=term.toLowerCase();
 const data=grammarLessons.filter(x=>(level==="all"||x.level===level)&&(!t||`${x.title} ${x.summary} ${x.rule}`.toLowerCase().includes(t)));
 wrap.innerHTML=data.length?data.map((x,i)=>`<article class="lesson-card" tabindex="0">
   <div class="lesson-top"><span class="level-badge">${x.level}</span><span class="lesson-meta">${i+1} • Click to expand</span></div>
   <h3>${x.title}</h3><p>${x.summary}</p>
   <div class="rule-box">${x.rule}</div>
   <div class="lesson-detail"><b>Examples</b>${x.examples.map(e=>`<div class="example"><b>${e[0]}</b><span class="fa">${e[1]}</span></div>`).join("")}<p style="margin:12px 0 0"><b>Tip:</b> ${x.note}</p></div>
 </article>`).join(""):`<div class="empty-state">No grammar lesson matched your search.</div>`;
 wrap.querySelectorAll(".lesson-card").forEach(c=>c.addEventListener("click",()=>c.classList.toggle("open")));
}
function initGrammar(){
 const search=document.getElementById("grammarSearch"), filters=document.querySelectorAll("#levelFilters .filter-btn");
 if(!search)return; let level="all";
 renderGrammar(level,"");
 search.addEventListener("input",()=>renderGrammar(level,search.value));
 filters.forEach(b=>b.addEventListener("click",()=>{filters.forEach(x=>x.classList.remove("active"));b.classList.add("active");level=b.dataset.level;renderGrammar(level,search.value)}));
}
function initVocabulary(){
 const grid=document.getElementById("vocabGrid"), search=document.getElementById("vocabSearch"), select=document.getElementById("topicFilter"); if(!grid)return;
 const topics=[...new Set(vocabulary.map(x=>x[5]))].sort();
 select.innerHTML='<option value="all">All topics</option>'+topics.map(t=>`<option>${t}</option>`).join("");
 function render(){
  const t=(search.value||"").toLowerCase(), topic=select.value;
  const data=vocabulary.filter(x=>(topic==="all"||x[5]===topic)&&(!t||x.slice(0,4).join(" ").toLowerCase().includes(t)));
  grid.innerHTML=data.length?data.map(x=>`<article class="vocab-card"><div class="word-row"><span class="word">${x[0]}</span><span class="pos">${x[1]}</span></div><div class="meaning">${x[2]}</div><div class="vocab-example"><b>${x[3]}</b><div class="fa">${x[4]}</div></div></article>`).join(""):`<div class="empty-state">No vocabulary matched your search.</div>`;
 }
 search.addEventListener("input",render);select.addEventListener("change",render);render();
}
function initQuiz(){
 const area=document.getElementById("quizArea"); if(!area)return;
 area.innerHTML=questions.map((x,i)=>`<div class="question" data-answer="${x.a}">
   <span class="question-number">QUESTION ${String(i+1).padStart(2,"0")}</span>
   <h3>${x.q}</h3>
   <div class="options">${x.o.map((o,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("")}</div>
   <div class="explanation">${x.e}</div>
 </div>`).join("");
 document.getElementById("checkQuiz").addEventListener("click",()=>{
  let score=0,answered=0;
  area.querySelectorAll(".question").forEach(q=>{
    q.classList.remove("correct","incorrect"); const chosen=q.querySelector("input:checked");
    if(chosen){answered++; if(Number(chosen.value)===Number(q.dataset.answer)){score++;q.classList.add("correct")}else q.classList.add("incorrect");q.classList.add("answered");}
  });
  document.getElementById("scoreText").textContent=`${score} / ${questions.length}`;
  const result=document.getElementById("quizResult");result.classList.remove("hidden");
  result.textContent=answered<questions.length?`You scored ${score}/${questions.length}. You answered ${answered} questions. Review the unanswered questions too.`:`You scored ${score}/${questions.length}. ${score>=26?"Excellent work — your accuracy is strong.":score>=20?"Great work — review the explanations for the questions you missed.":"Good start — use the explanations, then try the challenge again."}`;
  result.scrollIntoView({behavior:"smooth",block:"nearest"});
 });
 document.getElementById("resetQuiz").addEventListener("click",()=>{
   area.querySelectorAll("input").forEach(i=>i.checked=false);area.querySelectorAll(".question").forEach(q=>q.classList.remove("correct","incorrect","answered"));
   document.getElementById("scoreText").textContent="0 / 0";document.getElementById("quizResult").classList.add("hidden");
 });
}
header();footer();initGrammar();initVocabulary();initQuiz();

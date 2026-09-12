const questions = [
  {q:"If I ___ enough time tonight, I will finish the report.", a:["have","will have","had","am having"], c:0, e:"In the first conditional, use present simple after 'if'."},
  {q:"She has lived here ___ 2022.", a:["for","since","during","from"], c:1, e:"Use 'since' with a starting point in time."},
  {q:"We ___ dinner when the phone rang.", a:["have","had","were having","are having"], c:2, e:"Use past continuous for an action in progress when another past event happened."},
  {q:"You ___ wear a seat belt. It is the law.", a:["might","shouldn't","must","could"], c:2, e:"'Must' expresses strong obligation."},
  {q:"This exercise is ___ than the first one.", a:["difficult","more difficult","most difficult","difficulty"], c:1, e:"Use 'more + adjective' with longer adjectives."},
  {q:"I don't have ___ money with me.", a:["many","a few","much","several"], c:2, e:"'Money' is uncountable, so use 'much' in this structure."},
  {q:"Have you ever ___ sushi?", a:["eat","ate","eaten","eating"], c:2, e:"Present perfect uses have/has + past participle."},
  {q:"He ___ to work by bus every day, but today he is walking.", a:["go","goes","is going","went"], c:1, e:"Use present simple for routines."},
  {q:"Could you tell me where the station ___?", a:["is","are","be","does"], c:0, e:"In an indirect question, use normal statement word order: where the station is."},
  {q:"I was tired, ___ I went to bed early.", a:["because","so","although","but"], c:1, e:"'So' introduces the result."},
  {q:"They ___ their project yet.", a:["haven't finished","didn't finish","don't finish","aren't finishing"], c:0, e:"'Yet' commonly appears with the present perfect for unfinished/recent actions."},
  {q:"There aren't ___ apples left.", a:["much","many","a little","enough of"], c:1, e:"'Apples' is countable plural, so use 'many'."},
  {q:"If you are tired, you ___ take a short break.", a:["should","mustn't","wouldn't","can't"], c:0, e:"'Should' is used for advice."},
  {q:"I ___ this book last week.", a:["have bought","buy","bought","am buying"], c:2, e:"A finished time in the past ('last week') takes past simple."},
  {q:"Which sentence is correct?", a:["She don't like coffee.","She doesn't likes coffee.","She doesn't like coffee.","She not likes coffee."], c:2, e:"After doesn't, use the base form: doesn't like."}
];

let current = 0, score = 0, answered = false;
const quiz = document.getElementById("quiz"), next = document.getElementById("nextBtn");
const restart = document.getElementById("restartBtn"), progress = document.getElementById("progress");
const scoreEl = document.getElementById("score"), final = document.getElementById("final");

function renderQuestion() {
  answered = false; next.disabled = true;
  const item = questions[current];
  progress.textContent = `Question ${current + 1} of ${questions.length}`;
  scoreEl.textContent = `Score: ${score}`;
  quiz.innerHTML = `<section class="exercise quiz-card"><span class="level">A1–A2</span><h2>${item.q}</h2><div class="options">${item.a.map((x,i)=>`<button class="option" data-index="${i}">${String.fromCharCode(65+i)}) ${x}</button>`).join("")}</div><p id="feedback" class="feedback"></p></section>`;
  quiz.querySelectorAll(".option").forEach(btn => btn.addEventListener("click", () => choose(Number(btn.dataset.index))));
}
function choose(index) {
  if (answered) return;
  answered = true;
  const item = questions[current];
  const buttons = [...quiz.querySelectorAll(".option")];
  buttons.forEach(b => b.disabled = true);
  buttons[item.c].classList.add("correct-option");
  const feedback = document.getElementById("feedback");
  if (index === item.c) { score++; feedback.textContent = "✓ Correct! عالی بود."; feedback.className = "feedback correct"; }
  else { buttons[index].classList.add("wrong-option"); feedback.textContent = `✕ Incorrect. ${item.e}`; feedback.className = "feedback wrong"; }
  scoreEl.textContent = `Score: ${score}`;
  next.disabled = false;
  next.textContent = current === questions.length - 1 ? "See My Result →" : "Next Question →";
}
next?.addEventListener("click", () => {
  if (current < questions.length - 1) { current++; renderQuestion(); }
  else finish();
});
function finish() {
  quiz.hidden = true; next.hidden = true; final.hidden = false; restart.hidden = false;
  const pct = Math.round(score / questions.length * 100);
  let msg = pct >= 85 ? "Excellent! عالی بود!" : pct >= 65 ? "Good job! ادامه بده!" : "Keep practicing! تمرین بیشتری لازم داری.";
  final.innerHTML = `<span class="eyebrow">YOUR RESULT</span><h2>${score} / ${questions.length}</h2><p>${pct}% — ${msg}</p><p>مرور درس‌های گرامر و واژگان به بهتر شدن نتیجه کمک می‌کند.</p>`;
}
restart?.addEventListener("click", () => { current=0; score=0; quiz.hidden=false; next.hidden=false; final.hidden=true; restart.hidden=true; renderQuestion(); });
if (quiz) renderQuestion();

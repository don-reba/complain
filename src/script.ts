interface Array<T>
{
	sample() : T;
}

Array.prototype.sample = function<T>() : T
{
	if (this.length > 0)
		return this[Math.floor(Math.random() * this.length)];
}

function get_consolation() : string
{
	var consolations = <string[]>
		[ "Зато вы совсем не толстый!"
		, "Не огорчайтесь! Лучше скушайте это пирожное… Ах, вам же его нельзя!"
		, "Подумаешь! Зато в профиль вы немного похожи на Лёшу!"
		, "Могло быть и хуже! Например, вы могли родиться Креведом. Или неклёвым карликом. Или вам подали бы обед с опозданием в минуту. Или ваш интернет мог бы иногда пропадать без каких-либо причин. Ну вот, теперь у меня депрессия. Довольны?!"
		, "Все будет хорошо! Вот станете президентом, и обнаженный Стиплер с обнаженным Лёшей будут драться за право укутать вас пледиком!"
		, "Кто у нас тут самый несчастный котик? Иди скорее обниму :)"
		, "(((((((("
		, "Не печальтесь, лучше выпейте вечернего кефира, бессердечный вы фашист!"
		, "Мне следует предложить вам горячий напиток!"
		, "Ну и пусть! Зато вы увиделись с гигантским птеродактилем!"
		, "there there"
		, "Отныне все ваши печали позади! Купите книгу “100 рецептов успеха от Петровича” и… и у Петровича будут деньги, чтобы угостить Товарища латте!"
		, "Не думайте об этом! Лучше думайте о Товарище!"
		, "Зато вам платья идут больше, чем Лю!"
		, "Отпустите бороду! С бородатыми людьми этого никогда не случается."
		, "Ах вы бедная принцесса!"
		, "Хм!"
		, "Бегите же скорее в подвал! Школьницы вас утешат!"
		, "Ничего! Вот посмотрите на Лёшу! "
		, "…Здорово, да?"
		, "Зато теперь вам повысят пенсию!"
		, "Не печальтесь, выше нос! Представьте себе, что вы Кревед и задеваете носом солнце! И да, я помню, что вы ненавидите Креведа и солнце."
		, "Зато вы победили в “Легат-турнире”!"
		, "Печалька :("
		, "Зато вы скоро уедете на дачу! Вы же любите дачу!"
		, "Зато где-то есть садовый гном, который думает о вас!"
		, "Немедленно прекратите! Сейчас по графику не нытьё, а завтрак! Или второй завтрак! Или обед!"
		, "Ох, как всё плохо… А постримьте?"
		, "Да."
		, "Нет."
		, "А Ницшенька назвал бы вас сверхчеловечком!"
		, "Подумайте, если бы Гайбраш предавался унынию, разве смог бы он покончить с Ле Чаком раз и навсегда? Oh, wait…"
		, "Партия против Лю в любую игру со столицами легко поднимет вам настроение!"
		, "Каждый раз, когда вы делитесь своими проблемами на этом сайте, где-то в мире грустит один Лёша. Так что занимайтесь этим почаще!"
		, "Безусловно, это очень серьёзно. Но разве все дурные вещи в мире перевешивают благодать сырных палочек и реслинга?"
		, "Уверен, именно сейчас вам могут снова подарить радость в жизни эти амулеты Святого Гайбраша ИЗ НАСТОЯЩЕГО ПРОБКОВОГО ДЕРЕВА! ДА-ДА, ВЫ НЕ ОСЛЫШАЛИСЬ: 'НАСТОЯЩЕЕ ПРОБКОВОЕ ДЕРЕВО'! ГАРАНТИЯ КАЧЕСТВА И ДОЛГОВЕЧНОСТИ! ЗАКАЖИТЕ ПРЯМО СЕЙЧАС!"
		];

	return is_first_timer() ? consolations[0] : consolations.sample();
}

function is_first_timer()
{
	if (document.cookie.match(/seen/i))
		return false;

	document.cookie = "seen=1; expires=Tue, 1 Jan 2036 12:00:00 GMT; path=/";
	return true;
}

function show_consolation(what)
{
	if(!what)
	{
		var consolation = get_consolation();
		$("#solution").html('<h2 onclick="show_consolation(\'Im_not_finished_yet\')">' + consolation + '</h2>' + '<p><a href="#" onclick="show_consolation(\'Im_not_finished_yet\')">Ещё пожаловаться</a></p>');
		$("#problem").hide();
		$("#solution").show();
	}
	else
	{
		$("#textarea").empty();
		$("#problem").show();
		$("#solution").hide();
	}
}

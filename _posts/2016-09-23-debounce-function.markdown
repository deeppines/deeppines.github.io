---
layout: post
title:  "Оптимизация JavaScript. Функция Debounce."
date:   2016-09-23
categories: js
---

Убираем "дрожжание" и оптимизируем функции вызываемые <code>scroll</code> и <code>resize</code>.

Используя для вызова функции - <code>scroll</code> или <code>resize</code>, браузер будет выполнять эти функции
каждый раз когда происходит изменение, что влечет за собой дополнительную нагрузку, от которой стоит избавиться.

## Debouncing
Debounce - микропаттерн позволяющий превращать несколько вызовов функции в течении промежутка времени в один вызов.

## Синтаксис
{% highlight java %}
debouncedFn = $.debounce(fn, timeout, [invokeAsap], [context]);
{% endhighlight %}
* fn — оригинальная функция
* timeout — задержка
* invokeAsap — true/false, по умолчанию false. Параметр, указывающий какой из вышеперечисленных вариантов debouncing нужно использовать (по умолчанию используется первый)
* context — контекст оригинальной функции

## Основная функция
{% highlight java %}
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
{% endhighlight %}

Остается только вызвать эту функцию и передать в нее необходимый код.
{% highlight java %}
var myEfficientFn = debounce(function() {
	// All the taxing stuff you do
}, 250);

window.addEventListener('resize', myEfficientFn);
{% endhighlight %}

## Пример использования
Небольшой пример из практики. Есть фиксированное меню, у которого верхняя панелька скрывается при скролле вниз
и появляется при скролле вверх. Без использованния данной функции скрипт отрабатывает каждый раз и если 
быстро крутить колесиком вверх-вниз то мы получим прыжки меню в течении некоторого времени.
Debounce решает данную проблему.

<p data-height="480" data-theme-id="dark" data-slug-hash="ozkxAw" data-default-tab="js,result" data-user="lucaskane" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/lucaskane/pen/ozkxAw/">Debounce Function</a> by Lucas Kane (<a href="http://codepen.io/lucaskane">@lucaskane</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

#### Статьи по теме:

* [JavaScript Debounce Function (eng)][article-1]
* [Микропаттерны оптимизации в Javascript: декораторы функций debouncing и throttling (рус)][article-2]

[article-1]: https://davidwalsh.name/javascript-debounce-function
[article-2]: https://habrahabr.ru/post/60957/
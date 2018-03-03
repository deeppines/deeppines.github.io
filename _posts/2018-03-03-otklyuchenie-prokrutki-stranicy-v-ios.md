---
layout: post
title:  "Отключение прокрутки страницы в iOS."
date:   2018-03-03
---

Чтобы отключить прокрутку web страницы на iOS устройствах
в браузере Safari, потребуются две небольшие функции.

## Функции отключения/включения scroll

Функция отключающая scroll:

{% highlight js %}
function disableScroll() {
  $('html,body').css('overflow', 'hidden'); // Убираем scroll на descktop
  $(document).bind('touchmove', false); // Убираем scroll на mobile
};
{% endhighlight %}

Функция включающая scroll:

{% highlight js %}
function enableScroll() {
  $('html,body').css('overflow', '');
  $(document).unbind('touchmove', false);
};
{% endhighlight %}

Вот собственно и все, что требуется. Не забудьте подключить [JQuery][jquery]
и вызвать функции там где вам необходимо.

[jquery]:http://jquery.com/download/

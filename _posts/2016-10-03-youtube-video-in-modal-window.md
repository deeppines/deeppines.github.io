---
layout: post
title:  "Видео с Youtube в модальном окне."
date:   2016-10-03
categories: js
---

Скрипт для загрузки youtube видео в модальном окне, с функцией паузы и выключения.

## Разметка модального окна

В качестве модального окна для примера возьмем стандартное модальное окно
Bootstrap 3, но слегка изменим его убрав некоторые лишние части.

{% highlight html %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary playYoutube" data-toggle="modal"
data-target="#video" data-src="c7nRTF2SowQ">
Launch video 1
</button>
<button type="button" class="btn btn-primary playYoutube" data-toggle="modal"
data-target="#video" data-src="Sr-DKyAVU34">
Launch video 2
</button>

<!-- 	Video Modal 	-->
<!-- Modal -->
<div class="modal fade modal-video" id="video" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <!-- 16:9 aspect ratio -->
        <div class="embed-responsive embed-responsive-16by9">
          <div id="Youtube" class="embed-responsive-item"></div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="close pauseYoutube" data-dismiss="modal"
        aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
    </div>
  </div>
</div>
<!-- 	/Video Modal 	-->
{% endhighlight %}

В данном коде нас интересует шесть пунктов:

* класс для кнопки открытия модального окна - <code>class="playYoutube"</code>
* дата атрибут - <code>data-src</code>
* дата атрибут - <code>data-target</code>
* id модального окна - <code>id="video"</code>
* id контейнера для видео - <code>id="Youtube"</code>
* класс кнопки закрытия модальки - <code>class="pauseYoutube"</code>

<code>class="playYoutube"</code> - необходим для того что бы по клику на кнопку
видео загружалось в модаль.

<code>data-src</code> - содержит код видео с youtube, которое будет загружаться
по нажатию кнопки.

<code>data-target</code> - должен совпадать с id модального окна.

<code>id="Youtube"</code> - указывает на элемент который превратиться
в iframe с видео. Для его адаптивности добавлена обертка и класс embed-responsive-item.

<code>class="pauseYoutube"</code> - указывает на кнопку при нажатии на которую
модальное окно закроется, а видео встанет на паузу.

## Подключение скрипта

Для того что бы скрипт заработал для начала нужно подключить скрипт YoutubeAPI.
Для этого достаточно вставить внизу страницы строчку:

{% highlight html %}
<!-- Add youtube api -->
<script src="https://www.youtube.com/iframe_api"></script>
{% endhighlight %}

После этого можно размещать основной скрипт:
{% highlight js %}
var player,
    youtube  = 'Youtube', //iframe id
    btnPlay  = '.playYoutube', // btn id or class
    btnPause = '.pauseYoutube', // pause btn id or class
    modalId  = '#video', // Modal id
    lastButton = '';

function onYouTubePlayerAPIReady() {
  player = new YT.Player(youtube, {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  $(btnPlay).on("click", function() {
    var videoId = $(this).attr("data-src");
    if (lastButton == videoId) {
      player.playVideo(videoId);
    } else {
      player.loadVideoById(videoId);
      lastButton = videoId;
    }
  });
  $(btnPause).on("click", function() {
    player.pauseVideo();
  });
  $(modalId).on("click", function() {
    player.pauseVideo();
  });
}
{% endhighlight %}

## Пример использования

Небольшой пример с двумя кнопками. При нажатии на первую кнопку видео
загружается, жмем на крестик - видео встает на паузу и при повторном нажатии
на первую кнопку воспроизведение продолжается с того места на котором было
закрыто окно, а при нажатии на кнопку два грузится новое видео.

<p data-height="485" data-theme-id="0" data-slug-hash="KgvGpN"
data-default-tab="html,result" data-user="lucaskane" data-embed-version="2"
class="codepen">See the Pen <a href="http://codepen.io/lucaskane/pen/KgvGpN/">
Youtube video on modal popup.</a> by Lucas Kane
(<a href="http://codepen.io/lucaskane">@lucaskane</a>) on
<a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

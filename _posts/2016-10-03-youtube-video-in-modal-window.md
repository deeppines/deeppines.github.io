---
layout: post
title:  "Видео с Youtube в модальном окне."
date:   2016-10-03
categories: js
---

Скрипт для загрузки youtube видео в модальном окне, с функцией паузы и выключения.

## Разметка модального окна

Для разметки будем использовать шаблонизатор [Pug][pug]
и напишем небольшой миксин для кнопки, а в качестве модального окна для примера
будем использовать стандартный компонент [Bootstrap 4][bootstrap4].

На случай если нет времени разбираться с использованием шаблонизатора
я продублирую код на HTML.

### Pug mixin

Итак, наш миксин будет состоять из кнопки и превью картинки внутри.
Превью мы будем брать непосредственно из видео с помощью ссылки -
`src="https://img.youtube.com/vi/#id/maxresdefault.jpg`.

Вместо `#id` необходимо подставить код видео Youtube формата - `c7nRTF2SowQ`.
Так же данная ссылка имеет несколько вариантов изображений:

* `default.jpg` - 120x90px
* `mqdefault.jpg` - 320x180px
* `hqdefault.jpg` - 480x360px
* `sddefault.jpg` - 640x480px
* `maxresdefault.jpg` - максимальное качество.

Для удобства демонстрации я немного отформатирую код:

{% highlight pug %}
mixin videoButton(modal, src, title)
  button(
    type="button"
    data-toggle="modal"
    data-target=`#${modal}`
    data-src=`${src}`
    data-title=`${title}`
    class="js-play"
  ).btn.p-0
    img(
      src=`https://img.youtube.com/vi/${src}/maxresdefault.jpg`
      alt=`${title}`
    ).card-img-top
{% endhighlight %}

В миксин будет передаваться три параметра:

* `modal` - `id` модального окна в котором будет выводиться видео.
* `src` - `id` Youtube видео.
* `title` - Название видео.

Так же необходим специальный класс `js-play` который будет использовать наш скрипт.
При желании его можно сделать параметром, если вам это необходимо.
Остальные классы в примере используются только для визуального отображения и
могут быть заменены или неиспользоваться вовсе.

Вызов миксина будет выглядеть так:

{% highlight pug %}
+videoButton(
  'modalVideo',
  'c7nRTF2SowQ',
  'Официальный анонс-трейлер Battlefield 1'
)
{% endhighlight %}

Для удобства чтения я немного отформатирую получившийся HTML код кнопки
и в итоге он будет выглядеть так:

{% highlight html %}
<button
  class="btn p-0 js-play"
  type="button"
  data-toggle="modal"
  data-target="#modalVideo"
  data-src="c7nRTF2SowQ"
  data-title="Официальный анонс-трейлер Battlefield 1">
  <img
    class="card-img-top"
    src="https://img.youtube.com/vi/c7nRTF2SowQ/maxresdefault.jpg"
    alt="Официальный анонс-трейлер Battlefield 1"/>
</button>
{% endhighlight %}

### Модальное окно

Разметка на Pug будет выглядеть так:

{% highlight pug %}
div(tabindex="-1" role="dialog" aria-hidden="true")#modalVideo.modal.fade
  div(role="document").modal-dialog.modal-lg.modal-dialog-centered
    .modal-content
      .modal-header
        h5.modal-title.js-title-insert
        button(type="button" data-dismiss="modal" aria-label="Close").close.js-pause
          span(aria-hidden="true") &times;
      .modal-body.px-0.py-0
        .embed-responsive.embed-responsive-16by9
          #youTubeIframe.embed-responsive-item
{% endhighlight %}

Тут нас интересует всего четыре вещи:

* `#modalVideo` - `id` модального окна, оно должно совпадать с тем что вы
 передаете в миксин или указываете в параметре `data-target`.
* `js-title-insert` - класс для вставки названия видео в шапку модального окна.
* `js-pause` - класс для кнопки закрытия модального окна.
* `#youTubeIframe` - `id` контейнера который будет преобразован в `iframe`.

Для того, что бы видео было адаптивным так же будет полезно
добавить обертку `.embed-responsive.embed-responsive-16by9`
и класс `.embed-responsive-item`, если вы используете Bootstrap,
или написать свои классы.

Сгенерированный HTML будет выглядеть так:

{% highlight html %}
<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" id="modalVideo">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title js-title-insert"></h5>
        <button class="close js-pause" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body px-0 py-0">
        <div class="embed-responsive embed-responsive-16by9">
          <div class="embed-responsive-item" id="youTubeIframe"></div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

## Подключение скрипта

Для того что бы скрипт заработал для начала
нужно подключить [YouTube Player API][youtubeapi].
Для этого достаточно вставить внизу страницы строчку:

{% highlight html %}
<!-- Add youtube api -->
<script src="https://www.youtube.com/iframe_api"></script>
{% endhighlight %}

После этого можно размещать основной скрипт:

{% highlight js %}
var player;
var lastButton = '';
const youtube = 'youTubeIframe';
const titleInsert = '.js-title-insert';
const btnPlay = '.js-play';
const btnPause = '.js-pause';
const modalId = '#modalVideo';
const videoQuality = 'hd720';

function onYouTubePlayerAPIReady() {
  player = new YT.Player(youtube, {
    controls: 2,
    iv_load_policy: 3,
    rel: 0,
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  'use strict';
  $(btnPlay).on('click', function() {
    var videoId = $(this).attr('data-src');

    if (lastButton == videoId) {
      $(titleInsert).text($(this).attr('data-title'));
      player.playVideo(videoId, 0, videoQuality);
    } else {
      $(titleInsert).text($(this).attr('data-title'));
      player.loadVideoById(videoId, 0, videoQuality);
      lastButton = videoId;
    }
  });

  $(btnPause).on('click', function() {
    player.pauseVideo();
  });

  $(modalId).on('click', function() {
    player.pauseVideo();
  });
}
{% endhighlight %}

## Пример использования

Небольшой пример с двумя кнопками. При нажатии на первую кнопку видео
загружается, жмем на крестик - видео встает на паузу и при повторном нажатии
на первую кнопку воспроизведение продолжается с того места на котором было
закрыто окно, а при нажатии на вторую кнопку грузится новое видео.

<p data-height="485" data-theme-id="0" data-slug-hash="KgvGpN"
data-default-tab="result" data-user="deeppines" data-embed-version="2"
data-pen-title="Youtube video on modal popup." class="codepen">
See the Pen <a href="https://codepen.io/deeppines/pen/KgvGpN/">
Youtube video on modal popup.</a> by Lucas Kane
(<a href="https://codepen.io/deeppines">@deeppines</a>) on
<a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[pug]: https://pugjs.org/api/getting-started.html
[bootstrap4]: https://getbootstrap.com/docs/4.0/components/modal/
[youtubeapi]: https://developers.google.com/youtube/iframe_api_reference

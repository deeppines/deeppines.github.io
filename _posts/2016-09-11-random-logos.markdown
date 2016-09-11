---
layout: post
title:  "Медот размещения логотипов"
date:   2016-09-11
categories: css
---

Метод размещения картинок неизвестных размеров в огранниченном пространстве.
Как правило это требуется для создания слайдеров и каруселей с логотипами партнеров на сайте.
Поскольку на практике чаще всего приходится иметь дело с неизвестным контентом, необходим способ 
который будет гарантировать кореектное отображение контента.

## Условия задачи

1. Картинка с неизвестным размером
2. Ограничения по высоте/ширине область

### HTML разметка
Напишем небольшой кусок разметки для нашего блока.

{% highlight html %}
<div class="logo">
    <a href="#" class="logo-link">
        <img class="logo-img" src="/logo.png" alt="Thumbnail logo">
    </a>
</div>
{% endhighlight %}

Я использовал ссылку, так как чаще всего логотип на сайте должен быть кликабельным и вести на сайт партнера.

### CSS стили
Зададим стили для элементов.

{% highlight css %}
.logo {
    position: relative;
    width: 180px;
    height: 90px;
    background: #ebebeb;
}

.logo-link {
    position: absolute;
    display: inherit;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.logo-img {
    display: block;
    position: relative;
    top: auto;
    left: auto;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    -webkit-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
}
{% endhighlight %}

Таким образом в наш блок можно класть картинку практически любых размеров и она корректно отмасштабируется. 

### Что получилось

<script async src="//jsfiddle.net/LucasKane/uL70jtua/1/embed/result,html,css/"></script>

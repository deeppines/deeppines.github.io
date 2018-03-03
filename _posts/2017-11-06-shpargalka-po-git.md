---
layout: post
title:  "Шпаргалка по Git"
date:   2017-11-06
categories: git
---

Список наиболее часто используемых команд в git. Подробнее ознакомиться с
документацией можно по ссылкам ниже:

* [Pro Git](https://git-scm.com/book/ru/v2)
* [Git cheat sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
* [Visual Git cheat sheet](http://ndpsoftware.com/git-cheatsheet.html)

#### Навигация

* [Клонирование репозитория](#clone)
* [Загрузка объектов и ссылок из другого репозитория](#fetch)
* [Получение изменений с удаленного репозитория](#pull)
* [Загрузка локальных изменений в удаленную ветку](#push)
* [Список, создание или удаление ветки](#branch)
* [Переключение веток](#checkout)
* [Добавление файлов в индекс](#add)
* [Запись изменений в репозиторий](#commit)
* [Статус рабочей ветки](#status)
* [Удаление коммитов или откат](#reset)
* [Отмена изменений отдельным коммитом](#revert)

##### <a name="fetch"> Клонирование репозитория

{% highlight git %}
$ git clone [url]
{% endhighlight %}

##### <a name="fetch"> Загрузка объектов и ссылок из другого репозитория

{% highlight git %}
$ git fetch [bookmark]
{% endhighlight %}

##### <a name="pull"> Получение изменений с удаленного репозитория

{% highlight git %}
$ git pull [options]
{% endhighlight %}

##### <a name="push"> Загрузка локальных изменений в удаленную ветку

{% highlight git %}
$ git push [--all | --mirror | --tags]
{% endhighlight %}

##### <a name="branch"> Список, создание или удаление ветки

{% highlight git %}
$ git branch [branch-name]
{% endhighlight %}

##### <a name="checkout"> Переключение веток

{% highlight git %}
$ git checkout [branch-name]
{% endhighlight %}

##### <a name="add"> Добавление файлов в индекс

{% highlight git %}
$ git add .
{% endhighlight %}

##### <a name="commit"> Запись изменений в репозиторий

{% highlight git %}
$ git commit -m "commit description"
{% endhighlight %}

##### <a name="status"> Статус рабочей ветки

{% highlight git %}
$ git status
{% endhighlight %}

##### <a name="reset"> Удаление коммитов или откат

{% highlight git %}
$ git reset --hard HEAD~1
{% endhighlight %}

##### <a name="revert"> Отмена изменений отдельным коммитом

{% highlight git %}
$ git revert bbbbbb
{% endhighlight %}

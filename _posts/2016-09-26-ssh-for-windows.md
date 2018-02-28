---
layout: post
title:  "Генерация SSH ключа в Windows."
date:   2016-09-26
---

Небольшая памятка по генерации ssh ключа в операционной системе Windows.

## Генерируем ssh ключ

Для генерации ключа вбиваем в консольке команду:
{% highlight git %}
$ ssh-keygen -t rsa -C "your@mail.com"
{% endhighlight %}

Далее последует запрос на ввод пароля для ключа, если ненужна дополнительная
защита можно просто оставить пароль пустым и жать Enter.

Чтобы посмотреть публичный ключ вбиваем в консольке следующую строчку:

{% highlight git %}
$ cat ~/.ssh/id_rsa.pub
{% endhighlight %}

Ответ будет примерно таким:

{% highlight git %}
$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU
GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3
Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En
mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx
NrRFi9wrf+M7Q== schacon@agadorlaptop.local
{% endhighlight %}

Копировать в git нужно все, начиная от `ssh-rsa`

На этом собственно все, ну почти.

## Аутентификация по ssh

После описанных выше действий необходимо проделать еще пару операций для того
что бы наш ключ заработал.

### SSH Agent

Для начала нужно запустить ssh agent в который мы будем добавлять наш ключ.

{% highlight git %}
$ eval `ssh-agent`
{% endhighlight %}

В таком варианте запущенный ssh-agent, будет передан команде eval,
которая выполнит его в текущей оболочке.
Обратите внимание, используются обратные кавычки, а не обычные!

Теперь помещаем сгенерированный ключ с помощью команды:

{% highlight git %}
$ ssh-add
{% endhighlight %}

На этом все, теперь ssh подключение будет работать без вылетов ошибок аутентификации.

#### Статьи по теме

* [Git на сервере - Создание открытого SSH-ключа][article-1]
* [SSH, аутентификация по ключам, ssh-keygen, ssh-agent][article-2]
* [SSH keys][article-3]

[article-1]: https://git-scm.com/book/ru/v1/Git-на-сервере-Создание-открытого-SSH-ключа
[article-2]: http://vds-admin.ru/ssh/ssh-autentifikatsiya-po-klyucham-ispolzovanie-programm-ssh-keygen-i-ssh-agent
[article-3]: https://wiki.archlinux.org/index.php/SSH_keys_(Русский)

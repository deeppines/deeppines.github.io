---
layout: post
title:  "Настройка Atom"
date:   2016-10-16
categories: soft
---

Подборка плагинов для Front-end разработки в редакторе Atom.

Update 24/06/2017

## Мастхев плагины

Список необходимого минимума или наиболее популярных:

~~[git-control][git-control] - плагин добавляющий GUI для управления git репозиторем.~~
Начиная с версии 1.18.0 появился нативный Git GUI, можно смело удалять git-control.

* [emmet][emmet] - плагин не нуждающийся в представлении. Ускоряет написание как html так и css кода.
* [tab-control][tab-control] - плагин управления отступами.
* [atom-beautify][atom-beautify] - плагин для форматирования кода поддерживающий множество языков.


## Улучшение функционала

Плагины расширяюшие возможности Atom и упрощающие вашу жизнь:

~~[autoclose-html][autoclose-html] - плагин добавляющие возможность автозакрытия html тегов.~~
Плагин оказался бесполезным, можно удалять.
~~[open-recent][open-recent] - плагин добавляющий возможность открывать ранее закрытые файлы или папки.~~
Аналогичный функционал поддерживается из коробки.

* [minimap][minimap] - добавляет карту файла.
* [pigments][pigments] - подсветка цветов в css и sass файлов, подсвечиваются так же и цвета в переменных.
* [atom-bootstrap3][atom-bootstrap3] - добавляет сниппеты из Bootstrap 3.
* [atom-tool-bar][atom-tool-bar] - добавляет в Atom поддержку Tool bar.
* [flex-tool-bar][flex-tool-bar] - обертка для Atom tool bar позволяющая настроить tool bar полностью под себя.

Пример конфигурации для Flex Tool Bar

<p data-height="480" data-theme-id="0" data-slug-hash="aJrNMm" data-default-tab="js" data-user="lucaskane" data-embed-version="2" data-pen-title="Config for Flex Tool Bar" class="codepen">See the Pen <a href="https://codepen.io/lucaskane/pen/aJrNMm/">Config for Flex Tool Bar</a> by Lucas Kane (<a href="https://codepen.io/lucaskane">@lucaskane</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Проверка кода

Плагины добавляющие проверку вашего кода:

* [linter][linter] - основной плагин для Atom, который обеспечивает совместимость и работу всех остальных плагинов проверки.
* [linter-eslint][linter-eslint] - проверка JS.
* [linter-tidy][linter-tidy] - проверка HTML.
* [linter-csslint][linter-csslint] - проверка CSS.
* [linter-scss-lint][linter-scss-lint] - проверка SCSS файлов.

### Тема и подсветка кода, необязательные красивости

Мой выбор темы и подсветки синтаксиса:

* [atom-material-ui][atom-material-ui] - тема Material UI.
* [firewatch-syntax][firewatch-syntax] - подсветка синтаксиса Firewatch.
* [file-icons][file-icons] - иконки для файлов.

[atom-beautify]: https://atom.io/packages/atom-beautify
[atom-bootstrap3]: https://atom.io/packages/atom-bootstrap3
[autoclose-html]: https://atom.io/packages/autoclose-html
[emmet]: https://atom.io/packages/emmet
[file-icons]: https://atom.io/packages/file-icons
[git-control]: https://atom.io/packages/git-control
[linter]: https://atom.io/packages/linter
[linter-eslint]: https://atom.io/packages/linter-eslint
[linter-scss-lint]: https://atom.io/packages/linter-scss-lint
[linter-csslint]: https://atom.io/packages/linter-csslint
[linter-tidy]: https://atom.io/packages/linter-tidy
[minimap]: https://atom.io/packages/minimap
[open-recent]: https://atom.io/packages/open-recent
[pigments]: https://atom.io/packages/pigments
[tab-control]: https://atom.io/packages/tab-control
[atom-tool-bar]: https://atom.io/packages/tool-bar
[flex-tool-bar]: https://atom.io/packages/flex-tool-bar

[atom-material-ui]: https://atom.io/themes/atom-material-ui
[firewatch-syntax]: https://atom.io/themes/firewatch-syntax

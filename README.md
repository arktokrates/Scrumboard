# Scrum Board

Ein einfaches Scrum Board, das auf node.js basiert. Die Applikation ist das Ergebnis eines Projekts im Modul «Web Technologies & Web Engineering» an der [ZHAW Zürich](http://www.zhaw.ch).

&nbsp;

## Beschreibung

Eine Tafel mit den drei Spalten Todo, In Progress und Done bildet das Scrum Board. In der Softwareentwicklung umzusetzende Tasks werden erfasst und zunächst in die Spalte Todo abgelegt. Entsprechend dem Fortgang der Entwicklung werden diese Karten laufend in die Spalten In Progress und später Done verschoben.

Eine Karte besteht aus einem Titel, eine Beschreibung des Tasks, einer Schätzung des Aufwands (mittels einer Zahl aus 1, 2, 3, 5, 8) sowie dem Namen der verantwortlichen Person.

Existierende Karten lassen sich bearbeiten, in eine andere Spalte verschieben oder löschen.

&nbsp;


## Funktionalitäten

Begrenzt durch die zur Verfügung stehende Zeit konnte leider nicht die gesamte Funktionalität umgesetzt werden. Folgende Funktionalitäten sind möglich: 

* Eine neu erfasste Karte wird in der Spalte Todo angezeigt.
* Eine bestehende Karte lässt sich von einer Spalte in eine andere verschieben.
* Bestehende Karten können bearbeitet werden (Tabulatortaste verwenden)


Diese Funktionen sind nicht erfolgreich umgesetzt worden:

* Bestehende Karten können nicht gelöscht werden.
* Änderungen werden nicht gespeichert.
* Ein Persistenzlayer wurde nicht eingebaut.

&nbsp;


## Verwendete Technologien

### Backend

* Web-Applikation mit node.js auf Express 4
* Verwendung von Routes nach REST API

&nbsp;


### Frontend

##### jQuery

* Die jQuery Library stellt hilfreiche Funktionen für die effiziente Verwendung von JavaScript zur Verfügung.


##### Backbone.js

* Mit dem Framework [Backbons.js](http://backbonejs.org) kann das Frontend einfacher implementiert werden. Dazu wird ein Model Task und eine Collection Tasks verwendet.
* Ferner sind die Views (TaskView und TasksView) damit definiert worden.


##### Jade

* Mit der Skriptsprache [Jade](http://jade-lang.com) können HTML-Templates einfach definiert werden.

&nbsp;

### Tests

* Einige Tests für Model und Collection sind mit der Testsuite [Jasmine](http://jasmine.github.io) integriert worden.

&nbsp;


##Heroku

* Auf Heroku zu finden unter [Scrum Board](https://scrumb.herokuapp.com/tasks).

# Docker Basics

Dieses Tutorial basiert auf Docker 1.11 - das Tutorial beabsichtigt, dass wir Fehler machen, diese analysieren und aus den Fehlern lernen. :-)
So lernt ihr sehr viel besser mit Docker umzugehen, als wenn ich euch alles vorkaue.

## Agenda

* Was ist Docker
* Tutorial
 * Docker Compose 2
 * Docker Images
 * Entwicklungsumgebung mit über Urls erreichbare Container 

## Was ist Docker?

Docker erlaubt es eine Anwendung und all ihre Abhängigkeiten in eine abgeschlossene Umgebung zu packen.
Ein sogenannter Docker Container läuft auf jedem System auf dem auch Docker läuft.
Man kann also unabhängig von der Infrastruktur die Container jederzeit starten und die Anwendung läuft.

Komponente | Beschreibung
--- | ---
Docker Engine | Kernfunktionen um Docker images zu erstellen und Docker Container zu starten.
Docker Machine | Automatische Container Provisionierung.
Docker Swarm | Ermöglicht Container Clustering und Scheduling.
Docker Compose | Erlaubt es Multi-Container Umgebungen zu definieren und zu betreiben.
Docker Hub | Von Docker betriebene Docker Registry.
Docker Trusted Registry | Erlaubt es private Docker Registries zu betreiben.
Docker Cloud | Von Docker betriebene Docker Umgebung. (Build, CI, Deploy)
Docker Universal Control Plane | Cluster Management für Docker Umgebungen.

## Docker für Mac / Windows

Aktuell in der Public Beta Phase. Noch sehr langsam in Bezug auf die Dateifreigabe.
Könnt ihr auch gerne benutzen.

## Vorbereitung

* [Docker Toolbox](https://www.docker.com/products/docker-toolbox) installieren
* [git](https://git-scm.com/downloads) installieren
* [Docker 1.11 Dokumentation](https://docs.docker.com/v1.11/)
* Code Editor z.B. [Visual Studio Code](https://code.visualstudio.com/)

## Tutorial

* Docker installieren
 * Mac/Windows
  * [Docker Toolbox](https://www.docker.com/products/docker-toolbox) installieren
 * Linux
  * [Docker installieren](https://docs.docker.com/engine/installation/#/on-linux)
* Compose.yml anlegen
* Services definieren
  * MySQL
  * NodeJS
* `docker-compose up -d`
 * MySQL und Node zum laufen bringen
* Service definieren für todo-mvc
* `docker-compose up -d`
 * todo-mvc zum laufen bringen
* Eigenes Docker Image für MySQL erstellen
  * neuen Benutzer anlegen
  * Encoding auf utf8mb4 umstellen
* Proxy
* DNS
* (ELK)

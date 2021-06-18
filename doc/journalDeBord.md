# Jour 1 : le 29/04/2021

### Mise en place du projet

- Début du projet, conception du mail client
- Analyse du mail client 
- Conception des notes d'analyse 
- Création des Use Cases 
- Création des wireframes

-> Choix de faire des wireframes pour desktop seulement (vu que l'application sert à améliorer la frappe au clavier), wireframes pour mobile pour certaine page (login, sign in) pour pouvoir s'inscrire, se connecter => PAS POUR LA PAGE JEU

# Jour 2 : le 02/05/2021

### Choix (technologies, charte graphique)

Dans un premier temps, utilisation de Node Js, Express Js, PostgreSQL et SQL pour la partie back du projet.
Mise en place d'un serveur simple avec Express Js (Renvoie bonjour pour l'instant)
Mise en place de l'architecture du code (Création des dossiers (views, statique, app, etc)).
Recherche charte graphique

Pour le back : Node Js, Express Js + npm modules (session etc), moteur de rendu EJS (pour l'instant), PostgreSQL & SQL.
Pour le front : React Js, WebGL, Javascript Vanilla 

Charte graphique

- dans `doc/charte/CharteVintage.png` avec de gauche vers la droite :
        * #18534F (vert foncé)
        * #226D68 (vert pastel)
        * #ECF8F6 (blanc)
        * #FEEAA1 (beige)
        * #D6955B (brun / orange pastel)
    
- dans `doc/charte/ChartePastel.png` avec de gauche vers la droite :
        * #FE9D15 (orange foncé)
        * #FEBB5F (orange pastel)
        * #F7F7F7 (blanc)
        * #C0F0EE (bleu pale)
        * #2DBDB4 (turquoise pale)

# Jour 3 : le 05/05/2021

Traduction de l'analyse du besoin avec Mocodo
Je continue l'analyse du besoin en essayant de préciser des relations / entités
Questionnement sur l'implémentation de l'experience, statistique dans le MVP
Beaucoup d'incohérence

# Jour 4 : le 06/05/2021

Discution avec Céline, prise de décision => la difficulté n'est plus liée à l'experience, les graphiques seront implémenté plus tard
Reprise de l'analyse du besoin, des entités et des relation qui seront présentent dans le MVP

Branche création_MCD créée, Mise en place MCD + use cases

# Jour 5 : le 07/05/2021

Relecture de mes analyses, MCD pour voir si tout est bon pour la suite.
Simplification des besoins

# Jour 6 : le 10/05/2021

Mise au propre des notes d'analyse => petits changements pour les relations + MCD
Mise au propre des relations dans le fichier associé
Mise en place du fichier create_db.sql => début de la base de donnée => création des tables, relations

# Jour 7 : le 27/05/2021

Mise en place de la base de donnée, injection des datas dans celle ci
Création d'un utilisateur Postgres "tap" + mdp + droits
Création de la BDD "tap" 
Création des tables
Import des données

Problemes : ERROR:  there is no unique constraint matching given keys for referenced table "game"
Doc :
        https://www.postgresql.org/message-id/CAADeyWgSLC-crOa%2BcFg_EOfVtrmjTXSFFWfEdKuOnKRBUg%3DqEg%40mail.gmail.com

Solution : Passage d'une réference dans la table a seulement l'expression d'un entier auquel rattacher le resultat

Prob : psql:DB/import_data.sql:146: ERROR:  syntax error at or near ";"
LINE 22: ...admin', NULL, '2021-04-18 03:56:11', '2021-05-18 13:56:11');

Resolu : erreur de syntaxe dans une des ligne

## Création de l'architecture avec dataMapper dans un premier temps avec Express, dotenv et pg

        - npm Express, dotenv et pg
        - création d'un .env (variables d'environnement + url de la BDD)
        - .gitignore => fichiers non désirables ou sensible (mdp etc)
        - index.js point d'entré de l'application express
        - dossier app: 
                - dossier integration (css, html statique)
                - dossier controllers
                - dossier views
                - dataMapper
                - database
                - router

# Jour 8 : 28/05/2021

Mise en place des pages ejs, 404, nav, header, footer, homepage + factorisation

# Jour 9 : 31/05/2021

Mise en place des pages Liste de jeux, progression et les formulaires de connexions
Mise en place du css selon wireframes

# Jour 10 : 10/06/2021

Construction des controllers et des méthodes du dataMapper pour récupérer les informations de la base de données.
Construction des formulaires de login et d'inscription
Utilisation de cookie / session pour verifier si un utlisateur est connecté et donc permettre l'accessiblité à certaines pages du site (progression, profil etc)

Avec le cookie => présente un probleme majeur, il sont en clairs dans les headers, donc interceptables et potentiellement "volables".

Premiere version, sur ma page progression, je veux qu'on dise bonjour "machin" si je suis connecté
Si je ne suis pas connecté, je veux etre redirigé vers le formulaire de connexion pour connecter, et si je n'ai pas de compte, je veux accèder au formulaire d'inscription 

Mais req.headers.cookie c'est une chaine de caractère alors j'utilise cookie-parser pour manipuler tout ça (plus simple).
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
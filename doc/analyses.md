# Mail client

Bonjour, nous sommes une équipe d'ergothérapeute et nous voudrions avoir un site web sur lequel les enfants en difficulté peuvent apprendre à frapper au clavier pour que sur le long terme ils puissent substituer l'écriture manuscrite à l'écriture sur ordinateur.

Dans les grandes ligne nous voudrions pouvoir stocker les utilisateurs dans une base de données.

L'accès au site se fait par inscription, une partie du site est gratuite et une partie payante.

Toute personne inscrite peut accéder au site, jouer aux jeux et modifier son profil, les visiteurs seulement la page d'acceuil.
Les ergothérapeutes ont en plus la possiblité d'ajouter un eleve à une liste pour pouvoir suivre sa progression et avoir un rapport détaillé


## Notes d'analyse

### Ce que l'application fait 

    * stocker les utilisateurs
    * accés gratuit
    * possibilité de passer premium en payant
    * accès par inscription / authentification
    * créer / mofifier / supprimer un profil
    * rechercher un eleve
    * jouer aux différents jeux 
    * accéder à son évolution
    * gestion des utilisateurs (inscription / authentification)

### Traduction en Use cases :

| En tant que | je veux pouvoir | afin de |
| --- | --- | --- |
| visiteur | accéder au site | voir la page d'accueil descriptive de l'application |
| visiteur | accéder au formulaire d'inscription | pouvoir m'inscrire sur le site |
| inscrit | accéder au formulaire de connexion | de me connecter à mon profil |
| inscrit | accéder aux jeux | jouer aux jeux |
| inscrit | modifier mon profil | modifier mon profil |
| inscrit | supprimer mon profil | supprimer mon profil |
| inscrit | accéder à la section premium | d'avoir les avantages premium |
| premium | rechercher un utilisateur | l'ajouter à la liste des utilisateurs suivit |
| premium | accéder à l'évolution d'un utilisateur parmis la liste | suivre la progression d'un utilisateur parmis la liste |
| admin | modifier les informations d'un utilisateur | ... |
| admin | ajouter un utilisateur | ... |
| admin | supprimer un utilisateur | ... |
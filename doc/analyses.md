# Analyse du besoin

## Ce qu'il y a 

#### Les entités

- il y a un admin (username, password)
- il y a des professionnels (username, password, status (numéro de licence ? Pour preuve ? => Donnée sensible))
- il y a des élèves (username, password, avatar, age, status)
- il y a des jeux (titre, categorie, description)
- il y a des thématiques (titre, couleur, image)
- il y a différents niveau de difficulté (label, coefficient, couleur)
- il y a des résultats en fin de jeu (points)
- il y a des résultats globaux (note)
- il y a de l'expérience (temps, score)

#### Les relations 

- un jeu à plusieurs niveaux de difficulté
- un professionnel peut accéder au profil d'élève
- un élève a un professionnel qui le suit
- un élève a un résultat (en fin de jeu)
- un résultat est lié a un seul eleve
- un résultat est stocké dans une BDD
- un élève a plusieurs résultats (globaux)
- le niveau de difficulté augmente en fonction de l'expérience

#### Le reste 

- il y a une page de connexion pour les élèves
- il y a une page de connexion pour les professionnels
- le niveau du jeu influ sur le score


## Ce qu'il n'y a pas

- On ne choisit pas le niveau de difficulté

/////////////////////////////////////////////////////

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
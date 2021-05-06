# Analyse du besoin

## Ce qu'il y a 

#### Les entités

- il y a un admin (username, password)
- il y a des professionnels (username, password, status (numéro de licence ? Pour preuve ? => Donnée sensible))
- il y a des élèves (username, password, avatar, age, status)
- il y a des jeux (titre, categorie, description)
- il y a des thématiques (titre, couleur, image)
- il y a différents niveau de difficulté (label, couleur)

Pour le MVP, pas de notion d'experience, statistique
<!-- - il y a des résultats en fin de jeu (points)
- il y a des résultats globaux (note)
- il y a de l'expérience (temps, score) -->

#### Les relations 

- un professionnel peut accéder au profil d'élève
- un élève a un professionnel qui le suit
- un jeu à un niveau de difficulté
- un jeu a un theme
- un eleve a des resultats
- un jeu a des resultats


- un résultat est lié a un seul eleve
- un résultat est stocké dans une BDD
- un élève a plusieurs résultats (globaux)
- un élève a un résultat (en fin de jeu)

#### Le reste 

- il y a une page de connexion pour les élèves
- il y a une page de connexion pour les professionnels


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
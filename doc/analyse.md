# Analyse du besoin

## Ce qu'il y a 

#### Les entités

- il y a un admin (username, password)
- il y a des professionnels (username, password, status (numéro de licence ? Pour preuve ? => Donnée sensible))
- il y a des élèves (username, password, avatar, age, status)
- il y a des jeux (titre, categorie, description)
- il y a des thématiques (titre, couleur, image)
- il y a différents niveau de difficulté (label, couleur)
- il y a des résultats (title, date, points)

Pour le MVP, pas de notion d'experience, statistique
<!-- - il y a des résultats en fin de jeu (points)
- il y a des résultats globaux (note)
- il y a de l'expérience (temps, score) -->

#### Les relations 

- un professionnel peut accéder au profil d'élève
- un élève à un professionnel qui le suit
- un jeu à un niveau de difficulté
- un jeu à un theme
- un eleve à des resultats
- un jeu à des resultats
- un résultat est lié a un seul eleve
- un résultat est stocké dans une BDD
- un élève à plusieurs résultats (globaux)

#### Le reste 

- il y a une page de connexion pour les élèves
- il y a une page de connexion pour les professionnels
- le niveau de difficulté influe sur le résultat
- les résultats sont enregistrés dans la BDD


## Ce qu'il n'y a pas


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
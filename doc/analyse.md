# Analyse du besoin

## Ce qu'il y a 

#### Les entités

- il y a des users (username, password, avatar, age, status)
- il y a des jeux (titre, categorie, description)
- il y a des thématiques (titre, couleur, image)
- il y a différents niveau de difficulté (label, couleur)
- il y a des résultats (title, date, points)


#### Les relations 

- un professionnel peut accéder au profil d'élève
- un élève à un professionnel qui le suit
- un jeu à un niveau de difficulté
- un jeu à un thème
- un élève à des résultats
- un jeu à un résultat
- un résultat est stocké dans une BDD

#### Le reste 

- il y a une page de connexion les users
- le niveau de difficulté influe sur le résultat (coefficient)
- les résultats sont enregistrés dans la BDD


## Ce qu'il n'y a pas

Pour le MVP, pas de notion d'expérience, statistique.

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
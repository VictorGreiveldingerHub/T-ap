# Décrire les relations et la meilleure manière de les mettre en place

### game <-> difficulty
Relation 1:N

Rajout d'un champ "difficulty_id" dans la table game
=> FOREIGN KEY vers le champ id de la table game

### game <-> theme
relation N:N

Rajout d'une table de liaison "game_has_theme"

| game_id | theme_id |
|    1    |    8     |
|    1    |    18    |
|    2    |    18    |

le jeu 1 est associé aux themes 8 et 18
le theme 18 est associé aux jeu 1 et 2


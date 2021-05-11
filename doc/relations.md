# Décrire les relations et la meilleure manière de les mettre en place

### user <-> result

    - Type de relation : 1:N

    1 user possède N result(s)
    Ajouter une colonne dans la table result, qui renvoie à l'id de la table user


### game <-> result

    - Type de relation : 1:N
    1 game possède N result(s)
    Ajouter une colonne dans la table result, qui renvoie à l'id de la table game

### game <-> theme

    - Type de relation : N:N
    N game possèdent le theme X, et le game Y porte N theme
    Ajout d'une table de liaison "game_has_theme"

    Avec la structure suivante :

    | game_id | theme_id |
    |---------|----------|
    |    1    |    12    |
    |    1    |    3     |
    |    2    |    3     |

-> le game 1 est associé aux theme(s) 12 et 3
-> le theme 3 est associé aux game(s) 1 et 2

### game <-> difficulty

    - Type de relation : N:N
    N game possèdent la difficulty X, et le game Y porte N difficulty
    Ajout d'une table de liaison "game_has_difficulty"

    Avec la structure suivante :

    | game_id | difficulty_id |
    |---------|---------------|
    |    1    |      12       |
    |    1    |       3       |
    |    2    |       3       |

-> le game 1 est associé aux difficulty(s) 12 et 3
-> la difficulty 3 est associé aux game(s) 1 et 2

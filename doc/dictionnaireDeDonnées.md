# Dictionnaire de données

## Table user

| Champ | Type | Spécificités | Description |
|-------|------|--------------|-------------|
|  id   |  INT | PRIMARY_KEY, AUTO_INCREMENT (SERIAL), NOT NULL | L'identifiant de l'utilisateur |
|  firstname | TEXT | NOT NULL | Le prénom de l'utilisateur |
|  lastname | TEXT | NOT NULL | Le nom de l'utilisateur |
|  email | TEXT | NOT NULL | L'adresse mail de l'utilisateur |
|  password | TEXT | NOT NULL | Le mot de passe de l'utilisateur |
|  role | TEXT | NOT NULL, DEFAULT 'user' | Le rôle de l'utilisateur |
|  avatar | TEXT | | Prévu pour plus tard, possibilité de mettre une photo |
|  created_at | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création de l'utilisateur |
|  updated_at | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de modification de l'utilisateur |



## Table game

| Champ | Type | Spécificités | Description |
|-------|------|--------------|-------------|
|  id   |  INT | PRIMARY_KEY, AUTO_INCREMENT (SERIAL), NOT NULL | L'identifiant du jeu |
|  title | TEXT | NOT NULL | Le titre du jeu |
|  category | TEXT | - | La catégorie du jeu |
|  description | TEXT | - | La description du jeu |
|  color | TEXT | NOT NULL, DEFAULT '#000' | La couleur associé au jeu |
|  rule | TEXT | NOT NULL | Les règles du jeu |
|  created_at | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création du jeu |
|  updated_at | TIMESTAMP, NULL | Date de modification du jeu |



## Table result

| Champ | Type | Spécificités | Description |
|-------|------|--------------|-------------|
|  id   |  INT | PRIMARY_KEY, AUTO_INCREMENT (SERIAL), NOT NULL | L'identifiant du résultat |
|  game_title | TEXT | NOT NULL | Le titre du résultat |
|  date | DATE | - | La date du résultat |
|  point | INT | - | Le nombre de point |
|  game_id | INT | NOT NULL, REFERENCES"game"("id") | Clé étrangère |
|  user_id | INT | NOT NULL, REFERENCES"user"("id") | Clé étrangère |
|  created_at | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création du résultat |
|  updated_at | TIMESTAMP, NULL | Date de modification du résultat |


## Table difficulty

| Champ | Type | Spécificités | Description |
|-------|------|--------------|-------------|
|  id   |  INT | PRIMARY_KEY, AUTO_INCREMENT (SERIAL), NOT NULL | L'identifiant de la difficulté |
|  title | TEXT | NOT NULL | Le titre de la difficulté |
|  color | TEXT | NOT NULL, DEFAULT '#000' | La couleur associé de la difficulté |
|  coefficient | REAL | NOT NULL | Le coefficient de la difficulté |
|  created_at | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création de la difficulté |
|  updated_at | TIMESTAMP, NULL | Date de modification de la difficulté |


## Table theme

| Champ | Type | Spécificités | Description |
|-------|------|--------------|-------------|
|  id   |  INT | PRIMARY_KEY, AUTO_INCREMENT (SERIAL), NOT NULL | L'identifiant du thème |
|  title | TEXT | NOT NULL | Le titre du thème |
|  color | TEXT | NOT NULL, DEFAULT '#000' | La couleur associé du thème |
|  created_at | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création du thème |
|  updated_at | TIMESTAMP, NULL | Date de modification du thème |



## Table de liaison game_has_theme

| Champ | Type | Spécificités | Description |
|-------|------|--------------|-------------|
|  game_id   |  INT | PRIMARY_KEY, NOT NULL | L'identifiant du jeu |
|  theme_id | INT | PRIMARY_KEY, NOT NULL | L'identifiant du thème |
|  created_at | NOT NULL, DEFAULT CURRENT_TIMESTAMP | - |


## Table de liaison game_has_difficulty

| Champ | Type | Spécificités | Description |
|-------|------|--------------|-------------|
|  game_id   |  INT | PRIMARY_KEY, NOT NULL | L'identifiant du jeu |
|  difficulty_id | INT | PRIMARY_KEY, NOT NULL | L'identifiant de la difficulté |
|  created_at | NOT NULL, DEFAULT CURRENT_TIMESTAMP | - |
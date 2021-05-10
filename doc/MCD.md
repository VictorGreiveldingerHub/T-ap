# Avec l'utilisation de Mocodo

user: first_name, last_name, username, password, role, avatar
theme: title, color
difficulty: title, color, coefficient
result: title, date, point
game: title, category, description, color, rule

has_results, 11 user, 0N result
has, 0N game, 0N theme
has1, 0N game, 0N difficulty
has2, 0N game, 11 result

///////////////////////////////////////////////////
# Réordonné

theme: title, color
has2, 0N game, 11 result
result: title, date, point

has, 0N game, 0N theme
game: title, category, description, color, rule
has_results, 11 user, 0N result

difficulty: title, color, coefficient
has1, 0N game, 0N difficulty
user: first_name, last_name, username, password, role, avatar
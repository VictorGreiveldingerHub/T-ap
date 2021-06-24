# Avec l'utilisation de Mocodo

user: firstname, lastname, email, password, role, avatar
game: title, category, description, color, rule
theme: title, color
result: title, date, point
difficulty: title, color, coefficient

has, 1N game, 1N theme
has1, 1N game, 1N difficulty
has2, 0N game, 11 result
has_results, 0N user, 11 result

///////////////////////////////////////////////////
# Réordonné

theme: title, color
has, 1N game, 1N theme
user: firstname, lastname, email, password, role, avatar

has1, 1N game, 1N difficulty
game: title, description, color, rule
has_results, 0N user, 11 result

difficulty: title, color, coefficient
has2, 0N game, 11 result
result: title, date, point
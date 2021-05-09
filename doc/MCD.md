# Avec l'utilisation de Mocodo

user: first_name, last_name, username, password, role
game: title, category, description
theme: title, color
result: title, date, point
difficulty: title, color, coefficient

///////////////////////////////////////////////////

difficulty: title, color, coefficient
has_theme, 0N theme, 0N game
theme: title, color

has_difficulty, 0N game, 0N difficulty
game: title, category, description
has_result1, 0N game, 11 result

user: first_name, last_name, username, password, role
has_result, 0N user, 11 result
result: title, date, point
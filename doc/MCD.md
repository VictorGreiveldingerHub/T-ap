# Avec l'utilisation de Mocodo

admin: username, password, status
professional: username, password, status
student: username, password, status, age, avatar
game: title, category, description
theme: title, color
difficulty: label, coefficient, color
result: point, note, date
experience: time, score
graphique: time, result

has_difficulty, 0N game, 0N difficulty
has_student, 01 professional, 0N student
has_experience, 01 student, 0N experience
has_theme, 1N game, 0N theme
has_result, 11 game, 0N result
has_game, 0N student, 0N game
has_graphique, 01 student, 0N graphique
has_graphique1, 01 game, 11 graphique
has_graphique2, 01 professional, 0N graphique
--
-- Base de données : "Tap"
--

BEGIN;

--
-- Déchargement des données de la table "user"
--

INSERT INTO "user" ("id", "firstname", "lastname", "email", "password", "role", "avatar", "created_at", "updated_at") VALUES
(1, 'Léo', 'Greiveldinger', 'dejainscrit@tap.com', 'azerty', 'user', NULL, '2021-04-18 03:56:11', '2021-05-18 13:56:11'),
(2, 'Victor', 'Greiveldinger', 'vicgrei@back.fr', 'back2back', 'admin', NULL, '2021-04-18 03:56:11', '2021-05-18 13:56:11');


--
-- Déchargement des données de la table "game"
--

INSERT INTO "game" ("id", "title", "description", "color", "rule", "created_at", "updated_at") VALUES
(1, 'Rapid_Tap', 'Jeu pour entrainer sa vitesse de frappe', '#226D68', 'Appuye sur les bonnes touches au moment donné', '2021-07-12 22:02:23', NULL),
(2, 'Dexter_Tap', 'Jeu pour entrainer sa dextérité', '#FE9D15', 'Déplace ta souris et appuye sur les touches du clavier', '2021-03-08 13:53:01', NULL),
(3, 'Agilit_Tap', 'Jeu pour entrainer sa précision à la souris', '#C0F0EE', 'Déplace ta souris pour atteindre les cibles', '2021-05-18 13:56:11', NULL);


--
-- Déchargement des données de la table "result"
--

INSERT INTO "result" ("id", "game_title", "point", "game_id", "user_id", "created_at", "updated_at") VALUES
(1, 'Rapid_Tap', 713, 1, 2, '2021-04-02 17:28:09', NULL ),
(2, 'Rapid_Tap', 827, 1, 2, '2021-08-09 07:53:02', NULL),
(3, 'Dexter_Tap', 695, 2, 2, '2020-06-26 05:03:12', NULL),
(4, 'Agilit_Tap', 789, 3, 2, '2020-09-02 18:23:01', NULL),
(5, 'Rapid_Tap', 934, 1, 1, '2022-02-26 16:44:46', NULL),
(6, 'Agilit_Tap', 621, 3, 1, '2022-05-26 05:54:13', NULL),
(7, 'Dexter_Tap', 159, 2, 1,'2020-05-28 13:42:36', NULL),
(8, 'Rapid_Tap', 802, 1, 1, '2022-03-27 14:2:00', NULL),
(9, 'Dexter_Tap', 250, 2, 1, '2022-01-31 04:38:48', NULL),
(10, 'Dexter_Tap', 534, 2, 1, '2021-07-24 04:43:31', NULL),
(11, 'Rapid_Tap', 713, 1, 2, '2021-04-02 17:28:09', NULL ),
(12, 'Rapid_Tap', 827, 1, 2, '2021-08-09 07:53:02', NULL),
(13, 'Dexter_Tap', 695, 2, 2, '2020-06-26 05:03:12', NULL),
(14, 'Agilit_Tap', 789, 3, 2, '2020-09-02 18:23:01', NULL),
(15, 'Rapid_Tap', 934, 1, 2, '2022-02-26 16:44:46', NULL),
(16, 'Agilit_Tap', 621, 3, 2, '2022-05-26 05:54:13', NULL),
(17, 'Dexter_Tap', 159, 2, 2,'2020-05-28 13:42:36', NULL),
(18, 'Rapid_Tap', 802, 1, 1, '2022-03-27 14:2:00', NULL),
(19, 'Dexter_Tap', 250, 2, 2, '2022-01-31 04:38:48', NULL),
(20, 'Dexter_Tap', 534, 2, 1, '2021-07-24 04:43:31', NULL),
(21, 'Rapid_Tap', 827, 1, 2, '2021-08-09 07:53:02', NULL),
(22, 'Dexter_Tap', 695, 2, 1, '2020-06-26 05:03:12', NULL),
(23, 'Agilit_Tap', 789, 3, 1, '2020-09-02 18:23:01', NULL),
(24, 'Rapid_Tap', 934, 1, 2, '2022-02-26 16:44:46', NULL),
(25, 'Agilit_Tap', 621, 3, 2, '2022-05-26 05:54:13', NULL),
(26, 'Dexter_Tap', 159, 2, 2,'2020-05-28 13:42:36', NULL),
(27, 'Rapid_Tap', 802, 1, 2, '2022-03-27 14:2:00', NULL),
(28, 'Dexter_Tap', 250, 2, 1, '2022-01-31 04:38:48', NULL),
(29, 'Dexter_Tap', 534, 2, 1, '2021-07-24 04:43:31', NULL),
(30, 'Rapid_Tap', 827, 1, 1, '2021-08-09 07:56:02', NULL),
(31, 'Dexter_Tap', 695, 2, 2, '2020-06-26 05:13:12', NULL),
(32, 'Agilit_Tap', 789, 3, 1, '2020-09-02 18:27:01', NULL),
(33, 'Rapid_Tap', 934, 1, 1, '2022-02-26 16:40:46', NULL),
(34, 'Agilit_Tap', 621, 3, 1, '2022-05-26 05:14:13', NULL),
(35, 'Dexter_Tap', 159, 2, 2,'2020-05-28 13:49:36', NULL),
(36, 'Rapid_Tap', 802, 1, 2, '2022-03-27 14:13:00', NULL),
(37, 'Dexter_Tap', 250, 2, 1, '2022-01-31 04:48:48', NULL),
(38, 'Dexter_Tap', 534, 2, 2, '2021-07-24 04:13:31', NULL),
(39, 'Rapid_Tap', 827, 1, 1, '2021-08-09 07:59:02', NULL),
(40, 'Dexter_Tap', 695, 2, 1, '2020-06-26 05:53:12', NULL),
(41, 'Agilit_Tap', 789, 3, 2, '2020-09-02 18:33:01', NULL),
(42, 'Rapid_Tap', 934, 1, 2, '2022-02-26 16:49:46', NULL),
(43, 'Agilit_Tap', 621, 3, 1, '2022-05-26 05:14:13', NULL),
(44, 'Dexter_Tap', 159, 2, 1,'2020-05-28 13:43:36', NULL),
(45, 'Rapid_Tap', 802, 1, 2, '2022-03-27 14:19:00', NULL),
(46, 'Dexter_Tap', 250, 2, 1, '2022-01-31 04:58:48', NULL),
(47, 'Dexter_Tap', 534, 2, 2, '2021-07-24 04:13:31', NULL);

--
-- Déchargement des données de la table "difficulty"
--

INSERT INTO "difficulty" ("id", "title", "color", "coefficient", "created_at", "updated_at") VALUES
(1, 'Débutant', '#F7F7F7', 1, '2018-09-26 14:29:59', NULL),
(2, 'Confirmé', '#FEBB5F' , 2, '2018-09-26 14:29:59', NULL),
(3, 'Expert', '#FE9D15', 4, '2018-09-26 14:29:59', NULL);

--
-- Déchargement des données de la table "game_has_difficulty"
--

INSERT INTO "game_has_difficulty" ("game_id", "difficulty_id", "created_at") VALUES
(1, 1, '2018-09-26 14:29:59'),
(1, 2, '2018-09-26 14:29:59'),
(1, 3, '2018-09-26 14:29:59'),
(2, 1, '2018-09-26 14:29:59'),
(2, 2, '2018-09-26 14:29:59'),
(2, 3, '2018-09-26 14:29:59'),
(3, 1, '2018-09-26 14:29:59'),
(3, 2, '2018-09-26 14:29:59'),
(3, 3, '2018-09-26 14:29:59');

--
-- Déchargement des données de la table "theme"
--

INSERT INTO "theme" ("id", "title", "color", "created_at", "updated_at") VALUES
(1, 'Rapidité', '#FEEAA1', '2018-09-26 14:29:59', NULL),
(2, 'Précision', '#C0F0EE', '2018-09-26 14:29:59', NULL);

--
-- Déchargement des données de la table "game_has_tags"
--

INSERT INTO "game_has_theme" ("game_id", "theme_id", "created_at") VALUES
(1, 1, '2018-09-26 14:29:59'),
(2, 1, '2018-09-26 14:29:59'),
(2, 2, '2018-09-26 14:29:59'),
(3, 2, '2018-09-26 14:29:59');




COMMIT;
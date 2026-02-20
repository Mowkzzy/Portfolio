-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 20 fév. 2026 à 08:52
-- Version du serveur : 8.0.39
-- Version de PHP : 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `animaux`
--

CREATE TABLE `animaux` (
  `code_animal` int NOT NULL,
  `date_naissance` date NOT NULL,
  `date_achat` date NOT NULL,
  `code_espece` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `bassins`
--

CREATE TABLE `bassins` (
  `code_bassin` int NOT NULL,
  `numero_bassin` int NOT NULL,
  `code_piece` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `especes`
--

CREATE TABLE `especes` (
  `code_espece` int NOT NULL,
  `nom_espece` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `code_genre` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `familles`
--

CREATE TABLE `familles` (
  `code_famille` int NOT NULL,
  `nom_famille` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `code_ordre` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `genres`
--

CREATE TABLE `genres` (
  `code_genre` int NOT NULL,
  `nom_genre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `code_famille` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ordres`
--

CREATE TABLE `ordres` (
  `code_ordre` int NOT NULL,
  `nom_ordre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `piece`
--

CREATE TABLE `piece` (
  `code_piece` int NOT NULL,
  `numero_piece` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `soins`
--

CREATE TABLE `soins` (
  `code_soin` int NOT NULL,
  `type_soin` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `animaux`
--
ALTER TABLE `animaux`
  ADD PRIMARY KEY (`code_animal`),
  ADD KEY `Animaux_code_espece_FK` (`code_espece`);

--
-- Index pour la table `bassins`
--
ALTER TABLE `bassins`
  ADD PRIMARY KEY (`code_bassin`),
  ADD KEY `Bassins_code_piece_FK` (`code_piece`);

--
-- Index pour la table `especes`
--
ALTER TABLE `especes`
  ADD PRIMARY KEY (`code_espece`),
  ADD KEY `Especes_code_genre_FK` (`code_genre`);

--
-- Index pour la table `familles`
--
ALTER TABLE `familles`
  ADD PRIMARY KEY (`code_famille`),
  ADD KEY `Familles_code_ordre_FK` (`code_ordre`);

--
-- Index pour la table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`code_genre`),
  ADD KEY `Genres_code_famille_FK` (`code_famille`);

--
-- Index pour la table `ordres`
--
ALTER TABLE `ordres`
  ADD PRIMARY KEY (`code_ordre`);

--
-- Index pour la table `piece`
--
ALTER TABLE `piece`
  ADD PRIMARY KEY (`code_piece`);

--
-- Index pour la table `soins`
--
ALTER TABLE `soins`
  ADD PRIMARY KEY (`code_soin`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `animaux`
--
ALTER TABLE `animaux`
  ADD CONSTRAINT `Animaux_code_espece_FK` FOREIGN KEY (`code_espece`) REFERENCES `especes` (`code_espece`);

--
-- Contraintes pour la table `bassins`
--
ALTER TABLE `bassins`
  ADD CONSTRAINT `Bassins_code_piece_FK` FOREIGN KEY (`code_piece`) REFERENCES `piece` (`code_piece`);

--
-- Contraintes pour la table `especes`
--
ALTER TABLE `especes`
  ADD CONSTRAINT `Especes_code_genre_FK` FOREIGN KEY (`code_genre`) REFERENCES `genres` (`code_genre`);

--
-- Contraintes pour la table `familles`
--
ALTER TABLE `familles`
  ADD CONSTRAINT `Familles_code_ordre_FK` FOREIGN KEY (`code_ordre`) REFERENCES `ordres` (`code_ordre`);

--
-- Contraintes pour la table `genres`
--
ALTER TABLE `genres`
  ADD CONSTRAINT `Genres_code_famille_FK` FOREIGN KEY (`code_famille`) REFERENCES `familles` (`code_famille`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

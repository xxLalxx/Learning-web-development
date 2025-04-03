-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2025 at 07:18 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `Sl_no` int(10) NOT NULL,
  `Item` varchar(25) NOT NULL,
  `Price` int(20) NOT NULL,
  `Quantity` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`Sl_no`, `Item`, `Price`, `Quantity`) VALUES
(1, 'Chicken Biriyani', 200, 200),
(2, 'Mutton Biriyani', 250, 100),
(3, 'Beef Biriyani', 220, 150),
(4, 'Pork Biriyani', 250, 80),
(5, 'Chicken Biriyani', 200, 100),
(6, 'Chicken Mandhi', 200, 200),
(7, 'Mutton Mandhi', 270, 100),
(8, 'Beef Mandhi', 250, 150),
(9, 'Honey Chicken Mandhi', 220, 100),
(10, 'Alfaham Mandhi', 220, 100),
(11, 'Afghan Mandhi', 240, 50),
(12, 'Pepper Chicken Mandhi', 220, 80),
(13, 'Malbari Chicken Mandhi', 220, 70),
(14, 'Dragon Chicken Mandhi', 240, 80);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`Sl_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `Sl_no` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

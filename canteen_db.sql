-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2020 at 05:56 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `canteen_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` varchar(30) NOT NULL,
  `Item_name` varchar(30) NOT NULL,
  `Item_price` varchar(30) NOT NULL,
  `Item_quantity` varchar(30) NOT NULL,
  `total_item_price` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `Item_name`, `Item_price`, `Item_quantity`, `total_item_price`) VALUES
('', 'Paratha', '50 Rs', '1', ''),
('', 'Pure Veg Thali', '110 Rs', '1', ''),
('', 'Spicy Chesse VadaPav', '25 Rs', '1', ''),
('', 'Coffee Cup', '20 Rs', '1', ''),
('', 'Spicy Chesse VadaPav', '25 Rs', '1', ''),
('', 'Coffee Cup', '20 Rs', '1', ''),
('123457', 'Spicy Chesse VadaPav', '25 Rs', '1', ''),
('123457', 'Coffee Cup', '20 Rs', '1', ''),
('123457', 'Spicy Chesse VadaPav', '25 Rs', '1', ''),
('123457', 'Coffee Cup', '20 Rs', '5', ''),
('123457', 'Coffee Cup', '20 Rs', '1', '20'),
('123457', 'Spicy Chesse VadaPav', '25 Rs', '5', '125');

-- --------------------------------------------------------

--
-- Table structure for table `suggestion`
--

CREATE TABLE `suggestion` (
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `text_area` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `suggestion`
--

INSERT INTO `suggestion` (`name`, `email`, `phone`, `text_area`) VALUES
('dipak', 'dipak717gautam@gmail.com', '2345324324', 'hello omkar'),
('dipak', 'dipak717gautam@gmail.com', '2345324324', 'hello omkar'),
('dipak', 'dipak717gautam@gmail.com', '2345324324', 'hello omkar');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

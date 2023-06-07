-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 07-06-2023 a las 19:17:43
-- Versión del servidor: 5.7.34
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pymex`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(5) NOT NULL,
  `Login` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `clave` varchar(500) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Correo` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL COMMENT 'correo electronico',
  `Privilegio` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL COMMENT 'Tipo de usuario, 0=super,1=admin, 2=usuario normal',
  `TokenUsuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `verificado` int(1) NOT NULL DEFAULT '0',
  `recPass` int(1) NOT NULL DEFAULT '0',
  `TokenPass` varchar(100) COLLATE utf8_spanish2_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `Login`, `clave`, `nombre`, `Correo`, `Privilegio`, `TokenUsuario`, `verificado`, `recPass`, `TokenPass`) VALUES
(1, 'PYME', '$argon2i$v=19$m=2048,t=4,p=3$WjZzU1dJZDVuYmh1QWxZVw$fCxkjwEUVBE+WkKgyoNTixCM5O1wdL2gmXuXW5sk1p0', 'PYME', 'pyme@hotmail.com', '0', '0c73965ab2e3fbfa9c2783a312772a76', 0, 0, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

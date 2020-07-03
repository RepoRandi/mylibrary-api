-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Jul 2020 pada 15.58
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libraryapps`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `myauthor`
--

CREATE TABLE `myauthor` (
  `id` int(11) NOT NULL,
  `author` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `myauthor`
--

INSERT INTO `myauthor` (`id`, `author`) VALUES
(1, 'Despersa'),
(2, 'Pidi Baiq'),
(3, 'Chelsea Karina');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mybook`
--

CREATE TABLE `mybook` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(300) NOT NULL,
  `image` varchar(50) NOT NULL,
  `id_genre` int(11) NOT NULL,
  `id_author` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mybook`
--

INSERT INTO `mybook` (`id`, `title`, `description`, `image`, `id_genre`, `id_author`, `status`, `created_at`, `updated_at`) VALUES
(63, 'Cinderella And The Boss', 'Anzela Cinderella Putri\r\nMenurut dongeng, meski awalnya apes, Cinderella akan mendapatkan keberuntungan dan kebahagiaannya bersama pangeran tampan nan baik. Tapi boro-boro beruntung, yang ada malah buntung! Entah kebetulan atau takdir, bukan pangeran yang dia temui, tapi sosok lelaki yang galak. Unt', 'cinderella-1592108093910.jpg', 1, 1, 'availible', '2020-06-14 04:14:53', '2020-06-14 04:14:53'),
(64, 'Milea Suara Dari Dilan', '“Dilan memberi penggambaran lain dari sebuah penaklukan cinta & bagaimana indahnya cinta sederhana anak zaman dahulu.” @refaniris\r\n“Cuma satu yang kuinginkan, aku ingin cowok seperti Dilan.” @_SLovaFC\r\n“Dilan brengsek! Dia selalu tahu caranya menjadi pusat perhatian, bahkan ketika jadi buku, setiap ', 'milea-1592108165069.JPG', 1, 2, 'availible', '2020-06-14 04:16:05', '2020-06-14 04:16:05'),
(65, 'Never Be Alone', 'Setelah meninggalkan kalian, aku memutuskan untuk kembali. Apa kali ini aku bisa bahagia bersama kalian? Aku tahu pergi meninggalkan masalah terasa menyakitkan. Tapi, kembali untuk menyelesaikan masalah lama lebih menyesakkan lagi.', 'milea-1592276737798.JPG', 1, 3, 'availible', '2020-06-14 04:16:51', '2020-06-14 04:16:51'),
(70, 'Resident Evil', 'Resident Evil, atau di Jepang bernama Biohazard, ialah seri permainan video dan waralaba media yang terdiri dari buku komik, novelisasi, films, dan lain-lain. Dikembangkan oleh Capcom dan dibentuk oleh Shinji Mikami, seri ini mencapai 40 juta permainan selepas Mei 2009.', 'Resident Evil-1592444330799.jpg', 2, 3, 'availible', '2020-06-18 01:38:50', '2020-06-18 01:38:50'),
(71, 'Insidious', 'Insidious adalah serangkaian film horor Amerika yang dibuat oleh James Wan dan Leigh Whannell. Ada empat film dalam waralaba - Insidious, Insidious: Bab 2, Insidious: Bab 3, dan Insidious: The Last Key - yang telah meraup total $ 539 juta di seluruh dunia dengan anggaran gabungan sebesar $ 26,5 juta', 'insidious-1592444400242.jpg', 2, 3, 'availible', '2020-06-18 01:40:00', '2020-06-18 01:40:00'),
(72, 'Insidious 5', 'Insidious adalah serangkaian film horor Amerika yang dibuat oleh James Wan dan Leigh Whannell. Ada empat film dalam waralaba - Insidious, Insidious: Bab 2, Insidious: Bab 3, dan Insidious: The Last Key - yang telah meraup total $ 539 juta di seluruh dunia dengan anggaran gabungan sebesar $ 26,5 juta', '', 2, 3, 'availible', '2020-06-18 03:59:58', '2020-06-18 03:59:58'),
(73, 'Insidious 7', 'Insidious adalah serangkaian film horor Amerika yang dibuat oleh James Wan dan Leigh Whannell. Ada empat film dalam waralaba - Insidious, Insidious: Bab 2, Insidious: Bab 3, dan Insidious: The Last Key - yang telah meraup total $ 539 juta di seluruh dunia dengan anggaran gabungan sebesar $ 26,5 juta', '', 2, 3, 'availible', '2020-06-18 04:03:44', '2020-06-18 04:03:44'),
(74, 'Insidious 8', 'Insidious adalah serangkaian film horor Amerika yang dibuat oleh James Wan dan Leigh Whannell. Ada empat film dalam waralaba - Insidious, Insidious: Bab 2, Insidious: Bab 3, dan Insidious: The Last Key - yang telah meraup total $ 539 juta di seluruh dunia dengan anggaran gabungan sebesar $ 26,5 juta', '', 2, 3, 'availible', '2020-06-18 04:04:37', '2020-06-18 04:04:37'),
(75, 'Insidious 9', 'Insidious adalah serangkaian film horor Amerika yang dibuat oleh James Wan dan Leigh Whannell. Ada empat film dalam waralaba - Insidious, Insidious: Bab 2, Insidious: Bab 3, dan Insidious: The Last Key - yang telah meraup total $ 539 juta di seluruh dunia dengan anggaran gabungan sebesar $ 26,5 juta', '', 2, 3, 'availible', '2020-06-18 04:24:22', '2020-06-18 04:24:22'),
(76, 'Insidious 10', 'Insidious adalah serangkaian film horor Amerika yang dibuat oleh James Wan dan Leigh Whannell. Ada empat film dalam waralaba - Insidious, Insidious: Bab 2, Insidious: Bab 3, dan Insidious: The Last Key - yang telah meraup total $ 539 juta di seluruh dunia dengan anggaran gabungan sebesar $ 26,5 juta', '', 2, 3, 'availible', '2020-06-18 04:24:32', '2020-06-18 04:24:32'),
(77, 'Insidious 10', 'Insidious adalah serangkaian film horor Amerika yang dibuat oleh James Wan dan Leigh Whannell. Ada empat film dalam waralaba - Insidious, Insidious: Bab 2, Insidious: Bab 3, dan Insidious: The Last Key - yang telah meraup total $ 539 juta di seluruh dunia dengan anggaran gabungan sebesar $ 26,5 juta', 'milea-1592454437630.JPG', 2, 3, 'availible', '2020-06-18 04:27:17', '2020-06-18 04:27:17'),
(79, 'Insidious 10', 'Insidious adalah serangkaian film horor Amerika yang dibuat oleh James Wan dan Leigh Whannell. Ada empat film dalam waralaba - Insidious, Insidious: Bab 2, Insidious: Bab 3, dan Insidious: The Last Key - yang telah meraup total $ 539 juta di seluruh dunia dengan anggaran gabungan sebesar $ 26,5 juta', 'milea-1592471242509.JPG', 2, 3, 'availible', '2020-06-18 09:07:22', '2020-06-18 09:07:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mygenre`
--

CREATE TABLE `mygenre` (
  `id` int(11) NOT NULL,
  `genre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mygenre`
--

INSERT INTO `mygenre` (`id`, `genre`) VALUES
(1, 'Romance'),
(2, 'Horror');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`, `updated_at`) VALUES
(2, 'randi', '$2b$10$.dZVUDP5MoDrR/7WMTVhiOUKeM8m8GEunmvexo/HH.H9.X1sjwHtK', 1, '2020-06-13 04:38:21', '2020-06-13 04:38:21'),
(6, 'randi1', '$2b$10$05IjnH4J92nniqALh1isA.PpS7OKG98aAO.QHrgqFif612Tt5f25S', 1, '2020-06-13 05:41:50', '2020-06-13 05:41:50'),
(7, 'randi', '$2b$10$WH6kQ81IRWNRGiBWrkvgCufWpsw6.bez0NexwXWa82gU.sKGzwRbm', 1, '2020-06-17 10:09:46', '2020-06-17 10:09:46'),
(8, 'randi', '$2b$10$Xo4Wlb8uRFpsfk7LaSvSa.bMIhoxFswhiuAkkQn80IwYJwx.pvqoS', 1, '2020-06-17 10:13:05', '2020-06-17 10:13:05'),
(9, 'rama', '$2b$10$0sui7JVlWphCrzPZs7O4Rep/wOx0Mf5qc8doOCaN9Sv90v7TNBFX.', 1, '2020-06-17 10:13:47', '2020-06-17 10:13:47'),
(10, 'arka', '$2b$10$clhXgjYM9mUPF70mCGQZleiPjycaSmS1i/tst9wSZA7efzRm3Ak1y', 1, '2020-06-18 09:06:12', '2020-06-18 09:06:12'),
(11, 'randi@gmail.com', '$2b$10$w8VlkfODvWp6mMIf8tfYs.H8RvkDVQpRzEaY3CwD/gxhNiSJ08rwK', 1, '2020-06-28 14:58:14', '2020-06-28 14:58:14');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `myauthor`
--
ALTER TABLE `myauthor`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `mybook`
--
ALTER TABLE `mybook`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `mygenre`
--
ALTER TABLE `mygenre`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `mybook`
--
ALTER TABLE `mybook`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

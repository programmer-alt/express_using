--
-- PostgreSQL database dump
--

-- Dumped from database version 17rc1
-- Dumped by pg_dump version 17rc1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE IF NOT EXISTS public.cities (
    id SERIAL PRIMARY KEY,
    city_name text
);
--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cities (id, city_name) VALUES (10, 'Казань');
INSERT INTO public.cities (id, city_name) VALUES (11, 'Челябинск');
INSERT INTO public.cities (id, city_name) VALUES (12, 'Ростов-на-Дону');
INSERT INTO public.cities (id, city_name) VALUES (13, 'Омск');
INSERT INTO public.cities (id, city_name) VALUES (14, 'Самара');
INSERT INTO public.cities (id, city_name) VALUES (15, 'Краснодар');
INSERT INTO public.cities (id, city_name) VALUES (16, 'Воронеж');
INSERT INTO public.cities (id, city_name) VALUES (17, 'Пермь');
INSERT INTO public.cities (id, city_name) VALUES (18, 'Владивосток');
INSERT INTO public.cities (id, city_name) VALUES (19, 'Уфа');
INSERT INTO public.cities (id, city_name) VALUES (20, 'Тюмень');
INSERT INTO public.cities (id, city_name) VALUES (21, 'Барнаул');
INSERT INTO public.cities (id, city_name) VALUES (22, 'Оренбург');
INSERT INTO public.cities (id, city_name) VALUES (23, 'кореновск');
INSERT INTO public.cities (id, city_name) VALUES (24, 'Ростов');
INSERT INTO public.cities (id, city_name) VALUES (25, 'Ливерпуль');
INSERT INTO public.cities (id, city_name) VALUES (26, 'Волжск');
INSERT INTO public.cities (id, city_name) VALUES (27, 'Крымск');
INSERT INTO public.cities (id, city_name) VALUES (28, 'Оймякон');
INSERT INTO public.cities (id, city_name) VALUES (29, 'Тихорецк');
INSERT INTO public.cities (id, city_name) VALUES (30, 'Ливерпуль ');
INSERT INTO public.cities (id, city_name) VALUES (31, 'Куршавель');
INSERT INTO public.cities (id, city_name) VALUES (43, 'тюмень');
INSERT INTO public.cities (id, city_name) VALUES (50, 'Липецк ');
INSERT INTO public.cities (id, city_name) VALUES (51, 'Томск');


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cities_id_seq', 51, true);


--
-- PostgreSQL database dump complete
--


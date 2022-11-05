--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public2; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public2;


ALTER SCHEMA public2 OWNER TO postgres;

--
-- Name: SCHEMA public2; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public2 IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: CATEGORIA; Type: TABLE; Schema: public2; Owner: postgres
--

CREATE TABLE public2."CATEGORIA" (
    "ID_CATEGORIA" integer NOT NULL,
    "NOME_CATEGORIA" character(50),
    "DESCRICAO_CATEGORIA" character(100)
);


ALTER TABLE public2."CATEGORIA" OWNER TO postgres;

--
-- Name: USUARIO; Type: TABLE; Schema: public2; Owner: postgres
--

CREATE TABLE public2."USUARIO" (
    "ID_USUARIO" integer NOT NULL,
    "NOME_USUARIO" character(50)
);


ALTER TABLE public2."USUARIO" OWNER TO postgres;

--
-- Name: CLIENTE; Type: TABLE; Schema: public2; Owner: postgres
--

CREATE TABLE public2."CLIENTE" (
    "ID_CLIENTE" integer NOT NULL
)
INHERITS (public2."USUARIO");


ALTER TABLE public2."CLIENTE" OWNER TO postgres;

--
-- Name: COLECAO; Type: TABLE; Schema: public2; Owner: postgres
--

CREATE TABLE public2."COLECAO" (
    "ID_COLECAO" integer NOT NULL,
    "ID_LOJA" integer NOT NULL,
    "NOME_COLECAO" character(50),
    "ID_PRODUTO" integer NOT NULL
);


ALTER TABLE public2."COLECAO" OWNER TO postgres;

--
-- Name: LOJA; Type: TABLE; Schema: public2; Owner: postgres
--

CREATE TABLE public2."LOJA" (
    "ID_LOJA" integer NOT NULL,
    "NOME_LOJA" character(50),
    "ID_SEGMENTO" integer
);


ALTER TABLE public2."LOJA" OWNER TO postgres;

--
-- Name: PRODUTO; Type: TABLE; Schema: public2; Owner: postgres
--

CREATE TABLE public2."PRODUTO" (
    "ID_PRODUTO" integer NOT NULL,
    "NOME_PRODUTO" character(50),
    "ID_CATEGORIA" integer,
    "DESCRICAO" character(100),
    "DESCONTO" numeric(10,2),
    "ESTOQUE" integer,
    "PRECO" numeric(10,2),
    "URL_PRODUTO" character(300)
);


ALTER TABLE public2."PRODUTO" OWNER TO postgres;

--
-- Name: SEGMENTO; Type: TABLE; Schema: public2; Owner: postgres
--

CREATE TABLE public2."SEGMENTO" (
    "ID_SEGMENTO" integer NOT NULL,
    "NOME_SEGMENTO" character(50)
);


ALTER TABLE public2."SEGMENTO" OWNER TO postgres;

--
-- Name: VENDEDOR; Type: TABLE; Schema: public2; Owner: postgres
--

CREATE TABLE public2."VENDEDOR" (
    "ID_VENDEDOR" integer NOT NULL
)
INHERITS (public2."USUARIO");


ALTER TABLE public2."VENDEDOR" OWNER TO postgres;

--
-- Name: CATEGORIA CATEGORIA_pkey; Type: CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."CATEGORIA"
    ADD CONSTRAINT "CATEGORIA_pkey" PRIMARY KEY ("ID_CATEGORIA");


--
-- Name: CLIENTE CLIENTE_pkey; Type: CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."CLIENTE"
    ADD CONSTRAINT "CLIENTE_pkey" PRIMARY KEY ("ID_CLIENTE");


--
-- Name: COLECAO COLECAO_pkey; Type: CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."COLECAO"
    ADD CONSTRAINT "COLECAO_pkey" PRIMARY KEY ("ID_COLECAO", "ID_LOJA", "ID_PRODUTO");


--
-- Name: LOJA LOJA_pkey; Type: CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."LOJA"
    ADD CONSTRAINT "LOJA_pkey" PRIMARY KEY ("ID_LOJA");


--
-- Name: PRODUTO PRODUTO_pkey; Type: CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."PRODUTO"
    ADD CONSTRAINT "PRODUTO_pkey" PRIMARY KEY ("ID_PRODUTO");


--
-- Name: SEGMENTO SEGMENTO_pkey; Type: CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."SEGMENTO"
    ADD CONSTRAINT "SEGMENTO_pkey" PRIMARY KEY ("ID_SEGMENTO");


--
-- Name: USUARIO USUARIO_pkey; Type: CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."USUARIO"
    ADD CONSTRAINT "USUARIO_pkey" PRIMARY KEY ("ID_USUARIO");


--
-- Name: VENDEDOR VENDEDOR_pkey; Type: CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."VENDEDOR"
    ADD CONSTRAINT "VENDEDOR_pkey" PRIMARY KEY ("ID_VENDEDOR");


--
-- Name: PRODUTO ID_CATEGORIA; Type: FK CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."PRODUTO"
    ADD CONSTRAINT "ID_CATEGORIA" FOREIGN KEY ("ID_CATEGORIA") REFERENCES public2."CATEGORIA"("ID_CATEGORIA");


--
-- Name: COLECAO ID_LOJA; Type: FK CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."COLECAO"
    ADD CONSTRAINT "ID_LOJA" FOREIGN KEY ("ID_LOJA") REFERENCES public2."LOJA"("ID_LOJA");


--
-- Name: COLECAO ID_PRODUTO; Type: FK CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."COLECAO"
    ADD CONSTRAINT "ID_PRODUTO" FOREIGN KEY ("ID_PRODUTO") REFERENCES public2."PRODUTO"("ID_PRODUTO") NOT VALID;


--
-- Name: LOJA ID_SEGMENTO; Type: FK CONSTRAINT; Schema: public2; Owner: postgres
--

ALTER TABLE ONLY public2."LOJA"
    ADD CONSTRAINT "ID_SEGMENTO" FOREIGN KEY ("ID_SEGMENTO") REFERENCES public2."SEGMENTO"("ID_SEGMENTO");


--
-- PostgreSQL database dump complete
--


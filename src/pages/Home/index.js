import React, { useState, useEffect } from 'react';
import { Form, Input, Select as RokectSelect } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { FaLinkedin, FaGit, FaThumbsUp } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import api from '../../services/api';
import { Divcountry, Groupcountry, Rodape } from './styles';

export default function Home() {
  const [country, setCountry] = useState([]);
  const [countryPopulacao, setCountryPopulacao] = useState(0);
  const [selecionado, setSelecionado] = useState('');

  useEffect(() => {
    async function loadPais() {
      const response = await api.get('/country?_sort=populacao&_order=desc');

      if (response.data) {
        setCountry(response.data);
      }
    }
    loadPais();
    // eslint-disable-next-line
  }, [selecionado]);

  async function handleSubmit() {
    if (selecionado === undefined || selecionado.toString() === '') {
      Swal.fire('Favor selecionar um pais!');
    } else {
      const dados = await api.get(`country/${selecionado}`);

      if (dados.data) {
        const response = await api.put(`country/${selecionado}`, {
          id: selecionado,
          title: dados.data.title,
          populacao: Number(countryPopulacao),
        });

        if (response.data) {
          const atualiza = await api.get(
            '/country?_sort=populacao&_order=desc'
          );

          if (atualiza.data) {
            setCountry(atualiza.data);
          }

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Salvo com sucesso',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  }

  async function handleChangeCountry(e) {
    setSelecionado(e.target.value);
    const response = await api.get(`country/${e.target.value}`);

    if (response.data) {
      setCountryPopulacao(response.data.populacao);
    }
  }

  async function handleDelete() {
    await api.delete(`country/${selecionado}`);
    Swal.fire('Deletado!', 'Seu item foi deletado.', 'success');
    setSelecionado('');
  }

  async function handleRemoverPais() {
    if (selecionado) {
      Swal.fire({
        title: 'Você tem certeza?',
        text: 'Você não poderá reverter isso!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, apague!',
      }).then(result => {
        if (result.value) {
          handleDelete();
        }
      });
    } else {
      Swal.fire('Favor selecione um país para excluir!');
    }
  }

  return (
    <>
      <Divcountry>
        <Form onSubmit={handleSubmit}>
          <Groupcountry>
            <RokectSelect
              name="title"
              options={country}
              placeholder="Selecione o país:"
              onChange={e => handleChangeCountry(e)}
            />
            <button
              className="btnRemover"
              type="button"
              alt="Remover item"
              onClick={handleRemoverPais}
            >
              <MdDelete size={30} />
            </button>
          </Groupcountry>
          <Input
            name="teste"
            type="number"
            value={countryPopulacao}
            onChange={e => setCountryPopulacao(e.target.value)}
            placeholder="Digite a população aqui"
          />
          <button className="btnSalvar" type="submit">
            <FaThumbsUp size={100} />
            Salvar
          </button>
        </Form>
      </Divcountry>
      <Rodape>
        <a href="https://www.linkedin.com/in/rafael-teles-vital-9002946a/">
          <FaLinkedin size={100} color="#FFF" />
        </a>
        <a href="https://github.com/DevTeles/eventials">
          <FaGit size={100} color="#FFF" />
        </a>
      </Rodape>
    </>
  );
}

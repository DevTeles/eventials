import React, { useState, useEffect } from 'react';
import { Form, Input, Select as RokectSelect } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Divcountry, Groupcountry } from './styles';

export default function Home() {
  const [country, setCountry] = useState([]);
  const [countryPopulacao, setCountryPopulacao] = useState('');
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
  }, []);

  async function handleSubmit() {
    if (selecionado === undefined || selecionado.toString() === '') {
      toast.info('Favor selecionar um pais!', {
        position: 'top-right',
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      const dados = await api.get(`country/${selecionado}`);

      if (dados.data) {
        const response = await api.put(`country/${selecionado}`, {
          id: selecionado,
          title: dados.data.title,
          populacao: countryPopulacao,
        });

        if (response.data) {
          const atualiza = await api.get(
            '/country?_sort=populacao&_order=desc'
          );

          if (atualiza.data) {
            setCountry(atualiza.data);
          }

          toast.success('Salvo com sucesso!', {
            position: 'top-right',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          setCountryPopulacao('');
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

  async function handleRemoverPais() {
    const response = await api.delete(`country/${selecionado}`);

    if (response.data) {
      toast.success('Pais removido com sucesso!', {
        position: 'top-right',
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    const atualiza = await api.get('/country?_sort=populacao&_order=desc');

    if (atualiza.data) {
      setCountry(atualiza.data);
    }
  }

  return (
    <Divcountry>
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
          onClick={handleRemoverPais}
        >
          Remover item
        </button>
      </Groupcountry>

      <Form onSubmit={handleSubmit}>
        <Input
          name="teste"
          value={countryPopulacao}
          onChange={e => setCountryPopulacao(e.target.value)}
          placeholder="Digite a população aqui"
        />
        <button className="btnSalvar" type="submit">
          Salvar
        </button>
      </Form>
    </Divcountry>
  );
}

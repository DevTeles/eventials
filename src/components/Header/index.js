import React from 'react';
import { Link } from 'react-router-dom';

import { FaUser, FaReact } from 'react-icons/fa';

import { Container, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <FaReact size={100} color="#FFF" />
      </Link>

      <Profile to="/">
        <div>
          <strong>Rafael Teles Vital</strong>
          <span>cel:(18) 99635-5262</span>
        </div>
        <FaUser size={36} color="#FFF" />
      </Profile>
    </Container>
  );
}

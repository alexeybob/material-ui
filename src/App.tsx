import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import Routes from './samples/Routes';

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              @ab Material UI
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-shrink-0">
        <SContainer className="container">
          <Routes />
        </SContainer>
      </main>
    </Router>
  );
};

export default App;

const SContainer = styled.div`
  margin-top: 6rem;
`;

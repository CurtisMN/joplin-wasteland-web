import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/nav';
import Layout from '../components/layout';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption: null};
  }

  newActiveTab(tabName) {
    this.setState(state => {
      state.selectedOption = tabName;
      return state;
    });
  }
  deactivateTab() {
    this.setState(state => {
      state.selectedOption = null;
      return state;
    });
  }

  render() {
    return (
      <Layout>
        <Link href="/rules">
          <p
            onMouseEnter={() => this.newActiveTab('rules')}
            onMouseLeave={() => this.deactivateTab()}
            className={
              this.state.selectedOption == 'rules'
                ? 'selected-term-text'
                : 'termtext'
            }>
            Rules of Engangement
          </p>
        </Link>
        <p
          onMouseEnter={() => this.newActiveTab('photos')}
          onMouseLeave={() => this.deactivateTab()}
          className={
            this.state.selectedOption == 'photos'
              ? 'selected-term-text'
              : 'termtext'
          }>
          Photos of Wata Pa
        </p>

        <p
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            padding: 25 + 'px',
          }}
          className="termtext">
          {this.state.selectedOption}
        </p>
      </Layout>
    );
  }
}

export default Home;

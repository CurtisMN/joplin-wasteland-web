import React from 'react';
import Gallery from 'react-photo-gallery';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/nav';
import Layout from '../components/layout';
import photosList from '../components/photosList';

class Photos extends React.Component {
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
      state.activeSection = '';
      return state;
    });
  }

  newActiveSection(newSectionName) {
    this.setState(state => {
      state.activeSection = newSectionName;
      return state;
    });
  }

  render() {
    return (
      <Layout>
        <Link href="/">
          <p
            onMouseEnter={() => this.newActiveTab('back')}
            onMouseLeave={() => this.deactivateTab()}
            className={
              this.state.selectedOption == 'back'
                ? 'selected-term-text'
                : 'termtext'
            }>
            {'< BACK'}
          </p>
        </Link>
        <p className="termtext">{'Photos decrypted'}</p>
        <Gallery direction={'row'} photos={photosList} />
      </Layout>
    );
  }
}

export default Photos;

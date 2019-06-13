import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation, Router } from '../i18n'

import Title from '../components/Title'
import Footer from '../components/Footer'

class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer'],
    }
  }

  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <Title />
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('change-locale')}
        </button>

        <button
          type='button'
          onClick={() => Router.push('/second-page')}
        >
          {t('to-second-page')}
        </button>

        <Footer />
      </React.Fragment>
    )
  }
}

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)

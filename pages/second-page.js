import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation, Router } from '../i18n'

class SecondPage extends React.Component {

  static async getInitialProps() {
    return {
      namespacesRequired: ['second-page'],
    }
  }

  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <h1>{t('h1')}</h1>
        <button
          type='button'
          onClick={() => Router.push('/')}
        >
          {t('back-to-home')}
        </button>
      </React.Fragment>
    )
  }
}

SecondPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('second-page')(SecondPage)

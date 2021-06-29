import * as React from "react"
import "./languages.scss"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  fr: "FR",
}

const Languages = () => {
  return (
    <div className="languages">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                display: currentLocale === language ? `none` : `flex`,
              }}
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Languages

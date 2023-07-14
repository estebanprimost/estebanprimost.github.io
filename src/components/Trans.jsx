import i18next from 'i18next'
import { Trans as BaseTrans, useTranslation } from 'react-i18next'

export default function Trans(props) {
  return <BaseTrans {...props} i18n={i18next} />
}

import { t } from 'testcafe';

import { loginDetail } from '../shared/presets.js'

export const login = async () => {

    await t
        .typeText(loginDetail.username.target, loginDetail.username.text)
        .typeText(loginDetail.password.target, loginDetail.password.text)
        .click(loginDetail.action)

}
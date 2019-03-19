const assert = require('assert');

describe('STEP ONE:', () => {
    it('Log In', () => {
        browser.url('https://demoapp.strongqa.com/users/sign_in')

        $('#user_email').setValue('ballisticman@gmail.com')
		$('#user_password').setValue('12345678')
		$('input[type=submit]').click()
		 browser.pause(2000)
		 assert.containsText('header', 'LOGOUT')
    })
})

describe('STEP TWO:', () => {
    it('Log In', () => {
        browser.url('https://demoapp.strongqa.com')

        const LogoutLink = $('=Logout')
		LogoutLink.click()
		browser.pause(2000)
		assert.containsText('header', 'LOGIN')
    })
})


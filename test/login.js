// @ts-nocheck
// for mern-secure
describe('Login Page', () => {
  it('should let you log in', () => {
    browser.url('/')
    browser.setValue('input[name="username"]', 'test@test.com')
    browser.setValue('input[name="password"]', 'test')
    // browser.submitForm('form[class="form-signin"]')
    browser.click('button[class="btn btn-lg btn-primary btn-block"]')
    // let logoutBtn = $('button[class="btn btn-primary"]');
    // logoutBtn.waitForVisible(1000);
    let logoutMsg = $('h3[class="panel-title"]');
    logoutMsg.waitForVisible(1000);
    
  })
})




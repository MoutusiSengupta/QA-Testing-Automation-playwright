const {test,expect} = require('@playwright/test');
const BASE_URL = 'https://www.saucedemo.com';
const VALID_USER = 'standard_user';
const VALID_PASS = 'secret_sauce'

//-----helper------
async function login(page,username = VALID_USER,password = VALID_PASS){
  await page.goto(BASE_URL);
  await page.fill('#user-name',username);
  await.page.fill('#password',password);
  await page.click('#login-button');
}

//------Authentication-------------

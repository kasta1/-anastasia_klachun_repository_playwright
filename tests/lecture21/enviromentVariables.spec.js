import{ test } from '@playwright/test';
test(' show enviroment variables', async () => {
    console.log(process.env.USER_NAME);
    console.log(process.env.USER_PASS);
    console.log(process.env.BASE_URL);
});
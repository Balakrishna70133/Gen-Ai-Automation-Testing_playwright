Allure report helper

Steps to generate and open the Allure report from test results:

1. Install the Allure commandline (locally used via npx):

```powershell
npm install --save-dev allure-commandline --save-exact
```

2. Run tests (Playwright will output results to `allure-results` if configured):

```powershell
npm test
```

3. Generate and open the report:

```powershell
npm run allure:report
```

Notes:
- The project already includes an `allure-results` folder with attachments.
- `environment.properties` and `categories.json` are added to `allure-results` to enrich the report.
- If `npx allure` is not available, install `allure-commandline` as shown above or install Allure globally.

# IdeaFactory feedback — Google Forms setup

This folder contains a Google Apps Script that creates a feedback form and a private response spreadsheet **inside your own Google account**.

## One-time setup
1. Open https://script.google.com and create a new project.
2. Paste the content of `create-feedback-form.gs` into `Code.gs`.
3. Save and run `createIdeaFactoryFeedbackForm`.
4. Authorize the Google Forms and Sheets permissions. The script creates one form and one spreadsheet.
5. In **Execution log**, copy `PUBLIC_FORM_URL`.
6. Open the form's **Settings** and verify that email collection is off, respondent sign-in is not required, and responses are accepted. Some Google Workspace organizations restrict anonymous responses.
7. Send the **PUBLIC_FORM_URL** back to Alberto/ChatGPT so the IdeaFactory homepage can link to it.
8. Keep the `PRIVATE_RESPONSE_SHEET` link private. Never commit spreadsheet contents or respondents' emails to GitHub.

## Questions
Project, respondent perspective, perceived value (1–5), problem to solve, potential buyer, suggestions, collaboration interest, anonymity preference, optional name/email, and optional contact consent.

## Privacy and practical notes
- Anonymous means **no name/email is requested as required data**. Google may still process technical metadata under its own privacy terms; do not promise absolute anonymity.
- The form does not automatically collect email addresses.
- Responses are private in Google Sheets unless you share the spreadsheet.
- Running the script again creates another form and sheet; run only once for your production form.
- To avoid unsolicited emails, only contact respondents who explicitly check the contact consent box.
- For best privacy, configure an appropriate retention period and do not collect sensitive or confidential information.

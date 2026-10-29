/**
 * IdeaFactory community feedback form.
 * Run createIdeaFactoryFeedbackForm() once at https://script.google.com
 * It creates a Google Form and a linked Google Sheet in your Google account.
 */
function createIdeaFactoryFeedbackForm() {
  const form = FormApp.create('IdeaFactory — Project Feedback & Collaboration');
  form.setDescription('Explore the AI research prototypes at https://luisalbertomunozubando.github.io/IdeaFactory/ and share candid feedback. Name and email are optional. Your responses will be reviewed privately by the project owner. Please do not include confidential information.');
  form.setConfirmationMessage('Thank you! Your feedback will help us decide which IdeaFactory projects to develop next.');
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(true);

  const projects = [
    '01 — YouTube2Knowledge',
    '02 — VisionFromYouTube',
    '03 — Knowledge',
    '04 — Science–Technology Landscape (STL)',
    '05 — Innovaction',
    '06 — Article Foundry',
    '07 — Radio',
    '08 — Maya',
    'Overall portfolio / more than one project'
  ];
  form.addListItem().setTitle('Which project are you commenting on?').setChoiceValues(projects).setRequired(true);
  form.addMultipleChoiceItem().setTitle('How would you describe your perspective?').setChoiceValues([
    'Potential user or customer', 'Founder / investor', 'Researcher / educator',
    'Engineer / developer', 'Industry expert', 'Friend / general feedback', 'Other'
  ]).setRequired(true);
  form.addScaleItem().setTitle('How valuable could this project be?').setBounds(1,5)
    .setLabels('Low value', 'Very high value').setRequired(true);
  form.addParagraphTextItem().setTitle('What real problem should this project solve?').setRequired(true);
  form.addParagraphTextItem().setTitle('Who would use or pay for it?').setRequired(false);
  form.addParagraphTextItem().setTitle('What should we improve, change, or build next?').setRequired(false);
  form.addMultipleChoiceItem().setTitle('Would you like to collaborate?').setChoiceValues([
    'Yes — as a user or pilot customer',
    'Yes — as a technical or research collaborator',
    'Yes — as a business partner, mentor, or investor',
    'Maybe — please contact me',
    'No — feedback only'
  ]).setRequired(true);
  form.addMultipleChoiceItem().setTitle('How would you like to respond?').setChoiceValues([
    'Anonymously — no contact information',
    'I may share my name and/or email'
  ]).setRequired(true);
  form.addTextItem().setTitle('Name (optional)').setRequired(false);
  const email = form.addTextItem().setTitle('Email (optional — only if you want a reply)').setRequired(false);
  email.setValidation(FormApp.createTextValidation().requireTextIsEmail().setHelpText('Enter a valid email or leave this blank.').build());
  form.addCheckboxItem().setTitle('If you provided contact details, may we contact you about this feedback?')
    .setChoiceValues(['Yes, you may contact me']).setRequired(false);

  const sheet = SpreadsheetApp.create('IdeaFactory — Private Feedback Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  Logger.log('PUBLIC_FORM_URL: ' + form.getPublishedUrl());
  Logger.log('EDIT_FORM_URL: ' + form.getEditUrl());
  Logger.log('PRIVATE_RESPONSE_SHEET: ' + sheet.getUrl());
  Logger.log('IMPORTANT: In Google Forms Settings, verify that email collection and sign-in restrictions are disabled. Do not publish the response spreadsheet.');
}

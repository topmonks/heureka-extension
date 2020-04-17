**Beware** Cypress tests are not run automatically!

**Why?** They are not stable enough.

**Why?** They are not against real websites. Real websites change & break a lot. 

**Why?** The only way how to properly test if the extension works in the real world is to test it in the real world.

**Consequence:** Tests can fail, and it's up to humans to decide if it's caused by the extension or the website (or both)
and how to handle it. 

### How to add new test scenarios?

* Request access to <https://docs.google.com/spreadsheets/d/1FBfQlYsWDWpeFG29WNvQX8kPe5_jU15joAFQseFPlvk/edit>
* Add e-shops
* Run `npm run download-configuration-from-google-sheets`
* Run `cypress:open`

### Why Google Sheets?

Ultimately, repo should be self-contained with no dependencies to external services.

Configuration via Google Sheet is added just for a short period of time to allow rapid development/collaboration 
and adding new e-shops easily. 

After that, it should be replaced with proper in-repo config file.

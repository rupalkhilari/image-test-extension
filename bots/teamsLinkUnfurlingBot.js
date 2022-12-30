require('dotenv').config();
const { TeamsActivityHandler, CardFactory } = require('botbuilder');


class TeamsLinkUnfurlingBot extends TeamsActivityHandler {
    constructor() {
      super();
    }

    handleTeamsAppBasedLinkQuery(context, query) {
      const attachment = CardFactory.thumbnailCard('Thumbnail Card',
        query.url,
        ['https://raw.githubusercontent.com/microsoft/botframework-sdk/master/icon.png']);
  
      const result = {
        attachmentLayout: 'list',
        type: 'result',
        attachments: [attachment]
      };
  
      const response = {
        composeExtension: result
      };
      return response;
    }
  }


module.exports.TeamsLinkUnfurlingBot = TeamsLinkUnfurlingBot;

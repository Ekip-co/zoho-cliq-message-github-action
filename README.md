# Zoho Cliq Message GitHub Action

This action sends message to Zoho Cliq channel with additional options.

You can also create & test your messages from [official Zoho Cliq message builder](https://cliq.zoho.com/messagebuilder)

## Inputs

## `webhook`

**Required** URL of the webhook.

You can get this URL from Zoho Cliq with these steps:
- Right click the channel you want the message to be sent
- Click `Channel Info`
- Select `Connectors` from right top side
- Copy API Endpoint value

**Example :** 
- `https://cliq.zoho.com/api/v2/channelsbyname/obiwankenobichannel/message`



## `token`

**Required** Zoho Cliq zapikey or user webhook token.
You can get API key from Zoho Cliq with these steps:
- Click the profile image on the top right
- Click `Bots & Tools`
- From the left panel click `Webhook Tokens` at the bottom
- Click `Generate new token` button at the top right
- Click `Copy` text under the `Active Webhook Tokens`

**Example :** 
- `1001.622cff111b2f13a55c30ee7128ce5349.f833f7134e7533ee9d31d3172f40c5a5`



## `sender-name`

**Optional** Custom sender name for the message.
If left blank the message will be sent by YOU.

**Example :** 
- `Kenobi Bot`



## `sender-image`

**Optional** Custom sender profile picture.
If left blank image is plain white.

**Example :** 
- `https://i.pinimg.com/280x280_RS/00/3e/6a/003e6a4fd33523893050086b6bbb0bf0.jpg`



## `thumbnail`

**Optional** Thumbnail picture.
If left blank there will be no thumnail.

**Example :** 
- `https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg`



## `title`

**Optional** Title of the message.

**Example :** 
- `Hello There`



## `text`

**Optional** Body of the message.

**Example :** 
- `General Kenobi...`



## `theme`

**Optional** Message theme style.

**Default** modern-inline

**Choices :**
- basic
- poll
- modern-inline
- prompt 

**Example :** 
- `modern-inline`



## `slide-type`

**Optional** Type of custom slide.

**Choices :**
- label
- list
- table
- images


**Example :** 
- `label`



## `slide-title`

**Optional** Title of custom slide..

**Example :** 
- `Kenobi Details`



## `slide-data`

**Optional** Data for the custom slide (Array).

**Example for label type :** 
```json
[
	{
		"Full Name": "Obi-wan Kenobi"
	},
	{
		"Teacher": "Qui-Gon Jinn"
	},
	{
		"Favorite Student": "Anakin Skywalker"
	},
	{
		"It is over Anakin": "I have the high ground."
	}
]
```



## `custom-payload`

**Optional** Custom JSON payload to send. If this is set, ignores everything else and just sends this as JSON body.

You can create custom messages from this URL: 'https://cliq.zoho.com/messagebuilder'

**Example :** 
```json
{
	"text": "Your Message",
	"bot": {
		"name": "Your Bot Name"
	},
	"card": {
		"title": "Card Title",
		"theme": "modern-inline"
	},
	"slides": [
		{
			"type": "label",
			"title": "Title for your Label",
			"data": [
				{
					"Key 0": "Value 0"
				},
				{
					"Key 1": "Value 1"
				}
			]
		}
	]
}
```




## Outputs

## `message-json`

JSON format of the message sent.




## Example usages


### Simple Title And Message

```yaml
uses: Ekip-co/zoho-cliq-message-github-action@v1
with:
  webhook: https://cliq.zoho.com/api/v2/channelsbyname/obiwankenobichannel/message
  token: Your Webhook Token Will Be Here
  title: Hello There
  text: General Kenobi...
```

### With Custom Slides

```yaml
uses: Ekip-co/zoho-cliq-message-github-action@v1
with:
  webhook: https://cliq.zoho.com/api/v2/channelsbyname/obiwankenobichannel/message
  token: Your Webhook Token Will Be Here
  sender-name: Kenobi Bot
  sender-image: https://i.pinimg.com/280x280_RS/00/3e/6a/003e6a4fd33523893050086b6bbb0bf0.jpg
  thumbnail: https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg
  title: Hello There
  text: General Kenobi...
  theme: modern-inline
  slide-type: label
  slide-title: Kenobi Details
  slide-data: |
    	[
          {
            "Full Name": "Obi-wan Kenobi"
          },
          {
            "Teacher": "Qui-Gon Jinn"
          },
          {
            "Favorite Student": "Anakin Skywalker"
          },
          {
            "It is over Anakin": "I have the high ground."
          }
    	]
```

### With Custom JSON Payload

```yaml
uses: Ekip-co/zoho-cliq-message-github-action@v1
with:
  webhook: https://cliq.zoho.com/api/v2/channelsbyname/obiwankenobichannel/message
  token: Your Webhook Token Will Be Here
  custom-payload: |
    {
        "text": "Your Message",
        "bot": {
            "name": "Your Bot Name"
        },
        "card": {
            "title": "Card Title",
            "theme": "modern-inline"
        },
        "slides": [
            {
                "type": "label",
                "title": "Title for your Label",
                "data": [
                    {
                        "Key 0": "Value 0"
                    },
                    {
                        "Key 1": "Value 1"
                    }
                ]
            }
        ]
    }
      
```


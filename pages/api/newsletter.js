import fetch from 'isomorphic-unfetch'

export default async function handler(req, res) {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'E-mail is required' })
  }

  const LIST_ID = process.env.MAILCHIMP_LIST_ID
  const API_KEY = process.env.MAILCHIMP_API_KEY
  const SERVER_KEY = process.env.MAILCHIMP_SERVER_KEY

  const data = {
    email_address: email,
    status: 'subscribed',
  }

  const response = await fetch(
    `https://${SERVER_KEY}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    {
      body: JSON.stringify(data),
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then((res) => res.json())

  if (response.status >= 400) {
    return res.status(response.status).json({
      error: 'Não foi possível cadastrar seu e-mail',
    })
  }

  return res.status(201).json({})
}

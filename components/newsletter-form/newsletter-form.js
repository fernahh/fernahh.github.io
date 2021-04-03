import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FormControl } from 'components/form-control'
import { Input } from 'components/input'
import { Button } from 'components/button'
import { H4 } from 'components/heading'
import { P } from 'components/paragraph'
import { Label } from 'components/label'
import styles from './newsletter-form.module.css'

const notify = (message, method) => {
  toast[method](message, {
    style: {
      borderRadius: '4px',
    },
  })
}

export const NewsletterForm = () => {
  const [email, setEmail] = React.useState('')
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true)

  useEffect(() => {
    const isValidEmail = emailIsValid(email)
    setButtonIsDisabled(!isValidEmail)
  }, [email])

  const onChange = (e) => {
    setEmail(e.target.value.trim())
  }

  const submit = async (e) => {
    e.preventDefault()
    setButtonIsDisabled(true)

    const res = await fetch('/api/newsletter', {
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      notify(error, 'error')
      return
    }

    notify('E-mail cadastrado com sucesso! Obrigado!', 'success')
    setButtonIsDisabled(false)
    setEmail('')
  }

  return (
    <div className={styles['newsletter-form']}>
      <H4>Assine minha newsletter</H4>
      <P>
        Se você quer receber novidades sobre o meu trabalho, adicione seu e-mail
        no campo abaixo.
      </P>
      <form onSubmit={submit}>
        <div className={styles['newsletter-form-fields']}>
          <div className={styles['newsletter-form-fields-input']}>
            <FormControl>
              <Label text="Endereço de e-mail">
                <Input
                  placeholder="Endereço de e-mail"
                  required={true}
                  type="email"
                  value={email}
                  onChange={onChange}
                />
              </Label>
            </FormControl>
          </div>
          <div className={styles['newsletter-form-fields-button']}>
            <FormControl>
              <Button
                type="submit"
                disabled={buttonIsDisabled}
                onClick={submit}
              >
                Assinar
              </Button>
            </FormControl>
          </div>
        </div>
      </form>
      <Toaster position="bottom-right" />
    </div>
  )
}

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email)
}

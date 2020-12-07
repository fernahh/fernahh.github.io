import React, { useEffect, useState } from 'react'
import { Form } from 'components/form'
import { FormControl } from 'components/form-control'
import { Input } from 'components/input'
import { Button } from 'components/button'
import { H4 } from 'components/heading'
import { P } from 'components/paragraph'
import { Label } from 'components/label'
import styles from './newsletter-form.module.css'

export const NewsletterForm = () => {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState('pending')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  useEffect(() => {
    const isValidEmail = emailIsValid(email)
    setIsButtonDisabled(!isValidEmail)
  }, [email])

  const onChange = (e) => {
    if (status !== 'pending') setStatus('pending')
    setEmail(e.target.value.trim())
  }

  const submit = async (e) => {
    e.preventDefault()
    setIsButtonDisabled(true)

    const res = await fetch('/api/newsletter', {
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setStatus('error')
      // setErrorMessage(error)
      return
    }

    // TODO
    // Toaster sucesso
    // Toaster de erro

    setIsButtonDisabled(false)
    setEmail('')
    setStatus('succeeded')
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
                disabled={isButtonDisabled}
                onClick={submit}
              >
                Assinar
              </Button>
            </FormControl>
          </div>
        </div>
      </form>
    </div>
  )
}

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email)
}

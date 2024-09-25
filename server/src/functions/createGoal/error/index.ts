import z from 'zod'

export type CustomError = z.ZodError | Error

export function errorCreateGoal(error: CustomError) {
  const MESSAGE_PT_BR = 'Erro, confira os dados enviados e tente novamente'
  const MESSAGE_EN = 'Error, check the data sent and try again'
  const STATUS = 400

  if (error instanceof z.ZodError) {
    return {
      message: {
        ptBr: MESSAGE_PT_BR,
        en: MESSAGE_EN,
      },
      status: STATUS,
      error: error.errors
        .map(err => `${err.path.join('.')}: ${err.message}`)
        .join(', '),
    }
  }

  if (error) {
    return {
      message: {
        ptBr: MESSAGE_PT_BR,
        en: MESSAGE_EN,
      },
      status: STATUS,
      error,
    }
  }

  return {
    message: {
      ptBr: 'Serviço indisponível, tente novamente mais tarde',
      en: 'Service unavailable, try again later',
    },
    status: 500,
    error,
  }
}
